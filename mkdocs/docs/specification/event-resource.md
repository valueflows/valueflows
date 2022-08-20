# Event Resource Logic

### Economic Resource information

All economic information in an Economic Resource must be put there by an Economic Event.  Non-economic information (note, image, etc.) can be updated on the Economic Resource directly. Economic information is anything that might affect periodic accounting or financial reporting.  In this way, there is always an immutable detailed time-based record of information that affected such reporting.  And there are not excessive (non-economic) events for only non-economic updates.

Note that the economic information is therefore derived information, and could be re-calculated as needed by iterating through the Economic Events. But that could have performance issues, so isn't generally recommended.

### Resource effect naming

The quantities on the Economic Event are `resourceQuantity` and `effortQuantity`.

The quantities on the Economic Resource are `accountingQuantity` and `onhandQuantity`.

The properties of Action that can be used to drive the logic are `accountingEffect` and `onhandEffect`.

This is how they relate:

* The `resourceQuantity` on the Economic Event could affect both the `accountingQuantity` and `onhandQuantity` on the Economic Resource, depending on the action, as defined [here](../concepts/actions.md).
* The `effortQuantity` on the Economic Event does not affect the quantities on the Economic Resource at all.
* The Action `accountingEffect` defines how the Economic Resource `accountingQuantity` is affected.
* The Action `onhandEffect` defines how the Economic Resource `onhandQuantity` is affected.



### Pseudo-code

Here is suggested pseudo-code for an Economic Event creating or affecting an Economic Resource.  It is not meant to indicate developers have to use this exact logical structure; it is just one method to communicate the intended logic, which we hope is helpful.  It has not been directly translated to code and tested.  The logic can also be directly derived from the table on the [Actions page](../concepts/actions.md).

```
If action.resourceEffect is "+" or "-"
    If a new resource is to be created
        Create the resource with zero quantity fields
    Else
        If it exists
            Get the resource based on resourceInventoriedAs
    If there is a resource from the above
        If action.resourceEffect is "+"
            Add event resourceQuantity to both accountingQuantity and onhandQuantity
        Else if action.resourceEffect is "-"
            Subtract event resourceQuantity from both accountingQuantity and onhandQuantity
Else if action.resourceEffect is "-+" or action.onhandEffect is "-+" (two resources can be affected)
    If a new resource is to be created
        Create the to-resource with zero quantity fields
    Else
        Get the to-resource based on toResourceInventoriedAs  
    If it exists in the event
        Get the from-resource based on the resourceInventoriedAs  
    If action is "transferCustody" or "transfer" or "move"
        If the from-resource exists
            Subtract event resourceQuantity from from-resource.onhandQuantity
        If the to-resource exists
            Add event resourceQuantity to to-resource.onhandQuantity
    If action is "transferAllRights" or "transfer" or "move"
        If the from-resource exists
            Subtract event resourceQuantity from from-resource.accountingQuantity
        If the to-resource exists
            Add event resourceQuantity to to-resource.accountingQuantity

If a new resource is created by the economic event 
 or if ((action is "transferAllRights" or "transfer") 
 and resourceInventoriedAs is the same as toResourceInventoriedAs)
    Set the  primaryAccountable to the receiver agent

If the action.locationEffect is update
    If the event toLocation exists
        Set the resource currentLocation to the event toLocation

If the action.containedEffect is update
    Set the resource containedIn to the container resource
      (see the example at Examples - Production - Pack unpack)
Else if the action.containedEffect is remove
    Set the resource containedIn to null
      (see the example at Examples - Production - Pack unpack)

If a resource is created or updated by the economic event
    If the state is included in the event
        Set the resource state to the event state
    If the event is an output of a process
     and the process is based on a process specification
        Set the resource stage to the process specification
```
