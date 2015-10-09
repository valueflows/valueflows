The following is sample data for the minimal core for simple accounting based on an Enspiral scenario.  It is based on the following stories:

Two developers (M and S) working on a project for a client (XYZ) through a network consulting company (ES).

- In a month, M docked 30 hours working on the LG project for XYZ, and S docked 40 hours on the same project.
- During the month, C worked 5 hours as part of ES, managing the client XYZ relationship, billing, etc. (not billable to XYZ).
- At the end of the month, ES invoiced the client LG $7000 ($3000 for M's work, and $4000 for S’s work).
- The client XYZ paid the invoice a few days later, sending the money to ES.
- ES distributes the money according to the value equations agreed upon. Their value equation for this project is $100 / hour, with 20% of that going back to ES.  The 20% is distributed for the non-billable client management, to a sister project they want to support (CB), and to the ES general overhead fund.
- Upon distribution, all the individual accounts have access to the amount.

Diagram of some of the Economic Events listed in detail below:
![Partial diagram of EconomicEvents](https://docs.google.com/drawings/d/1CAB9LoZca_wLulMdqd9KFULAvoF37iaOJj-fcgvCWuA/pub?w=960&h=720)

**Treatment as software objects**, temporarily using the vocabulary from the [valnet model](https://github.com/valnet/valuenetwork/blob/master/docs/core_model.txt). Will be changed to OVN vocab when ready. [Also, this treatment is work-in-process, subject to revision.]

Agents:
* M (agent type: person)
* S (agent type: person)
* C (agent type: person)
* XYZ (agent type: organization)
* ES (agent type: organization, is context agent)
* CB (agent type: organization, is context agent)
* E (agent type: organization, is context agent)
* LG project? 
        (We are still thinking about what Project means in this case. 
        Project team? 
        Long-duration customer order? Consulting contract?)

Agent Relationships:
* XYZ is client of ES
* M is member of ES
* C is member of ES
* S is member of ES
* CB is child of E
* ES is child of E

Resource Types:
* Software development (could also be different grades or skills with different rates):
    * unit: hours
    * value_per_unit: 90
    * unit_of_value: $
* or AgentResourceType (where different people have different rates for the same skills):
    * agent: M
    * resource_type: Software development
    * value_per_unit: 100
* Money
    * unit: $
* Brokerage service (includes getting gigs, assembling the consultants, getting them approved by the client, managing the client relationship, billing, distributing the payments, etc.
    * unit: hours

Economic Events:

* M works 30 hours
    * Event Type: Billable Work
    * Resource Type: Software development
    * from_agent: M
    * to_agent: ES 
    * context: LG project
    * quantity: 30
    * unit_of_quantity: hours
    * exchange: Contribution 1
* S works 20 hours
    * Event Type: Billable Work
    * Resource Type: Software development
    * from_agent: S
    * to_agent: ES 
    * context: LG project
    * quantity: 20
    * unit_of_quantity: hours
    * exchange: Contribution 2
* S works 20 hours
    * Event Type: Billable Work
    * Resource Type: Software development
    * from_agent: S
    * to_agent: ES 
    * context: LG project (or ES)
    * quantity: 20
    * unit_of_quantity: hours
    * exchange: Contribution 2
* C works 5 hours
    * Event Type: Work
    * Resource Type: Brokerage Service
    * from_agent: C
    * to_agent: ES 
    * context: LG project
    * quantity: 5
    * unit_of_quantity: hours
    * exchange: Contribution 3
* ES delivers 70 hours work to XYZ ( basically invoices this)
    * Event Type: Delivery
    * Resource Type: Software development
    * from_agent: ES
    * to_agent: XYZ
    * context: LG project
    * quantity: 70
    * unit_of_quantity: hours
    * exchange: Sale 1
* XYZ pays ES $7000
    * Event Type: Cash Receipt
    * Resource Type: Money
    * from_agent: XYZ
    * to_agent: ES 
    * context: ES
    * quantity: 7000
    * unit_of_quantity: $
    * exchange: Sale 1
* ES distributes $2400 to M
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent: ES
    * to_agent: M
    * resource: M’s virtual account (which is increased)
    * context: ES
    * quantity: 2400
    * unit_of_quantity: $
    * exchange: Contribution 1
* ES distributes $3200 to S
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent: ES
    * to_agent: S
    * resource: S’s virtual account (which is increased)
    * context: ES
    * quantity: 3200
    * unit_of_quantity: $
    * exchange: Contribution 2
* ES distributes $400 to C
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent: ES
    * to_agent: C 
    * resource: C’s virtual account (which is increased)
    * context: ES
    * quantity: 500
    * unit_of_quantity: $
    * exchange: Contribution 3
* ES distributes $500 to CB
    * Event Type: Distribution
    * Resource Type: Money
    * from_agent: ES
    * to_agent: CB 
    * resource: CB’s virtual account (which is increased)
    * context: ES
    * quantity: 500
    * unit_of_quantity: $
* ES disburses $6500 from its account
    * Event Type: Cash Disbursement
    * Resource Type: Money
    * from_agent: ES
    * to_agent: ES
    * resource: ES’s virtual account (which is decreased)
    * context: ES
    * quantity: 6500
    * unit_of_quantity: $
