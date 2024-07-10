# Query and Filter Naming

## Introduction

**UNDER CONSTRUCTION**

Some key inverses are specified in the VF core, for flexibility of different technical implementations.  Many are not.  This section is to provide guidance on naming for those that are not explicitly specified, to facilitate standard api naming.

This document is not meant to imply that all of these named queries and filters should be implemented in any particular application api!  Most implementations will want to use only a fraction of these.

*Note:* Filters can be applicable to any query that can return more than one of the class.  For example all processes, processes in scope of an agent, processes in a plan, could each use the process filters.

*Status:* Not all of these queries and filters are tested, and there will certainly be other useful queries and filters. If anyone has recommended changes or additions, please start an issue or merge request, or just let us know in the Welcome chat (links on the home page).

## Observation layer

### Agent (also subclasses Person, Organization, EcologicalAgent)

*main queries:*

   * agent
   * agents
   * myAgent
   * person
   * people
   * organization
   * organizations

*filters:* classifiedAs (Organizations only), withinLocation (some geographic boundary, city, region, etc.)

*inverse queries:*

   * processes (Process.inScopeOf)
   * inventoriedEconomicResources (EconomicResource.primaryAccountable)
   * commitmentsAsProvider (Commitment.provider)
   * commitmentsAsReceiver (Commitment.receiver)
   * commitmentsInScope (Commitment.inScopeOf)
   * economicEventsAsProvider (EconomicEvent.provider)
   * economicEventsAsReceiver (EconomicEvent.receiver)
   * economicEventsInScope (EconomicEvent.inScopeOf)
   * intentsAsProvider (Intent.provider)
   * intentsAsReceiver (Intent.receiver)
   * intentsInScope (Intent.inScopeOf)
   * claimsAsProvider (Claim.provider)
   * claimsAsReceiver (Claim.receiver)
   * claimsInScope (Claim.inScopeOf)
   * proposalsInScope (Proposal.inScopeOf)
   * scenariosInScope (Scenario.inScopeOf)
   * relationshipsAsSubject (Relationship.subject)
   * relationshipsAsObject (Relationship.object)

*other queries:*

   * plans (if there is any Process.inScopeOf in the Plan)
   * economicEvents (EconomicEvent.provider or .receiver or .inScopeOf)
   * commitments (Commitment.provider or .receiver or .inScopeOf)
   * intents (Intent.provider or .receiver or .inScopeOf)
   * claims (Claim.provider or .receiver or .inScopeOf)
   * proposals (Proposal.inScopeOf, or a related Intent.provider or Intent.receiver)
   * proposalsTo (Proposals.proposed where ProposedTo.proposedTo is the Agent)
   * relationships (Relationship.object or .subject or .inScopeOf)
   * roles (AgentRelationshipRoles that are AgentRelationship.relationship where the .subject or .object or .inScopeOf is the Agent)

### AgentRelationship

*main queries:*

   * agentRelationship
   * agentRelationships

*filters:* subject, object, role, inScopeOf

### Process

*main queries:*

   * process
   * processes

*filters:* searchString, finished, classifiedAs, inScopeOf, startDate, endDate (include any process that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

*other queries:*

   * economicEvents (EconomicEvent.inputOf or .outputOf)
   * commitments (Commitment.inputOf or .outputOf)
   * intents (Intent.inputOf or .outputOf)
   * unplannedEconomicEvents (all EconomicEvent.inputOf or .outputOf that doesn't fulfill a Commitment)
   * unplannedInputs (all EconomicEvent.inputOf that doesn't fulfill a Commitment)
   * unplannedOutputs (all EconomicEvent.outputOf that doesn't fulfill a Commitment)
   * involvedAgents (all .provider or .receivers or .inScopeOf on Commitments or EconomicEvents or Intents, and self.inScopeOf)
   * workingAgents (all EconomicEvent.provider on an input EconomicEvent with action equal to work)
   * nextProcesses (Processes where .inputOf references the same .resourceInventoriedAs as self.outputOf references)
   * previousProcesses (Processes where .outputOf references the same .resourceInventoriedAs as self.inputOf references)
   * previous (EconomicEvent.inputOf, same as observedInputs)
   * next (EconomicEvent.outputOf, same as observedOutputs)

### EconomicEvent

*main queries:*

   * economicEvent
   * economicEvents

*filters:* searchString, action, provider, receiver, resourceClassifiedAs, startDate, endDate (include any EconomicEvent that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end) 

*inverse queries:*

   * appreciationOf (Appreciation.appreciationWith)
   * appreciationWith (Appreciation.appreciationOf)

*other queries:*

   * reciprocalEvents (EconomicEvents.realizationOf the same Agreement with opposite provider, receiver)
   * previous (Process, EconomicEvent, EconomicResource, see [Track and Trace](../algorithms/track.md) for logic)
   * next (Process, EconomicEvent, EconomicResource, see [Track and Trace](../algorithms/track.md) for logic)
   * trace (ordered incoming value flows, see [Track and Trace](../algorithms/track.md) for logic)
   * track (ordered outgoing value flows, see [Track and Trace](../algorithms/track.md) for logic)

### EconomicResource

*main queries:*

  * economicResource
  * economicResources

*filters:* searchString, accountableAgent, currentLocation, withinLocation (some geographic boundary, city, region, etc.),  excludeZeroQuantities (boolean), classifiedAs, state, trackingIdentifier

*inverse queries:*

   * contains (EconomicResource.containedIn)
   * intents (Intent.resourceInventoriedAs)
   * commitments (Commitment.resourceInventoriedAs)
   * economicEventsInOutFrom (All economic events with the economic resource in the EconomicEvent.resourceInventoriedAs, which includes all process related events, the provider resource in transfers/moves, and raise/lower)
   * economicEventsTo (All economic events with the economic Resource in the EconomicEvent.toResourceInventoriedAs, which is the receiver resource in transfers and moves)

*other queries:*

   * economicEvents (either EconomicEvent.resourceInventoriedAs or .toResourceInventoriedAs)
   * previous (EconomicEvent, see [Track and Trace](../algorithms/track.md) for logic)
   * next (EconomicEvent, see [Track and Trace](../algorithms/track.md) for logic)
   * trace (ordered incoming value flows, see [Track and Trace](../algorithms/track.md) for logic)
   * track (ordered outgoing value flows, see [Track and Trace](../algorithms/track.md) for logic)

### Appreciation

*main queries:*

   * appreciation
   * appreciations

## Plan layer

### Proposal

*main queries:*

   * proposal
   * proposals
   * offers (Proposals where .purpose is offer; or where .publishes has an Intent.provider)
   * requests (Proposals where .purpose is request; or where .reciprocal has an Intent.receiver)


*filters:* inScopeOf, withinLocation (the proposed intents are withinLocation), active (boolean, the current date is within the hasBeginning and hasEnd, inclusive), isOffer (boolean), isRequest (boolean)

*other queries:*

   * isOffer (boolean, true if .purpose is offer; or if a .publishes has a .provider)
   * isRequest (boolean, true if .purpose is request; or if a .publishes has a .receiver)

### Intent

*main queries:*

   * intent
   * intents

*filters:* searchString, action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate, inScopeOf, withinLocation (some geographic boundary, city, region, etc.)

*inverse queries:*

   * (probably some location based queries, TBD)

### Agreement

*main queries:*

   * agreement
   * agreements

*inverse queries:*

   * unplannedEconomicEvents (EconomicEvent.realizationOf)

*other queries:*

   * involvedAgents (any .provider, .receiver, .inScopeOf on commitments or economicEvents)
   * economicEvents (EconomicEvent.realizationOf, and any EconomicEvents that fulfill Commitments that are .clauseOf or .reciprocalClauseOf the Agreement)

### Commitment

*main queries:*

   * commitment
   * commitments

*filters:* searchString, action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate (include any Commitment that overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end), withinLocation (some geographic boundary, city, region, etc.)

*inverse queries:*

*other queries:*

   * involvedAgents (Commitment.provider, .receiver, .inScopeOf if agent)
   * (possibly some location based queries, TBD)

### Claim

*main queries:*

   * claim
   * claims

*filters:* action, provider, receiver, resourceClassifiedAs, resourceConformsTo, finished, startDate, endDate (include any Claim where due overlaps the start date to end date range inclusive; missing start date is from the beginning, missing end date is to the end)

*inverse queries:*

### Plan

*main queries:*

   * plan
   * plans

*filters:* searchString, finished (true means all the processes that are part of the Plan are finished), TBD possibly some date related logic

*inverse queries:*

*other queries:*

   * inScopeOf (all the .plannedWithin Process.inScopeOf)
   * involvedAgents (all the .plannedWithin Process.involvedAgents)
   * startDate (earliest .plannedWithin Process.hasBeginning)
   * endDate (latest .plannedWithin Process.hasEnd)
   * finished (all the .plannedWithin Process.finished are true)

### Scenario

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

## Knowledge layer

### ResourceSpecification

*main queries:*

   * resourceSpecification
   * resourceSpecifications

*filters:* searchString, resourceClassifiedAs

*inverse queries:*

   * conformingResources (EconomicResource.conformsTo)
   * conformingEconomicEvents (EconomicEvent.resourceConformsTo)
   * conformingCommitments (Commitment.resourceConformsTo)
   * conformingIntents (Intent.resourceConformsTo)
   * conformingClaims (Claim.resourceConformsTo)
   * conformingRecipeFlows (RecipeFlow.resourceConformsTo)

### ProcessSpecification

*main queries:*

   * processSpecification
   * processSpecifications

*inverse queries:*

   * conformingProcesses (Process.basedOn)
   * conformingRecipeProcesses (RecipeProcess.processConformsTo)
   * commitmentsRequiringStage (Commitment.stage)
   * resourcesCurrentlyAtStage (EconomicResource.stage)
   * recipeFlowsRequiringStage (RecipeFlow.stage)

### RecipeFlow

*main queries:*

   * recipeFlow
   * reciprFlows

### RecipeExchange

*main queries:*

   * recipeExchange
   * recipeExchanges

### RecipeProcess

*main queries:*

   * recipeProcess
   * recipeProcesses

### ScenarioDefinition

*main queries:*

   * scenarioDefinition
   * scenarioDefinitions

*inverse queries:*

   * scenarios (Scenario.definedAs)

### Action

*main queries:*

   * action
   * actions

### AgentRelationshipRole

*main queries:*

   * agentRelationshipRole
   * agentRelationshipRoles

*inverse queries:*

   * agentRelationships (AgentRelationship.relationship)
