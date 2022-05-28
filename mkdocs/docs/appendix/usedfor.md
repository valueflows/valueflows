# Who Is Using Valueflows

## Reference applications

Listed here are some of the developer teams and user groups who have implemented or are implementing Valueflows in open source projects.  Please let us know if we have missed you and you would like to be listed. 

### Holochain ecosystem

A generic Valueflows backend is being developed in [Holochain](https://www.holochain.org/), called hREA.  Information can be found on the [website](https://hrea.io/), on [github](https://github.com/h-REA), chat in [discord](https://discord.gg/rZkhBJ5QsP). hREA exposes the [graphql api](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql) for UI/UX apps to build on.

Some of the UI/UX apps being built on hREA are 

* Code A, an international group of university professors working on climate change issues, wants to create an application for classes to use as they do practical work to learn about methods for micro to macro climate accounting, and how to coordinate among themselves and with their communities.  Code is on [github](https://github.com/lightningrodlabs/rea-playspace).

* [New York Textile Lab](https://www.newyorktextilelab.com/) is a supply chain network that connects designers to fiber producers and mills to help grow an economically diverse textile supply ecosystem. They are featured on this Holochain Ecosystem [video](https://www.youtube.com/watch?v=D7xDZaaQOpM).
 
* [Sensorica](https://www.sensorica.co/), an open value network in Montreal, is just starting design on a new version of their NRP software, which was used as one input for Valueflows.

### Fediverse ecosystem

The [Fediverse](https://fediverse.party/en/fediverse/) is a collection of networking applications that federate with each other using the [ActivityPub](https://activitypub.rocks/) social networking protocol as the core.

* Bonfire kicked the federation direction off by supporting Valueflows as an extension of ActivityPub, and including the same [graphql api](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql) as hREA. This supports a user-friendly integration of social and economic networking, which we think is an important direction. Information is at their [website](https://bonfirenetworks.org/), the Valueflows extension is on [github](https://github.com/bonfire-networks/bonfire_valueflows).

* [Reflow](https://reflowproject.eu/) was an EU H2020 funded project that seeks to understand and transform urban material flows, co-create and test regenerative solutions at business, governance, and citizen levels to create a resilient circular economy.  The ReflowOS backend, developed by Dyne (see below), enhanced the Bonfire application.

* [FabCity Hamburg](https://fabcity.hamburg/en/) (in process) will build on Reflow to support a global network of [Fab Cities](https://fab.city/) that proposes a new urban, economic, social and industrial model that relocalises production to the city and its bioregional context, while building a digital infrastructure enabling ecological, economic and social sustainability.  Dyne (see below) is also heavily involved in this development.

* [Dyne](https://www.dyne.org/) has done and is doing development on Reflow and FabCity Hamburg, including developing the Reflow "[Digital Product Passport](https://www.circularise.com/blog/digital-product-passports-dpp-what-how-and-why)" based on Valueflows for a number of pilots, including some Reflow pilots and FabCity Hamburg (see above).

* [LearnDeep](https://learndeep.org/), created by students at [MSOE](https://www.msoe.edu/), supports a network of high school fablabs in Milwaukee that receive contributions of materials from the community and share these with each other.   Their [gitlab](https://gitlab.com/msoe.edu-public/sdl/y22sdl/upcycle/bonfire_upcycle) code will soon be merged upstream and completed as a Bonfire flavour.


### Other applications

* [Web of Needs](https://matchat.org/), in progress. The goal is to do automated matching of intents with attached actors/resources on the one side and interaction patterns on the other, such that meaningful interactions can be automatically suggested to users. The code is on [github](https://github.com/researchstudio-sat/webofneeds).

* [Basis Project](https://basisproject.net/) is a protocol for scalable, ecological production.  It's using an auto-generated (from the owl file) Valueflows class structure in Rust to drive a reference implementation.  The code lives on [github](https://github.com/basisproject/).

## Whither from here? 

Valueflows philosophically seeks to develop in collaboration with user groups on the ground. This round of projects is providing valuable input to the Valueflows vocabulary. We can expect some additions and extensions.

As more implementations are becoming distributed, a particularly interesting direction is composing systems out of VF-enabled apps or modules, or using them to interact with each other. Two possible patterns:

* Composing bigger apps from many smaller apps
* Networks of apps interacting with one another

Following this direction, we will need to figure out the sweet spots for component size and shape for Valueflows Open Apps. If we do that well, many people should be able to create variations on any of the components, and they might be able to work together with any of the other variations. (Depending on devils in details...)
