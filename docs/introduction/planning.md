# Planning

I wrote a much longer version of this called [Dependent Demand](http://hillside.net/plop/plop97/Proceedings/haugen.pdf) for a PLoP conference in 1997. This is the shorter version, but maybe still difficult to read because I am trying to qualify all the vf:Names.

Basically, you traverse a graph of vf:ProcessTypes backwards from the last vf:OutputType, connecting vf:InputTypes with vf:OutputTypes that have matching vf:ResourceTypes.   See [Graph search algorithms](http://jasonpark.me/AlgorithmVisualizer/).

Take each of the requests for quantities of vf:ResourceTypes as a demand and start the traversal.

**Start:** 
* First check for onhand and available vf:Resources, or previously scheduled vf:PlannedOutputs, that are not yet allocated to any demand. 
* Allocate any that you find to the highest priority demand (where highest priority usually means earliest delivery date). _(In terms of some of our discussions here, those are soft allocations, known only in the computer system.)_
* For demands that find no or insufficient available inventory or previously planned outputs, look for a vf:ProcessType that can create some. If you can't find a vf:ProcessType, suggest a purchase.

    * _(Note: a vf:Recipe is not really a thing, it's just a graph. A requested vf:ResourceType may have one or more vf:ProcessTypes that can create some vf:EconomicResources of that type. Each of those vf:ProcessTypes may have vf:InputTypes the specify some other vf:ResourceTypes, and each of those vf:ResourceTypes may have vf:ProcessTypes that can create them, and so on, recursively, until you can't find any more creation vf:ProcessTypes. If you find more than one creation vf:ProcessType, you will need some way to select one.)_

* If you find a vf:ProcessType, 
    * then schedule a vf:Process of that type, with a vf:PlannedOutput of the required quantity of the demanded vf:ResourceType. 
    * Then schedule vf:PlannedInputs for each of the vf:InputTypes of that vf:ProcessType, with their quantities scaled to the quantity of the planned output. 
    * Then start over from the **Start** with each of those new vf:InputTypes as the demand.