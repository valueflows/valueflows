See also [an Exchange diagram](../introduction/core.md/#flows-without-processes) in Core, [Flows in motion: Recipe](../specification/model-text.md/#flows-in-motion-recipe), [Flows in motion: Planning](../specification/model-text.md/#flows-in-motion-planning), [Flows in motion: Observation](../specification/model-text.md/#flows-in-motion-observation), also [the Exchange examples](../examples/ex-exchange.md).

## The independent viewpoint

Here we look at exchanges of resources from an independent or neutral viewpoint (not the viewpoint of one of the Agents in the exchange). For example, from one Agent's viewpoint, the exchange may be a Purchase, from the other Agent's viewpoint, it might be a Sale. From the neutral viewpoint, it is an exchange of resources, with usually at least two flows of resources, from different directions. So for example, the seller might give some goods to the buyer, and the buyer might give some money to the seller. Or in a barter exchange, one agent might give the other some books, and the other agent might compensate with some cookies.

Exchange is ubiquitous on the internet today, with offers everywhere. In Valueflows, we track not only the offers and promises, but also the actual flows of resources in networks, in all directions. And we support exchanges that don't involve money as well as those that do.

Valueflows enables multilateral exchange agreements as well. Any number of agents can commit to flows where they provide something and flows where they receive something. This way creating a reciprocal cycle in the flows graph. So for example, Alice can provide apples from her orchard to Bob, who can provide accommodation to Claire, who can provide tutoring to Alice's children. Such exchanges can happen in infinite number of possible ways, as long as all agents participating agree on specific reciprocal cycle in the flows graph.

We also support non-reciprocal one-way transfers, such as in a gift economy.  However, an exchange implies at least two transfers with reciprocity.

## Exchanges and flows

Exchanges as modeled in VF actually are reciprocal flows, not resources directly.

* For example, most timebanks exchange work for credits.  The work event can be part of a process that produces something for some other agent.  It is also part of an exchange in the timebank.  The transfer of credits on the other hand, is not part of any process that creates or transports something, it is merely the timebank recording that one account was decremented and another account was incremented.

* Exchange of work also happens in open value networks, where people record work events as input to many processes, and then when income is received for outputs of that work, people receive part of that income, in exchange for their work.

* Another example is when a service is created as an output of a process, where that service delivery event can be considered an implied transfer, and exchanged for some other resource.

To be included in an exchange, a flow must have a different provider agent and receiver agent.  Flows involved in transfers of rights to an inventoried resource are most obvious.  Other types of flows can also imply transfer behavior, and can thus be used as part of an exchange, such as consume and produce.  And yet other types of flows do not involve an inventoried resource, but still can be included in an exchange, such as work, delivering a service, or usage of some equipment.  Some types of flows don't make sense to include in an exchange, because there is only a transfer of custody involved, such as pickup and dropoff, or accept and modify. For more details see [Explicit and implied transfers](transfers.md#explicit-and-implied-transfers).

## Agreements

An Agreement can encompass a promised exchange, or an observed exchange without the promise.

Various kinds of agreements between agents often define the rights and responsibilities for economic resources that are transferred. Agreements can reflect any economic paradigm, so make it possible for the Exchange and Transfer vocabulary to work equally well for capitalist businesses, transitional economic interactions, and next economy interactions.

Agreements can be of any kind and scope, from an order to an agreement in a contribution-based economy to a larger blanket agreement.

Agreements can be combined into an Agreement Bundle.  This can be useful for example when each "line item" in an "order" needs to have a line item reciprocal commitment (like a "price"), instead of one combined reciprocal commitment for several primary commitments.

Valueflows does not define the detailed internal vocabulary for agreements.

##  Recipe exchanges

Recipes can include [patterns for exchange](../concepts/recipes.md/#exchange-recipes), as well as production.  The Recipe Exchange is used to generate an agreement(s) and reciprocal commitments when a plan in created from the recipe.
