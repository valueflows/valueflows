# Who Is Developing Software Using Valueflows

*This section is non-normative.*

## Reference applications

Listed here are some of the developer teams and user groups who have implemented or are implementing Valueflows in open source projects.  Please let us know if we have missed you and you would like to be listed. 

### Holochain ecosystem

A generic Valueflows backend is being developed in [Holochain](https://www.holochain.org/){target="_blank"}, called hREA.  Information can be found on the [hREA website](https://hrea.io/){target="_blank"}, on [hREA github](https://github.com/h-REA){target="_blank"}, chat in [discord](https://discord.gg/rZkhBJ5QsP){target="_blank"}. hREA exposes the [Valueflows graphql api](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql){target="_blank"} for UI/UX apps to build on.  [Blog entry here](https://blog.holochain.org/happs-spotlight-hrea/){target="_blank"}, [hAppenings newsletter here](https://happeningscommunity.substack.com/p/from-rea-to-hrea-a-journey-into-decentralized?r=e6jau&utm_campaign=post&utm_medium=web&triedRedirect=true){target="_blank"}. (The core is stable for beta use, but it is missing a few features on the edges.)

Some of the UI/UX apps being built on hREA are 

* [Carbon Farm Network, organized by New York Textile Lab](https://www.nycfnhub.com/){target="_blank"} is a supply chain network that connects designers to fiber producers and mills to help grow an economically diverse textile supply ecosystem. They are featured on this older [Holochain Ecosystem video](https://www.youtube.com/watch?v=D7xDZaaQOpM){target="_blank"}. This [Plan from Recipes feature video](https://www.youtube.com/watch?v=DlnaWGtIsBQ){target="_blank"} gives a detailed look at the progress headed into the 2025 season. (In process.)

* Requests & Offers HC/MVP, from [hAppenings Community C.I.C.](https://www.happenings.community/){target="_blank"} will facilitate exchange within the Holochain ecosystem.  It will also provide a starting point for more generic offers and requests applications in the future.  The code is on [the hAppenings github](https://github.com/happenings-community/requests-and-offers){target="_blank"}.  (In process.)

* [Sensorica](https://www.sensorica.co/){target="_blank"}, an open value network in Montreal, is designing a new version of their Network Resouce Planning (NRP) software, which was used as one input for Valueflows. [A proof-of-concept](https://github.com/Sensorica/true_commons){target="_blank"} has been started. (In process.)

* The REA Playspace was started by [Lightningrodlabs](https://lightningrodlabs.org/){target="_blank"} for Code A, an international group of university professors working on teaching about climate change issues in practical coordinated student work.  The code is on [REA-Playspace github](https://github.com/lightningrodlabs/rea-playspace){target="_blank"}.  This is the first real visualization based core UI for Valueflows, and we think will be useful for other apps. (Incomplete, but potentially useful to fork.)

A post called [Economy as Ecosystem](https://blog.holochain.org/economy-as-ecosystem/){target="_blank"} highlights some of these.


### Fediverse ecosystem

The [Fediverse](https://fediverse.party/en/fediverse/){target="_blank"} is a collection of networking applications that federate with each other using the [ActivityPub (AP)](https://activitypub.rocks/){target="_blank"} social networking protocol as the core.

* Bonfire kicked the federation direction off by supporting Valueflows as an extension of ActivityPub, and including the same [Valueflows graphql api](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql){target="_blank"} as hREA. This supports a user-friendly integration of social and economic networking, which we think is an important direction. Information is at the [Bonfire website](https://bonfirenetworks.org/){target="_blank"}, the Valueflows extension is on [gitlab](https://gitlab.com/bonfire-networks/bonfire_valueflows){target="_blank"}. (In process.)  As Bonfire releases its 1.0 version in 2025, it plans on addressing specific VF use cases with community involvement.

* [LearnDeep](https://learndeep.org/){target="_blank"}, initially created by students at [MSOE](https://www.msoe.edu/){target="_blank"}, supports a network of high school fablabs in Milwaukee that receive contributions of materials from the community and share these with each other. Their code has been merged upstream and is being completed as a Bonfire flavour by the Bonfire team on [gitlab](https://gitlab.com/bonfire-networks/bonfire_upcycle){target="_blank"}. (In process.)

* We are in process of proposing VF extensions for AP using their Fediverse Enhancement Proposal (FEP) process.  Proposals thus far are [Federated Marketplace](https://codeberg.org/fediverse/fep/src/branch/main/fep/0837/fep-0837.md){target="_blank"}, [Federated Work Coordination](https://codeberg.org/fediverse/fep/src/branch/main/fep/3264/fep-3264.md){target="_blank"}, [To-do's](https://codeberg.org/fediverse/fep/src/branch/main/fep/c5a1/fep-c5a1.md){target="_blank"}.  Some implementations are just kicking off.


### Zenflows ecosystem

* [Reflow](https://reflowproject.eu/){target="_blank"} was an EU funded project that seeks to understand and transform urban material flows, co-create and test regenerative solutions at business, governance, and citizen levels to create a resilient circular economy.  The ReflowOS backend was developed by Dyne (see below), initially forked from an early iteration of the Bonfire application. Here's a [ReflowOS video](https://www.youtube.com/watch?v=BIMyOM5msgA){target="_blank"} including some municipal pilots. (Complete.)

* [Interfacer](https://www.interfacerproject.eu/){target="_blank"}, a collaboration between [FabCity Hamburg](https://fabcity.hamburg/en/){target="_blank"} and Dyne (see below), built on Reflow to support a global network of [Fab Cities](https://fab.city/){target="_blank"} that proposes a new urban, economic, social and industrial model that relocalises production to the city and its bioregional context, while building a digital infrastructure enabling ecological, economic and social sustainability.  Here is a list of [git repositories](https://www.interfacerproject.eu/git-repositories/){target="_blank"}. You can [try it here](https://interfacer.dyne.org/){target="_blank"}, [webinar here](https://interfacerproject.dyne.org/webinar-interfacer/){target="_blank"}. (Complete.)

* [Dyne](https://www.dyne.org/){target="_blank"} did the Valueflows related development on Reflow and Interfacer, including developing the EU  "[Digital Product Passport](https://www.circularise.com/blog/digital-product-passports-dpp-what-how-and-why){target="_blank"}", [webinar here](https://www.youtube.com/playlist?list=PLmwl0nkG0dPFI8bAS736myioL45oBEoeU){target="_blank"}, based on Valueflows resource tracing. (Complete.)


### Other applications

* [GrowGood](https://growgood.org.au/en/){target="_blank"} empowers farmers to track their operations from seed to sale, creating a verifiable, auditable record of their entire production process. Besides base farm operations, it includes ecological flows from sensor data, shared recipes, and proposes JSON-LD interops with other applications, to seed and support economic networking around it.  The code and documentation is at [GrowGood gitlab](https://gitlab.com/growgood/){target="_blank"}, some written vision is [in their blog](https://growgood.org.au/en/blog/open-source-agtech-vision-part1/). (In process.)

* [Basis Project](https://basisproject.net/){target="_blank"} is a protocol for scalable, ecological production.  It's using an auto-generated (from the owl/turtle file) Valueflows class structure in Rust to drive a reference implementation.  The [Basis code lives on github](https://github.com/basisproject/){target="_blank"}. (Complete.)

* [Web of Needs](https://researchstudio-sat.github.io/webofneeds/){target="_blank"}. The goal is to do automated matching of intents with attached actors/resources on the one side and interaction patterns on the other, such that meaningful interactions can be automatically suggested to users. The [WoN code is on github](https://github.com/researchstudio-sat/webofneeds){target="_blank"}. (In process.)

* [The Weather Makers](https://theweathermakers.nl/){target="_blank"} are using Valueflows to model their ecosystem planning, engineering and management strategy for restoring water cycles as the key to achieving overall biosphere restoration. [Green the Sinai](https://greekreporter.com/2024/09/09/sinai-desert-egypt-regreening-regeneration-weather/){target="_blank"} is one ambitious potential project. (In process.)
