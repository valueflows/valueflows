### Difference between tracking and tracing

[From StackExchange:](http://ell.stackexchange.com/questions/34391/difference-between-track-and-trace):

> The difference is in direction & point in time:

> To trace: follow the completed path backwards from its current point to where it began... When you "trace" a cellphone call, you try to determine its origin... You go backward to the starting point.

> To track: follow the emerging path forwards from your starting point to wherever the thing currently is... When you "track" a cellphone, you monitor [the starting] location ... and follow it wherever it goes...

One of the most-often used traces is to find the origins of health problems like mad cow disease and tainted drugs and food. In Valueflows terms, that would start with the product (economic resource) that caused a health problem, and trace back along the chain of resource flows to the source or sources of the product.  Then it might be necessary to also track forwards from the source(s) to find everything else that might include that source(s).

It is also used when the provenance is useful for other information, like to determine the sustainability of the creation of a resource (like fossil fuel inputs, potential carbon implications, etc.), how healthy the inputs are, how local is the production and distribution, etc.  Or when an agent is interested in what happens to a resource they created, for example what is the effect of their recycling efforts or material donations to an educational program.

Also, this logic is used in other features, like "contribution economy" calculations, where all contributions of various kinds over time can be found be tracing backwards from an end resource.

### Valueflows query terminology

* `previous` and `next` bring back the element one flow step backwards or forwards
* `track` and `trace` bring back the whole resource flow tree forwards or backwards, starting with a resource or an output event

Briefly, to gather a whole track or trace, the previous or next methods should be used in recursive logic, traveling down the flow and each branch of the flow, when there are many inputs or many outputs.

### Trace logic

#### Adding breadcrumbs on initial save

For the most part, the structure provides the causal order of the flows.  But for some specific situations, such as repeated cycles referencing the same ProcessSpecifications, additional information should be saved on the EconomicEvent and EconomicResource to aid in obtaining consistent causal order. (Timestamps are not reliable in distributed systems.)

* Add two new fields called `previousEvent`, one on EconomicResource and one on EconomicEvent.  The `previousEvent` fields reference an EconomicEvent.

* When a new event is created with a `resourceInventoriedAs`, the new event takes the resource's `previousEvent` value and puts it into the new event's `previousEvent` field, and puts the new event into the resource's `previousEvent` field.

* Those previousEvent references provide breadcrumbs for tracking and tracing through ambiguous situations, see pseudocode below.

#### Where to start a trace

The "starting item" can be an EconomicResource or EconomicEvent.  If you want to start at the present time, and trace everything that ever happened to the resource, start with the resource and its `previousEvent`.  If you just want to know how a resource was made, and what inputs went into it, start with selecting the output event where that resource was initially created, or if it is a stock resource, where it was last incremented. 

#### Pseudocode

The following is included to give some idea of the logic required.  It tries to cover all actions and scenarios, but is meant as a suggestion, and has not been thoroughly tested in code.

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
    else if the event is triggeredBy another event
        return the triggeredBy event
    else
        if resourceInventoriedAs of the event exists
            return the resourceInventoriedAs
```

```
trace (parameter: starting item)
    initialize "flows", "visited", "contained", "modified", "delivered" 
            (list or similar, "flows" must be ordered)
    add the starting item to "visited"
    add the starting item to "flows"
    if the item is an unpack event
        add the resourceInventoriedAs to "contained"
    if the item is a modify event
        add the resourceInventoriedAs to "modified"
    if the item is a dropoff event
        add the resourceInventoriedAs to "delivered"
    call trace-depth-first-search (which will go recursively backwards through the tree)
    return "flows"

trace-depth-first-search (parameters: "flows", "visited", "contained", "modified", "delivered", "savedEvent")
    for the last item in "flows", get "previous" (defined below)
    if that last item is an event
        save the previousEvent in savedEvent
    order descending the "previous" items by id or other unique element
    if the savedEvent is one of those items
        move it to the position where it will be processed first
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
            else if the item is a pack event
                if the event's resourceInventoriedAs is in "contained"
                    remove it from "contained"
                else 
                    set "skip" to true
            else if the item is an unpack event
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

### Track logic

#### TBD

Coming soon....


### Tracking identifier and lot

Currently, often companies' internal flow information is not public, although in many countries they are required to be able to provide input and output information when needed in a medical emergency, without connecting all the dots internally.  Also any organization can be missing resource flow data so that there are gaps in the flows, no matter the level of transparency.

For these reasons, tracking identifier (often a serial number) and a standard lot identifier are currently used when food or medical tracing and tracking is required.  And in VF, they can be used whenever there is missing resource flow information for any reason; or when many resources go in and out of one process, such as might happen in transportation.

Note that in VF, for simplicity, besides `lot`, a lot identifier can be stored in the `trackingIdentifier` property.

Also note that lots get "spread out" into splits of a resource or different types of resources.  For example, one cow could have a lot identifier, which when the cow goes through a butchering process will be included in all the cuts of beef from that cow.  Or one production batch of a medicine that contains many packages of the same medicine would have a lot identifier, which stays attached to the individual packages wherever they go.
