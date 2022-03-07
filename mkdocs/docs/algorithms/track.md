### Difference between tracking and tracing

[From StackExchange:](http://ell.stackexchange.com/questions/34391/difference-between-track-and-trace):

> The difference is in direction & point in time:

> To trace: follow the completed path backwards from its current point to where it began.

> To track: follow the emerging path forwards from your starting point to wherever the thing currently is.

> When you "trace" a cellphone call, you try to determine its origin... You go backward to the starting point.

> When you "track" a cellphone, you monitor [the starting] location ... and follow it wherever it goes...

One of the most-often used traces is to find the origins of health problems like mad cow disease and tainted drugs and food. In Valueflows terms, that would start with the product (economic resource) that caused a health problem, and trace back along the chain of resource flows to the source or sources of the product.  Then it might be necessary to also track forwards from the source(s) to find everything else that might include that source(s).

It is also used when the provenance is useful for other information, like to determine the sustainability of the creation of a resource (like fossil fuel inputs, potential carbon implications, etc.), how healthy the inputs are, how local is the production and distribution, etc.  Or when an agent is interested in what happens to a resource they created, for example what is the effect of their recycling efforts or material donations to an educational program.

Also, this logic is used in other features, like "contribution economy" calculations.

Terminology note:

* `previous` and `next` bring back the element one flow step backwards or forwards
* `track` and `trace` bring back the whole resource flow forwards or backwards, starting with a resource or an output event

### Previous and next logic

Here is the logic finding the flow element that comes directly after a particular element (next for tracking) and immediately before a particular element (previous for tracing):

* For an EconomicResource:
    * next:
        * EconomicEvents affecting it that are inputs to Processes (`resourceInventoriedAs`), or
        * transfer (any kind) or move EconomicEvents with the EconomicResource referenced as `resourceInventoriedAs`
    * previous:
        * EconomicEvents affecting it that are outputs from Processes (`resourceInventoriedAs`), or
        * transfer (any kind) or move EconomicEvents with the EconomicResource referenced as `toResourceInventoriedAs`
* For a Process:
    * next:
        * EconomicEvents that are outputs
    * previous:
        * EconomicEvents that are inputs
* For an EconomicEvent:
    * next:
        * a Process to which it is an input, or
        * an EconomicResource which it affected as the output of a Process, or
        * if it is a transfer (any kind) or move event, the EconomicResource referenced as `toResourceInventoriedAs`

    * previous:
        * a Process from which it is an output, or
        * an EconomicResource which it affected as the input of a Process, or
        * if it is a transfer (any kind) or move event, the EconomicResource referenced as `resourceInventoriedAs`

### Tracking identifier and lot

Currently, often companies' internal flow information is not public, although in many countries they are required to be able to provide input and output information when needed in a medical emergency, without connecting all the dots internally.  Also any organization can be missing resource flow data so that there are gaps in the flows, no matter the level of transparency.

For these reasons, tracking identifier (often a serial number) and a standard lot identifier are currently used when food or medical tracing and tracking is required.  And in VF, they can be used whenever there is missing resource flow information for any reason.

Note that in VF, for simplicity, besides `lot`, a lot identifier can be stored in the `trackingIdentifier` property.

Also note that lots get "spread out" into splits of a resource or different types of resources.  For example, one cow could have a lot identifier, which when the cow goes through a butchering process will be included in all the cuts of beef from that cow.  Or one production batch of a medicine that contains many packages of the same medicine would have a lot identifier, which stays attached to the individual packages wherever they go.


### Track and trace Logic

To gather a whole track or trace, the previous and next methods should be used in recursive logic, traveling down the flow and each branch of the flow, when there are many inputs or many outputs.  For most production flows, this will be relatively straight-forward.

Further detail will be provided soon.
