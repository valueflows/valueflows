### Difference between Tracking and Tracing

[From StackExchange:](http://ell.stackexchange.com/questions/34391/difference-between-track-and-trace):

> The difference is in direction & point in time:

> To trace: follow the completed path backwards from its current point to where it began.

> To track: follow the emerging path forwards from your starting point to wherever the thing currently is.

> When you "trace" a cellphone call, you try to determine its origin... You go backward to the starting point.

> When you "track" a cellphone, you monitor [the starting] location ... and follow it wherever it goes...

One of the most-often used traces is to find the origins of health problems like mad cow disease and tainted drugs and food. In Value Flows terms, that would start with the product (economic resource) that caused a health problem, and trace back along the chain of resource flows to the source or sources of the product.  Then it might be necessary to also track forwards from the source(s) to find everything else that might include that source(s).

### Track and Trace Logic

Here is the logic finding the flow element that comes after a particular element (tracking) and before a particular element (tracing):

* For an EconomicResource:
    * after: EconomicEvents affecting it that are inputs to Processes, or transfer/move EconomicEvents with the resource defined as the `resourceInventoriedAs`
    * before: EconomicEvents affecting it that are outputs from Processes, or transfer/move EconomicEvents with the resource defined as the `toResourceInventoriedAs`
* For a Process:
    * after: EconomicEvents that are outputs
    * before: EconomicEvents that are inputs
* For an EconomicEvent:
    * after: 
        * a Process to which it is an input, or
        * an EconomicResource which it affected as the output of a Process, or
        * if it is a transfer or move event, the EconomicResource labelled `toResourceInventoriedAs`
    * before:
        * a Process from which it is an output, or
        * if it is an input to a Process, the EconomicResource which it affects, or
        * if it is a transfer or move event and the current EconomicResource is the toResourceInventoriedAs, then the previous EconomicResource is the resourceInventoriedAs

#### Additional special logic

When more than one resource of the same specification goes from input to output of the same process, use the tracking identifier if you need to track or trace the same resource. And example of this would be less-than-truckload shipments, where many separate resources with different destinations are included in the same shipment process.

When dealing with resources that packed into and unpacked from a container resource, if the resource is currently packed, then the logic needs to follow the container resource until the resource is unpacked.

When the same economic resource is both input and output of a process, sometimes a series of processes, such as for repair or quality testing or a workflow where a resource is refined through stages like writing/editing/etc, the stage must be identified, based on the kind of process the resource was last output of.
