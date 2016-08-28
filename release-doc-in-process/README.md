# ValueFlows Vocabulary

![Value Flows icon](https://rawgit.com/valueflows/valueflows/master/assets/icon-0.svg)

## Table of Contents

## Introduction

[need to rewrite the intro; and take out a more detailed explanation of the model]

Value Flows is a set of common vocabularies to describe flows of economic resources of all kinds within distributed economic ecosystems.

Purpose: to enable internetworking among many different software projects for resource planning and accounting within fractal networks of people and groups.

Or, if that is too many buzzwords, "let's help a lot of alternative economic software projects that are solving different pieces of the same puzzle be able to work together".

One of the purposes of this vocab is to support resource flows connecting many websites. These flows may be oriented around Processes, Exchanges, or combinations of both. 

We want to support RDF based and non-RDF based use of the vocabulary, basically any way that people want to use software and data on the internet to interoperate.

### Overview of Processes

By Process, we mean an activity that transforms inputs into outputs. The outputs might then become inputs to other processes, forming networks and chains. Those chains may be circular, where an output from one process becomes an input to another process that occurred previously in the same chain.

For example: a farming process takes compost, soil, seeds, water and human and mechanical work as inputs, and transforms them into grains, nuts, fruit, and vegetables. Those ingredients may go to kitchens that create dinners for people to eat. Some of those ingredients may be pared off in preparation, or spoil, or be left on plates. Those leftovers go into compost, which starts the process chain over from the beginning.

Or for a bad example: a CAFO (Confined Animal Feeding Operation) produces a lot of manure. They put manure into big lagoons, which drain into the water table, and come back up in people's drinking water, causing diseases, for which the people become inputs to a hospital.

One of the inputs to the CAFO process is antibiotics. The animals are filled with antibiotics because they get sick in the CAFO environment. And the antibiotics are also an output, mixed in with the manure.

The antibiotics then breed resistant bacteria, which end up in the people, and send them to the hospital, and then kill the people, because the common antibiotics no longer work. And the resistant bacteria remain in the hospital to kill other people.


### Resource

We think of Economy in the original sense of [management of our household](https://en.wikipedia.org/wiki/Economy).

### What's the difference?

An Economic Resource is anything that valuable to anybody. We prefer to think of use value, so anything that is useful to anybody, but Economic Resources also often have exchange value.

An Economic Resource may also be an input to or an output from a process or transferred in an exchange.
A ResourceType defines what type of thing the Resource is.

So, for example, most things offered for sale on an e-commerce site are ResourceTypes.
The one in a box delivered to your door is a Resource.

Or the description of the book entitled "The Power of Babel: A Natural History of Language", ISBN ISBN-13: 978-0060520854,
is a ResourceType. Your library may have two copies that you can check out. Those are Resources.

Or, if you can eat it or drive it or give it to someone, it's a Resource.



### ResourceTypes are a Taxonomy

That means they can be defined very broadly and generally and maybe vaguely, or they can be defined very narrowly,
but fit into broader categories. Like the Tree of Life.

![tree of life](https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Phylogenetic_tree.svg/450px-Phylogenetic_tree.svg.png)

So, for example, you may want an apple. Or you may want a green apple. Or you may want a Granny Smith apple.
Or you may want a Granny Smith apple from your neighboring farm.

### Identification and Behaviors of Resources

#### Inventory

Resources can be inventoried, not inventoried but could be, or it doesn't make sense to think about inventory.
* Inventoried: You want to keep track of it, changes in quantity, and how many you have right now.
* Not inventoried: You could keep track of it (it is a material item), but it isn't worth it.  This usually happens for quantities of small or hard to measure items that are obtained in bulk, like solder or bolts.  In this case, you have to look at the actual resource to see if you need more, the system won't tell you.
* Not applicable: This is for types of work (unless scheduled), services, and other resources that cannot be observed.

#### Tracking

Tracking IDs are usually single properties, like lot or batch ID for food and drugs, animal ID for livestock, and serial number for serialized products. Lots can be split up, but serial numbers uniquely identify a particular resource wherever it may be and whoever may have rights to it.

#### Unique identifiers fo resources

This can vary.  And people can be allowed within some boundaries of agreement to specify which combination of other properties would constitute identifiers.

Here are some examples from manufacturing situations:

* Unique identifier = an assigned serialized identifier, which is unique across manufacturers, due to agreements in an industry.  Examples are computers, vehicles, and other equipment.
* Unique identifier = resourceType + lotID + location + owner: so in other words, the owner of the rights was part of the unique identifier of the resource, and if the resource got transferred from one owner to another, the first owner's resources would be decremented, and the second owner's resources would be incremented. 

Note in the last case, a transfer of rights means a different resource. This is common with resources that are not serialized, where one logical resource has a quantity greater than 1, and the individual instances are substitutable. (Think nuts and bolts, grain, strawberries, bottles of beer in cases, etc.)

#### How resources relate to events

In the REA ontology, an Economic Event is a change in the quantity or in the rights to an Economic Resource performed by Economic Agents. An event is also defined by its behavior in relation to the resource and a process or transfer (consume, use, produce, give, etc.).

Some people use the terms "stock" and "stock flow".  A stock is a resource; a stock flow is an event. (The term stock is too limiting, since a resource could be digital, like a document or media file.)  

An event can trigger incrementing or decrementing a resource.  Sometimes it does neither, as in the case of using a piece of equipment.  But in any case, the quantity of a resource related to the event is not a resource itself, it is just a property of the event.  For example a resource could be 100 widgets on a pallet, lot number 1234.  If 10 of those widgets are consumed in a process that makes something out of them, that is an event: consumption of 10 widgets of lot number 1234.  The 10 widgets are not a resource in their own right.  The event triggers the decrement of the original resource of 100 widgets, which now has quantity of 90.


### Principles ([long form](https://github.com/valueflows/valueflows/wiki/Principles-for-this-vocabulary))

- the vocabulary must support coordinating work between different people in different organizations using different software on different platforms using different human and programming languages.
- the vocabulary must track the flows of resources (value) forwards and backwards.
- the vocabulary must distribute income (rewards) according to peoples' contributions, regardless of where and when in the network those contributions occurred.
- the vocabulary must be fractal: it must support high-level views of networks as well zooming in to lower and lower levels of detail.
- the vocabulary must work at the recipe, planning, and accounting levels.
- the vocabulary must work for alternative and traditional organizing shapes and economic relationships.


### Status of the vocabulary

The consolidated parts of the vocabulary are reflected below.  Those include: 
* core Agent model
* core Resource model
* core Input-Process-Output model for resource flow

Yet to come: 
* Relationships in the Agent model
* Agents in the I-P-O model, Transfers and Exchanges
* Recipes or Templates for processes and transfers
* Planning - intents, plans, commitments, availability

# Specification

## Concepts

(we need some new pictures here!)

## Diagrams

### UML



### RDF



### Classes

##### vf:Agent

<table>
<tr><td>rdf:type</td><td>owl:Class</td></tr>
<tr><td>rdfs:label</td><td>Agent
<tr><td>rdfs:comment</td><td>An Agent is an entity that has agency in the social or economic realm.  This could be a person, organization, group, network, etc.</td></tr>
<tr><td>rdfs:domain (properties)</td><td>vf:name, vf:url, vf:image, vf:note</td></tr>
<tr><td>owl:equivalentClass</td><td>foaf:Agent</td></tr>
</table>

##### vf:Person

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Person</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties) </td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Agent</td></tr>
<tr><td>owl:equivalentClass</td><td>foaf:Person, schema:Person</td></tr>
</table>

##### vf:Group

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Group</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
<tr><td>rdfs:subClassOf</td><td>vf:Agent</td></tr>
<tr><td>owl:equivalentClass</td><td>foaf:Group</td></tr>
</table>

##### vf:Relationship

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Relationship</td></tr>
<tr><td>rdfs:comment</td><td>A Relationship in this vocabulary denotes a relationship between 2 Agents of any type.
The relationship can be in the context of an Agent that would not be a Person.
For example, Jane is a mentor of John in the context of the group Enspiral.</td></tr>
<tr><td>rdfs:domain (properties)</td><td>vf:subject, vf:relationship, vf:object, vf:context</td></tr>
</table>

##### vf:Process

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Process</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:Transformation

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Transformation</td></tr>
<tr><td>rdfs:comment</td><td>a change in the composition of the resource(s)</td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:Transportation

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Transportation</td></tr>
<tr><td>rdfs:comment</td><td>a change in location of the resource(s)</td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:IPOEvent

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>IPOEvent</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:Resource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Resource</td></tr>
<tr><td>rdfs:comment</td><td>An economic resource, which is useful to people or the ecosystem.</td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:ResourceModel

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>ResourceModel</td></tr>
<tr><td>rdfs:comment</td><td>A resource type defines the kind of resource, often organized in a taxonomy of general to specific definitions.  The resource type is not concrete.......</td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:MaterialResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>MaterialResource</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:WorkResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>WorkResource</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:UsageResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>UsageResource</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:ServiceResource

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>ServiceResource</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>

##### vf:Location

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>Location</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (properties)</td><td></td></tr>
</table>


### Properties

##### vf:name

<table>
<tr><td>rdf:type</td><td>skos:prefLabel</td></tr>
<tr><td>rdfs:label</td><td>name</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (property of)</td><td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table> 

##### vf:url

<table>
<tr><td>rdf:type</td><td>?</td></tr>
<tr><td>rdfs:label</td><td>url</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (property of)</td><td></td></tr>
<tr><td>rdfs:range (allowed values) |</td></tr>
</table> 

##### vf:image

<table>
<tr><td>rdf:type</td><td>?</td></tr>
<tr><td>rdfs:label</td><td>image</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Agent, vf:Resource</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### vf:note

<table>
<tr><td>rdf:type</td><td>skos:note</td></tr>
<tr><td>rdfs:label</td><td>note</td></tr>
<tr><td>rdfs:comment</td><td>A freeform note or description of an object or item.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>(anything)</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### vf:subject

<table>
<tr><td>rdf:type</td><td>vf:Agent</td></tr>
<tr><td>rdfs:label</td><td>subject</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (property of)</td><td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### vf:object

<table>
<tr><td>rdf:type</td><td>vf:Agent</td></tr>
<tr><td>rdfs:label</td><td>note</td></tr>
<tr><td>rdfs:comment</td><td></td></tr>
<tr><td>rdfs:domain (property of)</td><td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### vf:relationship

<table>
<tr><td>rdf:type</td><td>rdf:Property</td></tr>
<tr><td>rdfs:label</td><td>relationship</td></tr>
<tr><td>rdfs:comment</td><td>This is a verb that describes a generic defined relationship that can be had between 2 Agents (or subclasses of).
Although it usually is, the relationship of a particular type does not have to be agreed to from both sides, for example "follow".
A relationship type can be a direct relationship, like "steward" or "like", or more like a role.
Role types of relationships are often used for a person's role in an organization or group,
for example "grower" or "harvester" for a food network.

There are a number of useful Properties in existing vocabularies that can be used.
Or people can create their own as needed.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:Relationship</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### vf:resource

<table>
<tr><td>rdf:type</td><td></td></tr>
<tr><td>rdfs:label</td><td>resource</td></tr>
<tr><td>rdfs:comment</td><td>relates input/output to a resource</td></tr>
<tr><td>rdfs:domain (property of)</td>vf:IPOEvent<td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:Resource or any of its subclasses</td></tr>
</table>

##### vf:action

<table>
<tr><td>rdf:type</td><td></td></tr>
<tr><td>rdfs:label</td><td>resource</td></tr>
<tr><td>rdfs:comment</td><td>relates input/output to a verb</td></tr>
<tr><td>rdfs:domain (property of)</td>vf:IPOEvent<td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### Verbs

###### Input
* use - for example a tool used in process, after the process, the tool still exists
* consume - for example an ingredient composed into the output, after the process the ingredient is gone
* cite - for example a design file, neither used nor consumed, the file remains available at all times
* work - labor power towards a process
* accept - in processes like repair or maintentance, same resource will appear in [vf:Output](https://github.com/valueflows/process/blob/master/Output.md) with *improve* verb
* load - specific for [vf:Transportation](https://github.com/valueflows/process/blob/master/Transportation.md), transported resource enters the process

###### Output

* create - new resource created in that process
* improve - in processes like repair or maintentance, same resource will appear in [vf:Input](https://github.com/valueflows/process/blob/master/Input.md) with *accept* verb
* unload - specific for [vf:Transportation](https://github.com/valueflows/process/blob/master/Transportation.md), transported resource leaves the process

##### vf:io

<table>
<tr><td>rdf:type</td><td></td></tr>
<tr><td>rdfs:label</td><td>io</td></tr>
<tr><td>rdfs:comment</td><td>relates process to a input/output</td></tr>
<tr><td>rdfs:domain (property of)</td>vf:Process<td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:IPOEvent</td></tr>
</table>

##### vf:parent

<table>
<tr><td>rdf:type</td><td></td></tr>
<tr><td>rdfs:label</td><td>parent</td></tr>
<tr><td>rdfs:comment</td><td>A more general type of resource.  For example, Herb is the parent resource type of Anise Hyssop, Goldenrod, Nettles, Red Clover, etc.  Besides its usefulness in understanding taxonomies of resource types, this can be useful when one can define a general recipe that will work for many more specific types of resources.</td></tr>
<tr><td>rdfs:domain (property of)</td>vf:ResourceModel, vf:Resource?<td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:ResourceModel,vf:Resource?</td></tr>
</table>

##### vf:isSubstitutable

<table>
<tr><td>rdf:type</td><td></td></tr>
<tr><td>rdfs:label</td><td>isSubstitutable</td></tr>
<tr><td>rdfs:comment</td><td>For a resource type, defines if any resources of that type can be freely substituted for any other resource of that type when used, consumed, traded, etc. For example, "B9R-1-red DLP resin photopolymer" is probably a substitutable resource type.  While each resource for a resource type called "English-Spanish translation" is probably not substitutable because each will be a different document.</td></tr>
<tr><td>rdfs:domain (property of)</td>vf:ResourceModel, vf:Resource<td></td></tr>
<tr><td>rdfs:range (allowed values)</td><td>vf:ResourceModel, vf:Resource</td></tr>
</table>

##### vf:category



##### vf:model



##### vf:underlyingResource

A more concrete resource which a resource is based upon.  For example, a resource which defines the rental of an apartment has the apartment itself as its underlying resource.



##### vf:quantity

The quantity and unit of the resource.

*NOTE: resource can have 0 quantity, one can use it for historical resources which some process consumed as well as for planned resources which a planned process will create [Issue#24](https://github.com/valueflows/resource/issues/24)*


##### vf:serialIdentifier 


##### vf:lotIdentifier


For a resource, this can be a serial number for serialized resources (like a computer), or a lot number for batched resources (like a lot of asparagus that will be distributed in smaller quantities but may need to be tracked to its source in case of an e-coli outbreak).  Or it can just be another useful identifier.

