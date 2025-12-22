# Specification Overview

## Goals and compromises

We have tried to make this vocabulary as technology-agnostic as possible, as it represents a domain ontology for economic activity that we believe can be useful well into the future.  We know from the past that technology moves relatively quickly.  This includes technical protocols and formats for interoperability, and also bleeds into data modeling techniques, no matter how much we in the industry try to create universal modeling methods.  We have tried to balance full use case support with simplicity and clarity in various protocol, with some compromises made along the way.  We represent the vocabulary in various ways, and plan to add formats and protocols as new needs arise.

## Source definitions and protocols

* The "system of record" (authoritative data source) is a linked open data **[turtle (ttl) file representation](https://codeberg.org/valueflows/pages/raw/branch/main/assets/all_vf.TTL)**, located **[here in the repository](https://codeberg.org/valueflows/pages/src/branch/main/assets/all_vf.TTL)**.

* A more readable **[formatted version of the vocabulary](all_vf.html)**, which is generated from the turtle file

* A **[UML diagram of the ontology](uml.md)**, with some explanation of compromises made between rdf-based / json-based / relational / object oriented methods

* The linked open data namespace base URI is `https://w3id.org/valueflows/ont/vf#`, supporting TTL, JSON-LD and HTML, with preferred namespace prefix being "vf"

* A **[GraphQL api source](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql/-/tree/sprout/lib/schemas)**, which stays more or less in sync with the vocabulary

* A **[json-ld context file]()** (TODO)

* A partial **[json-schema representation](json-schemas.md)**

* A **[SHACL representation]()** and a **[ShEx representation]()**  (TODO)
