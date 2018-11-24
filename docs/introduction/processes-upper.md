# Planning, Budgeting, and Analysis

The Processes section explains processes at their basic level, starting with operational observable processes.  This section explains how to use the same process model to represent other requirements, and how to nest processes.

Processes can be composed into or from higher level processes.  Higher level processes often serve a purpose other than operations, for example planning or budgeting or a manufacturing work order.  They can also be operational themselves while nesting lower level processes.  They do not need to nest lower level processes though, they can represent larger sets of data on their own.

Like operational processes, these processes can be classified and created from recipes.  Like operational processes, they have inputs and outputs (intents, commitments, economic events), either their own or inputs/outputs that can be derived from nested processes.

### Nested Processes

When processes are nested, it is not random. nor based on a taxonomy. It is based on what processes are actually part of the higher level process. And not all the inputs and outputs of nested processes are considered inputs and outputs of the higher level process, since some are produced and consumed within the higher level process.  In the following simplified example, the flows between plant/weed and weed/harvest are not flows input or output of the higher level process.

![process nesting](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/nesting.png)

### Scenarios

Some scenarios we have seen:
* <b>Operational Planning</b>.  A Plan is a schedule of related operational processes, done for the purpose of creating material or immaterial goods and/or services.  Often the Plan will be driven by one or more desired deliverables.  Then from a recipe or not, the nested processes and intents/commitments that are needed to produce those deliverables are created.  Basically the plan and the operational processes that are nested in the plan are created together.
* <b>Budgeting</b>.  A Budget is a summary of input requirements for a scope for a time interval (sometimes corresponding to the organization's "accounting period"), often yearly, as a higher level of planning.  Budgets are usually created before operational planning is done, and are estimates.  Often a forecast is made consisting of desired or expected deliverables for the period, sometimes using past event history as a starting point.  This would create a demand-driven budget.  Or sometimes a supply-driven budget makes more sense, for example when all of the producing capacity will be used in any case, and then the outputs will be constrained by the inputs available.  In any case, the budgeted inputs and outputs are kept, as they are often compared to actuals later.  The budget itself could be represented as a Process, and it could nest line item processes based on type of resource or process.
* <b>Network Analysis</b>.  This is an analytical look at all or some of the actual and/or potential resource flows for a scope, often a community or region.  This can be modeled using higher level types of processes and types of resources, and could include intents, commitments, and/or economic events.  One use of this kind of analysis is to identify gaps and opportunities to enhance the economic network closer to home for additional community resilience.
* <b>Nested Operational Processes</b>.  Handling "overhead" type processes is often difficult, because they contribute to multiple operational processes.  For example accounting and cleaning are periodic activities that are not directly tied to other producing processes, but they are contributions.  Creating a nesting process is one way to handle this: creating inputs and outputs for accounting and cleaning for the higher level process, which nests the various shorter term production related processes.

But the model itself is quite flexible, and we expect there will be more uses for it, all using the basic input-process-output structure with resource flows connecting them.

Some notes:
* This structure gives the possibility for parts of global process flows that are invisible because the scoping agent has not made these internal flows public to be shown by a higher level process flow without breaking the pattern.  In this way, mixing and matching the levels can also be useful, without breaking the pattern.
* There are some common situations for nested processes that will not be as simple as the above diagram.  Thes include:
    * Action makes a difference.  When a piece of equipment or tool is "used", it is not gone at the end of the nesting process.  But if it is managed as a time-based resource with a calandar, some calendar duration is in fact consumed.  Or if a citable resource is created and then cited inside, it is also still there at the end of the nesting process.
    * Batch or lot size makes a difference.  If a deliverable is say 5 of some asssembled item, and 20 of some input component are needed to maek that item, but the minimum batch size that makes sense is 100 of them, then there will be 80 left in inventory at the end of the nesting process, also an output.
    * The algorithms for nesting process inputs and outputs will depend on whether working top-down or bottom-up.  If top down, like the example of the budget above, inputs and outputs (probably Intents) are created first and need to be kept.  Lower level Intents could be created also that are a refinement and included in the higher level ones, say if re-budgeting by month. Operational planning could also become part of the budget process(es).  But if bottom-up, where nested process inputs and outputs are aggregated to report at the higher level, they do not need to be stored for the nesting process, say a plan.  These patterns could be mixed and matched.
