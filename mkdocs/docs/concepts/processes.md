# Processes

Process spans the Plan and Observation layers.  I.e. intents, commitments, and economic events can all be connected to the same process as it moves through planning and observation.  Or for some use cases Process is used only in one layer.

See also [Input-Process-Output](../introduction/core.md#ipo-input-process-output) and [Directed Graphs](../introduction/core.md/#directed-graphs-of-flows) in the introduction, [Flows in Motion: Planning](../specification/model-text.md#flows-in-motion-planning) and [Flows in Motion: Observation](../specification/model-text.md#flows-in-motion-observation) in the Diagram Explanations, [Production examples](../examples/ex-production.md), [Planning examples](../examples/ex-planning.md).

## Processes and resource flows

By Process, we mean an activity that transforms inputs into outputs. The outputs might then become inputs to other processes, forming networks and chains. Those chains may be circular, where an output from one process becomes an input to another process that occurred previously in the same chain, supporting circular economies.  Processes are a key piece of the structure where we can see a whole value flow.

## For example...

* For example: a farming process takes compost, soil, seeds, water and human work as inputs, and transforms them into grains, nuts, fruit, or vegetables. Those ingredients may go to kitchens that create dinners for people to eat. Some of those ingredients may be pared off in preparation, or spoil, or be left on plates. Those leftovers go into compost, which starts the process chain over from the beginning.

* Or for a bad example: a CAFO (Confined Animal Feeding Operation) produces a lot of manure. They put manure into big lagoons, which drain into the water table, and come back up in people's drinking water, causing diseases, for which the people become inputs to hospital processes.

  * One of the inputs to the CAFO process is antibiotics. The animals are filled with antibiotics because they get sick in the CAFO environment. And the antibiotics are also an output, mixed in with the manure and meat.

  * The antibiotics then breed resistant bacteria, which end up in the people, and send them to the hospital, and then kill the people, because the common antibiotics no longer work. And the resistant bacteria remain in the hospital to kill other people.

Connected processes enable us to see cause and effect, if we want.

## How to think about processes and their flows

This can be confusing.  Sometimes people tend to think about the flows as where some processing is happening.  This is understandable, since flow names ([actions](actions.md) like `consume` or `produce`) imply some kind of activity.  However, it is appropriate in the Valueflows model to think about all the transformations and transportation happening in Processes.  The flows fundamentally define what happens to resources because of the activity in the processes.  For example, there would never be a flow with an action of "plant" or "harvest", even though seeds are planted, and vegetables are harvested.  Planting and harvesting are Processes.  Seeds resources are decremented, vegetable resources are incremented.

## Co-products and by-products

Usually processes have one output, but not always.  Sometimes there are co-products that have somewhat equal value. By-products tend to define something very secondary. Sometimes there are co-products or by-products that provide something useful, such as plastic shavings being put back into the melting pot for continued production as input.  Sometimes there are unintended by-products, resources that are known but not useful or are harmful.

Valueflows does not distinguish between "good" and "bad" resources created by processes, as that is conditional and can be subjective. On the other hand, this pattern gives the opportunity to [record and understand harmful "externalities"](ecology.md) from producing and transporting resources.   Documenting these gives people a chance to try to figure out how externalities can be made useful in some other condition, or how to mitigate harmful externalities as much as possible.

## Operational process definitions

The processes considered in this version of Valueflows are considered to be operational, used in production or modification or transportation of economic resources.  This means they are the lowest level that makes sense to define a process and the intermediate resources for the use case.  Valueflows does not provide for steps within a process explicitly, so that would be done as part of the `note` field, or just documented separately.  Any process that has steps that require different resources should be considered for breaking into smaller processes.  Any process where the outputs will go separate ways is a good candidate to be defined as a separate operational level process, especially when the outputs will be consumed at different times.

Valueflows does not yet provide for summary level processes above the operational level, whether pre-operational (like budgeting) or non-operational (like bioregional planning). But work has been started and that is on the roadmap for a future release.



