# Accounting

## Recording Basic Economic Activity

The Valueflows vocabulary is based on the REA ontology (Resources, Events and Agents) the ISO Accounting and Economic Ontology, which was evolved for that purpose. (See Appendix for links.)

Since all the data is recorded as the economic activity happens and is represented in its most basic form, you can get separate accounting views for: a network, each group in the network, each project, each individual. In other words, people in the network log events as they occur and the accounting *Just Happens*.

All of the views can emerge from subsets of the same data.  Any standard (or non-standard) accounting report can be created.

Or potentially, views for a global value system economy (really).

See also [Ecological Accounting](ecology.md).

## Accounting views: independent vs dependent

![diagram of independent vs dependent views and naming](../assets/REAviews.png)

Conventional accounting always takes the view of an individual agent: often a company. REA, and Valueflows, take an independent view, sometimes called a “collaboration space” or economic network or supply chain view.  At the same time, derived from the independent view, REA and Valueflows support each agent's own accounting view.

For example, from one agent's viewpoint, the exchange may be a "purchase", from the other agent's viewpoint, it might be a "sale". From the neutral viewpoint, it is an exchange of resources, with usually at least two flows of resources, from different directions.

For the individual agent’s accounting systems, assuming an Exchange of goods for money, when the goods are transferred from the seller to the purchaser, the purchaser’s Accounts Payable are increased (credited) and the seller’s Accounts Receivable are increased (debited). The independent view sees a transfer of goods from one agent to another.

While conventional accounting uses the individual agent view, larger-scale economic analyses and planning, like for networks, communities, and bioregions, use the independent view. See [Value Flow Algorithms](../algorithms/overview.md).

## Accounting as in Accountability...

* from peers to each other
* from members to a network
* from a network to the members
* from one network to another
* from a network to the community
* from a network to the ecosystem

Accounting isn't always just counting beans.  It will be important for community economies: what resources do we have, what happened with them, how are they doing? What resources do we need? Who needs what? Who can provide what?  What waste have we generated and how can we improve?


## But if you want to count beans...

The standard set of accounting reports are needed by many organizations. A standard General Ledger, Balance Sheet, and Income Statement can be generated automatically from Valueflows data. No need to create a Chart of Accounts or post double-entries, those can all be created by a computer program on request.

![A typical general ledger hierarchy of accounts](../assets/std-accounting.png)

Moreover, General Ledgers and accounting reports can be created automatically for each agent in an economic network using the VF vocabulary.  The accounting views use the Dependent or Individual Agent view of ValueFlows.

Accounting statements can also be updated instantly for each participant in any economic event as soon as the event is recorded. For example, consider an economic exchange, where one agent transfers some goods to another, and the other agent transfers some money in return. The inventory of the goods-providing agent will be instantly decremented, and the receiving agent's incremented. Likewise the money accounts of the money-providing and receiving agents will immediately change. Income statements, balance sheets, and cash flow reports can reflect the new changes immediately. The financial positions of each agent can always be up-to-date as of the last recorded event.

This article describes how to generate General Ledgers etc. from REA data using procedural code: [Operation of a Relational Accounting System, Graham Gal and Bill McCarthy](../linked-docs/OperationofaRelationalAccountingSystem.pdf)

Wim Laurier is working on how to do it declaratively. [This paper](../linked-docs/paper8.pdf) gives an early view of how Wim and Satoshi Horiuchi intend to do it.

The difference between doing it procedurally and doing it declaratively:

* A procedural program defines a step-by-step method of getting the desired results.
* A declarative program describes the desired results and hands it to another program that can generate the desired results from your description. The person who desires the results writes much less code.

## Making Corrections

It is standard accounting practice that recorded activity that affect financial and other accounting reports cannot be changed directly in case of error.  That is because one cannot tell when reports could have been published containing that data, and many financial reports cannot be amended.

Valueflows allows for correction of an economic event with another economic event, which should be recorded with a `corrects` link to the original event.  This gives flexibility to display the event as corrected, or as separate events, depending on the need.  The quantity should be the amount to be added or subtracted from the original event quantity.  So this works differently than the increment/decrement rules, and will be the only time negative quantities can be used.  It is not required, but is often customary to completely "back out" or "reverse" the original record (i.e. if the quantity was 10, then the quantity of the correction record is -10, as of the date corrected); then the original event can be re-entered correctly with the earlier correct date and no need for the `corrects` link. Alternatively, the correction event could just record the difference, as of the date of correction, with the `corrects` link to the original.

If the original event was input to or output of a process, or was part of an agreement, then the correction event should contain those same relationships so it will appear embedded into the flow(s) where it belongs without worrying about the `corrects` link.  The correction event should be recorded as of the date of the correction, though.

All events should record the computer-generated `created` date/time also, as this may be used in periodic reports to keep the events filtered properly without missing or double counting anything; or where it is important to be able to compare traces (for example) to verify representation of the same resource based on history. (This is also needed when events are allowed to be recorded after the fact, irrespective of corrections, which is true for many situations.  That is, often the event date will be earlier than the created date.)
