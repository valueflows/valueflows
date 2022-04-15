# Query and Filter Naming

### Introduction

Although queries and query filters are not specified in the RDF core, this set of guidelines should be used, to facilitate standard api naming.  It is possible that at some point they will be included in the formal VF namespace.

This document is not meant to imply that all of these named queries and filters should be implemented in any particular application api.

*Note:* Filters can be applicable to any query that can return more than one of the class.  For example all processes, processes in scope of an agent, processes in a plan, could each use the process filters.

*Status:* Not all of these queries and filters are tested, and there will certainly be other useful queries and filters. If anyone has recommended changes or additions, please start an issue or merge request, or just let us know in the Welcome chat (links on the home page).

### Observation layer

#### Agent (also subclasses Person, Organization)

*main queries:*

   * agent
   * agents
   * myAgent
   * person
   * people
   * organization
   * organizations

*filters:* classifiedAs (Organizations only), locatedIn (some geographic boundary, city, region, etc.)

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
   * roles (AgentRelationshipRoles that are AgentRelationship.relationship where the .subject or .object or .inScopeOf is the Agent)

#### AgentRelationship

*main queries:*

   * agentRelationship
   * agentRelationships

*filters:* subject, object, role, inScopeOf

#### Process

*main queries:*

   * process
   * processes

*filters:* searchString, finished, classifiedAs, inScopeOf, startDate, endDate (include any process that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

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
   * workingAgents (any EconomicEvent.provider on an input EconomicEvent with action equal to work)
   * nextProcesses (Processes where .inputOf references the same .resourceInventoriedAs as self.outputOf references)
   * previousProcesses (Processes where .outputOf references the same .resourceInventoriedAs as self.inputOf references)
   * previous (EconomicEvent.inputOf, same as observedInputs)
   * next (EconomicEvent.outputOf, same as observedOutputs)

#### EconomicEvent

*main queries:*

   * economicEvent
   * economicEvents

*filters:* searchString, action, provider, receiver, resourceClassifiedAs, startDate, endDate (include any EconomicEvent that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end) 

*inverse queries:*

   * settles (Settlement.settles)
   * fulfills (Fulfillment.fulfills)
   * satisfies (Satisfaction.satisfies)
   * appreciationOf (Appreciation.appreciationOf)
   * appreciatedBy (Appreciation.appreciatedBy)

*other queries:*

   * reciprocalEvents (EconomicEvents.realizationOf the same Agreement with opposite provider, receiver)
   * previous (Process, EconomicEvent, EconomicResource, see [Track and Trace](../algorithms/track.md) for logic)
   * next (Process, EconomicEvent, EconomicResource, see [Track and Trace](../algorithms/track.md) for logic)
   * trace (ordered incoming value flows, see [Track and Trace](../algorithms/track.md) for logic)
   * track (ordered outgoing value flows, see [Track and Trace](../algorithms/track.md) for logic)

#### EconomicResource

*main queries:*

  * economicResource
  * economicResources

*filters:* searchString, accountableAgent, currentLocation, withinLocation,  excludeZeroQuantities (boolean), classifiedAs, state, trackingIdentifier

*inverse queries:*

   * contains (EconomicResource.containedIn)
   * intents (Intent.resourceInventoriedAs)
   * commitments (Commitment.resourceInventoriedAs)

*other queries:*

   * economicEvents (either EconomicEvent.resourceInventoriedAs or .toResourceInventoriedAs)
   * previous (EconomicEvent, see Track and Trace)
   * next (EconomicEvent, see Track and Trace)
   * trace (ordered incoming value flows, see [Track and Trace](../algorithms/track.md) for logic)
   * track (ordered outgoing value flows, see [Track and Trace](../algorithms/track.md) for logic)

#### Fulfillment

*main queries:*

   * fulfillment
   * fulfillments

#### Appreciation

*main queries:*

   * appreciation
   * appreciations

### Plan layer

#### Proposal

*main queries:*

   * proposal
   * proposals

*filters:* inScopeOf, withinLocation (the proposed intents are withinLocation), active (boolean, the current date is within the hasBeginning and hasEnd, inclusive), offer (boolean, the non-reciprocal intents have provider), request (boolean, the non-reciprocal intents have receiver)

*inverse queries:*

   * publishes: (ProposedIntent.publishes)

#### Intent

*main queries:*

   * intent
   * intents

*filters:* searchString, action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate, inScopeOf, withinLocation

*inverse queries:*

   * publishedIn (ProposedIntent.publishedIn)
   * satisfiedBy (Satisfaction.satisfiedBy)
   * (probably some location based queries, TBD)

#### ProposedIntent

*main queries:*

   * proposedIntent
   * proposedIntents

#### Agreement

*main queries:*

   * agreement
   * agreements

*inverse queries:*

   * commitments (Commitment.clauseOf)
   * unplannedEconomicEvents (EconomicEvent.realizationOf)

*other queries:*

   * involvedAgents (any .provider, .receiver, .inScopeOf on commitments or economicEvents)
   * economicEvents (EconomicEvent.realizationOf, and any EconomicEvents that fulfill Commitments that are .clauseOf the Agreement)

#### Commitment

*main queries:*

   * commitment
   * commitments

*filters:* searchString, action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate (include any Commitment that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

   * fulfilledBy: (Fulfillment.fulfilledBy)
   * satisfies (Satisfaction.satisfies)
   * (probably some location based queries, TBD)

*other queries:*

   * involvedAgents (Commitment.provider, .receiver, .inScopeOf if agent)

#### Satisfaction

*main queries:*

   * satisfaction
   * satisfactions

#### Claim

*main queries:*

   * claim
   * claims

*filters:* action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate (include any Claim that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

   * settledBy (Settlement.settledBy)

#### Settlement

*main queries:*

   * settlement
   * settlements

#### Plan

*main queries:*

   * plan
   * plans

*filters:* searchString, finished (true means all the processes and commitments that are part of the Plan are finished), TBD possibly some date related logic

*inverse queries:*

   * processes (Process.plannedWithin)
   * nonProcessCommitments (Commitment.plannedWithin)
   * independentDemands (Commitment.independentDemandOf)

*other queries:*

   * inScopeOf (all the Process.inScopeOf)
   * involvedAgents (all the Process.involvedAgents)
   * startDate TBD
   * endDate TBD

#### Scenario

*main queries:*

   * scenario
   * scenarios

*filters:* searchString, (TBD date logic)

*inverse queries:*

   * plans (Plan.refinementOf)
   * refinements (Scenario.refinementOf))
   * processes (Process.nestedIn)
   * startDate TBD
   * endDate TBD

### Knowledge layer

#### ResourceSpecification

*main queries:*

   * resourceSpecification
   * resourceSpecifications

*filters:* searchString, resourceClassifiedAs

*inverse queries:*

   * economicResources (EconomicResource.conformsTo)
   * economicEvents (EconomicEvent.resourceConformsTo)
   * commitments (Commitment.resourceConformsTo)
   * intents (Intent.resourceConformsTo)
   * claims (Claim.resourceConformsTo)
   * recipes TBD

#### ProcessSpecification

*main queries:*

   * processSpecification
   * processSpecifications

*inverse queries:*

   * processes (Process.basedOn)

#### RecipeResource

*main queries:*

   * recipeResource
   * recipeResources

TBD

#### RecipeFlow

*main queries:*

   * recipeFlow
   * reciprFlows

TBD

#### RecipeExchange

*main queries:*

   * recipeExchange
   * recipeExchanges

TBD

#### RecipeProcess

*main queries:*

   * recipeProcess
   * recipeProcesses

TBD

#### ScenarioDefinition

*main queries:*

   * scenarioDefinition
   * scenarioDefinitions

*inverse queries:*

   * scenarios (Scenario.definedAs)

#### Action

*main queries:*

   * action
   * actions

#### AgentRelationshipRole

*main queries:*

   * agentRelationshipRole
   * agentRelationshipRoles

*inverse queries:*

   * agentRelationships (AgentRelationship.relationship)

#### RoleBehavior

*main queries:*

   * roleBehavior
   * roleBehaviors

*inverse Queries:*

   * agentRelationshipRoles (agentRelationshipRole.roleBehavior)
