# Flows

Flows are a fundamental construct in the ValueFlows ontology. The types of flows form a progression from potential to scheduled to realized:

1. Intents which can lead to Commitments
2. Commitments which can lead to Economic Events (or Intents can lead directly to Economic Events)

### Intent

Intents describe potential future events which have not been agreed to by other agents, such as offers and requests. Intents are often used for discovering another agent to participate in a desired event. On the process side, for example, planned work could be an Intent, but planned work that some agent committed to is a Commitment.


### Commitment

Commitments describe potential future events which the involved agents have already agreed to pursue. Commitments can be considered contractual promises from one agent to another.  Commitments can be thought of as plans of economic events, and Economic Events can fulfull Commitments.  Commitments can satisfy Intents. 


### Economic Events

Economic Events describe past events, something observed, never some potential future event.  They can fulfill Commitments or satisfy Intents (when there is no Commitment).

### Claims

Claims resemble Commitments, but are initiated by the receiver, not the provider.  An Economic Event can trigger a reciprocal Claim.  Claims sometimes do not have to actually be saved, often they can be implied from an Economic Event and an Agreement.  For example, if Alice has agreed to sell Bob some carrots for $2, then if Alice delivers the carrots to Bob, she has a claim for $2 from Bob.

### Timeline, plans and observations

The figure below shows that Economic Events have to be observed and for that reason only appear as records of the past. Future plans get represented with Intents and Commitments.

![flows](https://raw.githubusercontent.com/valueflows/valueflows/master/assets/flows.png)

### Matching Intents

Often agents will start their plans independently and record their initial intents. Later once they make a Commitment with another agent, it will represent a specific shared part of their plans. For that reason any Commitment can result in Satisfaction of the providing agent's Intent as well as Satisfaction of the receiving agent's Intent.


![matching](https://raw.githubusercontent.com/valueflows/valueflows/master/assets/matched.png)

### Granularity

Intents, Commitments, and Economic Events can occur at any granularity that is needed or for which data can be obtained.  So they primarily are used for all operational needs, but can also be used at higher levels for budgeting for organizations, analytical and high level planning needs for communities or regions, etc.

![Intent-Commitment-Event](https://raw.githubusercontent.com/valueflows/valueflows/master/release-doc-in-process/i-c-e.png)


### Actions

All flows use an action property to designate what the flow is doing and how it will affect an economic resource (or not).  Actions are defined as follows.

* vf:produce - new resource created in that process or an existing stock resource added to
* vf:use - for example a tool used in process; after the process, the tool still exists
* vf:consume - for example an ingredient or component composed into the output, after the process the ingredient is gone
* vf:cite - for example a design file, neither used nor consumed, the file remains available at all times
* vf:work - labor power applied to a process
* vf:pickup -  transported resource or person enters the process; the same resource will appear in output with *vf:dropoff*
* vf:dropoff -  transported resource or person leaves the process; the same resource or person appeared in input with vf:pickup
* vf:accept - in processes like repair or modification or testing, the same resource will appear in output with *vf:modify*
* vf:modify - in processes like repair or modification, the same resource will appear in input with *vf:accept*
* vf:pack - put a resource into a container resource; the container resource is input with *vf:accept*
* vf:unpack - remove a resource from a container resource; the container resource is input with *vf:accept*
* vf:deliver-service - new service produced and delivered (a service implies that an agent actively receives the service)
* vf:transfer-all-rights - give full (in the human realm) rights and responsibilities to another agent, without transferring physical custody
* vf:transfer-custody - give physical custody and control of a resource, without full accounting or ownership rights
* vf:transfer - give full rights and responsibilities plus physical custody
* vf:move - change location and possibly identifier, if location is part of the identification, of a resource with no change of agent rights or possession
* vf:raise - adjusts a quantity up based on a beginning balance or inventory count
* vf:lower - adjusts a quantity down based on an inventory count

Action | Accounting effect | Onhand effect | I/O | Other effect | Pairs with |
------ | ------ | --- | ----------------- | ---------- | --------- |
produce | Increment | Increment | Output | N/A | N/A |
consume | Decrement | Decrement | Input | N/A | N/A |
use | No effect(1) | No effect(1) | Input | N/A | N/A |
work | No effect(1) | No effect(1) | Input | N/A | N/A |
cite | No effect  | No effect  | Input | N/A | N/A |
deliver-service | No effect | No effect | Output(3) | N/A | N/A |
pickup | No effect | No effect  | Input | N/A | dropoff |
dropoff | No effect | No effect | Output | currentLocation | pickup |
accept | No effect | Decrement  | Input | N/A | modify |
modify | No effect | Increment  | Output | N/A | accept |
pack | No effect | Decrement  | Input | add containedIn | accept |
unpack | No effect | Increment | Output | remove containedIn | accept |
transfer-custody | No effect | Decr+Incr(2) | N/A | N/A | N/A |
transfer-all-rights | Decr+Incr(2) | No effect | N/A | N/A | N/A |
transfer | Decr+Incr(2) | Decr+Incr(2) | N/A | N/A | N/A |
move | Decr+Incr(2) |Decr+Incr(2) | N/A | currentLocation | N/A |
raise | Increment | Increment | N/A | N/A | N/A |
lower | Decrement | Decrement | N/A | N/A | N/A |

We have defined a core set of actions, but expect that this will be extended with some others. If extended, they should be defined as part of this or another formal vocabulary so that all can use them and assume the same meaning. 

(1) The actions `use` and `work` are time-based actions, either with or without an explicit schedule. If the schedule is documented as part of the economic resource, then those economic events could decrement that schedule, although not the "current quantity" of the resource.

(2) The actions `transfer` and `move` can optionally define a second identified resource on the receiver side.

(3) The action `deliver-service` can sometimes be an input to another process, at the same time as it is an output from a process.  This is because services imply delivery as they are created.

### Quantities and Times

Quantities are used for counting, such as:
* Exchange/transfer
* Resource increment and decrement
* Recipes, how much or many goes into and out of a transformation process

Times are used for coordination and scheduling, such as:
* Calendar availability
* Planned timelines

They can be used together for analysis and reporting, such as:
* Accounting totals (quantity) within accounting period (time)

Quantities can be any needed unit of measure, including counts, volumes, weights, etc.  Time can be a beginning/end time (an interval), or a point in time, or a due date.  The flows require at least one of those.  If a point in time is recorded, an application should return that time as the beginning and end time.

Note that recipes may need to scale both quantities and calendar times when used to create a plan.

Sometimes a quantity is expressed in time-based units, like "I worked 6 hours", or "we used this machine for 8 hours".  These flows also will have a related time, like "I worked from 10am to 4pm", or "we used this machine from 8am to 4pm". In these examples, the quantity is used for accounting figures, exchange, recipes.  The time is used to schedule and coordinate the work or machine usage.

Sometimes a situation may call for a "compound quantity", like "Number-per-Year".

Display note: The OM2 ontology defines a Unit called `one` that is used for one-dimensional units.  This is confusing for many economic applications, where something like `each` would be used, or nothing at all.  We recommend that user interfaces handle this by not displaying the unit `one` where it would be confusing, or substituting a more applicable name.
