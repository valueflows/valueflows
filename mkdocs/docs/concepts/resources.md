The resource vocabulary describes resources and types of resources, defined broadly.  They can include useful goods and services, digital documents and representations, code, money, tokens, credits, energy, work, skills, CO2, methane, heat, air, water, soil microbiota....

See also [Resource in the Diagram Explanations](../specification/model-text.md#resource).

## Definition

Traditionally, an economic resource is defined by its utility, but also by its scarcity and its control by an economic agent. That definition is based on accounting for private ownership, and we believe is too limited.

* Intellectual creations like designs are not scarce, yet they clearly are economic resources. They only become scarce when legally restricted by patents, licenses, and copyrights.
* Air, water, and other products of nature are clearly economic resources, but they are not under the control of an agent unless they are legally restricted by ownership. However, by means of the invisible foot that accompanies the invisible hand, they are regularly degraded by enterprises, and not accounted for, classified as “externalities”.

We want to think of ourselves as participants in ecosystems, not competing enterprises. As such, we need to account for our effects on all aspects of our ecosystems.

And we want knowledge to be freely available.

Also, we prefer to think of use value, but economic resources also often have exchange value.

### The difference between a resource and its specification/classification(s)

An economic resource is observable.  Its specification or classification defines what kind of thing the economic resource is.

So, for example, most listings of things offered for sale on an e-commerce site are specifications, which can be searched using classifications. The one in a box delivered to your door is a resource.

Or the description of the book entitled "The Power of Babel: A Natural History of Language", ISBN-13: 978-0060520854,
is a specification. Your library may have two copies that you can check out. Those are resources.

### The difference between a resource specification and a resource classification

An economic resource or a flow can have only one *resource specification* in Valueflows.  This defines the lowest level useful type or kind of the resource that is needed. The Valueflows vocabulary defines this as the ResourceSpecification.  Note that often taxonomies and other references on the web can define very specific resource specifications at their leaf levels, and these can be used if the necessary properties can be found.

An economic resource or a flow can have any number of *resource classifications*.  They are used to filter, match, or group economic resources.  Resource classifications can be part of a taxonomy. That means they can be defined very broadly and generally and maybe vaguely, or they can be defined very narrowly, but fit into broader classifications.

So, for example, Herb might be the parent classification of Anise Hyssop, Goldenrod, Nettles, Red Clover, etc.  Besides its usefulness in understanding taxonomies of resource types, this can be useful when one can define a general recipe that will work for many more specific kinds of resources.

People can use the multitude of existing taxonomies for resource classifications, or can also create their own as needed.

Resource classifications can also use other schemes, like facets or tags.  It is left vague in order to be flexible.

The references to resource classifications are uri's, and not otherwise defined inside Valueflows.

## Identification and Behaviors of Resources

Here are three different kinds of resources from the viewpoint of identification:

* serialized resources, where each individual instance has a unique identifier,
* lot-controlled resources, where each lot or batch has a unique identifier, but the lot or batch may contain many individual instances, and
* count or volume or stock resources, where individual instances are indistinguishable, or in the case of fluids, only exist on a molecular level.

Serialized resources would fit the direct identification pattern. Lots can be split up, so the identification of a subset of a lot would require some other properties, such as location. Stock resources can only be described indirectly, by means of some combination of properties, such as specification and location. (Location is a complex ontology of its own: for example, in warehousing, a location is often composed of warehouse:room:aisle:row:tier.)  The tracking identifier is used for serial numbers.

Moreover, identification of resources will depend on scope and purpose. We want to allow each scope or context to define resources that they have relationships with, according to the combination of properties that works best for them, which might include which agent has which relationship with a resource.

And then in the "independent view", for larger-scale analysis of resource flows, or for example for lot tracking for public health issues like mad cow disease, different combinations of properties might be needed.

### Substitutability

This defines if any resources of that specification can be freely substituted for any other resource of that same specification when used, consumed, traded, etc.  For example, one container of "B9R-1-red DLP resin photopolymer" is probably substitutable for another container of the same photopolymer.  While each resource for a resource specification called "English-Spanish translation" is probably not substitutable because each will be a different document.

### Unique identifiers for resources

This can vary.  And people can be allowed within some boundaries of agreement to specify which combination of other properties would constitute identifiers.

Here are some examples from manufacturing situations:

* Unique identifier = an assigned serialized identifier, which is unique across manufacturers, due to agreements in an industry.  Examples are computers, vehicles, and other equipment.
* Unique identifier = resource model + lot identifier + location + owner: so in other words, the owner of the rights was part of the unique identifier of the resource, and if the resource got transferred from one owner to another, the first owner's resources would be decremented, and the second owner's resources would be incremented.

Note in the last case, a transfer of rights means a different resource. This is common with resources that are not serialized, where one logical resource has a quantity greater than 1, and the individual instances are substitutable. (Think nuts and bolts, grain, strawberries, bottles of beer in cases, etc.)

### Stage and state

Sometimes part of the logical identification of a resource includes:

* *stage*: the ProcessSpecification of the most recent process the resource was output from, such as "test"
* *state*: the state of the resource on output from a process, such as "failed"

Stage is used when the same identified resource passes through multiple processes in its lifetime, and that information is needed by the next process to determine which resources can be valid inputs.  For example, in creating a translation, you might have one translated document pass through translation, editing, proofreading, and formatting stages. You don't want to bring that resource into the formatting stage until it has been proofread, for example. Or you might have a testing stage for a component or product, in which case you don't want to consume or transfer the resource until it both has been through the testing stage, and had a `pass` output state.

These can be defined on the recipe or the plan, showing where an input flow expects a certain stage and/or state of a resource. In that case, [Dependent demand planning](../algorithms/dependent-demand.md) will select only those resources that fit the specified stage and state.  In user-interface forms for adding process input EconomicEvents, if the use case uses stages, the input event form should query EconomicResources for required stage and state when offering selections of possible input resources.

An alternative to using staged resources is to have different resource specifications, and therefore different identified resources at each stage.  This eliminates the extra complexity of the stage model, but also means you can't tell that the same resource is passing through stages.

### Inventory

Economic Resources can be inventoried, not inventoried but could be, or it doesn't make sense to think about inventory.  If a resource is not inventoried, it is generally not instantiated in the software, but defined using resource specification and other properties, such as the accountable agent or location.

* Inventoried: You want to keep track of it, its changes in quantity, and how many you have right now.
* Not inventoried: You could keep track of it, but it isn't worth it.  This usually happens for quantities of small or hard to measure items that are obtained in bulk, like solder or bolts.  In this case, you have to look at the actual resource to see if you need more, the data won't tell you.
* Not applicable: This is for types of work (unless scheduled), services, and other resources where it just doesn't make sense.

## How resources relate to events

In the original REA ontology, an Economic Event is a change in the quantity or in the rights to an Economic Resource performed by Economic Agents. An event is also defined by its behavior in relation to the resource  (consume, use, produce, transfer, etc.).

Some people use the terms "stock" and "stock flow".  A stock is a resource; a stock flow is an event. (The term stock is too limiting, since a resource could be digital, like a document or media file.)

An event can trigger incrementing or decrementing a resource.  Sometimes it does neither, as in the case of using a piece of equipment or citing a document.  But in any case, the quantity of a resource related to the event is not a resource itself, it is just a property of the event.  For example a resource could be 100 widgets on a pallet, lot number 1234.  If 10 of those widgets are consumed in a process that makes something out of them, that is an event: consumption of 10 widgets of lot number 1234.  The 10 widgets are not a resource in their own right.  The event triggers the decrement of the original resource of 100 widgets, which now has quantity of 90.

For serialized or uniquely identified resources, if the logical and technical unique identifiers are not changed by an event, such as moving a vehicle to another location without any changes to its accountable agent (and assuming location is not part of the logical identifier), the resource does not behave like a stock and is not decremented or incremented.

All economic information in an Economic Resource must be put there by an Economic Event.  Non-economic information (note, image, etc.) can be updated on the Economic Resource directly. Economic information is anything that might affect periodic accounting or financial reporting.  In this way, there is always an immutable detailed time-based record of information that affected such reporting.  And there are not excessive (non-economic) events for only non-economic updates.

Note that the economic information is therefore derived information, and could be re-calculated as needed by iterating through the Economic Events. But that could have performance issues, so isn't generally recommended.

## How resources relate to transfers

Two different kinds of "inventorying" of resources are affected by transfers.

* quantity of the resource where the agent has full (human realm) rights and responsibilities, irrespective of custody
* quantity of the resource where the agent has custody or physical possession, irrespective of rights, more of an operational focus

We define two current quantities on the economic resource for these two concepts, *accounting quantity* for the first and *onhand quantity* for the second.

For example, in vendor-managed inventory, the vendor owns the inventory so they see it in their accounting; but the store sees it in their onhand quantities. Or for inventory being shipped FOB source, the intended receiver owns the inventory and sees it in their accounting, but the goods are actually onhand in a truck.

## How resources relate to each other

If one resource contains other resources, the contained resources are part of, or make up the larger resource.

For example, a bank account might contain a number of "virtual accounts" that a group manages itself, outside the bank's knowledge.  Or, a makerspace network might share packages of resources for projects, where the package moves as a whole, but the resources inside are what the project used. Or, a bike shed resource might contain 10 bikes, which are identified and tracked by their serial numbers as individual resources.
