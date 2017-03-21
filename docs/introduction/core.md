# Core

The vocabulary has a core that would fit many different kinds of economic formations  - value networks, supply chains, joint ventures, business collaboration network....

The core is based on the REA (Resource, Event, Agent) ontology. You can find all the details by following the [links here](https://valueflows.gitbooks.io/valueflows/content/appendix/rea.html).

These are the main concepts in the REA ontology, as pictured in this [document](http://www.msu.edu/user/mccarth4/Alabama.doc):

![REA event](https://raw.github.com/valnet/valuenetwork/master/valuenetwork/site_media/media/photos/REA_event.png)

Economic events are the movers and shakers.  They say what is happening to economic resources, and what economic agents are involved along the way.  They create the "value flows".

A key concept in REA is Duality, which means that each event wants one or more balancing events: in other words, some kind of reciprocity.  REA uses an abstract word for this relationship in order to make the meaning configurable. The reciprocity does not need to happen at the same time, or in the same transaction.  And it can have any logic that a network wants: payment in money, swap, earn credits, earn reputation points, share with the commons, from each according to ability and to each according to need, etc.

All the levels of the REA ontology are similarly flexible and configurable:

* The Abstract level represents policies, procedures, rules and patterns. This is where each network or community can configure the core concepts to fit their desires.
* The Plan level represents offers, requests, schedules and promises.
* The Observation level represents what really happened.



##### Verbs associated with economic events

###### Input
* vf:use - for example a tool used in process, after the process, the tool still exists
* vf:consume - for example an ingredient composed into the output, after the process the ingredient is gone
* vf:cite - for example a design file, neither used nor consumed, the file remains available at all times
* vf:work - labor power towards a process
* vf:accept - in processes like repair or maintentance, same resource will appear in output with *vf:improve* verb
* vf:load -  transported resource enters the process, same resource will appear in output with *vf:unload* verb

###### Output

* vf:produce - new resource created in that process
* vf:improve - in processes like repair or maintentance, same resource will appear in input with *vf:accept* verb
* vf:unload -  transported resource leaves the process, same resource will appear in input with *vf:load* verb