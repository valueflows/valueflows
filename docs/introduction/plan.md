# Operational Planning

An operational plan is a schedule of related operational processes, that constitute a body of scheduled work with defined deliverable(s).  A plan normally contains one or more process resource flows, one for each deliverable.

A plan can cover more than one [Scope](scoping.md), if the different scopes are tightly coordinated with pre-agreed rules, for example sub-organizations of a main organization, or an ongoing supply chain.  If not, or if the agents prefer, then requirements from one scope could become deliverables for another scope's plan.  Different batch sizes could trigger a new plan for inputs to the main deliverable too.  But all of this does not affect the vocabulary or model.  Plans can relate to each other through resource flows just like Processes.

Plans are used for understanding and coordinating what needs to happen for specific outputs. The size and complexity of a Plan is up to the people who are planning and coordinating the work.

A Plan can be generated from a Recipe, or created without one.

Some examples:

* A communications group creates articles for a larger group. The communications group needs some of their articles to be translated into various languages, by another group within the larger group. Both the creation of an article and its translation could be part of the same plan.

* An organization decides to mount a campaign for some objective.  There might be many different deliverables: a fundraising website, some brochures, some events, etc.  All of these can be part of the same plan for easier coordination.  For example, a campaign logo could be used in all of these separate outputs.

* An organization gets an order for some things they produce.  They can create a plan to produce to that order, including all line items.  Or they can gather all the orders for a time period for an item and produce to that as a larger plan.

* An organization produces a standard batch size to stock, in anticipation of future orders.

### Processes nested in a Plan

When processes are "nested", it is not random, nor based on a taxonomy. It is based on what processes are actually part of the plan. And not all the inputs and outputs of nested processes are considered inputs and outputs of the plan, since some are both produced and consumed within the plan.  In the following simplified example, the flows between plant/weed and weed/harvest start and end inside the nest, and so are not inputs to, or outputs of, the plan.

![process nesting](https://raw.githubusercontent.com/valueflows/valueflows/master/release-doc-in-process/nesting.jpg)

* There are some common situations for nested processes that will not be as simple as the above diagram.  Thes include:
    * Action makes a difference.  When a piece of equipment or tool is "used", it is not gone at the end of the nesting process.  But if it is managed as a time-based resource with a calendar, some calendar duration is in fact consumed.  Or if a citable resource is created and then cited inside, it is also still there at the end of the nesting process.
    * Batch or lot size makes a difference. Suppose you have a requirement for 5 of some assembled item, and 4 of some input component are needed to make each item, 20 components in all. But the minimum batch size for the component is 100. Then 80 of the components will be left in inventory at the end of the nesting process, and that 80 will also an output of the outer process.


### Planning from a Recipe

Plans can be generated from a recipe by scaling the recipe according to the demanded quantity of the end outputs.  This is called a "demand explosion".  The generation might take into account current inventories, batch sizes, etc., so it is not necessarily a "pure" reflection of the recipe.  In addition, often plans are tweaked after generation from a recipe, depending on how firm and exact the recipe is.  A manufacturing recipe might be more exact than a recipe for a more general business process.  For these reasons, a plans is decoupled from the recipe that generated it in the vocabulary.  It maintains only the references to the resource and process specifications that were supplied from the recipe.

![recipe plan](https://raw.githubusercontent.com/valueflows/valueflows/master/release-doc-in-process/plan-process.png)
