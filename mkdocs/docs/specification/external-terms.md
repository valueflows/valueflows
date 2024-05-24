# Use of Other Vocabularies

## Units of Measure

Using agreed upon standard units will facilitate network interoperability into the future.  Valueflows uses the units of measure from [the OM2 vocabulary](https://github.com/HajoRijgersberg/OM).  Here is the [complete rdf reference for OM2](https://raw.githubusercontent.com/HajoRijgersberg/OM/master/om-2.0.rdf), which undergoes occasional update by the maintainers.  Here is the [same reference with a user interface](http://www.ontology-of-units-of-measure.org/resource/om-2/Unit).

The OM2 vocabulary contains thousands of units of measure.  It includes all the commonly used units of measure for business use, as well as scientific units, both common and obscure.

### Quantities and units

OM2 also has a quantity called Measure, including both the numeric amount and the unit of measure.

[http://www.ontology-of-units-of-measure.org/resource/om-2/](http://www.ontology-of-units-of-measure.org/resource/om-2/)

* [`om:Measure`](http://www.ontology-of-units-of-measure.org/resource/om-2/Measure)
    * [`om:hasUnit`](http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit)
        * [`om:Unit`](http://www.ontology-of-units-of-measure.org/resource/om-2/Unit)
    * [`om:hasNumericalValue`](http://www.ontology-of-units-of-measure.org/resource/om-2/hasNumericalValue)

Valueflows has created this same structure within our namespace, and added some additional properties for flexible labeling for business users.  VF's Unit also has a OM unit identifier, referencing back to OM for cross-network unique identification of the units.

### Application units of measure

We expect that user applications will choose a much smaller subset of these standard units, and probably maintain them separately.

To facilitate this, a [csv file of units](https://lab.allmende.io/valueflows/valueflows/-/blob/master/units/units-en-useful.csv) has been extracted from OM2 to make it easier for user groups to choose their set of standard units.  Since OM2 is still in active development, this file will gradually become out of date, but we expect added units to be newer scientific units not usually used in economic applications.

This file includes only the English version for now, although some additional languages can be found in OM2.  The currencies have been removed, since we recommend these be set up as Resource Specifications instead, semantically, and specifically given the proliferation of alternate currencies.  We have added classifications (partially complete) to facilitate search for needed units. The columns in this file are, left to right:

* OM2 owl Class.  When a Unit belonged to multiple classes, those were consolidated to one row, under "Unit".
* Unique identifier in OM2.  These can be prefixed with "http://www.ontology-of-units-of-measure.org/resource/om-2/" for direct access; but also used as-is internally to an application as a readable unique identity.
* Label from OM2 for the unit.
* Symbol from OM2 for the unit.
* Description from OM2.
* Classification(s), added by us (not from OM), to facilitate search in the csv file, or in an application (if one is created) for groups to choose their units.  This column is incomplete, possibly not the best granularity, and in some places possibly wrong.  It is experimental, updates are welcome!

### Overriding the OM label or symbol

We have added 2 properties in VF as optional additions to the OM2 unit, `overrideLabel` and `overrideSymbol`.  These are meant for applications to assign for themselves, when the normal display usage for their set of users is different than the OM2.  For example, an application might want to use `pound` instead of `pound (avoirdupois)`, or `gallon` instead of `gallon (US)` or `gallon (imperial)`.

Perhaps the most frequent use of the override is the unit `one`.  This indicates a generic one dimensional unit from the scientific perspective, which in an economic application might be called `each`, `piece`, `count`, `number` or similar, or just left off of a user interface or report.  Some applications might even want to use more than one of these local labels. But for interoperability, any of these overrides should reference back to OM2:one.

See [this directory about units](https://lab.allmende.io/valueflows/valueflows/-/tree/master/units/) for other potentially useful artifacts.

## Quantities and Durations

As noted above, we are using `vf:Measure`, subclass of `om:Measure`, for the quantity properties in VF.

We decided to also use `vf:Measure` for durations, since OM2 has the time-based units needed for durations, as well as a Duration subclass of Unit.  The thinking is that simplicity and consistent naming are more important than the ability to map directly to the owl:time vocabulary for durations.

## Times

See also [Flows Concepts: Quantities and Times](../../concepts/flows/#quantities-and-times).

VF times are inspired by [the owl:time ontology](https://www.w3.org/TR/owl-time), but we have much more limited needs.  We decided to pull them into the VF namespace, rather than directly referencing owl:time.  Specifically we decided not to [map them as is done for the PROV-O ontology](https://www.w3.org/TR/owl-time/#time-prov). But owl:time does support many time constructs and comparisons that may be useful for people, such as below.

![diagram of owl:time interval relations](../assets/IntervalRelations.png)

In terms of durations, although owl:time includes the duration concept, we are using OM, as noted above.

## Locations

See also [Location Concepts](../../concepts/location).

Currently there is not a unified standard location vocabulary, due to the varied historical development of these standards.

Our location data is a compromise between basic needs (latitude, longitude, and altitude), subclassed from the [Basic Geo Vocabulary (WGS84)](https://www.w3.org/2003/01/geo/wgs84_pos#), and more complex needs, for which we include a data reference to the extensive Geography information of the [GEOSPARQL Specification](https://docs.ogc.org/is/22-047r1/22-047r1.html#_b3644674-c6c7-4971-b600-a24d2bda0e01).

For more information on the current state of specification of spatial data, one reference is the [Spatial Data on the Web Best Practices](https://www.w3.org/TR/sdw-bp/).

## Elements not included in VF

Valueflows is a generic vocabulary, and does not contain many domain-specific properties beyond those needed for coordinating economic value flows.  So it will be normal to use additional elements, hopefully from another standard.

For example, there are no food or bicycle specific elements.  Much of this can be handled by the user-definable ResourceSpecification and ProcessSpecificaion. Applications might also want to consider using a faceted classification structure for this purpose.

There are also only minimal properties for classes that are on the "edge" of the vocabulary, and which have other more complete sets of properties elsewhere.  For example, `Agent` is very sparse, and some applications might want more contact information, etc.  `EconomicResource` has many identifiers that are industry specific (like GTIN) which applications might want to include.  We are using `rdfs:seeAlso` to provide helpful sources for those kinds of elements.  In addition, anything that is a `rdfs:subClassOf` a class from another vocabulary can inherit its properties.

We also welcome proposed additions!  See the [Home page](../..) for how to request additions and changes.
