# [Value Flows `vf` vocabs](https://github.com/valueflows/valueflows)

![Value Flows icon](https://rawgit.com/valueflows/valueflows/master/assets/icon-0.svg)

Value Flows is a set of common vocabularies to describe flows of economic resources of all kinds within distributed economic ecosystems.

Purpose: to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups.

Or, if that is too many buzzwords, "let's help a lot of alternative economic software projects that are solving different pieces of the same puzzle be able to work together".

If you would like to be part of this conversation, please [raise an issue here](https://github.com/valueflows/valueflows/issues), or fork this or any of the related repositories and issue pull requests.  You can also pop into our [welcome gitter chat](https://gitter.im/valueflows/welcome) to make comments, ask questions, or introduce yourself!

## Principles 

* The model must enable collaboration between different people in different organizations using different software on different platforms using different human and programming languages.
* The model must be able to form global networks which can track the flows of resources (values) forwards and backwards. Or maybe it would be better to say "in any direction", but forwards means in the direction of value creation, and backwards means in the direction of return or compensation. 
* Corollary: the model must be able to support value equations that distribute income (rewards) according to peoples' contributions to the creation of the values that generated the income or rewards, regardless of where and when in the network configuration those contributions occurred.
* The model must also be able to support coordinating work between different people in different organizations. People who are not concerned with rewards may still want to coordinate work.
* The model must be able to support circular economies, value flows where resources come full cycle to be fed into the same set or other processes so that recycling, re-use, and other ways to encourage resources not becoming waste.
* The model must be fractal. It must support global views of networks in aggregate as well as drilling down to lower and lower levels of detail. Those lower levels of detail, for example inside one organization, may require permissions.
* The model must also work on the Recipe, Plan and Event levels (whatever those get called in the end), where the objects on each level are linked appropriately to the other levels.
* The model must support non-business-as-usual organizational forms and economic relationships in addition to traditional business organizations and relationships.
* The model must support systems where all the contributors can get shares of the outcome to allocate as they wish e.g.

  * contributors to renewable energy coop get kWh of electricity to allocate
  * contributors to train system get 'km on the railway' to allocate
  * contributors to food network, get 'food baskets' to allocate
  * etc.

* In other words, a group can choose to introduce various monetary currencies into their flows but can also do all the coordination and accounting without introducing such artifacts.

See also http://discourse.transformap.co/t/principles-for-commoning-transformap-generating-a-global-mapping-commons/518

## Vocabularies

* [Agent Vocab](https://github.com/openvocab/agent)
* Commitment Vocab
* Economic Event Vocab
* [Exchange Vocab](https://github.com/valueflows/exchange)
* [Process Vocab](https://github.com/valueflows/process)
* [Resource Vocab](https://github.com/valueflows/resource)

Might be more to come.

## [Running code and round trips](https://github.com/valueflows/valueflows/wiki/Running-code-and-round-trips)

## [What we think Value Flows might be used for](https://github.com/valueflows/valueflows/wiki/What-we-think-Value-Flows-might-be-used-for)

## Roadmap

Our next deliverable is to have separate API and UI apps playing with each others' people, groups, and relationships in-between by communicating through a common vocabulary.

Our long-term plan is to refine our common vocabularies, design a set of interoperable protocols for decentralized economic infrastructure, and deploy an ecosystem of interconnected apps to form the backbone of an alternative economic system that supports recipes, planning, and accounting for fractal networks.

## Why?

This effort began in a conversation between the [Network Requirements Planning](https://github.com/valnet/valuenetwork) (NRP), and the [Open Apps](https://github.com/open-app/core) software projects. 

The NRP gang kept running into other apps that did a lot of the same things, or at least parts of the same things, that were used by different groups who wanted to collaborate with each other. So, let's have the different apps be able to collaborate with each other!

And the Open Apps gang (which includes the NRP gang) wants to create "a suite of integrated and open sourced apps which support transparent, democratic and decentralised organising".

Which potentially means many different apps that want to talk to each other. Thus the desire for a common vocabulary.

## Who uses this?

NRP is the [source of much of the vocabulary](https://github.com/valnet/valuenetwork/wiki/Core), and [continues to refine the model](https://github.com/valnet/valuenetwork/blob/master/docs/core_model.txt), collaborating with user networks like [Sensorica](http://nrp.sensorica.co). [Holodex](https://github.com/open-app/holodex) is using the [organization aspects of the vocab](https://github.com/valueflows/agent).

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
