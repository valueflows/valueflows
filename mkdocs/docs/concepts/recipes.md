See also [Flows in Motion: Recipes](../specification/model-text.md/#flows-in-motion-recipe) on the Diagram Explanation, [Planning from a Recipe](../concepts/plan.md/#planning-from-a-recipe) on the Operational Planning page, the [Simple plan from recipe example](../examples/ex-planning.md/#simple-plan-from-recipe), and the [Building recipes example](../examples/ex-complex.md/#building-recipes).

## Not just for cooking...

Recipes are for:

* documenting how to do something,
* generating plans for people to do it together,
* providing signals for coordinating their work.

Recipes contain all the info required to create a resource or provide a service.  In ERP (Enterprise Resource Planning) terms, it’s a combination of bills of material and routings and suppliers. And the logic for generating plans from recipes is roughly the same as [Material Requirements Planning](https://en.wikipedia.org/wiki/Material_requirements_planning).

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

The examples above have to do with producing specific goods or services.  Recipes can also be used to document more general business processes that an organization uses to produce more generally defined kinds of outputs.  For example, an R&D process might be hard to document in detail, but it does have general steps like researching existing technology, concept generation, experimentation, concept selection, refinement, testing, documenting the design. 

## Recipe class

The Recipe class is an optional construct.  You might want a Recipe when you include more than one process in one recipe, and especially if different recipes can create the same Resource Specification output in different ways.  It is also useful when certain processes are included in multiple recipes, see the bottom of [this example](../examples/ex-complex.md/#building-recipes).  You might also want Recipe when the software finds recipes by the primary output, because that can be defined directly from Recipe without interrogating the flows.

### Byproducts and Coproducts

A Recipe knows its primary reason for being, i.e what is created by this Recipe.  As of now, it does not directly know its byproducts and coproducts. If needed, this can be found by interrogating the contents of the recipe input-process-output graph. This choice favors simplicity at this stage.

## Generation of plans

Plans can be generated from a Recipe, a Recipe Group, or directly from a Recipe Process, which will find predescessor Recipe Processes as needed.

<b>Back-scheduling a plan from a Recipe</b>:
Start with end items and a due date, generate the plan from the end item to its inputs, to the outputs leading the inputs, to their inputs, etc.

<b>Forward-scheduling from a Recipe</b>:
Start with the inputs with no predecessors and a start date, generate the plan from the inputs to their outputs, to the inputs that want the outputs, etc.

<b>Forward-scheduling from a Resource</b>:
Start with a Resource and generate the plan based on its recipe.  Examples:

* Translation: start with a source document
* Auto repair: start with an auto that needs repair.
