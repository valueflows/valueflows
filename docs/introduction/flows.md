# Flows

Flows come as fundamental construct in ValueFlows ontology. When put in chronological order, they form a progression:

1. Intents which can lead to Commitments
2. Commitments which can lead to Economic Events

## Intent

Intents describe potential future events which have not been agreed to by other agents. Intents are often used for discovering another agent to participate in a desired event. On the process side, for example, planned work  could be an Intent, but planned work that some agent committed to is a Commitment.


## Commitment

Commitments describe potential future events which the involved agents already agreed to pursuit. Commitments can be considered contractual promises from one agent to another.  Commitments are "mirrors" of economic events, and Economic Events can fulfull Commitments.  Commitments can satisfy Intents. 


## Economic Events

Economic Events describes past events, something observed, never some potential future event.  They can fulfill Commitments or satisfy Intents (when there is no Commitment).

## Timeline, plans and observations

Figure below shows that Economic Events have to be observed and for that reason only appear as records of the past. Future plans get represented with Intents and Commitments.

![flows](https://raw.githubusercontent.com/valueflows/valueflows/master/assets/flows.png)

## Matching Intents

Often agents will start their plans independently and record their initial intents. Later once they make a Commitment with other agent, it will represent a specific shared part of their plans. For that reason any Commitment can result in Satisfaction of providing agent's Intent as well as Satisfaction of receiving agent Intent.


![matching](https://raw.githubusercontent.com/valueflows/valueflows/master/assets/matched.png)

## Granularity

Intents, Commitments, and Economic Events can occur at any granularity that is needed or for which data can be obtained.  So they primarily are used for all operational needs, but can also be used at higher levels for analytical and high level planning needs for communities or regions, for example.

![Intent-Commitment-Event](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/i-c-e.png)


## Actions

All flows use an action property to designate what the flow is doing and how it will affect an economic resource (or not).  Actions are defined as follows.

* vf:produce - new resource created in that process or an existing stock resource added to
* vf:use - for example a tool used in process, after the process, the tool still exists
* vf:consume - for example an ingredient composed into the output, after the process the ingredient is gone
* vf:cite - for example a design file, neither used nor consumed, the file remains available at all times
* vf:work - labor power towards a process
* vf:load -  transported resource enters the process, the same resource will appear in output with *vf:unload* verb
* vf:unload -  transported resource leaves the process, the same resource will appear in input with *vf:load* verb
* vf:accept - in processes like repair or maintentance, the same resource will appear in output with *vf:improve* verb
* vf:improve - in processes like repair or maintentance, the same resource will appear in input with *vf:accept* verb
* vf:give - give rights and responsibilities for the resource
* vf:receive - receive rights and responsibilites for the resource
* vf:raise - adjusts a quantity up based on a beginning balance or inventory count
* vf:lower - adjusts a quantity down based on a beginning balance or inventory count

Action | Affect | I/O | Changes existence | Pairs with |
------ | ------ | --- | ----------------- | ---------- |
produce | Increment  | Output | Yes | N/A |
consume | Decrement  | Input | Yes | N/A |
use | No effect  | Input | No |N/A |
work | No effect  | Input | N/A | N/A |
cite | No effect  | Input | No | N/A |
load | Decrement  | Input | No | unload |
unload | Increment  | Output | No | load |
accept | No effect  | Input | No | improve |
improve | No effect  | Output | No | accept |
give | Decrement | Input | No | receive |
receive | Increment | Output | No | give |
raise | Increment | N/A | N/A | N/A |
lower | Decrement | N/A | N/A | N/A |

We have defined a core set of actions, but expect that this will be extended with others. If extended, they should be defined as part of this or another formal vocabulary so that all can use them and assume the same meaning. 

## Quantities and Times

Quantities are used for counting, such as:
* Exchange
* Resource increment and decrement
* Recipes, how much or many goes into and out of a transformation process

Times are used for coordination, such as:
* Calendar availability
* Planned timelines

They can be used together for analysis and reporting, such as:
* Accounting totals (quantity) within accounting period (time)

Quantities can be any needed unit of measure, including counts, volumes, weights, etc.  Time can be a duration or an instant.

Sometimes a quantity is expressed in time-based units, like I worked 6 hours, or we used this machine for 8 hours.  These flows also will have a related time, like I worked from 10am to 4pm, or we used this machine from 8am to 4pm. In these examples, the quantity is used for accounting figures, exchange, recipes.  The time is used to schedule and coordinate the work or machine usage.

Sometimes a situation may call for a "compound quantity", like "Number-per-Year".  In these cases, one can also carry the base quantities as supporting properties if desired.

Times can have different levels of exactness based on the need.  For example a commitment might specify that a task should be done by a certain date, but it doesn't matter when it is done before that date.

## Examples

[import, lang:"yaml"](../../examples/fulfill-satisfy.yaml)
