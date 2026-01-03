See also [Flows in Motion: Recipes](../specification/model-text.md/#flows-in-motion-recipe) on the Diagram Explanation, [Planning from a Recipe](../concepts/plan.md/#planning-from-recipe) on the Operational Planning page, the [Simple plan from recipe example](../examples/ex-planning.md/#simple-plan-from-recipe), and the [Building recipes example](../examples/ex-planning.md/#building-recipes).

## Not just for cooking...

Recipes are for:

* documenting how to do something,
* generating plans for people to do it together,
* providing signals for coordinating their work.

Recipes contain all the info required to create a resource or provide a service.  In ERP (Enterprise Resource Planning) terms, it’s a combination of bills of material and routings and suppliers. And the logic for generating plans from recipes is roughly the same as [Material Requirements Planning](https://en.wikipedia.org/wiki/Material_requirements_planning){target="_blank"}.

If you encounter the same planning pattern more than once, and your software allows planning from recipes, you might want to capture the pattern in a Recipe so you don't need to cut and paste or re-enter the same information every time.  Generally recipes are for repeatable processes.

## Recipe patterns

These are two basic shapes of recipes. These recipe patterns can be used alone, or mixed and matched in the same recipe:

* <b>Manufacturing pattern</b>: assemble or transform input resources into different output resource(s). This combines bills of material, processing instructions (routings), other inputs like labor and equipment requirements, and possible suppliers for the inputs. The manufacturing pattern creates recursive structures. In other words, if an input component has a recipe itself, that recipe will be incorporated into its parent, so you can view a processing tree from parents through children unto many generations.  For example:

    * Assemble a robot from metal, wires, computer chips, software, etc.
    * Bake bread from flour, yeast, water, etc., using an oven.
    
A manufacturing recipe can be thought of like a tree shape, where the top of the tree produces the resource to be assembled, and the roots are all the components.
    
* <b>Workflow pattern</b>: change the same resource into a different stage of the same resource. This describes a sequence of processes used to complete work on one resource.  They create a series of stages that one resource will go through until it is finished. For example:

    * Translate a source document, edit the translation, format for publication, and publish.
    * Repair a bike.
    * Do quality testing on something that was created using the manufacturing pattern.
    
A workflow recipe tends to be more like a linear flow.

The examples above have to do with producing specific goods or services.  Recipes can also be used to document more general business processes that an organization uses to produce more generally defined kinds of outputs.  For example, an R&D activity might be hard to make a detailed recipe for using exact parts, because each time it is very different.  But it does have general steps like researching existing technology, concept generation, experimentation, concept selection, refinement, testing, documenting the design.

## How processes form longer flows

We know that processes are loosely connected to create a [directed graph of connected processes](../introduction/core.md/#directed-graphs-of-flows).  But how does it actually work?  It works the same in recipes, plans, and tracking/tracing economic events.  We're defining it here because it is the first place many will run into it.

The patterns:

* The main way is by [resource specification](../specification/model-text.md/#resourcespecification).  An input flow of one process is loosely connected to an output flow of another process if the resource specification is the same.  And that loosely connects the processes.

* But a resource specification is not enough when there is a workflow pattern (see above) where the same resource (specification) goes into and out of a process.  In this case, we need both resource specification and [stage, with optionally state](../concepts/resources.md/#stage-and-state).  For example a process may want a document as input, but only if it has been proofread already.  Or a process may want a certain component as input, but only if it has been through the test process (stage) and has state "pass".  In these cases, if the stage or state is needed, it will be included on the input flow.  If not present on the input flow, then that signals that only the resource specification is needed.

## Exchange recipes

You can also create Exchange Recipes.  These are particularly useful when a flow of processes will also involve one or more exchanges based on the production flows.  This often happens with delivering a service or work inputs, which might involve direct reciprocal flows, for example paying an agent for the work or the service.  It also could happen when a material or digital resource is produced directly for another agent.  Basically, any production flow which is an [implied transfer](../concepts/transfers.md/#explicit-and-implied-transfers) can be involved directly in an exchange, and this applies to recipes also.  There is also no reason not to have a recipe (or plan) made up only of exchanges, if there is such a use case.

![diagram of production and exchange recipes](../assets/prod-exch.png)

In the above diagram, the top recipe processes are the production steps to produce yarn.  The agent coordinating those processes wants to agree with another agent to pay for scouring the yarn.  The flow called "deliver scouring service" is both an output of the "Scour wool" recipe process and a clause of the recipe exchange agreement.

## Recipe class

The Recipe class groups Recipe Processes, and optionally Recipe Exchanges, but is an optional construct.  You will want a Recipe if different recipes can create the same resource specification output in different ways.  It is also needed when some recipe processes are included in multiple recipes, like the Summer Milking and Winter Milking recipes below, where the only difference is some details in the milking process. Or you might elect to always have a Recipe just for documentation.

The Recipe class is not necessary if there is always only one choice in the instance for the next or previous recipe process in making any particular resource specification, that is if you want the plan from recipe logic to look for the next/previous recipe process from all the recipe processes in the instance.  But we suggest you either use all Recipes or no Recipes as a network instance.

In the following simplified diagram, the yellow ovals are recipe processes. If they are named the same, that indicates the same instance of RecipeProcess.

![diagram of 2 recipes re-using recipe processes and recipe processes with no recipe](../assets/recipe-processes.png)

## By-products and Co-products

A Recipe knows its primary reason for being, i.e what is created by this Recipe.  As of now, it does not directly know its [by-products and co-products](../concepts/processes.md/#co-products-and-by-products). If needed, this can be found by interrogating the contents of the recipe input-process-output graph. This choice favors simplicity at this stage.

## Generation of plans

See the [Planning from Recipe section in Concepts: Operational Planning](../concepts/plan.md/#planning-from-recipe).
