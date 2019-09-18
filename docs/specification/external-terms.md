# External terms

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

## QUDT

http://qudt.org/doc/2016/DOC_SCHEMA-QUDT-v2.0.html

* [`qudt:QuantityValue`](http://qudt.org/doc/2016/DOC_SCHEMA-QUDT-v2.0.html#Classes)
* [`qudt:unit`](http://qudt.org/doc/2016/DOC_SCHEMA-QUDT-v2.0.html#Properties)
* [`qudt:numericValue`](http://qudt.org/doc/2016/DOC_SCHEMA-QUDT-v2.0.html#Properties)

### UNIT

http://qudt.org/doc/2017/DOC_VOCAB-UNITS-BASE.html

* [`unit:Number`](http://qudt.org/doc/2017/DOC_VOCAB-UNITS-BASE.html#Instances)

## TIME

https://www.w3.org/TR/owl-time

* [`time:inXSDDateTimeStamp`](https://www.w3.org/TR/owl-time/#time:inXSDDateTimeStamp)
* [`time:hasDuration`](https://www.w3.org/TR/owl-time/#time:hasDuration)
* [`time:before`](https://www.w3.org/TR/owl-time/#time:before)
* [`time:after`](https://www.w3.org/TR/owl-time/#time:after)
* [`time:intervalDuring`](https://www.w3.org/TR/owl-time/#time:intervalDuring)

`vf` defines two property chain axioms `vf:hasBeginning` and `vf:hasEnd` as slight variant
of [Alignment of PROV-O with OWL-Time(https://www.w3.org/TR/owl-time/#time-prov)]

## GEO

https://www.w3.org/2003/01/geo/wgs84_pos#

* [`geo:lat`](https://www.w3.org/2003/01/geo/wgs84_pos#lat)
* [`geo:long`](https://www.w3.org/2003/01/geo/wgs84_pos#long)
* [`geo:alt`](https://www.w3.org/2003/01/geo/wgs84_pos#alt)

## DFC

http://www.virtual-assembly.org/DataFoodConsortium/FullModel#

* [`dfc:ProductBatch`](http://www.virtual-assembly.org/DataFoodConsortium/FullModel#ProductBatch)
* [`dfc:batchNumber`](http://www.virtual-assembly.org/DataFoodConsortium/FullModel#batchNumber)
* [`dfc:expiryDate`](http://www.virtual-assembly.org/DataFoodConsortium/FullModel#expiryDate)
* [`dfc:productionDate`](http://www.virtual-assembly.org/DataFoodConsortium/FullModel#productionDate)

## DCTERMS

http://purl.org/dc/terms/

* [`dcterms:created`](http://purl.org/dc/terms/created)
