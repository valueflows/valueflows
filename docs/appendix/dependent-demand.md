# Dependent Demand

Dependent demand is one popular planning and scheduling algorithm for economic networks. It is used in Material Requirements Planning (MRP), for example. The algorithm traverses recipes to create schedules for economic processes.

Here is a long description of [Dependent Demand](http://mikorizal.org/dependent_demand.pdf). Below is a short version.

Basically, you traverse a graph of Recipe Processes backwards from the last Recipe Output, connecting Recipe Inputs with Recipe Outputs that have matching Resource Categories, and backscheduling all the processes and resource requirements based on estimated process durations.   See [Graph search algorithms](http://jasonpark.me/AlgorithmVisualizer/).

This description refers to this diagram:
![process resource flow](https://raw.githubusercontent.com/valueflows/valueflows/master/release-doc-in-process/process-layer.png)
Take each request for quantities of Recipe Resource as a demand and start the traversal.

**Start:**
* First check for onhand and available Economic Resources, or previously scheduled output Intents, that are not yet allocated to any demand.
* Allocate any that you find to the highest priority demand (where highest priority usually means earliest delivery date). _(Those are soft allocations, known only in the computer system.)_
* For demands that find no or insufficient available inventory or output Intents, look for a Recipe Process that can create some. If you can't find a Recipe Process, suggest a purchase.

    * (Note: a Recipe is not really a thing, it's just a graph - although in a future release it will be a thing. A requested Recipe Resource may have one or more Recipe Processes that can create some Resources of that specification. Each of those Recipe Processes may have Recipe Flow inputs that specify some other Recipe Resources, and each of those Recipe Resources may have Recipe Processes that can create them, and so on, recursively, until you can't find any more creation Recipe Processes. If you find more than one creation Recipe Processes, you will need some way to select one.)

* When you find a Recipe Process,
    * then schedule a planned Process based on the Recipe Process, with an output Intent of the required quantity of the demanded Recipe Resource. Backschedule so that the end of the process meets the timing requirements of the inputs to the processes that will be waiting for them.
    * Then schedule input Intents for each of the recipe inputs of that Recipe Process, with their quantities scaled to the quantity of the planned output.
    * Then start over from the **Start** with each of those new input Intents as the demand.
