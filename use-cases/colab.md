_This treatment was created by CoLab. Thanks, CoLab crew! They asked some questions. One answer added in [brackets]._ 

## Entities

* Team
A collection of collaborators assembled for a purpose.

* Collaborator
    An individual working on a team.

* Organization
    A collection of teams with a collective mission.

* Service
    A contribution that a collaborator provides.

* Client

## Roles

"Supplier":

* Collaborator
* Organization (CoLab)

"Receiver":

* Client
* Collaborator

## Use Cases/Contexts

"Value Transaction"

* Receiver
* Supplier

====

Contractor
  - Compensation Type (Flat, Hourly, Equity)

Receiver

====


## Narratives

1. Contracting Work
    - CoLab contracts work to a collaborator based on an fixed bid (single sum)
    - CoLab contracts work to a collaborator based on an hourly rate
    - CoLab contracts work to a partner organization based on a fixed bid
    - CoLab contracts work to a collaborator who is a member (based on an hourly rate)
    - CoLab agrees to provide a collaborator with Equity in exchange for project work (either hourly or milestone)


2. Payroll
    - CoLab pays a collaborator for all work done on a project in a given period based on hourly reate
    - CoLab pays a collaborator for reaching a milestone on a fixed-rate project

3. Delivery/Client Projects
    - CoLab agrees to provide a deliverable to a client at an hourly rate, and less than or equal to some estimated total cost.
    - CoLab agrees to provide a deliverable to a client for some fixed amount.
    - CoLab agrees to provide a hourly services to a client for an hourly rate.
    - CoLab absorbs a portion of contracting costs in exchange for equity in the receiver's venture.

4. Incoicing/Payment
    - Client pays CoLab for all hours worked in a given period
    - CoLab invoices a client for an agreed upon sum upon reaching a milestone
    - CoLab invoices a client for all work done since last invoice upon reaching a milestone
    - CoLab distributes equity received to all eligible team members based on agreed upon compensation scheme.


5. CoLab Member Benefits (not directly project related) 
    - A Member receives dividend from the cooperative based on Coop annual profits, length of time the member has been a member of the coop, number of hours worked on client projects that year and numer of new business leads contributed to.
    - A member receives some portion of equity for projects based on dividened formulas.


6. DREAM: CoLab pays a collaborator for work in accordance with the clients' perceived satisfaction.

7. SUPER-DREAM: No such thing as money, everyone gets what they need all the time.





Domain Description
---


Example Sample Data
---

10 collaborators (programmers, designers, project manager, qa) (CO1-10) work on a web development project for a client (CL) through worker-coop (W).

In a month, CO1 docked 50 hours working on the project for CL, and S docked 40 hours on the same project.

During a month, CO1 - 10 docked the following hours for project with CL, billable to W:
-  CO1: 80 hrs
-  CO2: 85 hrs
-  CO3: 40 hrs
-  CO4: 10 hrs
-  CO5: 4 hrs
-  CO6: 40 hrs
-  CO7: 32 hrs
-  CO8: 12 hrs
-  CO9: 60 hrs
-  CO10: 4 hrs

At the end of the month, W invoiced the client CL $7000 at a blended rate (_?_)

The client CL paid the invoice a few days later, sending the money to W.

W distributes the money according to the value equations agreed upon. Their value equation for this project is (_?_) / hour, with (_?_)% of that going back to W.

Treatment as software objects, temporarily using the vocabulary from the valnet model. Will be changed to OVN vocab when ready. [Also, this treatment is work-in-process, subject to revision.]

Agents:

* CO1 - 10 (agent type: person)
* CL (agent type: organization)
* W (agent type: organization, is context agent (? what is a context agent ?) )
_[According to the valnet vocab, "a context_agent is a group within which EconomicInteractions occur". That's probably still a bit obscure. In a typical business, that would be "the company" or whatever legal entity people are working in, or maybe a department in a company. We want also want to support informal organizations and wish to get away from business-as-usual, thus "context agent". Better names are welcome.]_

Agent Relationships:

* CL is client of W
* CO1 - 10 are contractors working with W

Resource Types:
*  Software development (could also be different grades or skills with different rates):
    - unit: hours
    - value_per_unit: (_?_)
    - unit_of_value: $
* or AgentResourceType (where different people have different rates for the same skills):
    - agent: M
    - resource_type: Software development
    - value_per_unit: (_?_)
* Money
    - unit: $
* Brokerage service (includes getting gigs, assembling the consultants, getting them approved by the client, managing the client relationship, billing, distributing the payments, etc.
    - unit: hours

Economic Events:

* CO? works X hours
    - Event Type: Billable Work  
    - Resource Type: Backend Dev | Frontend Dev | Design | Project Management | QA
    - from_agent: CO?
    - to_agent: W
    - context: (?) project
    - quantity: (_?_)
    - unit_of_quantity: hours
    - exchange: Contribution 1

* W delivers 70 hours work to CL ( basically invoices this)
    - Event Type: Delivery
    - Resource Type: Software development
    - from_agent: W
    - to_agent: CL
    - context: LG project
    - quantity: 70
    - unit_of_quantity: hours
    - exchange: Sale 1

* CL pays W $7000
    - Event Type: Cash Receipt
    - Resource Type: Money
    - from_agent: CL
    - to_agent: W
    - context: W
    - quantity: 7000
    - unit_of_quantity: $
    - exchange: Sale 1

* W distributes $2400 to CO?
    - Event Type: Distribution
    - Resource Type: Money
    - from_agent: W
    - to_agent: CO?
    - resource: CO?’s virtual account (which is increased)
    - context: W
    - quantity: 2400
    - unit_of_quantity: $
    - exchange: Contribution 1
