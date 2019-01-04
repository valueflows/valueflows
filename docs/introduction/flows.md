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

All flows use an action property to designate what the flow is doing and how it will affect an economic resource (or not).  Actions have defined behaviors as follows.

Action | Affect | Related to | I/O | Pairs with |
------ | ------ | ---------- | --- | ---------- |
increment | Increment | N/A | N/A | N/A |
produce | Increment | Process | Output | N/A |
improve | No effect | Process | Output | accept |
unload | Increment | Process | Output | load |
receive | Increment | Transfer | Output | give |
decrement | Decrement | N/A | N/A | N/A |
load | Decrement | Process | Input | unload |
consume | Decrement | Process | Input | N/A |
use | No effect? | Process | Input | N/A |
work | No effect? | Process | Input | N/A |
cite | No effect | Process | Input | N/A |
accept | No effect | Process | Input | improve |
give | Decrement | Transfer | Input | receive |

We have defined a core set of actions, but expect that this will be extended with others. If extended, they should be defined as part of this or another formal vocabulary so that all can use them and assume the same meaning. 

Note: Increment and decrement are usually not meant to be used directly, rather the actions inherit from them.  An exception is if an adjustment is needed that has no known provenance.  Examples of when this might happen: 
* Beginning balances in a new system
* Manual inventory count shows a different amount than what the system shows.
