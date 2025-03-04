# Who Is Developing Software Using Valueflows

## Reference applications

Listed here are some of the developer teams and user groups who have implemented or are implementing Valueflows in open source projects.  Please let us know if we have missed you and you would like to be listed. 

### Holochain ecosystem

A generic Valueflows backend is being developed in [Holochain](https://www.holochain.org/), called hREA.  Information can be found on the [hREA website](https://hrea.io/), on [hREA github](https://github.com/h-REA), chat in [discord](https://discord.gg/rZkhBJ5QsP). hREA exposes the [Valueflows graphql api](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql) for UI/UX apps to build on.  [Blog entry here](https://blog.holochain.org/happs-spotlight-hrea/). (The core is stable for beta use, but it is missing a few features.)

Some of the UI/UX apps being built on hREA are 

* Code A, an international group of university professors working on climate change issues, wants to create an application for classes to use as they do practical work to learn about methods for micro to macro climate accounting, and how to coordinate among themselves and with their communities.  Code is on [REA-Playspace github](https://github.com/lightningrodlabs/rea-playspace).  This is the first real visualization based core UI for Valueflows, and we think will be useful for other apps. (In process.)

* [Carbon Farm Network, organized by New York Textile Lab](https://www.newyorktextilelab.com/) is a supply chain network that connects designers to fiber producers and mills to help grow an economically diverse textile supply ecosystem. They are featured on this [Holochain Ecosystem video](https://www.youtube.com/watch?v=D7xDZaaQOpM). (In process.)
 
* [Sensorica](https://www.sensorica.co/), an open value network in Montreal, is just starting design on a new version of their NRP software, which was used as one input for Valueflows. (In process.)

A post called [Economy as Ecosystem](https://blog.holochain.org/economy-as-ecosystem/) highlights these user groups.

### Fediverse ecosystem

The [Fediverse](https://fediverse.party/en/fediverse/) is a collection of networking applications that federate with each other using the [ActivityPub (AP)](https://activitypub.rocks/) social networking protocol as the core.

* Bonfire kicked the federation direction off by supporting Valueflows as an extension of ActivityPub, and including the same [Valueflows graphql api](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql) as hREA. This supports a user-friendly integration of social and economic networking, which we think is an important direction. Information is at the [Bonfire website](https://bonfirenetworks.org/), the Valueflows extension is on [gitlab](https://gitlab.com/bonfire-networks/bonfire_valueflows). (In process.)

* [Reflow](https://reflowproject.eu/) was an EU funded project that seeks to understand and transform urban material flows, co-create and test regenerative solutions at business, governance, and citizen levels to create a resilient circular economy.  The ReflowOS backend was developed by Dyne (see below), built on the Bonfire application. (Complete.)

* [Interfacer](https://www.interfacerproject.eu/), a collaboration between [FabCity Hamburg](https://fabcity.hamburg/en/) and Dyne (see below), built on Reflow to support a global network of [Fab Cities](https://fab.city/) that proposes a new urban, economic, social and industrial model that relocalises production to the city and its bioregional context, while building a digital infrastructure enabling ecological, economic and social sustainability.  Here is a list of [git repositories](https://www.interfacerproject.eu/git-repositories/). You can [try it here](https://interfacer.dyne.org/), [webinar here](https://interfacerproject.dyne.org/webinar-interfacer/), [demo here](https://diode.zone/w/anjXTju5gvAJc7V1QoBXWK). (Complete for single installations, federation not complete.)

* [Dyne](https://www.dyne.org/) has done the Valueflows related development on Reflow and Interfacer, including developing the EU  "[Digital Product Passport](https://www.circularise.com/blog/digital-product-passports-dpp-what-how-and-why)", [webinar here](https://www.youtube.com/playlist?list=PLmwl0nkG0dPFI8bAS736myioL45oBEoeU), based on Valueflows resource tracing. (Complete.)

* [LearnDeep](https://learndeep.org/), initially created by students at [MSOE](https://www.msoe.edu/), supports a network of high school fablabs in Milwaukee that receive contributions of materials from the community and share these with each other. Their code has been merged upstream and is being completed as a Bonfire flavour by the Bonfire team on [gitlab](https://gitlab.com/bonfire-networks/bonfire_upcycle). (In process.)

* We are in process of proposing VF extensions for AP using their Fediverse Enhancement Proposal (FEP) process.  Proposals thus far are [Federated Marketplace](https://codeberg.org/fediverse/fep/src/branch/main/fep/0837/fep-0837.md), [Federated Work Coordination](https://codeberg.org/fediverse/fep/src/branch/main/fep/3264/fep-3264.md), [To-do's](https://codeberg.org/fediverse/fep/src/branch/main/fep/c5a1/fep-c5a1.md).


### Other applications

* [Web of Needs](https://matchat.org/). The goal is to do automated matching of intents with attached actors/resources on the one side and interaction patterns on the other, such that meaningful interactions can be automatically suggested to users. The code is on [github](https://github.com/researchstudio-sat/webofneeds). (In process.)

* [Basis Project](https://basisproject.net/) is a protocol for scalable, ecological production.  It's using an auto-generated (from the owl file) Valueflows class structure in Rust to drive a reference implementation.  The code lives on [github](https://github.com/basisproject/). (Complete.)

* [The Weather Makers](https://theweathermakers.nl/) are using Valueflows to model their ecosystem planning, engineering and management strategy for restoring water cycles as the key to achieving overall biosphere restoration. [Green the Sinai](https://www.greenthesinai.com/) is one ambitious potential project. (In process.)

## Whither from here? 

Valueflows philosophically seeks to develop in collaboration with user groups on the ground. This round of projects is providing valuable input to the Valueflows vocabulary. We can expect some additions and extensions.

However, Valueflows is working towards a stable version 1.0 of the core model that people will be able to count on for a reasonable time period.  We are close.
