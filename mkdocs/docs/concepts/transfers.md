# Transfers

See also [Flows without processes](../introduction/core.md/#flows-without-processes) in the Core, [How resources relate to transfers](../concepts/resources.md/#how-resources-relate-to-transfers), and the [Transfer and exchange examples](../examples/ex-exchange.md/).

## Transfer concepts

One concept of transfer is an activity that re-assigns rights for an economic resource from one agent to another.  A second concept is an activity that operationally changes physical custody or possession of an economic resource from one agent to another, without affecting rights.

Note that a transfer is a one-way activity.  Two or more reciprocal transfers form an [exchange](exchanges.md), and are connected in Valueflows by an Agreement.

We think that now, and more so in the future, there will be more gradations of rights and responsibilities for resources than are sometimes considered now.  For example, as a society we may decide that we should take more responsibility for recycling or upcycling resources at the end of their useful life for us, or not wasting them.  The concept of "ownership" may transition more into "stewardship" in a concept of the world that does not put humans in a position of controlling the world's resources or abdicating responsibilities to the ecosystem in the name of ownership.  So, we are for the most part avoiding talking about ownership in this vocabulary, or any of the possible gradations and combinations of rights and responsibilities, leaving the concept of rights flexible.

## Transfer examples

* For example, perhaps some agent has many apple trees, and plans on pressing apple cider. Another agent has an apple press and agrees to transfer use of the press (a resource).  The agent with the trees might transfer a portion of the apple cider to the agent with the press.  The use of the press involves some rights (to use the press for some period of time) and responsibilities (to not run it beyond its capacity and to clean it up before returning it).

* Or in a library, a book can be checked out, a transfer of custody from the library to the reader.  The agent who checks it out can read it and is responsible for caring for it and returning it on time, another transfer of custody.

* Or let's say that a community has farmland and equipment held in common.  The community transfers custody for the land and equipment to some farmers to use and take care of.  The community also transfers seeds every year to the farmers, enough to grow the food the community needs.  During the year, the harvests are distributed (transferred) to the community members for their consumption.  In reciprocity, the community provides for other needs of the farmers (transfers resources).

*Implementation note*: Different networks may choose to handle namespaces and identifiers at different granularity.  This also may depend on the technology used.  So one network may have separate namespaces for the nodes in the network; another may have one namespace for the whole network.  In the latter case, an implication on transfers is that the provider agent and the receiver agent may use the same resource identifier for `resourceInventoriedAs` and `toResourceInventoriedAs`, even though the primary accountable has changed.

## Explicit and implied transfers

In Valueflows, several actions can involve the transfer concepts and behavior.  (For more detailed information, see the [Actions page](actions.md), especially the Behaviors by Action.)

The explicitly denoted transfers are:

* transfer all rights (primary accountability: ownership, stewardship, etc.)
* transfer custody (only the physical custody or possession)
* transfer (shorthand for both rights and custody, since they often go together)

Some other actions can imply a transfer of all rights, a transfer of custody, or both.  This shortens and sometimes simplifies the flows.  But it is not at all required, it is fine to have separate transfer flows if that makes the use case more understandable.  The [Transport with Transfer example](../examples/ex-complex.md/#transportation-with-transfer) illustrates this.

The way to imply a transfer is to designate a different provider and receiver.  It is not always true the other way though, a different provider and receiver does not necessary imply transfer behavior, usually because there is not an inventoried resource.  See also [Exchanges and flows](../concepts/exchanges.md/#exchanges-and-flows).

The following actions imply a full transfer of all rights and custody, when there is a different provider and receiver.   The implication is that any behavior rules of the primary action plus the transfer action are implemented.  And also the flow can be included in an agreement, for example paying for consuming a resource provided by a different agent in the receiver's process.

* consume, produce
* deliverService

The following actions imply transfer of custody only, when there is a different provider and receiver.  Since the implied transfer is only custody, this would normally not be used as part of an agreement.  But the behavior rules of the primary action plus the transfer of custody would be implemented.

* pickup, dropoff
* accept, modify

These examples that might help provide clarity: [Transportation with Transfer](../examples/ex-complex.md/#transportation-with-transfer), [Checkout book](../examples/ex-exchange.md/#checkout-book), [Claim for income](../examples/ex-exchange.md/#claim-for-income).
