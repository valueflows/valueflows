# Open Value Network vocabs

Vocabs for [Open Value Networks](http://valuenetwork.referata.com/wiki/Main_Page) pulled from [NRP](https://github.com/valnet/valuenetwork/wiki)'s existing [core model](https://github.com/valnet/valuenetwork/blob/master/docs/core_model.txt).

Purpose: to describe any type of resource planning and accounting within fractal networks of people and groups.

## Why?

This effort began in a conversation between the [Network Requirements Planning, or NRP](https://github.com/valnet/valuenetwork) and [Open Apps](https://github.com/open-app/core) projects. 

The NRP gang kept running into other apps that did a lot of the same things, or at least parts of the same things, that were used by different groups who wanted to collaborate with each other. So, let's have the different apps be able to collaborate with each other!

And the Open Apps gang (which includes the NRP gang) wants to create "a suite of integrated and open sourced apps which support transparent, democratic and decentralised organising".

Which potentially means many different apps that want to talk to each other. Thus the desire for a common vocabulary.

If you would like to be part of this conversation, please [raise an issue here](https://github.com/openvocab/ovn/issues), or contact [Mikorizal](http://mikorizal.org/contact.html).

## Format

Our goal is [Linked Open Data](http://lod-cloud.net/) using [JSON-LD](http://json-ld.org/) to communicate between apps.

## Who uses this?

NRP is the source of much of the vocabulary, and continues to refine the model, collaborating with user networks like [Sensorica](http://nrp.sensorica.co). [Holodex](https://github.com/open-app/holodex) is using the [organization aspects of the vocab](https://github.com/openvocab/holodex).

But most of the vocabulary comes from the [Resource-Event-Agent (REA) ontology](http://en.wikipedia.org/wiki/Resources,_events,_agents_(accounting_model)) originated by [Professor William McCarthy of Michigan State University](https://www.msu.edu/~mccarth4/) in 1982, used in many places around the world.

## Pictures!

![value network flows](https://i.imgur.com/74gIY5C.png)

![model](https://docs.google.com/drawings/d/1ZmlgstkpoOeUrdeCkWn7PziXC8iqS3eh9281bjTyxX4/pub?w=960&h=720)

### WORK IN PROGRESS

- [x] Economic Agents
  - [x] [Agent](./vocab/Agent.js)
  - [x] [Person](./vocab/Person.js)
  - [x] [Group](./vocab/Group.js)
  - [x] [RelationshipType](./vocab/RelationshipType.js)
  - [x] [Relationship](./vocab/Relationship.js)
- [x] Measurements
  - [x] [Quantity](./vocab/Quantity.js)
  - [x] [Unit](./vocab/Unit.js)
  - [x] [Kind](./vocab/Kind.js)
- [ ] Economic Resources
  - [ ] [ResourceType](./vocab/ResourceType.js)
  - [ ] [Resource](./vocab/Resource.js)
- [ ] Economic Interactions
  - [ ] [InteractionType](./vocab/InteractionType.js)
  - [ ] [Interaction](./vocab/Interaction.js)
  - [ ] [ExchangeType](./vocab/ExchangeType.js)
  - [ ] [Exchange](./vocab/Exchange.js)
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
  - [x] [Role](./vocab/Role.js)
  - [x] [Location](./vocab/Location.js)
