# Tracking and Tracing

** [Difference between Tracking and Tracing](http://ell.stackexchange.com/questions/34391/difference-between-track-and-trace):**

> The difference is in direction & point in time:

> To trace: follow the completed path backwards from its current point to where it began.

> To track: follow the emerging path forwards from your starting point to wherever the thing currently is.

> When you "trace" a cellphone call, you try to determine its origin... You go backward to the starting point.

> When you "track" a cellphone, you monitor [the starting] location ... and follow it wherever it goes...

One of the most-often used traces is to find the origins of health problems like mad cow disease and tainted drugs and food. In Value Flows terms, that would start with the product (economic resource) that caused a health problem, and trace back along the chain of resource flows to the source or sources of the product.  Then it might be necessary to also track forwards from the source(s) to find everything else that might include that source(s).

Here is the logic for tracking and tracing.

* For an EconomicResource:
    * after: EconomicEvents affecting it that are inputs to Processes or Transfers
    * before: EconomicEvents affecting it that are outputs from Processes or Transfers
* For a Process or Transfer:
    * after: EconomicEvents that are outputs
    * before: EconomicEvents that are inputs
* For an EconomicEvent:
    * after: 
        * a Process or Transfer to which it is an input, or
        * an EconomicResource which it affected as the output of a Process or Transfer
    * before:
        * a Process or Transfer from which is is an output, or
        * if it is an input to a Process or Transfer, the EconomicResource which it affects.

When there is more than one economic resource going from input to output of a process without transformation of that resource (except for location), the tracking identifier is used.  And example of this would be partial load shipments, where many separate shipments are included in the same shipment process.

When the same economic resource is both input and output of a process, sometimes a series of processes, such as for repair or quality testing or a workflow where a resource is refined through stages like writing/editing/etc, the stage must be identified, based on the kind of process the resource was last output of.
