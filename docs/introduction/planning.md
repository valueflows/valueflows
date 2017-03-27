# Dependent Demand Logic

Dependent demand is an algorithm for traversing recipes to create plans for economic processes.

[Here is a longer description](http://hillside.net/plop/plop97/Proceedings/haugen.pdf). Below is a short version.

Basically, you traverse a graph of Recipe Processes backwards from the last Recipe Output, connecting Recipe Inputs with Recipe Outputs that have matching Resource Categories.   See [Graph search algorithms](http://jasonpark.me/AlgorithmVisualizer/).

The description below refers to this diagram:
![process resource flow](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/process-layer.png)
Take each request for quantities of Resource Category as a demand and start the traversal.

**Start:** 
* First check for onhand and available Economic Resources, or previously scheduled Output Intents, that are not yet allocated to any demand. 
* Allocate any that you find to the highest priority demand (where highest priority usually means earliest delivery date). _(Those are soft allocations, known only in the computer system.)_
* For demands that find no or insufficient available inventory or Output Intents, look for a Recipe Process that can create some. If you can't find a Recipe Process, suggest a purchase.

    * _(Note: a Recipe is not really a thing, it's just a graph. A requested Resource Category may have one or more Recipe Processes that can create some Resources of that category. Each of those Recipe Processes may have Recipe Inputs that specify some other Resource Categories, and each of those Resource Categories may have Recipe Processes that can create them, and so on, recursively, until you can't find any more creation Recipe Processes. If you find more than one creation Recipe Processes, you will need some way to select one.)_

* When you find a Recipe Processes, 
    * then schedule a Process of that type, with a Output Intent of the required quantity of the demanded Resource Category. 
    * Then schedule Input Intents for each of the Recipe Inputs of that Recipe Process, with their quantities scaled to the quantity of the planned output. 
    * Then start over from the **Start** with each of those new Input Intents as the demand.