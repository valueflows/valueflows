# Flows

Flows come as fundamental construct in ValueFlows ontology. When put in chronological order, they form a progression:

1. Intents which can lead to Commitments
2. Commitments which can lead to Economic Events

## Intent

On the process side, for example, a work plan could be an Intent, but a work plan that some agent committed to is a Commitment.
Intent describes some potential future event which might require prior Commitment.

## Commitment

Commitments are "mirrors" of economic events, and economic events can fulfull commitments.  Commitments can satisfy intents. Commitments can be considered contractual promises from one agent to another.
Commitments describe potential future event which involved agents already agreed to pursuit.

## Economic Events

Economic event describes past event, something already observed, never some potential future event.  They can fulfill commitments or intents.

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
* vf:raise - adjusts a quantity up based on beginning balance or inventory account adjustment
* vf:lower - adjusts a quantity down based on beginning balance or inventory account adjustment

Action | Affect | Related to | I/O | Changes existence | Pairs with |
------ | ------ | ---------- | --- | ----------------- | ---------- |
produce | Increment | Process | Output | Yes | N/A |
consume | Decrement | Process | Input | Yes | N/A |
use | No effect | Process | Input | No |N/A |
work | No effect | Process | Input | N/A | N/A |
cite | No effect | Process | Input | No | N/A |
load | Decrement | Process | Input | No | unload |
unload | Increment | Process | Output | No | load |
accept | No effect | Process | Input | No | improve |
improve | No effect | Process | Output | No | accept |
give | Decrement | Transfer | Input | No | receive |
receive | Increment | Transfer | Output | No | give |
raise | Increment | N/A | N/A | No | N/A |
lower | Decrement | N/A | N/A | No | N/A |

We have defined a core set of actions, but expect that this will be extended with others. If extended, they should be defined as part of this or another formal vocabulary so that all can use them and assume the same meaning. 

Temporary note: The actions `use` and `work` are time-based actions, either with or without an explicit schedule.  How to handle time-based resources is still under discussion.
