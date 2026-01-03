Value flows (you could also call them resource flows) are a fundamental construct in the Valueflows ontology. They put the economic activity into motion.

See also [Actions](actions.md), [Core Concepts](../introduction/core.md), [Processes](processes.md), [Transfers](transfers.md).

## Kinds of Flows

The kinds of flows form a progression from defined to  potential to scheduled to realized.

### Recipe Flow

Recipes are used to create plans, and the Recipe Flow can create a corresponding Intent or a Commitment in a Plan, depending on if all the agents are known and on the level of certainty of the planning.  See also [Recipes](recipes.md), [Planning from Recipe](plan.md/#planning-from-recipe), [Flows in motion: Recipe](../specification/model-text.md/#flows-in-motion-recipe), [Planning from Recipe example](../examples/ex-planning.md/#simple-plan-from-recipe).

### Intent

Intents describe potential future events which have not been agreed to by other agents, such as offers and requests. Intents are often used for discovering another agent to participate in a desired event. On the process side, planned work could be an Intent, but planned work that some agent committed to do is a Commitment.  See also [Offers and Requests](proposals.md), [Flows in motion: Offers and Requests](../specification/model-text.md/#flows-in-motion-offers-and-requests), [Offers and Requests examples](../examples/ex-proposals.md).

### Commitment

Commitments describe potential future events which the involved agents have already agreed to pursue. Commitments can be considered contractual promises from one agent to another.  Commitments can be thought of as plans for Economic Events, and Economic Events can fulfill Commitments.  Commitments can satisfy Intents.  See also [Operational Planning](plan.md), [Flows in motion: Planning](../specification/model-text.md/#flows-in-motion-planning), [Planning examples](../examples/ex-planning.md).

#### Possible gray area between Intent and Commitment

When making an operational plan, where there isn't really a question of some agent stepping up to commit or being assigned, and no published Intent is needed, then Commitments can be used, even though there may not be an agent committed yet. The criterion can be thought of as firmness of plan, not commitments of agents.  Basically, sometimes making a plan takes some time, so during that activity, if Commitments are not assigned, it is OK, better than adding unnecessarily to the machinery needed to make a plan by using Intents.  On the other hand if publication of the flow is needed to find an Agent to commit, then an Intent is used, so it can become part of a Proposal.

### Economic Event

Economic Events describe past flows, something observed, never some potential future event.  They can fulfill Commitments or satisfy Intents (when there is no Commitment).  See also [How Resources Relate to Events](../concepts/resources.md/#how-resources-relate-to-events), [Flows in motion: Observation](../specification/model-text.md/#flows-in-motion-observation), [Production examples](../examples/ex-production.md), some of the [Transfer and Exchange examples](../examples/ex-exchange.md).

### Claim

Claims resemble Commitments, but are initiated by the receiver, not the provider.  If there is not an existing Commitment, an Economic Event can trigger a reciprocal Claim, based on an agreement.  Even then, Claims sometimes do not have to actually be instantiated, often they can be implied from an Economic Event and an agreement if that information is clearly available.  See also [Flows in motion: Observation](../specification/model-text.md/#flows-in-motion-observation), [Claim example](../examples/ex-exchange.md/#claim-for-income).

## Timeline, plans and observations

The figure below shows that Economic Events have to be observed and for that reason only appear as records of the past. Future plans get represented with Intents and Commitments.

![diagram of Intents, Commitments, Events in past, present, future, showing how the flows change through time](../assets/flows.png)

## Matching Intents

Often agents will start their plans independently and record their initial intents. Later once they make a Commitment with another agent, it will represent a specific shared part of their plans. For that reason any Commitment can result in satisfaction of the providing agent's Intent as well as satisfaction of the receiving agent's Intent.

![diagram showing matching of 2 Intents from different agents, satisfied by 1 Commitment, fulfilled by an Event](../assets/matched.png)

## How to minimize data entry requirements

This may seem like a lot of data entry, since the flow records in these transitions are maintained over time.  In practice, since the patterns of the flows are very similar, you can make use of that to directly pre-fill data entry forms or generate the initial data in the next phase.  What this could look like:

* On the highest layer, recipes can be used to generate plans including Processes and Commitments and/or Intents.  This is usually done when production processes are involved, but can also be for exchange. Recipes could on some use cases be used directly, but most often the quantities are different on the plan. A recipe should be set up to produce the lowest natural batch quantity.  The quantities and times can be multiplied out (or calculated as makes sense for the use case) to create a scheduled plan which is saved. Sometimes Commitments or Intents in generated plans need to also be tweaked a bit directly.
    * We also intend that in future versions there will be a higher level that groups recipes by economic function, so that an organization could just generate initial recipes from open libraries.  Organizations could contribute to these libraries, creating a data commons that would help everyone using the vocabulary.
* Or in case of direct exchange, Intent data can be used to prefill Commitment data, with a few or no changes needed.  This could be from matching a request and an offer intent.
* Often a person with Commitment data displayed as default can just indicate that is what happened and an Economic Event can be created.  Or perhaps minor changes are made first if the reality doesn't exactly match the plan.


## Actions

All types of flows use the same set of actions, which define what the flow does and how it behaves in relation to resources.  You can find detailed documentation on actions on the [Actions page](actions.md).

## Quantities and Times

Quantities are used for counting, such as:

* Exchange/transfer
* Resource increment and decrement
* Recipes, how much or many relatively goes into and out of a transformation process

Times are used for coordination and scheduling, such as:

* Calendar availability
* Planned timelines

They can be used together for analysis and reporting, such as:

* Accounting totals (quantity) within accounting period (time)

Quantities can be any needed unit of measure, including counts, volumes, weights, etc., including time-based units like hours.  Time can be a beginning/end date-time (an interval), or a point in time, or a due date-time.  If a point in time is recorded, but not beginning or end time, an application should return that time as the beginning and end time if asked.  If only date is needed, the time portion can be left as all zeros.

Note that creating a plan from a recipe may require scaling both quantities and calendar times, either simple multiplation or a more complex algorithm.

Sometimes a quantity is expressed in time-based units, like "I worked 6 hours", or "we used this machine for 8 hours".  These flows also may have a related time, like "I worked from 10am to 4pm", or "we used this machine from 8am to 4pm". In these examples, the quantity is used for accounting, exchange, recipes.  The time is used to schedule and coordinate the work or machine usage.

Sometimes a situation may call for a "compound quantity", like "Number-per-Year".

See also at [Use of Other Vocabularies](../specification/external-terms.md).

## Correcting Events

Economic events are immutable in accounting practice, since at any time they could have been reported formally.  To correct economic implications of an economic event, you need another economic event, which can be related to the first one with the relationship `corrects`.  The correcting event can have a negative number.  It can either completely back out the original event or adjust it.  See also [Making Corrections](accounting.md/#making-corrections) on the Accounting page, the [Correcting Errors example](../examples/ex-production.md/#correcting-errors).
