# Inventory and Transfers

*Inventory* is a term used primarily today to mean resources owned by an agent, like assets that will appear on a balance sheet.  We would like to expand that definition to any record of resources that an agent has some responsibility for.  For example, a shipper may need to know the inventory on the truck; or an agent may want to know about resources that they are using but do not own in a similar way as those they own.

We think that now, and more so in the future, there will be more gradations of rights and responsibilities for resources than are sometimes considered now.  For example, as a society we may decide that we should take more responsibility for recycling or upcycling resources at the end of their useful life for us, or not wasting them.  The concept of "ownership" may transition more into "stewardship" in a concept of the world that does not put humans in a position of controlling the world's resources.

Here are some defined roles that agents can play in relationship to resources, usually for some period of time.
* *stewardship* (full rights and responsibilities, we use this to replace *ownership* in the current economic system)
* *right-to-use* (usufruct, rights to use a resource, usually with attendant responsibilities; does not imply actual use)
* *possession* (does not imply any rights, although there likely are some responsibilities involved)

The notion of *availability* is useful also when it comes to inventory, and can be calculated for any current or future point in time or period of time, based on current quantities and current/future commitments for production, consumption, usage, transportation, transfer of full rights or rights to use, transfer of possession, etc.

Those defined roles also affect the way we look at transfers.  Transfers can be of full or partial rights and responsibilities for resources, or possession of resources. So transfers affect inventory of various kinds.  We want to emphasize that for all of this, we want to focus on **economic coordination**.

The above defined roles are used for both denoting what is transferred and what is in relevant inventory.

To denote a transfer, the above roles are defined in any relevant flow.  For example: 
* Flows with actions "give" and "receive" often define a transfer, although not always. But they can be used whenever there is not a physically defined flow that also defines a transfer.
* Transportation related flows like "load" and "unload" can often have transfer roles defined for them, since transportation often accompanies transfers of rights.

Some flows do not need to explicitly define a transfer, in cases where a transfer is implicit to the flow based on the provider and receiver agents. For example:
* A "service" output flow almost always defines a transfer of all rights and possession.

In terms of inventory, we have defined the following properties for inventoried economic resources:
* currentAccountingQuantity (for resources where the agent has *stewardship* rights and responsibilities; does not imply possession or availability; would correspond to owned resources that would show up on standard accounting reports)
* currentAvailableQuantity (the agent has rights of *stewardship* or *right-to-use*, and also *possession*)
* currentPossessedQuantity (the agent has possession, nothing else is implied)

## Examples

[import, lang:"yaml"](../../examples/transfer-inventory.yaml)
