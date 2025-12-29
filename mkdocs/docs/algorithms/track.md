## Difference between tracking and tracing

[From StackExchange:](http://ell.stackexchange.com/questions/34391/difference-between-track-and-trace){target="_blank"}:

> The difference is in direction & point in time:

> To trace: follow the completed path backwards from its current point to where it began... When you "trace" a cellphone call, you try to determine its origin... You go backward to the starting point.

> To track: follow the emerging path forwards from your starting point to wherever the thing currently is... When you "track" a cellphone, you monitor [the starting] location ... and follow it wherever it goes...

One of the most-often used traces is to find the origins of health problems like mad cow disease and tainted drugs and food. In Valueflows terms, that would start with the product (economic resource) that caused a health problem, and trace back along the chain of resource flows to the source or sources of the product.  Then it might be necessary to also track forwards from the source(s) to find everything else that might include that source(s).

It is also used when the provenance is useful for other information, like to determine the sustainability of the creation of a resource (like fossil fuel inputs, potential carbon implications, etc.), how healthy the inputs are, how local is the production and distribution, etc.  Or when an agent is interested in what happens to a resource they created, for example what is the effect of their recycling efforts or material donations to an educational program.

Also, this logic is used in other features, like "contribution economy" calculations, where all contributions of various kinds over time can be found by tracing backwards from an end resource.

## Valueflows query terminology

* `previous` and `next` bring back the element one flow step backwards or forwards
* `track` and `trace` bring back the whole resource flow tree forwards or backwards, starting with a resource or an output event

Briefly, to gather a whole track or trace, the previous or next methods should be used in recursive logic, traveling down the flow and each branch of the flow, when there are many inputs or many outputs.

## Adding breadcrumbs on initial save

For the most part, the structure provides the causal order of the flows.  But for some specific situations, such as repeated cycles referencing the same ProcessSpecifications, additional information should be saved on the EconomicEvent and EconomicResource to aid in obtaining consistent causal order. (Timestamps are not reliable in distributed systems.)  The following is the hack we implemented, you may have a better one.

* Add two new fields called `previousEvent`, one on EconomicResource and one on EconomicEvent.  The `previousEvent` fields reference an EconomicEvent.

* When a new event is created with a `resourceInventoriedAs`, the new event takes the resource's `previousEvent` value and puts it into the new event's `previousEvent` field, and puts the new event into the resource's `previousEvent` field.

* Those previousEvent references provide breadcrumbs for tracking and tracing through ambiguous situations, see pseudocode below.

## Trace logic

### Where to start a trace

The "starting item" can be an EconomicResource or EconomicEvent.  If you want to start at the present time, and trace everything that ever happened to the resource, start with the resource and the value of its `previousEvent`.  If you just want to know how a resource was made, and what inputs went into it, start with selecting the output event where that resource was initially created, or if it is a stock resource, where it was last incremented. 

### Pseudocode

The following is included to give some idea of the logic required.  It is not meant to reflect code, for example "null" could be "nil" or "none", and "list" could be any collection.  It tries to cover all actions and scenarios, and has been tested in one installation, but is still meant as a suggestion.

```
EconomicResource "previous":
    find all events that are process outputs and where the resource is resourceInventoriedAs
    find all events that have the resource as toResourceInventoriedAs (all transfers and move)
    find all raise/lower events that reference the resource as resourceInventoriedAs
    return all of the above events
    
Process "previous":
    return all events that are input to the process
    
EconomicEvent "previous":
    if the event is output of a process
        return the process
    else if the event action is raise or lower, and the event's previousEvent is null
        return empty list
    else if resourceInventoriedAs of the event exists
        return the resourceInventoriedAs resource
    else
        return empty list
```

```
trace (parameter: starting item)
    initialize "flows", "visited", "contained", "modified", "delivered" 
            (list or similar, "flows" must be ordered)
    add the starting item to "visited"
    add the starting item to "flows"
    if the item is an separate event
        add the resourceInventoriedAs to "contained"
    if the item is a modify event
        add the resourceInventoriedAs to "modified"
    if the item is a dropoff event
        add the resourceInventoriedAs to "delivered"
    call trace-depth-first-search (which will go recursively backwards through the tree)
    return "flows"

trace-depth-first-search (parameters: "flows", "visited", "contained", "modified", "delivered", "savedEvent")
    for the last item in "flows", get "previous" (defined above)
    if that last item in "flows" is an event
        save the previousEvent in "savedEvent"
    order descending the "previous" items by id or other unique element (approximate time order is helpful)
    for each of those items
        put the last item in "flows" in the item's "parent" (facilitates showing as a tree)
    if the "savedEvent" is one of those items
        move it to the position where it will be processed first
    else if the item that will be processed first is a resource in "visited"
        put the "savedEvent" in the position where it will be processed first
    for each of those items
        if the item is not in "visited"
            set "skip" to false
            if the item is a pickup event
                if the event's resourceInventoriedAs is in "delivered"
                    remove it from "delivered"
                else 
                    set "skip" to true
            else if the item is an accept event
                if the event's resourceInventoriedAs is in "modified"
                    remove it from "modified"
                else 
                    set "skip" to true
            else if the item is a combine event
                if the event's resourceInventoriedAs is in "contained"
                    remove it from "contained"
                else 
                    set "skip" to true
            else if the item is an separate event
                add the resourceInventoriedAs to "contained"
            else if the item is a modify event
                add the resourceInventoriedAs to "modified"
            else if the item is a dropoff event
                add the resourceInventoriedAs to "delivered"
            if "skip" is false
                add the item to "visited"
                add the item to "flows"
                call trace-depth-first-search
    return "flows"
```

## Track logic

### Pseudocode

Again, the following is included to give some idea of the logic required.  It tries to cover all actions and scenarios, but is meant as a suggested starting point, it has *not* been tested in code, nor even desk-checked.  Rather it is a starting point that reverses the `trace` logic.  When it has been tested, we will update here.

```
EconomicResource "next":
    return all events where the resource is resourceInventoriedAs

Process "next":
    return all events that are output of the process

EconomicEvent "next":
    if the event is input of a process
        return the process
    if the event is output of a process
        return the resourceInventoriedAs
    if the toResourceInventoriedAs of the event exists
        return the toResourceInventoriedAs
    else
        return an empty list
```

```
track (parameter: starting item)
    initialize "flows", "visited", "contains", "modifies", "delivers"
            (list or similar, "flows" must be ordered)
    add the starting item to "visited"
    add the starting item to "flows"
    if the item is a combine event
        add the resourceInventoriedAs to "contains"
    if the item is an accept event
        add the resourceInventoriedAs to "modifies"
    if the item is a pickup event
        add the resourceInventoriedAs to "delivers"
    call track-depth-first-search (which will go recursively forwards through the tree)
    return "flows"

track-depth-first-search (parameters: "flows", "visited", "contains", "modifies", "delivers", "savedEvent")
    for the last item in "flows", get "next" (defined above)
    if that last item is an event
        find the next event by looking for the last item event in any event's previousEvent field
        if it exists (would you ever get multiples???)
            save it in "savedEvent"
        else
            remove the old "savedEvent" (???)
    order the "next" items by id or other unique element (approximate time order is helpful)
    for each of those "next" items
        put the last item in "flows" in the item's "parent" (facilitates showing as a tree)
    if the savedEvent is one of those items
        move it to the position where it will be processed first
    else if the item that will be processed first is a resource in "visited"
        put the savedEvent in the position where it will be processed first
    for each of those items
        if the item is not in "visited"
            set "skip" to false
            if the item is a dropoff event
                if the event's resourceInventoriedAs is in "delivers"
                    remove it from "delivers"
                else
                    set "skip" to true
            else if the item is an modify event
                if the event's resourceInventoriedAs is in "modifies"
                    remove it from "modifies"
                else
                    set "skip" to true
            else if the item is a separate event
                if the event's resourceInventoriedAs is in "contains"
                    remove it from "contains"
                else
                    set "skip" to true
            else if the item is an combine event
                add the resourceInventoriedAs to "contains"
            else if the item is a accept event
                add the resourceInventoriedAs to "modifies"
            else if the item is a pickup event
                add the resourceInventoriedAs to "delivers"
            if "skip" is false
                add the item to "visited"
                add the item to "flows"
                call track-depth-first-search
    return "flows"
```

## Tracking identifier

Currently, often companies' internal flow information is not public, although in many countries they are required to be able to provide input and output information when needed in a medical emergency, without connecting all the dots internally.  Also any organization can be missing resource flow data so that there are gaps in the flows, no matter the level of transparency.

For these reasons, tracking identifier (such as a serial number or a lot identifier) is currently used when food or medical tracing and tracking is required.  And in VF, they can be used whenever there is missing resource flow information for any reason; or when many resources go in and out of one process, such as might happen in transportation.

Also note that lots get "spread out" into splits of a resource or different types of resources.  For example, one recent product recall was of fungus medicine ingredient that was tainted with benzene. The producer needed to identify all of the products that the tainted ingredient went into, and then all of the many packages of the same medicine that have the same lot identifier, which stays attached to the individual packages wherever they go. All of those packages will need to be found and destroyed and the recipients can be reimbursed by the producer.
