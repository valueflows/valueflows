# Value Flows vocab

This is the "parent" repository for a set of interconnected vocabularies to describe flows of economic resources of all kinds within distributed economic ecosystems. 

Purpose: to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups.

Or, if that is too many buzzwords, "let's help a lot of alternative economic software projects that are solving different pieces of the same puzzle be able to work together".

We wrote up a set of [principles](https://github.com/valueflows/valueflows/wiki/Principles-for-this-vocabulary) for what we are trying to do here.

Some of the "children" have been separated out into their own repositories:

* [Agent Vocab](https://github.com/openvocab/agent)
* [Exchange Vocab](https://github.com/valueflows/exchange)
* [Process Vocab](https://github.com/valueflows/process)
* [Resource Vocab](https://github.com/valueflows/resource)

Might be more to come. But this one has the whole family.

## Why?

This effort began in a conversation between the [Network Requirements Planning, or NRP](https://github.com/valnet/valuenetwork) and [Open Apps](https://github.com/open-app/core) software projects. 

The NRP gang kept running into other apps that did a lot of the same things, or at least parts of the same things, that were used by different groups who wanted to collaborate with each other. So, let's have the different apps be able to collaborate with each other!

And the Open Apps gang (which includes the NRP gang) wants to create "a suite of integrated and open sourced apps which support transparent, democratic and decentralised organising".

Which potentially means many different apps that want to talk to each other. Thus the desire for a common vocabulary.

If you would like to be part of this conversation, please [raise an issue here](https://github.com/openvocab/ovn/issues), or fork this or any of the related repositories and issue pull requests.

## Who uses this?

NRP is the source of much of the vocabulary, and continues to refine the model, collaborating with user networks like [Sensorica](http://nrp.sensorica.co). [Holodex](https://github.com/open-app/holodex) is using the [organization aspects of the vocab](https://github.com/openvocab/holodex).

But most of the vocabulary comes from the [Resource-Event-Agent (REA) ontology](http://en.wikipedia.org/wiki/Resources,_events,_agents_(accounting_model)) originated by [Professor William McCarthy of Michigan State University](https://www.msu.edu/~mccarth4/) in 1982, used in many places around the world.

## Pictures!

![model](https://docs.google.com/drawings/d/1ZmlgstkpoOeUrdeCkWn7PziXC8iqS3eh9281bjTyxX4/pub?w=960&h=720)

### Resource flows

One of the purposes of this vocab is to support resource flows connecting many websites. These flows may be oriented around Processes, Exchanges, or combinations of both. We are breaking out the Processes and Exchanges into their own vocab repositories, but here some overview diagrams.

In general, processes and exchanges alternate in a flow. But in some situations, either the processes or the exchanges are more important, and the other is not worth tracking and can be elided.

#### Process-oriented flow

![process-oriented flow](https://i.imgur.com/74gIY5C.png)

#### Exchange-oriented flow

![process-oriented flow](https://docs.google.com/drawings/d/1og6iUscoFmzHm2zkfhwSU3lp6zHPX2j3BfvTmyfGmww/pub?w=720&h=330)

#### Process-Exchange combination flow

![combo flow](https://docs.google.com/drawings/d/1Sm389PH04BS_gvrvPD7_idGf-EdZmD2mhRiNl3V26a8/pub?w=746&h=674)


### WORK IN PROGRESS

- [ ] [Agent Vocab](https://github.com/openvocab/agent)
  - [ ] [Agent](./vocab/Agent.js)
  - [ ] AgentType
  - [ ] [RelationshipType](./vocab/RelationshipType.js)
  - [ ] [Relationship](./vocab/Relationship.js)
- [ ] Measurements
  - [ ] [Quantity](./vocab/Quantity.js)
  - [ ] [Unit](./vocab/Unit.js)
  - [ ] [Kind](./vocab/Kind.js)
- [ ] Economic Resources
  - [ ] [ResourceType](./vocab/ResourceType.js)
  - [ ] [Resource](./vocab/Resource.js)
- [ ] Economic Interactions
  - [ ] [InteractionType](./vocab/InteractionType.js)
  - [ ] [Interaction](./vocab/Interaction.js)
- [ ] [Exchange Vocab](https://github.com/valueflows/exchange)
  - [ ] [ExchangeType](./vocab/ExchangeType.js)
  - [ ] [Exchange](./vocab/Exchange.js)
- [ ] [Process Vocab](https://github.com/valueflows/process)
  - [ ] [ProcessType](./vocab/ProcessType.js)
  - [ ] [Process](./vocab/Process.js)
- [ ] Economic Events
  - [ ] [EventType](./vocab/EventType.js)
  - [ ] [Event](./vocab/Event.js)
- [ ] Economic Plans
  - [ ] [CommitmentType](./vocab/CommitmentType.js)
  - [ ] [Commitment](./vocab/Commitment.js)
- [ ] Facets
- Misc
  - [ ] [Location](./vocab/Location.js)
