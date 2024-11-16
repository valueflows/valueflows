# Transfers

See also [Flows without processes](../../introduction/core/#flows-without-processes) in the Core, [How resources relate to transfers](../../concepts/resources/#how-resources-relate-to-transfers), and a lot of the [Transfer and exchange examples](../../examples/ex-exchange/).

## Transfer concepts

One concept of transfer is an activity that re-assigns rights and responsibilities for an economic resource from one agent to another.  A second concept is an activity that operationally changes physical custody or possession of an economic resource from one agent to another, without affecting rights.

Note that a transfer is a one-way activity.  Two or more reciprocal transfers form an [exchange](exchanges.md), and are connected in Valueflows by an Agreement.

We think that now, and more so in the future, there will be more gradations of rights and responsibilities for resources than are sometimes considered now.  For example, as a society we may decide that we should take more responsibility for recycling or upcycling resources at the end of their useful life for us, or not wasting them.  The concept of "ownership" may transition more into "stewardship" in a concept of the world that does not put humans in a position of controlling the world's resources or abdicating responsibilities to the ecosystem in the name of ownership.  So, we are for the most part avoiding talking about ownership in this vocabulary, or any of the possible gradations and combinations of rights and responsibilities, leaving the concept of rights flexible.

## Transfer examples

* For example, perhaps some agent has many apple trees, and plans on pressing apple cider. Another agent has an apple press and agrees to transfer use of the press (a resource) in exchange for a reciprocal transfer of a portion of the apple cider.  The use of the press involves some rights (to use the press for some period of time) and responsibilities (to not run it beyond its capacity and to clean it up before returning it).

* Or in a library, a book can be checked out, a transfer of custody from the library to the reader.  The agent who checks it out can read it and is responsible for caring for it and returning it on time, another transfer of custody.

* Or let's say that a community has farmland and equipment held in common.  The community transfers responsibility for the land and equipment to some farmers to use and take care of.  The community also transfers seeds every year to the farmers, enough to grow the food the community needs.  During the year, the harvests are distributed (transferred) to the community members for their consumption.  In reciprocity, the community provides for other needs of the farmers.

*Implementation note*: Different networks may choose to handle namespaces and identifiers at different granularity.  This also may depend on the technology used.  So one network may have separate namespaces for the nodes in the network; another may have one namespace for the whole network.  In the latter case, an implication on transfers is that the provider agent and the receiver agent may use the same resource identifier for `resourceInventoriedAs` and `toResourceInventoriedAs`, even though the primary accountable has changed.

## Explicit and implied transfers

In Valueflows, several actions can involve the transfer concepts.  (For more detailed information, see the [Actions page](actions.md), especially the Definitions and the Behaviors by Action.)

The explicitly denoted transfers are:

* transfer all rights
* transfer custody
* transfer (shorthand for both rights and custody)

Other actions that can imply a *transfer* when the receiver agent is different than the provider agent are:

* produce (the resource being produced has to be new or already have the receiver agent as the primary accountable agent)
* consume (no resource is being created because it is consumed by the process)
* use (no resource is being created, just the usage is implicitly transferred)
* work (no resource is being created, just the work is implicitly transferred)
* deliver service (almost always will imply a transfer by its nature)
* copy (almost always there will be a new "to" resource created, if inventoried, which will have the receiver agent as the primary accountable)

Whether there is an inventoried resource or not, in the above cases of implied transfers, the already created commitment or event can be used as part of the agreement, just like an explicit transfer, even though it was already used in the above operational sense.  See [this work exchange example](../../examples/ex-exchange/#exchange-including-process-event).

Other actions that can imply a *transfer custody* when the receiver agent is different than the provider agent are:

* pickup
* dropoff
* accept
* modify

If these actions involve a *transfer* including all rights, that will need to be another commitment or event. See [this transportation example](../../examples/ex-production/#transportation-with-transfer).

There are no actions that imply only a *transfer all rights*.
