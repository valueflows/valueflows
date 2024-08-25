## 0.14 (August 2024)

- Add Scenario.inScopeOf, .publishedTo, .created, .scenarioIncludes
- Add Scenario examples
- Improve Concepts documentation

## 0.13 (July 2024)

- Remove RoleBehavior (breaking)
- Add cardenalities to ttl file
- Correct implied transfer logic and documentation
- Remove triggeredBy (breaking)
- Remove expiresOn (breaking)
- Remove Appreciation (breaking)
- Add ProposalList.proposedTo

## 0.12 (May 2024)

- Pull external elements into VF namespace
- Use Measure for hasDuration (breaking)
- Add geometry and currency location information
- Add unit information

## 0.11 (April 2024)

- Add Intents as Plan independent demand
- Add Recipe and RecipeGroup
- Fixes to action effects
- Remove vf:uri (breaking)
- Documentation improvements

## 0.10 (February 2024)

- Remove dfc:ProductBatch, pulled info back to EconomicResource (breaking)
- Add reciprocal realization and inverse for economic events
- Add unit local overrides for label, symbol
- w3id fixed
- Documentation: remove Conversations for Action, update Examples

## 0.9 (January 2024)

- Remove Fulfillment, Satisfaction, Settlement M:Ms (breaking)

## 0.8 (January 2024)

- Documentation improvements to intro, added faq
- Add inverses to better support json, json-ld structures
- ProposedIntent and ProposedTo eliminated to better support non-relational (breaking)
- Remove agreedIn (breaking)
- Move ttl file to later fix w3id references
- Remove RecipeResource, moved substitutable into ResourceSpecification (breaking)
- Add ProposalList
- Add AgreementBundle
- Add recipeReciprocalClauseOf and reciprocalClauseOf and their inverses
- Add Agreement.rules
- Fix combine/separate pairsWith

## 0.7 (March 2023)

- Many documentation improvements
- New action: copy
- Actions can be fully data driven
- Trace logic improved and tested in a project
- Added ecological agent, ecological accounting documentation
- Added EconomicEvent.corrects another EconomicEvent

## 0.6 (July 2022)

- Actions to camelCase (breaking)
- Transfer can be part of a Plan
- Combine and separate actions
- Stage and state improvements
- Add toLocation as event effect on resource
- Add RoleBehavior
- Many documentation improvements and dev suggestions

## 0.5 (June 2020)

- Added exchange to recipe
- Added primary agent to economic resource
- Removed pass/fail actions, made state a string
- Cleanup and improvement on actions
- Added ability to further classify Organization
- Added default units and resource classifications to resource specification

## 0.4 (November 2019)

- Replace QUDT with OM2 for quantities and units
- Time cleanup
- SpatialThing
- TTL file cleanup
- Documentation improvements

## 0.3 (August 2019)

- Intent and Proposal
- Recipe and separate specifications
- OWL time
- Claim
- Scenario
- ProductBatch
- Improved quantities
- Stage and state
- Examples
- Json-schemas and graphql references, moved to separate repos
- Much TTL file cleanup and improved property naming
- Many documentation improvements

## Out of the Shadows (March 2017)

Initial release of core concepts and publication as a gitbook.
