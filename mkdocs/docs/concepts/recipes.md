## Not just for cooking

Recipes are for:

* documenting how to do something,
* generating plans for people to do it together,
* providing signals for coordinating their work.

Recipes contain all the info required to create a resource or provide a service.  In ERP (Enterprise Resource Planning) terms, it’s a combination of bills of material and routings and suppliers. And the logic for generating plans from recipes is roughly the same as [Material Requirements Planning](https://en.wikipedia.org/wiki/Material_requirements_planning).

If you encounter the same planning pattern more than once, and your software allows planning from recipes, you might want to capture the pattern in a Recipe so you don't need to cut and paste or re-enter the same information every time.

## Recipe patterns

These are two basic shapes of recipes. These recipe patterns can be used alone, or mixed and matched in the same recipe:

* <b>Manufacturing pattern</b>: assemble or transform input resources into different output resources. This combines bills of material, processing instructions (routings), other inputs like labor and equipment requirements, and possible suppliers for the inputs.  They are structured like an upside down tree. The manufacturing pattern creates recursive structures. In other words, if an input component has a recipe itself, that recipe will be incorporated into its parent, so you can view a processing tree from parents through children unto many generations.  For example:

    * Assemble a robot from metal, wires, computer chips, software, etc.
    * Bake bread from flour, yeast, water, etc., using an oven.
    
A manufacturing recipe is shaped like a tree, where the top of the tree produces the resource to be assembled, and the roots are all the components.
    
* <b>Workflow pattern</b>: change the same resource into a different stage of the same resource. This describes a sequence of processes used to complete work on one resource.  They create a series of stages that one resource will go through until it is finished. For example:

    * Translate a source document, edit the translation, format for publication, and publish.
    * Repair a bike.
    * Do quality testing on something that was created using the manufacturing pattern.
    
A workflow recipe tends to be more like a linear flow.

The examples above have to do with producing specific goods or services.  Recipes can also be used to document more general business processes that an organization uses to produce more generally defined kinds of outputs.  For example, an R&D process might be hard to document in detail, but it does have general steps like researching existing technology, concept generation, experimentation, concept selection, refinement, testing, documenting the design. 


## Generation of plans

<b>Back-scheduling a plan from a Recipe</b>:
Start with end items and a due date, generate the plan from the end item to its inputs, to the outputs leading the inputs, to their inputs, etc.

<b>Forward-scheduling from a Recipe</b>:
Start with the inputs with no predecessors and a start date, generate the plan from the inputs to their outputs, to the inputs that want the outputs, etc.

<b>Forward-scheduling from a Resource</b>:
Start with a Resource and generate the plan based on its recipe.  Examples: 
    Translation: start with a source document
    Auto repair: start with an auto that needs repair.
