# [Value Flows `vf` vocabs](https://github.com/valueflows/valueflows)

![Value Flows icon](https://rawgit.com/valueflows/valueflows/master/assets/icon-0.svg)

Value Flows is a minimum set of core concepts (protocols, domain models) to describe [flows of economic resources across decentralized networks](https://github.com/valnet/valuenetwork/wiki/Everything-is-connected).

![Socio-economic networks](https://cloud.githubusercontent.com/assets/5436686/10516016/81681ef6-7356-11e5-82a3-aa3937d282e8.jpg)

We want to help anyone building software for networked socio-economic systems.

If you would like to be part of this conversation, please [raise an issue here](https://github.com/valueflows/valueflows/issues), or fork this or any of the related repositories and issue pull requests.  You can also pop into our [welcome gitter chat](https://gitter.im/valueflows/welcome) to make comments, ask questions, or introduce yourself!

## Vocabularies

Value Flows is an **abstract vocabulary**: it only describes the simplest and most general set of verbs and nouns that are necessary in order for disparate projects and communities to define *concrete vocabularies* based on their specific use cases and local culture.

In practice, this means we use [the Type Object pattern](http://www.cs.ox.ac.uk/jeremy.gibbons/dpa/typeobject.pdf), where each 'type object' describes the specific semantics of policies, procedures, rules and patterns for those using it.

![model](https://docs.google.com/drawings/d/1ZmlgstkpoOeUrdeCkWn7PziXC8iqS3eh9281bjTyxX4/pub?w=960&h=720)

### [Agent](https://github.com/valueflows/agent)

An `Agent` is the participants in the socio-economic system: they are people, groups, or bots who can decide and act.

> Example: "an example of an agent is me, Mikey (@ahdinosaur)! i have a name, an email, etc. each agent, like everything in Value Flows, has an associated type object. for agents, these can correspond to the [different type of agents in Open OS](https://enspiral.gitbooks.io/open-os/content/en/levels_of_organising.html), namely Person, Pod, Community, and Network. on the type we can specify properties of that level of organizing structure."

### [Resource](https://github.com/valueflows/resource)

A `Resource` is something that can be 

> Example: "a resource is a physical thing, a resource type is the abstract ideal of that thing. when you go on Amazon you browse through resource types you can buy, the physical thing that you receive in the mail is a resource. when you go to the library catalog you browse through types of books, which correspond to physical books you can check out. these resource types can relate to each other as a taxonomy, as we see with categories on Amazon and genres in the library."

### Action

An `Action` is an economic interaction ("what you can do"), with the following (known) categories:

- **Transfer**: [a change in 'rights' relating to the resource(s)](https://github.com/valueflows/exchange/issues/12#issuecomment-160162115)
- **Transport**: [a change in location of the resource(s)](https://github.com/valueflows/exchange/issues/12#issuecomment-160174390)
- **Transform**: [a change in the composition of the resource(s)](https://github.com/valueflows/process)
- ... possibly more?

> Examples:
>
> - "a transfer is when a resource changes hands. for example, i give you three dollars in exchange for a coffee. the coffee and money resources are still the same, but they've changed owners."
> - "a transform is when a resource changes composition. for example, i input the resources of coffee grounds and hot water into a coffee machine resource in order to output hot coffee. the hot water is consumed during use, the coffee grounds are turned into waste, and the coffee machine is used but still available for more coffee."

#### Transform-oriented flow

![transform-oriented flow](https://i.imgur.com/74gIY5C.png)

#### Transfer-oriented flow

![transfer-oriented flow](https://docs.google.com/drawings/d/1og6iUscoFmzHm2zkfhwSU3lp6zHPX2j3BfvTmyfGmww/pub?w=720&h=330)

#### Transform-Transfer combination flow

![combo flow](https://docs.google.com/drawings/d/1Sm389PH04BS_gvrvPD7_idGf-EdZmD2mhRiNl3V26a8/pub?w=746&h=674)

### Communication

A `Communication` is a message within a ['conversation for action'](http://conversationsforaction.com/cfa-playground) ("what you can say about what you can do"), with the following (known) categories:

- **Intent**: [express wish for transaction](https://github.com/valueflows/intent)
- **Plan**: express commitment (promise, schedule) to follow plan
- **Reality**: account for transaction being done
- ... possibly more?

> Example: As part of a food purchasing co-op
>
> - the co-op receives the intended inventory from the supplier (20 kg of wheat flour)
> - the co-op members send the co-op admin their intended purchases (27 kg of wheat flour across 14 members)
> - the co-op admin creates a plan based on the known inventory (20 kg of wheat flour, 7 kg of other flour)
> - the co-op admin sends the plan to the supplier as an order
> - the supplier agrees to the order
> - the supplier sends the ordered food to the co-op through a local transporter
> - the co-op receives the order and accounts for reality (25 kg of wheat flour, 7 kg of other flour)

Further, we describe re-usable plans as a **Recipe**.

![Conversation funnel](https://cloud.githubusercontent.com/assets/117439/11401215/144641f6-9357-11e5-8ddd-f01f5bcf4012.png)

## Principles ([long form](https://github.com/valueflows/valueflows/wiki/Principles-for-this-vocabulary))

- the vocabulary must support coordinating work between different people in different organizations using different software on different platforms using different human and programming languages.
- the vocabulary must track the flows of resources (value) forwards and backwards.
- the vocabulary must distribute income (rewards) according to peoples' contributions, regardless of where and when in the network those contributions occurred.
- the vocabulary must be fractal: it must support high-level views of networks as well zooming in to lower and lower levels of detail.
- the vocabulary must work at the recipe, planning, and accounting levels.
- the vocabulary must work for alternative and traditional organizing shapes and economic relationships.

## Roadmap

Our current work is gathering use cases from contributors, see our [CONTRIBUTING.md document](./CONTRIBUTING.md) for more information on how to participate.

Our long-term plan is to refine our common vocabularies, design a set of interoperable protocols for decentralized economic infrastructure, and deploy an ecosystem of interconnected apps to form the backbone of an alternative economic system that supports recipes, planning, and accounting for fractal networks.

[![Hypergraphic user interface](https://cloud.githubusercontent.com/assets/719605/10327163/b9f1c74c-6d00-11e5-943c-179e4025b1e9.png)](https://docs.google.com/drawings/d/14Ochj955jSTm2Upoa5VK6YfWkSlFGVWIEBdJ1WSJuxE/edit)

## [Running code and round trips](https://github.com/valueflows/valueflows/wiki/Running-code-and-round-trips)

## [What we think Value Flows might be used for](https://github.com/valueflows/valueflows/wiki/What-we-think-Value-Flows-might-be-used-for)

## History

### Why?

This effort began in a conversation between the [Network Requirements Planning](https://github.com/valnet/valuenetwork) (NRP), and the [Open Apps](https://github.com/open-app/core) software projects. 

The NRP gang kept running into other apps that did a lot of the same things, or at least parts of the same things, that were used by different groups who wanted to collaborate with each other. So, let's have the different apps be able to collaborate with each other!

And the Open Apps gang (which includes the NRP gang) wants to create "a suite of integrated and open sourced apps which support transparent, democratic and decentralised organising".

Which potentially means many different apps that want to talk to each other. Thus the desire for a common vocabulary.

### Who uses this?

NRP is the [source of much of the vocabulary](https://github.com/valnet/valuenetwork/wiki/Core), and [continues to refine the model](https://github.com/valnet/valuenetwork/blob/master/docs/core_model.txt), collaborating with user networks like [Sensorica](http://nrp.sensorica.co). [Holodex](https://github.com/open-app/holodex) is using the [organization aspects of the vocab](https://github.com/valueflows/agent).

But most of the vocabulary comes from the [Resource-Event-Agent (REA) ontology](http://en.wikipedia.org/wiki/Resources,_events,_agents_(accounting_model)) originated by [Professor William McCarthy of Michigan State University](https://www.msu.edu/~mccarth4/) in 1982, used in many places around the world, as pictured in [this document](http://www.msu.edu/user/mccarth4/Alabama.doc).

![Resource-Event-Agent (REA) ontology image](https://raw.github.com/valnet/valuenetwork/master/valuenetwork/site_media/media/photos/REA_event.png)
