# Dependent Demand

Dependent demand is one popular planning and scheduling algorithm for economic networks. It is used in Material Requirements Planning (MRP), for example. The algorithm traverses recipes to create schedules for economic processes.

Here is a long description of [Dependent Demand](http://hillside.net/plop/plop97/Proceedings/haugen.pdf). Below is a short version.

Basically, you traverse a graph of Recipe Processes backwards from the last Recipe Output, connecting Recipe Inputs with Recipe Outputs that have matching Resource Categories, and backscheduling all the processes and resource requirements based on estimated process durations.   See [Graph search algorithms](http://jasonpark.me/AlgorithmVisualizer/).

This description refers to this diagram:
![process resource flow](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/process-layer.png)
Take each request for quantities of Resource Category as a demand and start the traversal.

**Start:** 
* First check for onhand and available Economic Resources, or previously scheduled Output Intents, that are not yet allocated to any demand. 
* Allocate any that you find to the highest priority demand (where highest priority usually means earliest delivery date). _(Those are soft allocations, known only in the computer system.)_
* For demands that find no or insufficient available inventory or Output Intents, look for a Recipe Process that can create some. If you can't find a Recipe Process, suggest a purchase.

    * _(Note: a Recipe is not really a thing, it's just a graph. A requested Resource Category may have one or more Recipe Processes that can create some Resources of that category. Each of those Recipe Processes may have Recipe Inputs that specify some other Resource Categories, and each of those Resource Categories may have Recipe Processes that can create them, and so on, recursively, until you can't find any more creation Recipe Processes. If you find more than one creation Recipe Processes, you will need some way to select one.)_

* When you find a Recipe Processes, 
    * then schedule a Planned Process based on the Recipe Process, with a Output Intent of the required quantity of the demanded Resource Category. Backschedule so that the end of the process meets the timing requirements of the inputs to the processes that will be waiting for them. 
    * Then schedule Input Intents for each of the Recipe Inputs of that Recipe Process, with their quantities scaled to the quantity of the planned output. 
    * Then start over from the **Start** with each of those new Input Intents as the demand.