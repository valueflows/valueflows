# Complex Examples

#### Transportation with transfer

Bob purchases 30kg of apples from Alice and Claudia transports them (FOB destination).  The receipt of the apples triggers the transfer of ownership.

![transport diagram](../assets/examples/transport-transfer.png)

``` yaml
# Transportation with transfer

'@context':
  - https://git.io/vf-examples-jsonld-context
  - alice: https://alice.example/
    bob: https://bob.example/
    claudia: https://claudia.example/

'@id': rgh:valueflows/valueflows/master/examples/transport-with-transfer.yaml
'@graph':

# Bob purchases 30kg of apples from Alice and Claudia transports them (FOB destination)

  # resources before

  - '@id': alice:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:70ee3034-0d15-4471-8ee3-91c60bb1a9c9
    accountingQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 230
    onhandQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 230

  # alice commits to transfer some apples to bob

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86
    '@type': Commitment
    action: transfer
    resourceClassifiedAs: wd:Q41777871 # haralson apples
    provider: https://alice.example/
    receiver: https://bob.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  # alice and claudia agree on transportation of the apples

  - '@id': urn:uuid:f325a950-5737-488d-b122-8f21114d0eb0
    '@type': Agreement
    skos:note: exchange transportation service for currency

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': Commitment
    action: transfer
    resourceClassifedAs: wd:Q4917 # US Dollar
    provider: https://alice.example/
    receiver: https://claudia.example/
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 10
    clauseOf: urn:uuid:f325a950-5737-488d-b122-8f21114d0eb0 # transportation agreement

  - '@id': urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a
    '@type': Commitment
    skos:note: Transportation of alice's apples from alice's location to bob's location
    action: service
    resourceClassifiedAs: wd:Q7590 # transportation service
    provider: https://claudia.example/
    receiver: https://alice.example/
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1
    clauseOf: urn:uuid:f325a950-5737-488d-b122-8f21114d0eb0 # transportation agreement

  # alice transfers custody of the apples to claudia for transportation

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f87
    '@type': EconomicEvent
    action: transfer-custody
    resourceClassifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    provider: https://alice.example/
    receiver: https://claudia.example/
    resourceInventoriedAs: alice:21f361a6-2375-46bb-b192-c21b5ba833bf # alice's apples
    toResourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95 # claudia's bill of lading on the truck
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  # resources snapshot

  - '@id': alice:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:70ee3034-0d15-4471-8ee3-91c60bb1a9c9
    accountingQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 230
    onhandQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 200

  - '@id': claudia:27be5cab-d740-4194-9298-1661a69d9d95
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    onhandQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  # claudia transports the apples in two hops

  - '@id': claudia:633f6e56-6c7d-4a5b-b9c9-1a8adafd8960
    '@type': Process
    skos:note: Claudia transports the apples

  - '@id': claudia:fd399b37-0740-4a68-a184-1e655021ca21
    '@type': EconomicEvent
    inputOf: claudia:633f6e56-6c7d-4a5b-b9c9-1a8adafd8960
    action: pickup
    resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95 
    provider: https://claudia.example/
    receiver: https://claudia.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  - '@id': claudia:57f1c1d0-432e-4bfa-9d32-002b8955a708
    '@type': EconomicEvent
    outputOf: claudia:633f6e56-6c7d-4a5b-b9c9-1a8adafd8960
    action: dropoff
    resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
    provider: https://claudia.example/
    receiver: https://claudia.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  - '@id': claudia:c404cff5-19c7-453d-b0d8-d8e96055bd0c
    '@type': Process
    skos:note: Claudia transports the apples

  - '@id': claudia:856c43b1-0a63-445f-a56f-707b257f086e
    '@type': EconomicEvent
    inputOf: claudia:c404cff5-19c7-453d-b0d8-d8e96055bd0c
    action: pickup
    resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95 
    provider: https://claudia.example/
    receiver: https://claudia.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  - '@id': claudia:9cb4944b-d26d-4774-a530-d18f2747c0d8
    '@type': EconomicEvent
    outputOf: claudia:c404cff5-19c7-453d-b0d8-d8e96055bd0c
    action: dropoff
    resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
    provider: https://claudia.example/
    receiver: https://claudia.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  - '@id': urn:uuid:68cabaf3-deb8-4bd5-a439-798263abe35a
    '@type': EconomicEvent
    skos:note: Transportation of alice's apples from alice's location to bob's location
    outputOf: claudia:c404cff5-19c7-453d-b0d8-d8e96055bd0c
    action: service
    resourceClassifiedAs: wd:Q7590 # transportation service
    provider: https://claudia.example/
    receiver: https://alice.example/
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1

  - '@id': urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58
    '@type': Fulfillment
    fulfills: urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a # the commitment
    fulfilledBy: urn:uuid:68cabaf3-deb8-4bd5-a439-798263abe35a # the economic event
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1

  # bob receives the apples

  - '@id': urn:uuid:7a63ea10-b1c3-441a-9a08-fb8630c02614
    '@type': EconomicEvent
    action: transfer-custody
    resourceClassifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
    toResourceInventoriedAs: bob:9bd19194-a36d-4a1f-896b-8082887962cb
    provider: https://claudia.example/
    receiver: https://bob.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  # receipt of the apples triggers finalizing the transfer of ownership

  - '@id': urn:uuid:ad56a7ed-be3c-4937-a3fb-0f156bcd2c47
    '@type': EconomicEvent
    action: transfer-all-rights
    resourceClassifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    provider: https://alice.example/
    receiver: https://bob.example/
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30
    triggeredBy: urn:uuid:7a63ea10-b1c3-441a-9a08-fb8630c02614

  - '@id': urn:uuid:6f438393-7f87-4914-806c-e23a4fd15e89
    '@type': Fulfillment
    fulfills: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86 # the commitment
    fulfilledBy: urn:uuid:ad56a7ed-be3c-4937-a3fb-0f156bcd2c47 # the economic event
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  # resources snapshot

  - '@id': alice:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:70ee3034-0d15-4471-8ee3-91c60bb1a9c9 # only the possessed amount
    accountingQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 200
    onhandQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 200

  - '@id': bob:9bd19194-a36d-4a1f-896b-8082887962cb
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:b52a5815-fae9-43bf-be95-833b95dc0ada # only the possessed amount
    accountingQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30
    onhandQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 30

  - '@id': claudia:27be5cab-d740-4194-9298-1661a69d9d95 # claudia's bill of lading on the truck
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    onhandQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 0

  # alice pays claudia for the transportation service

  - '@id': urn:uuid:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9
    '@type': EconomicEvent
    action: transfer
    resourceClassifedAs: wd:Q4917 # US Dollar
    resourceInventoriedAs: alice:daa2ec3b-2c1a-4eb1-839f-8dcec1a1f93a # alice's bank account
    toResourceInventoriedAs: claudia:bd5806d6-4a36-45b9-b3b6-3e7d361a5a14 # claudia's bank account
    provider: https://alice.example/
    receiver: https://claudia.example/
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 10

  - '@id': urn:uuid:fbff9852-36ca-4364-a943-bc0b49e1cab5
    '@type': Fulfillment
    fulfills: urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083 # the commitment
    fulfilledBy: urn:uuid:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9 # the economic event
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 10
```

#### Manufacturing and workflow

A component is produced (manufacturing pattern) and tested (workflow pattern).  QT ("quality testing") gives pass and/or fail outputs.  The failed components are passed back into a source resource (because it can be re-used as an input as part of the QT process, to be used in this or the next manufacturing run.

The QT needs the stage and state of the input component resource, because QT would only be done on components that are made and not tested yet.  By the same token, components would only be sent into the next assembly process if they have passed the QT process/stage (not part of this example).

This example includes recipe, plan, and actuals.

![stage-state diagram](../assets/examples/stage-state.png)

``` yaml
# Example: Workflow recipe, plan, execution, including stage and state usage

'@context':
  - https://git.io/vf-examples-jsonld-context
  - mfg: https://manufacturing.example/

'@id': rgh:valueflows/valueflows/master/examples/workflow-stage-state.yaml
'@graph':

  # specifications

  - '@id': urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': ResourceSpecification
    name: Bucket white 5 gallon
    unitOfResource: om2:one
    substitutable: true

  - '@id': urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58
    '@type': ResourceSpecification
    name: Thermoplastic polymer white
    unitOfResource: om2:kilogram
    substitutable: true

  - '@id': urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a
    '@type': ResourceSpecification
    name: Injection molding machine
    unitOfResource: om2:one
    unitOfEffort: om2:hour
    substitutable: true

  - '@id': mfg:27be5cab-d740-4194-9298-1661a69d9d95
    '@type': ProcessSpecification
    name: Make injection molded buckets

  - '@id': mfg:6fb358a3-2859-4d6a-a4fa-431603ee70f5
    '@type': ProcessSpecification
    name: QT injection molded buckets

  # resources before

  - '@id': mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    name: Bucket white 5 gallon
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3
    accountingQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 320
    state: pass
    stage: mfg:6fb358a3-2859-4d6a-a4fa-431603ee70f5 # QT

  - '@id': mfg:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86
    '@type': EconomicResource
    name: Thermoplastic polymer white
    resourceConformsTo: urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58
    accountingQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 2455

  - '@id': mfg:23799c14-c368-4653-a584-83bf9ae8b82a
    '@type': EconomicResource
    name: Injection molding maching
    resourceConformsTo: urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a
    trackingIdentifier: DDE098989099911
    accountingQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1
    unitOfEffort: om2:hour

  # the recipe (here the recipe runs "backwards" from the final product, similar to a BOM)

  - '@id': mfg:ac9ec98d-db80-44dc-97be-7aa149b2fe5d
    '@type': RecipeResource
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # bucket

  - '@id': mfg:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': RecipeFlow
    recipeOutputOf: mfg:a8356625-bf64-4c16-9099-28aa1b718c4b
    action: modify
    state: pass
    recipeFlowResource: mfg:ac9ec98d-db80-44dc-97be-7aa149b2fe5d
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 500

  - '@id': mfg:a3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': RecipeResource
    resourceConformsTo: urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58 # polymer

  - '@id': mfg:54b814ee-62dc-40c1-bb96-f8582aa4f771
    '@type': RecipeFlow
    recipeOutputOf: mfg:a8356625-bf64-4c16-9099-28aa1b718c4b
    action: produce
    state: fail
    recipeFlowResource: mfg:a3be5259d-10f0-431c-9fec-9c0c15a461d3
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 0

  - '@id': mfg:a8356625-bf64-4c16-9099-28aa1b718c4b
    '@type': RecipeProcess
    name: QT bucket white 5 gallon - minimum run
    processConformsTo: mfg:6fb358a3-2859-4d6a-a4fa-431603ee70f5 # the process specification
    time:hasDuration:
      time:unitType unit:Hour
      time:numericDuration 1

  - '@id': mfg:2342d456-5d6f-46d5-a7ed-3ac7bfd5a86c
    '@type': RecipeFlow
    recipeInputOf: mfg:a8356625-bf64-4c16-9099-28aa1b718c4b
    action: accept
    recipeFlowResource: mfg:b75d8f6a-e2df-4e52-b36d-1a22a66f4ead
    stage: mfg:27be5cab-d740-4194-9298-1661a69d9d95 # 'make' process specification
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 500

  - '@id': mfg:b75d8f6a-e2df-4e52-b36d-1a22a66f4ead
    '@type': RecipeResource
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # bucket

  - '@id': mfg:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': RecipeFlow
    recipeOutputOf: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: produce
    recipeFlowResource: mfg:b75d8f6a-e2df-4e52-b36d-1a22a66f4ead
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 500

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': RecipeProcess
    name: Make bucket white 5 gallon - minimum run
    processConformsTo: mfg:27be5cab-d740-4194-9298-1661a69d9d95 # the process specification
    time:hasDuration:
      time:unitType unit:Hour
      time:numericDuration 7

  - '@id': mfg:9bd19194-a36d-4a1f-896b-8082887962cb
    '@type': RecipeFlow
    recipeInputOf: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: consume
    recipeFlowResource: mfg:6405b8ad-0ac2-4d58-abdb-0808903c78ad
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 450

  - '@id': mfg:6405b8ad-0ac2-4d58-abdb-0808903c78ad
    '@type': RecipeResource
    resourceConformsTo: urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58 # polymer

  - '@id': mfg:60f4204e-b8d2-4026-8577-102c3f82c0af
    '@type': RecipeFlow
    recipeInputOf: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: use
    recipeFlowResource: mfg:e02e3f6b-420a-4ba8-89b0-909d7363ce07
    effortQuantity:
      om2:hasUnit: om2:hour
      om2:hasNumericalValue: 5.5

  - '@id': mfg:e02e3f6b-420a-4ba8-89b0-909d7363ce07
    '@type': RecipeResource
    resourceConformsTo: urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a # injection molding machine

  # the plan (shown running "forwards")

  - '@id': mfg:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    '@type': Plan
    name: Buckets run number 381
    due: 2019-04-08T17:00:00-5:00

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': Commitment
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58 # polymer
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 900

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': Commitment
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: use
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a # injection molding machine
    effortQuantity:
      om2:hasUnit: om2:hour
      om2:hasNumericalValue: 11

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Make bucket white 5 gallon
    plannedWithin: mfg:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    basedOn: mfg:27be5cab-d740-4194-9298-1661a69d9d95 # the process specification
    time:hasDuration:
      time:unitType unit:Hour
      time:numericDuration 14

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': Commitment
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # bucket
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1000

  - '@id': mfg:fbff9852-36ca-4364-a943-bc0b49e1cab5
    '@type': Commitment
    inputOf: mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9
    action: accept
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # bucket
    stage: mfg:27be5cab-d740-4194-9298-1661a69d9d95 # 'make' process specification
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1000

  - '@id': mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9
    '@type': Process
    name: QT bucket white 5 gallon
    plannedWithin: mfg:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    basedOn: mfg:6fb358a3-2859-4d6a-a4fa-431603ee70f5 # the process specification
    time:hasDuration:
      time:unitType unit:Hour
      time:numericDuration 14

  - '@id': mfg:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': Commitment
    independentDemandOf: mfg:8e5fe80d-a769-4bd5-89e5-2136d33eab9f # the plan
    outputOf: mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9
    action: modify
    state: pass
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # bucket
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1000

  - '@id': mfg:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': Commitment
    outputOf: mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58 # polymer
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 0

  # manufacture and test the buckets according to plan

  - '@id': mfg:e18c808c-929a-450d-9d0d-3b3f531bc126
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84 # planned make process
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86 # polymer stock
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 925

  - '@id': mfg:5d2fe7da-b91b-4dab-91d9-68db80c1feb7
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84 # planned make process
    action: use
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:23799c14-c368-4653-a584-83bf9ae8b82a # the machine
    effortQuantity:
      om2:hasUnit: om2:hour
      om2:hasNumericalValue: 10.7

  - '@id': mfg:8791913c-0152-4c32-bb3f-f25d61df736c
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84 # planned make process
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # buckets
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1000

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9 # planned qt process
    action: accept
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 #buckets
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1000

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicEvent
    outputOf: mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9 # planned qt process
    action: modify
    state: pass
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # buckets
    resourceQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 998

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicEvent
    outputOf: mfg:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9 # planned qt process
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86 # polymer stock
    resourceQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 1.8

  # resources after

  - '@id': mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    name: Bucket white 5 gallon
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3
    accountingQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1318
    state: pass
    stage: mfg:6fb358a3-2859-4d6a-a4fa-431603ee70f5 #QT

  - '@id': mfg:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86
    '@type': EconomicResource
    name: Thermoplastic polymer white
    resourceConformsTo: urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58
    accountingQuantity:
      om2:hasUnit: om2:kilogram
      om2:hasNumericalValue: 1531.8

  - '@id': mfg:23799c14-c368-4653-a584-83bf9ae8b82a
    '@type': EconomicResource
    name: Injection molding maching
    resourceConformsTo: urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a
    trackingIdentifier: DDE098989099911
    accountingQuantity:
      om2:hasUnit: om2:one
      om2:hasNumericalValue: 1
    unitOfEffort: om2:hour
```
