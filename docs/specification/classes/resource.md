### vf:Resource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Resource</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Resource is an economic resource which is useful to people or the ecosystem.</td></tr>
<tr><td>Properties</td><td>vf:name, vf:lotIdentity, vf:serialIdentity, vf:quantity, vf:category, vf:model, vf:contains, vf:underlyingResource, vf:note</td></tr>
</table>

Traditionally, an economic resource is defined by its utility, but also by its scarcity and its control by an economic agent. That definition is too limited. Its limitations include:
* Intellectual creations like designs are not scarce, yet they clearly are economic resources. They only become scarce when legally restricted by patents and copyrights. 
* Air, water, and other products of nature are clearly economic resources, but they are not under the control of an agent unless they are legally restricted by ownership. However, by means of the invisible foot that accompanies the invisible hand, they are regularly degraded by enterprises, and not accounted for, classified as “externalities”.

We want to think of ourselves as participants in ecosystems, not competing enterprises. As such, we need to account for our effects on all aspects of our ecosystem.

And we want knowledge to be freely available.

Also, we prefer to think of use value, but economic resources also often have exchange value.

*The difference between a resource and its category or model*

An economic resource is observable.  Its category or model defines what type of thing the vf:Resource is.

So, for example, most things offered for sale on an e-commerce site are models, which can be searched using categories.
The one in a box delivered to your door is a resource.

Or the description of the book entitled "The Power of Babel: A Natural History of Language", ISBN ISBN-13: 978-0060520854,
is a model. Your library may have two copies that you can check out. Those are resources.

*Identification and Behaviors of Resources*

Here are three different types of resources from the viewpoint of identification:
a) serialized resources, where each individual instance has a unique identifier,
b) lot-controlled resources, where each lot or batch has a unique identifier, but the lot or batch may contain many individual instances, and
c) count or volume or stock resources, where individual instances are indistinguishable, or in the case of fluids, only exist on a molecular level.

Serialized resources would fit the direct identification pattern. Lots can be split up, so the identification of a subset of a lot would require some other properties, such as location. Stock resources can only be described indirectly, by means of some combination of properties, such as model and location. (Location is a complex ontology of its own: for example, in warehousing, a location is often composed of warehouse:room:aisle:row:tier.)

Moreover, identification of resources will depend on context and purpose. We want to allow each context to define resources that they have relationships with, according to the combination of properties that works best for them, which might include which agent has which relationship with a resource.

And then in the "independent view", for larger-scale analysis of resource flows, or for example for lot tracking for public health issues like mad cow disease, different combinations of properties might be needed.

*Inventory*

Resources can be inventoried, not inventoried but could be, or it doesn't make sense to think about inventory.
* Inventoried: You want to keep track of it, changes in quantity, and how many you have right now.
* Not inventoried: You could keep track of it, but it isn't worth it.  This usually happens for quantities of small or hard to measure items that are obtained in bulk, like solder or bolts.  In this case, you have to look at the actual resource to see if you need more, the data won't tell you.
* Not applicable: This is for types of work (unless scheduled), and other resources where it just doesn't make sense.

*Unique identifiers fo resources*

This can vary.  And people can be allowed within some boundaries of agreement to specify which combination of other properties would constitute identifiers.

Here are some examples from manufacturing situations:

* Unique identifier = an assigned serialized identifier, which is unique across manufacturers, due to agreements in an industry.  Examples are computers, vehicles, and other equipment.
* Unique identifier = resource model + lot identifier + location + owner: so in other words, the owner of the rights was part of the unique identifier of the resource, and if the resource got transferred from one owner to another, the first owner's resources would be decremented, and the second owner's resources would be incremented. 

Note in the last case, a transfer of rights means a different resource. This is common with resources that are not serialized, where one logical resource has a quantity greater than 1, and the individual instances are substitutable. (Think nuts and bolts, grain, strawberries, bottles of beer in cases, etc.)