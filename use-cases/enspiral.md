The following is sample data for the minimal core for simple accounting based on an Enspiral scenario.  It is based on the following stories:

Two developers, Alice and Bob,  working on a "Delivery App" project  for a client, "Acme Corporation" through a network consulting company, Enspiral Services with the aid of Charles, an account manager.

- In a month, Alice docked 30 hours working on the Delivery App project for Acme, and Bob docked 40 hours on the same project.
- During the month, Charles worked 5 hours as part of Enspiral Services, managing the client relationship with Acme, billing, etc. (not billable to Acme).
- At the end of the month, Enspiral Services invoiced the client for the Delivery App project $7000 ($3000 for Alice's work, and $4000 for Bob’s work).
- The client Acme paid the invoice a few days later, sending the money to Enspiral Services.
- Enspiral Servics distributes the money according to the value equations agreed upon. Their value equation for this project is $100 / hour, with 20% of that going back to Enspiral Services.  The 20% is distributed for the non-billable client management, to an internal sister project they want to support (Cobudget), and to the Enspiral Services general overhead fund.
- Upon distribution, all the individual accounts have access to the amount.

Diagram of some of the Economic Events listed in detail below:
![Partial diagram of EconomicEvents](https://docs.google.com/drawings/d/1CAB9LoZca_wLulMdqd9KFULAvoF37iaOJj-fcgvCWuA/pub?w=960&h=720)

**Treatment as software objects**, temporarily using the vocabulary from the [valnet model](https://github.com/valnet/valuenetwork/blob/master/docs/core_model.txt). Will be changed to OVN vocab when ready. [Also, this treatment is work-in-process, subject to revision.]

Agents:
* Alice (agent type: person)
* Bob (agent type: person)
* Charles (agent type: person)
* Acme Corp (agent type: organization)
* Enspiral Services (agent type: organization, is context agent)
* Cobudget (agent type: organization, is context agent)
* Enspiral (agent type: organization, is context agent)
* "Delivery App" project?
        (We are still thinking about what Project means in this case.
        Project team?
        Long-duration customer order? Consulting contract?)

Agent Relationships:
* Acme is client of Enspiral Services
* Alice is member of Enspiral Services
* Charles is member of Enspiral Services
* Bob is member of Enspiral Services
* Cobudget is child of Enspiral
* Enspiral Services is child of Enspiral

Resource Types:
* Software development (could also be different grades or skills with different rates):
    * unit: hours
    * value_per_unit: 90
    * unit_of_value: $
* or AgentResourceType (where different people have different rates for the same skills):
    * agent: Alice
    * resource_type: Software development
    * value_per_unit: 100
* Money
    * unit: $
* Brokerage service (includes getting gigs, assembling the consultants, getting them approved by the client, managing the client relationship, billing, distributing the payments, etc.
    * unit: hours

Economic Events:

* Alice works 30 hours
    * Event Type: Billable Work
    * Resource Type: Software development
    * from_agent: Alice
    * to_agent:  Enspiral Services
    * context:  Delievery App project
    * quantity: 30
    * unit_of_quantity: hours
    * exchange: Contribution 1
* Bob works 20 hours
    * Event Type: Billable Work
    * Resource Type: Software development
    * from_agent: Bob
    * to_agent:  Enspiral Services
    * context:  Delievery App project
    * quantity: 20
    * unit_of_quantity: hours
    * exchange: Contribution 2
* Bob works 20 hours
    * Event Type: Billable Work
    * Resource Type: Software development
    * from_agent: Bob
    * to_agent:  Enspiral Services
    * context:  Delievery App project (or  Enspiral Services)
    * quantity: 20
    * unit_of_quantity: hours
    * exchange: Contribution 2
* Charles works 5 hours
    * Event Type: Work
    * Resource Type: Brokerage Service
    * from_agent: Charles
    * to_agent:  Enspiral Services
    * context:  Delievery App project
    * quantity: 5
    * unit_of_quantity: hours
    * exchange: Contribution 3
*  Enspiral Services delivers 70 hours work to XYZ ( basically invoices this)
    * Event Type: Delivery
    * Resource Type: Software development
    * from_agent:  Enspiral Services
    * to_agent: Acme
    * context:  Delivery App project
    * quantity: 70
    * unit_of_quantity: hours
    * exchange: Sale 1
* Acme pays  Enspiral Services $7000
    * Event Type: Cash Receipt
    * Resource Type: Money
    * from_agent: Acme
    * to_agent:  Enspiral Services
    * context:  Enspiral Services
    * quantity: 7000
    * unit_of_quantity: $
    * exchange: Sale 1
*  Enspiral Services distributes $2400 to Alice
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent:  Enspiral Services
    * to_agent: Alice
    * resource: Alice’s virtual account (which is increased)
    * context:  Enspiral Services
    * quantity: 2400
    * unit_of_quantity: $
    * exchange: Contribution 1
*  Enspiral Services distributes $3200 to Bob
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent:  Enspiral Services
    * to_agent: Bob
    * resource: Bob’s virtual account (which is increased)
    * context:  Enspiral Services
    * quantity: 3200
    * unit_of_quantity: $
    * exchange: Contribution 2
*  Enspiral Services distributes $400 to Charles
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent:  Enspiral Services
    * to_agent: Charles
    * resource: Charles’s virtual account (which is increased)
    * context:  Enspiral Services
    * quantity: 500
    * unit_of_quantity: $
    * exchange: Contribution 3
*  Enspiral Services distributes $500 to CB
    * Event Type: Distribution
    * Resource Type:Money
    * from_agent:  Enspiral Services
    * to_agent: Cobudget
    * resource: Cobudget’s virtual account (which is increased)
    * context:  Enspiral Services
    * quantity: 500
    * unit_of_quantity: $
*  Enspiral Services disburses $6500 from its account
    * Event Type: Cash Disbursement
    * Resource Type: Money
    * from_agent:  Enspiral Services
    * to_agent:  Enspiral Services
    * resource:  Enspiral Services’s virtual account (which is decreased)
    * context:  Enspiral Services
    * quantity: 6500
    * unit_of_quantity: $
