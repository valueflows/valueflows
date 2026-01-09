# Specification Overview

## Goals and compromises

*This section is non-normative.*

We have tried to make this vocabulary as technology-agnostic as possible, as it represents a domain ontology for economic activity that we believe can be useful well into the future.  We know from the past that technology moves relatively quickly.  This includes technical protocols and formats for interoperability, and also bleeds into data modeling techniques, no matter how much we in the industry try to create universal modeling methods.  We have tried to balance full use case support with simplicity and clarity in various protocols, with some compromises made along the way.  We represent the vocabulary in various ways, and plan to add formats and protocols as new needs arise.

## Source specification

*This section is normative.*

* The "system of record" (authoritative data source) is this **[linked open data turtle (ttl) file](https://codeberg.org/valueflows/pages/src/branch/main/assets/all_vf.TTL){target="_blank"}**.

* The preferred namespace prefix is "vf".  The linked open data namespace base URI is `https://w3id.org/valueflows/ont/vf#`, supporting the following formats.

    * https://w3id.org/valueflows/ont/vf.ttl
    * https://w3id.org/valueflows/ont/vf.html
    * https://w3id.org/valueflows/ont/vf.jsonld
    * https://w3id.org/valueflows/ont/vf.xml
    * https://w3id.org/valueflows/ont/vf.rdf
    * https://w3id.org/valueflows/ont/vf.owl
    * https://w3id.org/valueflows/ont/vf.nt
    * https://w3id.org/valueflows/ont/vf.trig
    * https://w3id.org/valueflows/ont/vf.n3

* A more readable **[formatted text version of the vocabulary](all_vf.md)** is generated from the turtle file here.

## Visualization of the specification

*This section is non-normative.*

* A **[class and property diagram of the ontology](uml.md)** is included for a visual representation, along with some explanation of compromises made between rdf-based / json-based / relational / object oriented methods.

* For easier visualization along with textual explanation of subject area parts of the model, a **[diagram explanation page](model-text.md)** is also included.

## Alternative formats

*This section is non-normative.*

* A **[GraphQL api source](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql/-/tree/sprout/lib/schemas){target="_blank"}**  stays more or less in sync with the vocabulary.

* A **[json-ld context file]()** (TODO)

* A partial **[json-schema representation](json-schemas.md)**

* A **[SHACL representation]()** and a **[ShEx representation]()**  (TODO)
