# Value Flow Algorithms

This section is about what computer programs (or humans with pencil and paper and a lot of work) can do with Value Flows economic networks once they are constructed on the Web or in a database.

* **Dependent Demand** constructs schedules for operational economic networks from recipes
    * Many other scheduling algorithms can be used over the same recipes. 
    * [Gantt charts](https://en.wikipedia.org/wiki/Gantt_chart) are a popular network schedule visualization.
    ![gantt](https://en.wikipedia.org/wiki/Gantt_chart#/media/File:GanttChartAnatomy.svg)
    * **Critical Path** is another scheduling algorithm that analyzes a network of processes to figure out the bottlenecks, the processes that need special attention.
* **Value Rollups** summarize the total value of all inputs to the resulting output from a recipe.
* **Value Equations** determine how income should be distributed according to contributions to a deliverable item.
* **Track and Trace** follow the path of a resource forwards (to where it went) and backwards (where it came from, and what other resources went into it).
* **Provenance** is like Trace, focusing on all of the other resources that went into a given resource.
* **Cash Flow** is mostly about money, but could also apply to other resources, looking at the inflows and outflows on a timeline, historical in the past, forecasted in the future.
* **Network Flows** is a general name for all of those algorithms and many many more. See [Flow Networks](https://en.wikipedia.org/wiki/Flow_network) on Wikipedia and elsewhere.

There are similarities and differences among the algorithms: 
* Scheduling algorithms and cash flows use time-phasing: placing planned or reported events on a timeline.
* Dependent Demand schedules backwards from an end date; Critical Path schedules forwards from a start date.
* Dependent Demand does an explosion: breaking down the end resource of a recipe into a tree of components and processes.
* Value Rollups do an implosion: summarizing all the inputs of the exploded tree of components and processes into a total value.
* All of those algorithms work on flow networks, otherwise known as directed graphs, composed of nodes and links between them.
![flow network](https://en.wikipedia.org/wiki/Flow_network#/media/File:Network_Flow_SVG.svg)