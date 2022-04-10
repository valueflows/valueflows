# Query and Filter Naming

### Introduction

Although queries and query filters are not specified in the RDF core, this set of guidelines should be used, to facilitate standard communication.  It is possible that at some point they will be included in the formal VF namespace.

There are no implications for which (if any) of these any particular application would want to implement.

*Note:* The main queries are not listed below, but would be the name of the type/class to return a specific item, and the plural name of the type/class to return all or a filtered set of the items.  For example, `process` and `processes` for vf:Process.

*Note:* Filters can be applicable to any query that can return more than one of the class.  For example all processes, processes in scope of an agent, processes in a plan could all use the process filters.

*Status:* Not all of these queries are tested, and there will certainly be other useful queries. If anyone has recommended changes or additions, please start an issue or merge request, or just let us know in the Welcome chat (links on the home page).

### Observation layer

#### Agent

*filters:* classifiedAs (organizations only), locatedIn (some geographic boundary, city, region, etc.)

*inverse queries:*

   * processes (Process.inScopeOf)
   * inventoriedEconomicResources (EconomicResource.primaryAccountable)
   * relationshipsAsSubject (Relationship.subject)
   * relationshipsAsObject (Relationship.object)

*other queries:*

   * plans (if there is any Process.inScopeOf in the Plan)
   * economicEvents (EconomicEvent.provider or .receiver or .inScopeOf)
   * commitments (Commitment.provider or .receiver or .inScopeOf)
   * intents (Intent.provider or .receiver or .inScopeOf)
   * claims (Claim.provider or .receiver or .inScopeOf)
   * proposals (Proposal.inScopeOf, or a related Intent.provider or Intent.receiver)
   * relationships (Relationship.object or .subject or .inScopeOf)
   * roles (TBD)

#### AgentRelationship

*filters:* subject, object, role, inScopeOf

#### Process

*filters:* finished, classifiedAs, inScopeOf, startDate, endDate (include any process that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

   * observedInputs (EconomicEvent.inputOf)
   * observedOutputs (EconomicEvent.outputOf) 
   * committedInputs (Commitment.inputOf)
   * committedOutputs (Commitment.outputOf)
   * intendedInputs (Intent.inputOf)
   * intendedOutputs (Intent.outputOf)

*other queries:*

   * economicEvents (EconomicEvent.inputOf or .outputOf)
   * commitments (Commitment.inputOf or .outputOf)
   * intents (Intent.inputOf or .outputOf)
   * inputs (EconomicEvent or Commitment or Intent .inputOf)
   * outputs (EconomicEvent or Commitment or Intent .outputOf)
   * unplannedEconomicEvents (any EconomicEvent.inputOf or .outputOf that don't fulfill a Commitment)
   * unplannedInputs (any EconomicEvent.inputOf that doesn't fulfill a Commitment)
   * unplannedOutputs (any EconomicEvent.outputOf that doesn't fulfill a Commitment)
   * involvedAgents (any .provider or .receivers or .inScopeOf on Commitments or EconomicEvents or Intents, and self.inScopeOf)
   * nextProcesses (Processes where .inputOf references the same .resourceInventoriedAs as self.outputOf references)
   * previousProcesses (Processes where .outputOf references the same .resourceInventoriedAs as self.inputOf references)
   * previous (EconomicEvent.inputOf, same as observedInputs)
   * next (EconomicEvent.outputOf, same as observedOutputs)

#### EconomicEvent

*filters:* action, provider, receiver, resourceClassifiedAs, startDate, endDate (include any EconomicEvent that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end) 

*inverse queries:*

   * settles (Settlement.settles)
   * fulfills (Fulfillment.fulfills)
   * satisfies (Satisfaction.satisfies)

*other queries:*

   * previous (Process, EconomicEvent, EconomicResource, see Track and Trace for logic)
   * next (Process, EconomicEvent, EconomicResource, see Track and Trace for logic)

#### EconomicResource

*filters:* excludeZeroQuantities (boolean)

*inverse queries:*

   * contains (EconomicResource.containedIn)
   * intents (Intent.resourceInventoriedAs)
   * commitments (Commitment.resourceInventoriedAs)

*other queries:*

   * economicEvents (either EconomicEvent.resourceInventoriedAs or .toResourceInventoriedAs)
   * previous (EconomicEvent, see Track and Trace)
   * next (EconomicEvent, see Track and Trace)
   * trace (ordered incoming value flows, see Track and Trace for logic)
   * track (ordered outgoing value flows, see Track and Trace for logic)

#### Fulfillment


#### Appreciation


### Plan layer

#### Proposal

*filters:* TBD (possibly some valid date filter, something for location for offers/needs search)

*inverse queries:*

   * publishes: (ProposedIntent.publishes)

#### Intent

*filters:* action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished (default false only?)

*inverse queries:*

   * publishedIn (ProposedIntent.publishedIn)
   * satisfiedBy (Satisfaction.satisfiedBy)
   * (probably some location based queries, TBD)

#### ProposedIntent


#### Agreement

*inverse queries:*

   * commitments (Commitment.clauseOf)
   * unplannedEconomicEvents (EconomicEvent.realizationOf)

*other queries:*

   * involvedAgents (any .provider, .receiver, .inScopeOf on commitments or economicEvents)
   * economicEvents (EconomicEvent.realizationOf, and any EconomicEvents that fulfill Commitments that are .clauseOf the Agreement)

#### Commitment

*filters:* action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate (include any Commitment that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

   * fulfilledBy: (Fulfillment.fulfilledBy)
   * satisfies (Satisfaction.satisfies)
   * (probably some location based queries, TBD)

#### Satisfaction


#### Claim

*filters:* action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate (include any Claim that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

   * settledBy (Settlement.settledBy)

#### Settlement


#### Plan

*filters:* finished (true means all the processes and commitments that are part of the Plan are finished), TBD possibly some date related logic

*inverse queries:*

   * processes (Process.plannedWithin)
   * nonProcessCommitments (Commitment.plannedWithin)
   * independentDemands (Commitment.independentDemandOf)

*other queries:*

   * inScopeOf (all the Process.inScopeOf)
   * involvedAgents (all the Process.involvedAgents)
   * startDate TBD
   * endDate TBD
}

#### Scenario

*filters:* (TBD date logic)

*inverse queries:*

   * plans (Plan.refinementOf)
   * refinements (Scenario.refinementOf))
   * processes (Process.nestedIn)
   * startDate TBD
   * endDate TBD

### Knowledge layer

#### ResourceSpecification

*filters:* resourceClassifiedAs

*inverse queries:*

   * economicResources (EconomicResource.conformsTo)
   * economicEvents (EconomicEvent.resourceConformsTo)
   * commitments (Commitment.resourceConformsTo)
   * intents (Intent.resourceConformsTo)
   * claims (Claim.resourceConformsTo)
   * recipes TBD

#### ProcessSpecification

*inverse queries:*

   * processes (Process.basedOn)

#### RecipeResource

TBD

#### RecipeFlow

TBD

#### RecipeExchange

TBD

#### ScenarioDefinition

*inverse queries:*

   * scenarios (Scenario.definedAs)

#### Action
