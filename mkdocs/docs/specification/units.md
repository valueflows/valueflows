# Units of Measure

Using agreed upon standard units will facilitate network interoperability into the future.  Valueflows uses the units of measure from [the OM2 vocabulary](https://github.com/HajoRijgersberg/OM), also listed in the Other Namespaces page in this section.  Here is the [complete and up-to-date rdf reference for OM2](https://raw.githubusercontent.com/HajoRijgersberg/OM/master/om-2.0.rdf).

## Application units of measure

We expect that user applications will choose a much smaller subset of these standard units, and probably maintain them separately.

To facilitate this, a [csv file of units](https://lab.allmende.io/valueflows/valueflows/-/blob/master/units/units-en-useful.csv) has been extracted from OM2 to make it easier for user groups to choose their set of standard units.  Since OM2 is in active development, this file will gradually become out of date, but we expect added units to be newer scientific units not usually used in economic applications.

This file includes only the English version for now, although some additional languages can be found in OM2.  The currencies have been removed, since we recommend these be set up as Resource Specifications instead, semantically, and specifically given the proliferation of alternate currencies.  We have added classifications (partially complete) to facilitate search for needed units. The columns in this file are, left to right:

* OM2 owl Class.  When a Unit belonged to multiple classes, those were consolidated to one row, under "Unit".
* Unique identifier in OM2.  These can be prefixed with "http://www.ontology-of-units-of-measure.org/resource/om-2/" for direct access; but also used as-is internally to an application as a readable unique identity.
* Label from OM2 for the unit.
* Symbol from OM2 for the unit.
* Description from OM2.
* Classification(s), added by us (not from OM), to facilitate search in the csv file, or in an application (if one is created) for groups to choose their units.  This column is incomplete, possibly not the best granularity, and in some places possibly wrong.  Updates are welcome!

## Overriding the OM2 label or symbol

We have added 2 properties in VF as optional additions to the OM2 unit, `localLabel` and `localSymbol`.  These are meant for applications to assign themselves, when the normal display usage for their set of users is different than the OM2.  For example, an application might want to use `pound` instead of `pound (avoirdupois)`, or `gallon` instead of `gallon (US)` or `gallon (imperial)`.

Perhaps the most frequent use of the override is the unit `one`.  This indicates a generic one dimensional unit from the scientific perspective, which in an economic application might be called `each`, `piece`, `count`, `number` or similar, or just left off of a user interface or report.  Some applications might even want to use more than one of these local labels. But for interoperability, any of these overrides should reference back to OM2:one.

See [this directory about units](https://lab.allmende.io/valueflows/valueflows/-/tree/master/units/) for other potentially useful artifacts.
