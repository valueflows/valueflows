# Units of Measure

Valueflows uses the units of measure from [OM2](https://github.com/HajoRijgersberg/OM), listed in the Other Namespaces page in this section.  Using agreed upon standard units will facilitate network interoperability into the future.  

As of now, a file of units has been extracted to make it easier for user groups to choose their set of standard units.

The complete rdf reference for OM2 can be found [here](https://raw.githubusercontent.com/HajoRijgersberg/OM/master/om-2.0.rdf).

A csv file derived from that can be found [here](https://lab.allmende.io/valueflows/valueflows/-/tree/master/units/unit-en-useful.csv).  This file includes units from OM2 as of 2022/06. It includes only the English version for now.  The currencies have been removed, since we recommend these be set up as Resource Specifications instead, semantically, and specifically given the proliferation of alternate currencies.  We have added classifications (partially complete) to facilitate search for needed units. The columns in this file are, left to right:

* OM2 owl Class.  When a Unit belonged to multiple classes, those were consolidated to one row, under "Unit".
* Identifier in OM2.  These can be prefixed with "http://www.ontology-of-units-of-measure.org/resource/om-2/" for direct access.
* Label from OM2 for the unit, to be used in Valueflows.
* Symbol from OM2 for the unit, to be used in Valueflows.
* Description from OM2.
* Classification(s), added by us (not from OM), to facilitate search in the csv file, or ifn an application (if one is created) for groups to choose their units.  This column is incomplete, possibly not the best granularity, and in some places possibly wrong.  Updates are welcome!

A special note on the unit `one`.  This indicates a generic one dimensional unit from the scientific perspective, which in business is often called "each", "pieces", "count", or similar. OM2 does have a unit called `piece`, which can be used instead of `one` if desired for user clarity; or the user interface could leave off the label if it is "one".

See [this directory](https://lab.allmende.io/valueflows/valueflows/-/tree/master/units/) for other potentially useful artifacts. 
