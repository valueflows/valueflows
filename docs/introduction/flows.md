# Flows

Flows come as fundamental construct in ValueFlows ontology. When put in chronological order, they form a progression:

1. Intents which can lead to Commitments
2. Commitments which can lead to Economic Events

## Intent

Intents describe potential future events which have not been agreed to by other agents. Intents are often used for discovering another agent to participate in a desired event. On the process side, for example, planned work  could be an Intent, but planned work that some agent committed to is a Commitment.


## Commitment

Commitments describe potential future events which the involved agents already agreed to pursue. Commitments can be considered contractual promises from one agent to another.  Commitments are "mirrors" of economic events, and Economic Events can fulfull Commitments.  Commitments can satisfy Intents. 


## Economic Events

Economic Events describes past events, something observed, never some potential future event.  They can fulfill Commitments or satisfy Intents (when there is no Commitment).

## Claims

Claims resemble commitments, but are initiated by the receiver, not the provider.  An economic event can trigger a reciprocal claim.  Claims do not have to be instantiated, often they can be implied from an economic event and an agreement.

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

Action | Affect | I/O | Changes existence | Changes possession | Changes availability | Pairs with |
------ | ------ | --- | ----------------- | ------------------ | ---------------------| ---------- |
produce | Increment  | Output | Yes | N/A | Yes | N/A |
consume | Decrement  | Input | Yes | N/A | Yes | N/A |
use | No effect  | Input | No | No | Yes | N/A |
work | No effect  | Input | N/A | N/A | Yes | N/A |
cite | No effect  | Input | No | No | No | N/A |
load | Decrement  | Input | No | N/A | Yes | unload |
unload | Increment  | Output | No | N/A | Yes | load |
accept | No effect  | Input | No | N/A | Yes | improve |
improve | No effect  | Output | No | N/A | Yes | accept |
give | Decrement | Input | No | Yes | N/A | take |
take | Increment | Output | No | Yes | N/A | give |
issue | Decrement | Input | No | No | No | receive |
receive | Increment | Output | No | No | No | issue |
raise | Increment | N/A | No | No | No | N/A |
lower | Decrement | N/A | No | No | No | N/A |

We have defined a core set of actions, but expect that this will be extended with others. If extended, they should be defined as part of this or another formal vocabulary so that all can use them and assume the same meaning. 

Temporary note: The actions `use` and `work` are time-based actions, either with or without an explicit schedule.  How to handle time-based resources is still under discussion.

## Examples

[import, lang:"yaml"](../../examples/fulfill-satisfy.yaml)
