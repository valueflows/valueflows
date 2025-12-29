# Query Naming

*This section is non-normative.*

## Introduction

Some key inverses are specified in the VF core, for flexibility of different technical implementations.  Many are not.  This section is to provide guidance on naming for those that are not explicitly specified, as well as other basic and more involved queries, to facilitate standard api naming.

This document is *NOT* meant to imply that all of these named methods should be implemented in any particular application api.  Most implementations will want to use only a fraction of these.

*Status:* Many of these queries are not tested, and there will certainly be other useful queries. If anyone has recommended changes or additions, please start an issue or pull request, or just let us know in the Welcome chat (links on the home page).

## Observation layer

### Agent
**(also subclasses Person, Organization, EcologicalAgent)**

*main queries:*

   * agent
   * agents
   * myAgent
   * person
   * persons
   * organization
   * organizations

*inverse queries:*

   * processes (Process.inScopeOf)
   * inventoriedEconomicResources (EconomicResource.primaryAccountable)
   * commitmentsAsProvider (Commitment.provider)
   * commitmentsAsReceiver (Commitment.receiver)
   * economicEventsAsProvider (EconomicEvent.provider)
   * economicEventsAsReceiver (EconomicEvent.receiver)
   * intentsAsProvider (Intent.provider)
   * intentsAsReceiver (Intent.receiver)
   * claimsAsProvider (Claim.provider)
   * claimsAsReceiver (Claim.receiver)

*other queries:*

   * plans (if there is any Process.inScopeOf in a Plan)
   * economicEvents (EconomicEvent.provider or .receiver or .inputOf.inScopeOf or .outputOf.inScopeOf)
   * commitments (Commitment.provider or .receiver or .receiver or .inputOf.inScopeOf or .outputOf.inScopeOf)
   * intents (Intent.provider or .receiver or .receiver or .inputOf.inScopeOf or .outputOf.inScopeOf)
   * claims (Claim.provider or .receiver)
   * proposals (a related Intent.provider or Intent.receiver)
   * proposalsTo (Proposals.proposed where ProposedTo.proposedTo is the Agent)

### Process

*main queries:*

   * process
   * processes

*inverse queries:*

*other queries:*

   * economicEvents (EconomicEvent.inputOf or .outputOf)
   * commitments (Commitment.inputOf or .outputOf)
   * intents (Intent.inputOf or .outputOf)
   * unplannedEconomicEvents (all EconomicEvent.inputOf or .outputOf that don't fulfill a Commitment)
   * unplannedInputs (all EconomicEvent.inputOf that don't fulfill a Commitment)
   * unplannedOutputs (all EconomicEvent.outputOf that don't fulfill a Commitment)
   * involvedAgents (all .provider or .receiver on .hasInput or .hasOutput Commitments or EconomicEvents or Intents, and self.inScopeOf)
   * workingAgents (all EconomicEvent.provider on a .hasInput EconomicEvent with action equal to work)
   * previous (EconomicEvent.inputOf)
   * next (EconomicEvent.outputOf)

### EconomicEvent

*main queries:*

   * economicEvent
   * economicEvents

*inverse queries:*

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

*inverse queries:*

   * intents (Intent.resourceInventoriedAs)
   * commitments (Commitment.resourceInventoriedAs)
   * economicEventsFrom (All economic events with the economic resource in the EconomicEvent.resourceInventoriedAs)
   * economicEventsTo (All economic events with the economic Resource in the EconomicEvent.toResourceInventoriedAs)

*other queries:*

   * economicEvents (either EconomicEvent.resourceInventoriedAs or .toResourceInventoriedAs)
   * previous (EconomicEvent, see [Track and Trace](../algorithms/track.md) for logic)
   * next (EconomicEvent, see [Track and Trace](../algorithms/track.md) for logic)
   * trace (ordered incoming value flows, see [Track and Trace](../algorithms/track.md) for logic)
   * track (ordered outgoing value flows, see [Track and Trace](../algorithms/track.md) for logic)

## Plan layer

### Proposal

*main queries:*

   * proposal
   * proposals
   * offers (Proposals where .purpose is offer)
   * requests (Proposals where .purpose is request)

*other queries:*

   * isOffer (boolean, true if .purpose is offer)
   * isRequest (boolean, true if .purpose is request)
   * isWithin (Proposal.eligibleLocation)

### Intent

*main queries:*

   * intent
   * intents

*inverse queries:*

   * satisfiedBy (EconomicEvent.satisfies and Commitment.satisfies)

### Agreement

*main queries:*

   * agreement
   * agreements

*inverse queries:*

   * unplannedEconomicEvents (EconomicEvent.realizationOf)

*other queries:*

   * involvedAgents (any .provider, .receiver on Commitment or EconomicEvent)
   * economicEvents (EconomicEvent.realizationOf, and any EconomicEvents that fulfill Commitments that are .clauseOf or .reciprocalClauseOf the Agreement)

### Commitment

*main queries:*

   * commitment
   * commitments

*inverse queries:*

   * fulfilledBy (EconomicEvent.fulfills)

*other queries:*

   * involvedAgents (Commitment.provider, .receiver)

### Claim

*main queries:*

   * claim
   * claims

*inverse queries:*

   * settledBy (EconomicEvent.settles)

### Plan

*main queries:*

   * plan
   * plans

*inverse queries:*

*other queries:*

   * inScopeOf (all the .plannedWithin Process.inScopeOf)
   * involvedAgents (all the .plannedWithin Process.involvedAgents)
   * startDate (earliest .plannedWithin Process.hasBeginning)
   * endDate (latest .plannedWithin Process.hasEnd)
   * finished (all the .plannedWithin Process.finished are true)

## Knowledge layer

### ResourceSpecification

*main queries:*

   * resourceSpecification
   * resourceSpecifications

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

### Action

*main queries:*

   * action
   * actions
