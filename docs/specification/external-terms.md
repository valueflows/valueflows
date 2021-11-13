# External namespaces and terms

Most applications using VF will need terms defined in various other vocabularies.  In fact, some of these are essential to the complete ValueFlows model. Below are the essential elements we are reusing from well established vocabularies (web ontologies).

## SKOS

https://www.w3.org/TR/skos-reference/

* [`skos:note`](https://www.w3.org/TR/skos-reference/#note)

## FOAF

http://xmlns.com/foaf/spec/

* [`foaf:Agent`](http://xmlns.com/foaf/spec/#term_Agent)
* [`foaf:Person`](http://xmlns.com/foaf/spec/#term_Person)

## ORG

https://www.w3.org/TR/vocab-org/

* [`org:Organization`](https://www.w3.org/TR/vocab-org/#org:Organization)

## OM2

http://www.ontology-of-units-of-measure.org/resource/om-2/

* [`om2:Measure`](http://www.ontology-of-units-of-measure.org/resource/om-2/Measure)
* [`om2:hasUnit`](http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit)
* [`om2:hasNumericalValue`](http://www.ontology-of-units-of-measure.org/resource/om-2/hasNumericalValue)


* [`om2:Unit`](http://www.ontology-of-units-of-measure.org/resource/om-2/Unit)
    * A list of units can also be found here.  Each subclass on this page has an additional list of units.
    * VF will use (at least) `rdfs:label` and `om2:symbol` as properties of Units.
    * See note at the end of [Flows](/introduction/flows.md) regarding display of unit `om2:one`.

### DTYPE

http://www.linkedmodel.org/schema/dtype#

* [`dtype:numericUnion`](http://www.linkedmodel.org/schema/dtype#numericUnion)

## TIME

https://www.w3.org/TR/owl-time

Some useful constructs, others here: https://www.w3.org/TR/owl-time/#topology, see the Interval Relations.

* [`time:inXSDDateTimeStamp`](https://www.w3.org/TR/owl-time/#time:inXSDDateTimeStamp)
* [`time:hasDuration`](https://www.w3.org/TR/owl-time/#time:hasDuration)
* [`time:before`](https://www.w3.org/TR/owl-time/#time:before)
* [`time:after`](https://www.w3.org/TR/owl-time/#time:after)
* [`time:intervalDuring`](https://www.w3.org/TR/owl-time/#time:intervalDuring)

`vf` defines property chain axioms for `vf:hasBeginning` , `vf:hasEnd`, and `vf:hasPointInTime` as slight variant
of [Alignment of PROV-O with OWL-Time](https://www.w3.org/TR/owl-time/#time-prov).

## GEO

https://www.w3.org/2003/01/geo/wgs84_pos#

* [`geo:lat`](https://www.w3.org/2003/01/geo/wgs84_pos#lat)
* [`geo:long`](https://www.w3.org/2003/01/geo/wgs84_pos#long)
* [`geo:alt`](https://www.w3.org/2003/01/geo/wgs84_pos#alt)

## DFC

http://www.virtual-assembly.org/DataFoodConsortium/BusinessOntology#

* [`dfc:ProductBatch`](http://www.virtual-assembly.org/DataFoodConsortium/BusinessOntology#ProductBatch)
* [`dfc:batchNumber`](http://www.virtual-assembly.org/DataFoodConsortium/BusinessOntology#batchNumber)
* [`dfc:expiryDate`](http://www.virtual-assembly.org/DataFoodConsortium/BusinessOntology#expiryDate)
* [`dfc:productionDate`](http://www.virtual-assembly.org/DataFoodConsortium/BusinessOntology#productionDate)

## DCTERMS

http://purl.org/dc/terms/

* [`dcterms:created`](http://purl.org/dc/terms/created)
