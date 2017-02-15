![Value Flows icon](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/VF-logo-heading.jpg)
# A vocabulary for distributed economic systems

## Table of Contents

## Introduction

Value Flows is a set of common vocabularies to describe flows of economic resources of all kinds within distributed economic ecosystems.

Purpose: to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups.

Or, with less buzzwords, "let's help a lot of alternative economic software projects that are solving different pieces of the same puzzle be able to work together".

One of the purposes of this vocab is to support resource flows connecting many websites. These flows may be oriented around Processes, Exchanges, or combinations of both. 

We want to support RDF based and non-RDF based use of the vocabulary, basically any way that people want to use software and data on the internet to help create economic networks.


### Concepts

![networks of networks picture](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/network-elio-cropped.jpg)

Networks of value flows are created when processes are linked together through flows of resources.

By process, we mean an activity that transforms inputs into outputs. The outputs might then become inputs to other processes, forming networks and chains. Those chains may be circular, where an output from one process becomes an input to another process that occurred previously in the same chain.

For example: A farming process takes compost, soil, seeds, water and human and mechanical work as inputs, and transforms them into grains, nuts, fruit, and vegetables. Those ingredients may go to kitchens that create dinners for people to eat. Some of those ingredients may be pared off in preparation, or spoil, or be left on plates. Those leftovers go into compost, which starts the process chain over from the beginning.

Or for a bad example: A CAFO (Confined Animal Feeding Operation) produces a lot of manure. They put manure into big lagoons, which drain into the water table, and come back up in people's drinking water, causing diseases, for which the people become inputs to a hospital.

One of the inputs to the CAFO process is antibiotics. The animals are filled with antibiotics because they get sick in the CAFO environment. And the antibiotics are also an output, mixed in with the manure.

The antibiotics then breed resistant bacteria, which end up in the people, and send them to the hospital, and then kill the people, because the common antibiotics no longer work. And the resistant bacteria remain in the hospital to kill other people.

(This needs some more development.)

We think of Economy in the original sense of [management of our household](https://en.wikipedia.org/wiki/Economy). 

### Principles 

These principles are about the model behind the vocabulary.

1. The model must enable collaboration between different people in different organizations using different software on different platforms using different human and programming languages.
2. The model must be able to form global networks which can track the flows of resources (values) forwards and backwards. Or maybe it would be better to say "in any direction", but forwards means in the direction of value creation, and backwards means in the direction of return or compensation. 
3. Corollary: the model must be able to support value equations that distribute income (rewards) according to peoples' contributions to the creation of the values that generated the income or rewards, regardless of where and when in the network configuration those contributions occurred.
4. The model must also be able to support coordinating work between different people in different organizations. People who are not concerned with rewards may still want to coordinate work.
5. The model must be able to support circular economies, value flows where resources come full cycle to be fed into the same set or other processes so that recycling, re-use, and other ways to encourage resources not becoming waste.
5. The model must be fractal. It must support global views of networks in aggregate as well as drilling down to lower and lower levels of detail. Those lower levels of detail, for example inside one organization, may require permissions.
6. The model must also work on the Recipe, Plan and Observation levels, where the objects on each level are linked appropriately to the other levels.
7. The model must support non-business-as-usual organizational forms and economic relationships in addition to traditional business organizations and relationships.
8. The model must support systems where all the contributors can get shares of the outcome to allocate as they wish. In other words, a group can choose to introduce various monetary currencies into their flows but can also do all the coordination and accounting without introducing such artifacts.


### Status of the vocabulary

The consolidated parts of the vocabulary are reflected below.  Those include: 
* Core Agent model
* Core Resource model
* Core Input-Process-Output model

Yet to come: 
* Agent relationships to the rest of the model
* Recipes or Templates for processes and transfers
* Planning - intents, plans, commitments, availability
* Transfers, exchanges and reciprocity

## Specification

### UML

![VF uml picture](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/core-rel.png)

### RDF

![VF vowl picture](https://rawgit.com/valueflows/valueflows/master/release-doc-in-process/release-vowl.png)

### Classes

##### vf:Agent

<table>
<tr><td>rdf:type</td><td>owl:Class</td></tr>
<tr><td>rdfs:label</td><td>Agent</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Agent is an entity that has agency in the social or economic realm.  This could be a person, group, organization, network, ongoing project team, etc.</td></tr>
<tr><td>owl:equivalentClass</td><td>foaf:Agent</td></tr>
<tr><td>Properties</td><td>vf:name, vf:url, vf:image, vf:note, vf:primaryLocation</td></tr>
</table>

(Question: can/should this also have properties for its relationships (where it is an object or subject)?)

A vf:Agent is empowered to control or affect the flow of economic resources (including his or her own labor) by engaging in economic events. vf:Agents are also empowered to make commitments or promises to affect resource flows in the future. Or putting it another way, a vf:Agent can participate in economic events.

##### vf:Group

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Group</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Group is any kind of association of more than one person, which can be loosely or formally organized, but has economic agency as a group beyond any person.</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Agent</td></tr>
<tr><td>owl:equivalentClass</td><td>foaf:Group</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

##### vf:IPOEvent

(name under discussion; also we need more discussion on economic events that don't have a process.....)

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>IPOEvent</td></tr>
<tr><td>rdfs:comment</td><td>A vf:IOPEvent is an inflow or outflow of an economic resource in relation to a process. This could reflect a change in the quantity of a vf:Resource. It is also defined by its behavior in relation to the vf:Resource and a vf:Process (consume, use, create, etc.)</td></tr>
<tr><td>Properties</td><td>vf:action, vf:resource, vf:eventQuantity, vf:eventStart, vf:note</td></tr>
</table>

*How resources relate to events*

An event can trigger incrementing or decrementing a resource. This is clear in the case of consuming a component or creating a product.  Sometimes it does neither, as in the case of citing a document. We consider a citation to be an inflow of a resource, but it does not decrement the resource. In fact, more citations make the resource more valuable. But the cited resource presumably added value to the output of the process (for example, the design of a 3D printed product, without which it cannot be made).

In any case, the quantity of a resource related to the event is not a resource itself, it is just a property of the event.  For example a resource could be 100 widgets on a pallet, lot number 1234.  If 10 of those widgets are consumed in a process that makes something out of them, that is an event: consumption of 10 widgets of lot number 1234.  The event triggers the decrement of the original resource of 100 widgets, which now has quantity of 90.

(More work needs to be done in the quantity area for durations....)

##### vf:MaterialResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>MaterialResource</td></tr>
<tr><td>rdfs:comment</td><td>A resource whose economic utility comes from its existence in the real world.</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Resource</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

Material resources may imply some level of scarcity.  Material resources can be consumed, after which they are gone.  Or they can be used, during which they are unavailable to others, and after which they may have experienced some degradation.

##### vf:Person

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Person</td></tr>
<tr><td>rdfs:comment</td><td>A natural person.</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Agent</td></tr>
<tr><td>owl:equivalentClass</td><td>foaf:Person, schema:Person</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

##### vf:Process

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Process</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Process is an activity that changes inputs into outputs.  It could transform or transport vf:Resource(s).</td></tr>
<tr><td>Properties</td><td>vf:name, vf:plannedStart, vf:plannedDuration, vf:io, vf:note</td></tr>
</table>

##### vf:Relationship

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Relationship</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Relationship denotes a relationship between 2 Agents of any type.
The relationship can be in the context of another Agent.
For example, Jane is a mentor of John in the context of the group Enspiral.</td></tr>
<tr><td>Properties</td><td>vf:subject, vf:relationship, vf:object, vf:context</td></tr>
</table>

##### vf:Resource

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

##### vf:ResourceModel

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>ResourceModel</td></tr>
<tr><td>rdfs:comment</td><td>A vf:ResourceModel is a template and/or definition of a type of resource.</td></tr>
<tr><td>owl:equivalentClass</td><td>gr:ProductOrServiceModel</td></tr>
<tr><td>Properties</td><td>vf:name, vf:category, vf:unit, vf:isSubstitutable?, vf:image, vf:note</td></tr>
</table>

(We need to develop this some more, and give some examples.  Also a question on the gr equivalentClass, ours is more broad.)

##### vf:ServiceResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>ServiceResource</td></tr>
<tr><td>rdfs:comment</td><td>A vf:ServiceResource is a resource that provides a result that cannot be separated from the recipient.</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Resource</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

Examples of vf:ServiceResources are a haircut or dental service.

##### vf:Transformation

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Transformation</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Transformation is an activity that transforms inputs into outputs.  It causes a change in the composition of the vf:Resource(s).</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Process</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

##### vf:Transportation

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Transportation</td></tr>
<tr><td>rdfs:comment</td><td>A vf:Transportation is a change in location of vf:Resource(s).</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Process</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

##### vf:UsageResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>UsageResource</td></tr>
<tr><td>rdfs:comment</td><td>A vf:UsageResource is the usage of a vf:MaterialResource.</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Resource</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>

A vf:UsageResource will have a vf:underlyingResource of a vf:MaterialResource.  (I think.)  For example, a material resource could be a piece of equipment, with quantity of 1 each.  The usage resource defines the usage of that piece of equipment, with quantity of 3 hours.  Or a material resource could be an apartment, with a usage resource of apartment rental for 1 year.

(This probably needs more discussion, have we completely agreed on vf:underlyingResource?)

##### vf:WorkResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>WorkResource</td></tr>
<tr><td>rdfs:comment</td><td>A vf:WorkResource is a quantity of work done by a vf:Agent.</td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Resource</td></tr>
<tr><td>Properties</td><td></td></tr>
</table>


### Properties

(Note the rdf:types need review and possibly correction.)

##### vf:action

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>action</td></tr>
<tr><td>rdfs:comment</td><td>A vf:action relates a process input or output (or other vf:IPOEVent) to a verb.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:IPOEvent</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### Verbs associated with vf:action

###### Input
* vf:use - for example a tool used in process, after the process, the tool still exists
* vf:consume - for example an ingredient composed into the output, after the process the ingredient is gone
* vf:cite - for example a design file, neither used nor consumed, the file remains available at all times
* vf:work - labor power towards a process
* vf:accept - in processes like repair or maintentance, same resource will appear in output with *vf:improve* verb
* vf:load -  transported resource enters the process

###### Output

* vf:create - new resource created in that process
* vf:improve - in processes like repair or maintentance, same resource will appear in input with *vf:accept* verb
* vf:unload -  transported resource leaves the process

##### vf:category

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>category</td></tr>
<tr><td>rdfs:comment</td><td>A type or categorization that describes a resource.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:ResourceModel, vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>an IRI??</td></tr>
</table>

Resource categories are a Taxonomy. That means they can be defined very broadly and generally and maybe vaguely, or they can be defined very narrowly,
but fit into broader categories. 

So, for example, you may want an apple. Or you may want a green apple. Or you may want a Granny Smith apple.
Or you may want a Granny Smith apple from your neighboring farm.

People can use the multitude of existing taxonomies for resources, or can also create their own as needed.

(We need to discuss faceted categorization too.)

##### vf:context

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>context</td></tr>
<tr><td>rdfs:comment</td><td>The larger context in which something occurs.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Relationship, </td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:Agent</td></tr>
</table>

This allows grouping of economic relationships and economic activity (future releases) into a context for coordination and accounting purposes.

##### vf:currentLocation

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>currentLocation</td></tr>
<tr><td>rdfs:comment</td><td>The current place an item is, so that it can be found.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Resource (and subclasses)</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>IRI?</td></tr>
</table>

Location is a complex ontology of its own, from a mappable point of interest to a warehouse:room:aisle:row:tier. We will not repeat existing location ontologies.

We simply require that any location referenced here has an IRI so it can be identified directly. 

##### vf:eventQuantity

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>eventQuantity</td></tr>
<tr><td>rdfs:comment</td><td>The quantity and unit of the event. This is the quantity that could be used to increment or decrement a resource, depending on the type of resource and type of event.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:IPOEvent</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>qudt:QuantityValue</td></tr>
</table>

(Need discussion: is this the same as duration, in case of work for example?)

##### vf:eventStart

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>eventStart</td></tr>
<tr><td>rdfs:comment</td><td>The starting date and optionally time of the event.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:IPOEvent</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### vf:image

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>image</td></tr>
<tr><td>rdfs:comment</td><td>An image associated with an object, to help clarify it.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Agent, vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>???</td></tr>
</table>

##### vf:isSubstitutable

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>isSubstitutable</td></tr>
<tr><td>rdfs:comment</td><td>Defines if any resources of that type can be freely substituted for any other resource of that type when used, consumed, traded, etc. </td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:ResourceModel, vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:ResourceModel, vf:Resource</td></tr>
</table>

For example, "B9R-1-red DLP resin photopolymer" is probably a substitutable resource type.  While each resource for a resource type called "English-Spanish translation" is probably not substitutable because each will be a different document.

##### vf:io

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>io</td></tr>
<tr><td>rdfs:comment</td><td>Relates a process to its inputs and outputs.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Process</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:IPOEvent</td></tr>
</table>

(I can't remember why we put vf:input and vf:output together into one.... it would be nice to see the difference in the data, especially since we don't have EventType.... ?)

##### vf:lotIdentifier

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>lotIdentifier</td></tr>
<tr><td>rdfs:comment</td><td>Often called "lot number", used for trackable batched resources.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

Example: a lot of asparagus that will be distributed in smaller quantities but may need to be tracked to its source in case of an e-coli outbreak.

See also vf:Resource.

##### vf:model

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>model</td></tr>
<tr><td>rdfs:comment</td><td>The detailed template for or definition of an economic resource.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:ResourceModel, other resource models??</td></tr>
</table>

This can apply to the traditional model for a product.  It can also apply to non-material resources, like a type of work.

##### vf:name

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>name</td></tr>
<tr><td>rdfs:comment</td><td>An informal or formal textual identifier for an object. Does not imply uniqueness.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>(anything?)</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>skos:prefLabel</td></tr>
</table> 

##### vf:note

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>note</td></tr>
<tr><td>rdfs:comment</td><td>A freeform note or description of an object or item.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>(anything)</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>skos:note</td></tr>
</table>

##### vf:object

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>object</td></tr>
<tr><td>rdfs:comment</td><td>The object of the relationship.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Relationship</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:Agent</td></tr>
</table>

For example, in "Michael is a member of Enspiral", Enspiral is the object.

##### vf:parent

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>parent</td></tr>
<tr><td>rdfs:comment</td><td>A more general type of resource.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:ResourceModel</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:ResourceModel</td></tr>
</table>

For example, Herb is the parent resource type of Anise Hyssop, Goldenrod, Nettles, Red Clover, etc.  Besides its usefulness in understanding taxonomies of resource types, this can be useful when one can define a general recipe that will work for many more specific types of resources.

##### vf:primaryLocation

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>primaryLocation</td></tr>
<tr><td>rdfs:comment</td><td>The main place an agent is, often an address where activities occur and mail can be sent.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Agent (and subclasses)</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>?</td></tr>
</table>

Location is a complex ontology of its own, and we will not repeat existing location ontologies.

In the case of primaryLocation, this is usually a mappable geographic location.  It also could be a website address, as in the case of agents who have no physical location.

##### vf:quantity

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>quantity</td></tr>
<tr><td>rdfs:comment</td><td>The current quantity and unit of the resource.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>qudt:QuantityValue</td></tr>
</table>

NOTE: a resource can have 0 quantity, one can use it for historical resources which some process consumed as well as for planned resources which a planned process will create.

##### vf:relationship

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>relationship</td></tr>
<tr><td>rdfs:comment</td><td>A verb that describes a generic defined relationship that can be had between 2 Agents (or subclasses of).
Although it usually is, the relationship of a particular type does not have to be agreed to from both sides, for example "follow".
</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Relationship</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

A relationship can be direct, like "steward" or "like", or more like a role.
Role types of relationships are often used for a person's role in an organization or group,
for example "grower" or "harvester" for a food network.

There are a number of useful Properties in existing vocabularies that can be used.
Or people can create their own as needed.

##### vf:resource

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>resource</td></tr>
<tr><td>rdfs:comment</td><td>Relates process input/output to a resource.</td></tr>
<tr><td>rdfs:domain (property of)</td>vf:IPOEvent<td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:Resource (or its subclasses)</td></tr>
</table>

##### vf:serialIdentifier 

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>serialIdentifier</td></tr>
<tr><td>rdfs:comment</td><td>Often called "serial number", used when each item must have a trackable identifier (like a computer).</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

See also vf:Resource.

##### vf:subject

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>subject</td></tr>
<tr><td>rdfs:comment</td><td>The subject of a relationship.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Relationship</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:Agent</td></tr>
</table>

For example, in "Michael is a member of Enspiral", Michael is the subject.

##### vf:underlyingResource

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>underlyingResource</td></tr>
<tr><td>rdfs:comment</td><td>A more concrete resource upon which a resource is based.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:Resource</td></tr>
</table>

One example: a resource which defines the rental of an apartment has the apartment itself as its underlying resource.  Another example: a virtual account resource can have an actual bank account as its underlying resource. 

##### vf:url

<table>
<tr><td>rdf:type</td><td>owl:DatatypeProperty</td></tr>
<tr><td>rdfs:label</td><td>url</td></tr>
<tr><td>rdfs:comment</td><td>An internet address (we may need to be more exact?  IRI?)</td></tr>
<tr><td>rdfs:domain (property of)</td><td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td>?</td></tr>
</table> 


## Examples




## Citations (maybe and bibliography?)

all the papers Bob found for definitions.... also the transportation paper...
