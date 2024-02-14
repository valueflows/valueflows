## UML diagram

This diagram includes all elements necessary for a complete REA-based core economic vocabulary, so includes elements that we re-use from other vocabularies.  All namespaces are documented by the prefix to each element.

A textual explanation of everything on this diagram is on the [Diagram Explanations page](model-text.md).

*To make the diagram bigger, you can right click and select 'View Image' or 'Open Image in New Tab' or a similar command in your browser.*

![UML diagram of the whole VF model](../assets/ValueFlowsUML.png)

## Diagram conventions

Each arrow represents an additional property in the class at the beginning of the arrow.  If there is an * at the arrowhead end, then many instances are supported (like a collection in object oriented modeling).  If there is no *, then it should be assumed that one instance is supported (like a foreign key in a relational model).

### Relationships not shown

In some cases, there were just too many lines!  The subordinate classes in the gray section at the bottom are not connected with arrows, so the viewer should assume that:

* every property ending in "Quantity" is a `om2:Measure` (does not live on its own) ;
* every property ending in "Duration" is a `time:Duration` (does not live on its own) ;
* every property ending in "Location" is a `geo:SpatialThing`;
* `vf:inScopeOf` references a `vf:Agent`.

### Inverse terms

To support cleaner representation in JSON / JSON-LD / RDF, as well as object oriented collections, in addition to the initial relational representation, we include some inverse terms, using `owl:inverseOf` in the source turtle file.  If there is a name on each end of the line, and an end on both sides of the arrow, there is an inverse defined.

For example, here a Commitment `isInput` or `isOutput` of a Process; and a Process `hasInput`(zero or more) and/or `hasOutput`(zero or more).  Both directions are specified as part of the formal vocabulary, so can be used in the direction preferred by the application.

![inverse example model with Process, Commitment, relationships pointing both ways](../assets/inverse.png)

The first several examples on [the Examples-Production page](../examples/ex-production.md) show both options as yaml.

### Many-to-many relationships

Instead of the typical relational resolution of a many-to-many relationship of including an "associative" class or table between them, we are specifying a direct one-to-many relationship, which more cleanly supports JSON / JSON-LD / RDF / OO structures.  To get to the other less-used "many" without the "associative" entity, a query would be needed.  The suggested query names are included in [Query Naming](../inverses).

Below are the places in Valueflows where there is a logical many-to-many.

#### published, proposedTo

Although not included in the formal RDF-based spec, the suggested intermediate "associative" class for the two cases where there are no intermediate properties is shown below with dotted lines, for projects that want to implement a relational database under the covers, for example.

![model with Proposal and Intent adn Agent m:m instantiated relationships](../assets/m-m.png)

#### fulfills, satisfies, settles

These cases have possible properties in the "associative" class. For example, between Commitment and EconomicEvent, a Commitment for 40 hours of work might be fulfilled by 5 EconomicEvents of 8 hours.  Or an EconomicEvent might pay for a statement or invoice that includes multiple Commitments for deliveries.  The model we have settled on supports the former, but not the latter.  The latter is one of a few cases that we believe will be a small minority of edge cases where the quantities in the "associative" entity might be appreciated.  For that case, an application could possibly divide the payment into multiple EconomicEvents and connect them with the trackingIdentifier.  Or it could extend the vocabulary to include the quantity fulfilled/satisfied/settled, and over time the VF community can re-consider the best trade-off for handling this situation.

We believe that it is more important to simplify the model and the concepts for the majority of use cases, than to have complete support of all use cases.

![model with Event Commitment Intent Claim m:m instantiated relationships](../assets/fulfill-satisfy-rel.png)
