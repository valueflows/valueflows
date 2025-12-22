---
hide:
  - navigation
---

# Frequently Asked Questions (FAQ)

### What is Valueflows?

Valueflows is a vocabulary and model (an ontology) that is intended to cover any economic activity, focused on the economic networks of the "next economy", but also supporting conventional businesses and supply chains.  It's main purpose is to facilitate interoperability between various economic software. It can also be used as an internal model for a Valueflows "native" application.

### Does Valueflows include an application that I can run or fork?

No, Valueflows is only the vocabulary and documentation.  There are [some applications that have been and are being created](../appendix/usedfor.md) using Valueflows internally and/or exposing Valueflows as an api. They are all open source.

### How do we think of the "economy"?

[Community Economies](http://communityeconomies.org/about/community-economies-research-and-practice) has a definition we like a lot.  "In conventional usage, economy often refers to a system of formal commodity production and monetary exchange. Our use of the term is much broader. The 'eco' in economy comes from the Greek root oikos, meaning 'home' or 'habitat'—in other words, that which sustains life. The 'nomy' comes from nomos, meaning management. We view economy as referring to all of the practices that allow us to survive and care for each other and the earth. Economy, understood this way, is not separate from ecology, but refers to the ongoing management—and therefore negotiation—of human and nonhuman ecological relations of sustenance."

### What do we mean, “economic network”?

An economic network consists of independent economic agents (individual people or organizations) collaborating to produce and distribute goods and services to meet human and ecological needs. For example, food, clothing, housing, education, health care. healthy soil, etc.

### What do we mean, "next economy"?

We want to support experiments towards:

* cooperation rather than competition;
* open, shared, common knowledge instead of jealously-guarded “intellectual property”;
* sustainable production instead of getting away with as much plunder as possible;
* “equitable distribution of value” vs exploitation for profit;
* respecting nature and our environment.

### What makes Valueflows different than conventional economic vocabularies like UBL?

The Valueflows model is designed to support:

* coordination of economic activity both inside and between organizations, an enterprise is not assumed;
* reciprocity with or without money, money is not assumed;
* ecological agents as part of the network; externalities as resources.

Other economic vocabularies are focused on conventional capitalist enterprise operational and accounting needs.

### Can I put Valueflows on a blockchain?

Valueflows attempts to be as technically agnostic as possible.  But there are some challenges putting it on a blockchain, basically because VF does not form a "chain" when data is created, it forms a "directed graph".  A good place to see this is on [this Process diagram](/concepts/processes/#process-structures).  It is probably possible to put it on a blockchain; or sometimes people store the information in a more traditional data structure, and also put the data on a blockchain for the advantages that offers.  Or people have used other distributed or decentralized structures for all of an application's data storage, instead of a blockchain.  Or if the VF data is limited to traditional exchange data where longer flows are not created, a blockchain should be no problem.

### Where can I read more about REA?

Here are [a lot of REA links](../appendix/rea.md).

### What formats is Valueflows available in?

The vocabulary is presented in several ways, as Linked Open Data using the Resource Description Framework (RDF) family of languages, as well as a partial Json-schema reference, a GraphQL reference, and a UML model. We want to support RDF based and non-RDF based uses of the vocabulary, basically any way that people want to use software and data on the internet to help create economic networks.  See [the Specification overview page](/specification/spec-overview/) for up-to-date information.

### What if I want a different format or protocol?

We will add formats and protocols as requested.  Or please feel free to create a new format, and we will add it to the documentation.

### What is the current release?

The current release and status can be found in [Introduction/Release and Status](../introduction/status.md).

### There is a lot here, do I need to implement the whole vocabulary?

While the base model is quite simple and elegant, or perhaps because of this in contrast to the many possible use cases, there are indeed quite a few options coming from experience with different use cases, and the desire to support future experiments which we don't know about.  We want to emphasize that projects will need to pick and choose what is useful for any specific application or use case.  For that reason, we have kept most things optional, and don't want to make assumptions about how the vocabulary will be used.  We also hope that the [examples](../examples/ex-overview.md) and [links to existing open source implementations](../appendix/usedfor.md) will help.

### What can I do to simplify the data entry needed for Valueflows applications?

One thing to note is that the base model appears in all three layers in similar ways.  This gives applications a way to pre-fill many properties.  For example, a recipe can create many plans, where each may only need tweaking.  A commitment can pre-fill many properties from an intent that it will satisfy.  An economic event can pre-fill many properties from a commitment that it will fulfill.  There may also be application-specific opportunities, like using a hardware design to create a recipe for planning the production of the design, or creating groups of recipes by agent function for pre-populating the knowledge layer.

### Where are the rules for economic events effects on economic resources?

You can find those under [Concepts/Actions](../concepts/actions.md).

### Where can I find the logic for track and trace?

You can find some suggestions under [Algorithms/Track and Trace](../algorithms/track.md).
