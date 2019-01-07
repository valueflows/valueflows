# Flows of Resources

![networks of networks picture](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/network-of-networks.png)

Networks of value flows are created when processes are linked together through flows of resources.

This forms an economic network, where resources flow from agent to agent to agent via events. These resource flow networks do not care about company or national boundaries.  And the resources themselves can be anything of value: tangible or intangible, materials, ideas, work, kudos, money, alternative currencies, whatever.


### Flows of value in which you can participate

Like Activity Streams, but about value network activities.
* Needs, ideas, offers, requests, plans, new recipes, creations, work to do, stuff we need, income, exchanges
* You will be able to subscribe to feeds from networks, with selections of types of activity.
* You will be able to respond: offer work, stuff, money, ideas, requests, orders, improvements, etc.
* You will be able to publish into the value streams.

### A little value flow....

This is a (simplified) very specific example taken from the Open Value Network (OVN) Sensorica, where contributions to processes are rewarded according to agreed upon rules when there is income.

![sensorica flow 1](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/sens-flow-1.png)
![sensorica flow 2](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/sens-flow-2.png)

### ... another little value flow....

Producing and exchange olive oil and coffee, even more simplified.

![coffee olive oil](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/coffee-oliveoil-flows.png)

### ... to thinking bigger.

![river flow](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/vf-river.png)

### Traversing value flows

Value flows can be traversed forwards ("tracing") or backwards ("tracking").  Often people use the term "provenance" when looking backwards towards the source of some resource, sometimes when a problem emerges (as in a disease outbreak from food), sometimes to know the quality of the resource (as in wanting local humanely produced food with lower ecological impact).

The data structures of ValueFlows provide the ability to trace or track any value flow, no matter how long or complex:

* For an EconomicResource:
    * after: EconomicEvents that are inputs to Processes or Transfers
    * before: EconomicEvents that are outputs from Processes or Transfers
* For a Process or Transfer:
    * after: EconomicEvents that are outputs
    * before: EconomicEvents that are inputs
* For an EconomicEvent:
    * after: 
        * a Process or Transfer to which it is an input, or
        * an EconomicResource which it affected as the output of a Process or Transfer
    * before:
        * a Process or Transfer from which is is an output, or
        * if it is an input to a Process or Transfer, the EconomicResource which it affects.

When the same economic resource is both input and output of a process, and more than one resource is involved, the tracking identifier is used.  And example of this would be partial load shipments, where many separate shipments are included in the same shipment process.

When the same economic resource is both input and output of a process, sometimes a series of processes, such as for repair or quality testing or a workflow where a resource is refined through stages like writing/editing/etc, the stage must be identified, based on the kind of process the resource was last output of.
