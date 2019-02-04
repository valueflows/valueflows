# Specifications

ValueFlows aims at providing model which can get used in different information ecosystems.

## The Web of Linked Data

We provide web ontology which uses [RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/) and [OWL 2](https://www.w3.org/TR/owl2-overview/) constructs. It builds on top of well established standards:

* [IRIs](https://tools.ietf.org/html/rfc3987) as global identifiers
* [HTTP/2](https://tools.ietf.org/html/rfc7540) as universal dereferencing protocol
* [RDF 1.1](https://www.w3.org/TR/rdf11-concepts/) as well defined (web native) data graph model
* [SHACL](https://www.w3.org/TR/shacl/) and [ShEx](https://shex.io/) as constraints and validation languages
* [Web Architecture](https://www.w3.org/standards/webarch/) as omnipresent platform

This leads to certain advantages:

* namespacing helps prevent naming collisions
* abstract data model which can adopt new serializations, eg. [HDT](http://www.rdfhdt.org/)
* existing ecosystem of open vocabularies https://lov.linkeddata.es/
* active community and ongoing academic research [ISWC](https://en.wikipedia.org/wiki/International_Semantic_Web_Conference), [ESWC](https://en.wikipedia.org/wiki/Extended_Semantic_Web_Conference), [SEMANTiCS](https://semantics.cc/), ...

RDF 1.1 has [multiple serialization formats](https://www.w3.org/TR/rdf11-new/#section-serializations), we recommend publishing Turtle/TriG, N-Triples/N-Quads and JSON-LD (expanded and flattened), at the same time we discourage use of RDFa and RDF/XML. If one needs to include one of recommended above RDF in HTML source, [embedding in script tag](https://w3c.github.io/json-ld-syntax/#embedding-json-ld-in-html-documents) also stays available.

## JSON & JSON Schema

Many emerging environments tie themselves more closely to very popular in last years JSON based technologies. For example [Scuttlebutt](https://www.scuttlebutt.nz/) or [Holochain](https://holochain.org/)

* [JSON](https://www.json.org/) as common data serialization
* [JSON Schema](https://json-schema.org/) as vocabulary to annotate and validate JSON

While it comes with certain simplicity it also leads to certain disadvantages:

* lack of specific underlying graph model
* no namespacing which can result in naming collisions or proliferation of media types
* next generation serialization might replace JSON just like it replaced XML

Keeping above in mind this documentation still provides reference JSON Schemas.