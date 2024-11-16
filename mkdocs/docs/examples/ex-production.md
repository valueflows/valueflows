# Production Examples

#### Manufacturing

Simple one-process manufacturing with typical inputs and outputs.

![manufacturing diagram reflecting the yaml below](../assets/examples/proc-mfg.png)

``` yaml
# Example: Simple manufacturing process

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    mfg: https://manufacturing.example/

'@graph':

  # Economic resources before

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    conformsTo: https://www.opendesk.cc/lean/desk # desk
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 8

  - '@id': mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    conformsTo: wd:Q219803 # plywood
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 130
    note: 4 x 8 sheet of 1/2 inch plywood

  - '@id': mfg:6b97b1be-8e07-44ac-82e5-214f1b2aaf33
    '@type': EconomicResource
    conformsTo: wd:Q2101564 # desk design specification
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicResource
    conformsTo: wd:Q13231055 # CNC machine
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  # Production

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Make the lean desk

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # plywood sheets
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 3
    hasInput:

    - '@id': mfg:b90b0b77-09a2-42e2-8bd4-e9ae2c1c6172
      '@type': EconomicEvent
      action: use
      provider: https://manufacturing.example/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:52f0e212-3c4f-4d27-b345-5e964c135824 # CNC machine
      effortQuantity:
        hasUnit: hour
        hasNumericalValue: 3.5

    - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
      '@type': EconomicEvent
      action: cite
      provider: https://makezine.com/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:6b97b1be-8e07-44ac-82e5-214f1b2aaf33 # desk design specification
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': mfg:6f438393-7f87-4914-806c-e23a4fd15e89
      '@type': EconomicEvent
      action: work
      provider: https://alice.example/
      receiver: https://manufacturing.example/
      resourceConformsTo: wd:Q192047 # machining
      effortQuantity:
        hasUnit: hour
        hasNumericalValue: 7

    hasOutput:

    - '@id': mfg:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
      '@type': EconomicEvent
      action: produce
      provider: https://manufacturing.example/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # desk
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

  # Economic resources after

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    resourceConformsTo: https://www.opendesk.cc/lean/desk # desk
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 9

  - '@id': mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    conformsTo: wd:Q219803 # plywood
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 127
    note: 4 x 8 sheet of 1/2 inch plywood

  - '@id': mfg:6b97b1be-8e07-44ac-82e5-214f1b2aaf33
    '@type': EconomicResource
    conformsTo: wd:Q2101564 # desk design specification
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicResource
    conformsTo: wd:Q13231055 # CNC machine
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
```
Alternate view of this manufacturing example, using the relational directionality between Process and EconomicEvent.
``` yaml
# Example: Simple manufacturing process

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    mfg: https://manufacturing.example/

'@graph':

  # Production

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Make the lean desk

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # plywood sheets
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 3

  - '@id': mfg:b90b0b77-09a2-42e2-8bd4-e9ae2c1c6172
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: use
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:52f0e212-3c4f-4d27-b345-5e964c135824 # CNC machine
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 3.5

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: cite
    provider: https://makezine.com/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:6b97b1be-8e07-44ac-82e5-214f1b2aaf33 # desk design specification
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': mfg:6f438393-7f87-4914-806c-e23a4fd15e89
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: work
    provider: https://alice.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: wd:Q192047 # machining
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 7

  - '@id': mfg:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # desk
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
```

#### Service

Simple delivery of a service with typical inputs and outputs.

![service diagram reflecting the yaml below](../assets/examples/proc-svc.png)

``` yaml
# Example: Simple service process

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    bob: https://bob.example/
    carol: https://carol.example/
    training: https://training.example/

'@graph':

  # Economic resources and specifications

  - '@id': training:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': ResourceSpecification
    name: 3D printing 1 day hands-on workshop
    classifiedAs: [ wd:Q27556165, wd:Q229367 ] # workshop, 3d printing

  - '@id': training:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': ResourceSpecification
    name: 3D printing workshop handout
    note: 3D printing class handout for the one day hands-on class, including exercises and review

  - '@id': training:f438393-7f87-4914-806c-e23a4fd15e89
    '@type': ResourceSpecification
    name: 3D printing training
    note: In-house certified training on 3D printing

  - '@id': training:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    conformsTo: wd:Q53953506 # 3D printer
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': training:6b97b1be-8e07-44ac-82e5-214f1b2aaf33
    '@type': EconomicResource
    conformsTo: training:52f0e212-3c4f-4d27-b345-5e964c135824 # 3D printing class handout
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 100

  # Service delivery

  - '@id': training:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Give the 3D printing workshop
    hasInput:

    - '@id': training:b90b0b77-09a2-42e2-8bd4-e9ae2c1c617
      '@type': EconomicEvent
      action: consume
      provider: https://training.example/
      receiver: https://training.example/
      resourceInventoriedAs: training:6b97b1be-8e07-44ac-82e5-214f1b2aaf33 # workshop handout
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 3

    - '@id': training:b52a5815-fae9-43bf-be95-833b95dc0adb
      '@type': EconomicEvent
      action: use
      provider: https://training.example/
      receiver: https://training.example/
      resourceInventoriedAs: training:e1721a61-cd47-4556-84b9-8b1b81da15bf # 3D printer
      effortQuantity:
        hasUnit: hour
        hasNumericalValue: 8

    - '@id': training:a8236bbb-81e0-422d-9861-56d2417db0fb
      '@type': EconomicEvent
      action: work
      provider: https://training.example/
      receiver: https://training.example/
      resourceConformsTo: training:f438393-7f87-4914-806c-e23a4fd15e89 # 3D printer training
      effortQuantity:
        hasUnit: hour
        hasNumericalValue: 8

    hasOutput:

    - '@id': training:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
      '@type': EconomicEvent
      action: deliverService
      provider: https://training.example/
      receiver: https://alice.example/
      resourceConformsTo: training:3129ca8b-fcda-45be-bbda-294dc924d3b9 # one day 3D printing workshop
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': training:583e83d9-a46d-44ff-bd71-88513a1d83c0
      '@type': EconomicEvent
      action: deliverService
      provider: https://training.example/
      receiver: https://bob.example/
      resourceConformsTo: training:3129ca8b-fcda-45be-bbda-294dc924d3b9 # one day 3D printing workshop
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': training:e4783bef-9006-490c-9c03-389272c7444d
      '@type': EconomicEvent
      action: deliverService
      provider: https://training.example/
      receiver: https://carol.example/
      resourceConformsTo: training:3129ca8b-fcda-45be-bbda-294dc924d3b9 # one day 3D printing workshop
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1
```
Alternate view of this service example, using the relational directionality between Process and EconomicEvent.
``` yaml
# Example: Simple service process

'@context':
  - h'@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    bob: https://bob.example/
    carol: https://carol.example/
    training: https://training.example/

'@graph':
  # Service delivery

  - '@id': training:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Give the 3D printing workshop

  - '@id': training:b90b0b77-09a2-42e2-8bd4-e9ae2c1c617
    '@type': EconomicEvent
    inputOf: training:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://training.example/
    receiver: https://training.example/
    resourceInventoriedAs: training:6b97b1be-8e07-44ac-82e5-214f1b2aaf33 # workshop handout
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 3

  - '@id': training:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': EconomicEvent
    inputOf: training:02b39a30-3e04-4305-9656-7f261aa63c84
    action: use
    provider: https://training.example/
    receiver: https://training.example/
    resourceInventoriedAs: training:e1721a61-cd47-4556-84b9-8b1b81da15bf # 3D printer
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 8

  - '@id': training:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: training:02b39a30-3e04-4305-9656-7f261aa63c84
    action: work
    provider: https://training.example/
    receiver: https://training.example/
    resourceConformsTo: training:f438393-7f87-4914-806c-e23a4fd15e89 # 3D printer training
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 8

  - '@id': training:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
    '@type': EconomicEvent
    outputOf: training:02b39a30-3e04-4305-9656-7f261aa63c84
    action: deliverService
    provider: https://training.example/
    receiver: https://alice.example/
    resourceConformsTo: training:3129ca8b-fcda-45be-bbda-294dc924d3b9 # one day 3D printing workshop
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': training:583e83d9-a46d-44ff-bd71-88513a1d83c0
    '@type': EconomicEvent
    outputOf: training:02b39a30-3e04-4305-9656-7f261aa63c84
    action: deliverService
    provider: https://training.example/
    receiver: https://bob.example/
    resourceConformsTo: training:3129ca8b-fcda-45be-bbda-294dc924d3b9 # one day 3D printing workshop
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': training:e4783bef-9006-490c-9c03-389272c7444d
    '@type': EconomicEvent
    outputOf: training:02b39a30-3e04-4305-9656-7f261aa63c84
    action: deliverService
    provider: https://training.example/
    receiver: https://carol.example/
    resourceConformsTo: training:3129ca8b-fcda-45be-bbda-294dc924d3b9 # one day 3D printing workshop
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
```
#### Workflow production

Simple repair process with typical inputs and outputs.  The same economic resource goes into and out of the process(es).

![workflow diagram reflecting the yaml below](../assets/examples/proc-workflow.png)

``` yaml
# Example: Simple workflow process

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    repair: https://auto-repair.example/

'@graph':

  # Economic resource before

  - '@id': alice:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    resourceConformsTo: http://opensourceecology.org/wiki/Wikispeed_SGT01 # car
    trackingIdentifier: JHMCD38698S061469
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  # Repair process

  - '@id': repair:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Oil change JHMCD38698S061469
    note: Check over car, change oil (standard quantity).
    hasInput:

    - '@id': repair:a8236bbb-81e0-422d-9861-56d2417db0fb
      '@type': EconomicEvent
      action: accept
      provider: https://alice.example/
      receiver: https://auto-repair.example/
      resourceInventoriedAs: alice:e1721a61-cd47-4556-84b9-8b1b81da15bf
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    hasOutput:

    - '@id': repair:52f0e212-3c4f-4d27-b345-5e964c135824
      '@type': EconomicEvent
      action: modify
      provider: https://auto-repair.example/
      receiver: https://alice.example/
      resourceInventoriedAs: alice:e1721a61-cd47-4556-84b9-8b1b81da15bf
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

  # Economic resource after

  - '@id': alice:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    resourceConformsTo: http://opensourceecology.org/wiki/Wikispeed_SGT01 # car
    trackingIdentifier: JHMCD38698S061469
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
```
Alternate view of this workflow process, using the more relational directionality option.
``` yaml
# Example: Simple workflow process

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    repair: https://auto-repair.example/

'@graph':

  # Repair process

  - '@id': repair:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Oil change JHMCD38698S061469
    note: Check over car, change oil (standard quantity).

  - '@id': repair:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: repair:02b39a30-3e04-4305-9656-7f261aa63c84
    action: accept
    provider: https://alice.example/
    receiver: https://auto-repair.example/
    resourceInventoriedAs: alice:e1721a61-cd47-4556-84b9-8b1b81da15bf
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': repair:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicEvent
    inputOf: repair:02b39a30-3e04-4305-9656-7f261aa63c84
    action: modify
    provider: https://auto-repair.example/
    receiver: https://alice.example/
    resourceInventoriedAs: alice:e1721a61-cd47-4556-84b9-8b1b81da15bf
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
```

#### Transportation with transfer

Bob purchases 30kg of apples from Alice and Claudia transports them (FOB destination).  This illustrates an implied transfer of custody, to keep the flow simpler.

![transport diagram reflecting the yaml below](../assets/examples/transport-transfer-implied.png)

It is also valid to do this with an explicit transfer of custody, as below:

![transport diagram reflecting the yaml below](../assets/examples/transport-transfer.png)

``` yaml
# Transportation with transfer

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    bob: https://bob.example/
    claudia: https://claudia.example/

'@graph':

# Bob purchases 30kg of apples from Alice and Claudia transports them (FOB destination)

  # Alice's resource before

  - '@id': alice:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': EconomicResource
    conformsTo: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:70ee3034-0d15-4471-8ee3-91c60bb1a9c9
    primaryAccountable: https://alice.example
    accountingQuantity:
      hasUnit: kilogram
      hasNumericalValue: 230
    onhandQuantity:
      hasUnit: kilogram
      hasNumericalValue: 230

  # alice commits to transfer some apples to bob

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86
    '@type': Commitment
    action: transfer
    resourceConformsTo: wd:Q41777871 # haralson apples
    provider: https://alice.example/
    receiver: https://bob.example/
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30

  # alice and claudia agree on transportation of the apples

  - '@id': urn:uuid:f325a950-5737-488d-b122-8f21114d0eb0
    '@type': Agreement
    note: exchange transportation service for currency
    stipulates:

    - '@id': urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a
      '@type': Commitment
      note: Transportation of alice's apples from alice's location to bob's location
      action: deliverService
      resourceClassifiedAs: wd:Q7590 # transportation service
      provider: https://claudia.example/
      receiver: https://alice.example/
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    stipulatesReciprocal:

    - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083
      '@type': Commitment
      action: transfer
      resourceConformsTo: wd:Q4917 # US Dollar
      provider: https://alice.example/
      receiver: https://claudia.example/
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 10

  # alice transfers custody of the apples to claudia for transportation

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f87
    '@type': EconomicEvent
    action: transferCustody
    resourceClassifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    provider: https://alice.example/
    receiver: https://claudia.example/
    resourceInventoriedAs: alice:21f361a6-2375-46bb-b192-c21b5ba833bf # alice's apples
    toResourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95 # claudia's bill of lading on the truck
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30

  # resources snapshot

  - '@id': alice:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:70ee3034-0d15-4471-8ee3-91c60bb1a9c9
    primaryAccountable: https://alice.example
    accountingQuantity:
      hasUnit: kilogram
      hasNumericalValue: 230
    onhandQuantity:
      hasUnit: kilogram
      hasNumericalValue: 200

  - '@id': claudia:27be5cab-d740-4194-9298-1661a69d9d95
    '@type': EconomicResource
    classifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    onhandQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30

  # claudia transports the apples in two hops

  - '@id': claudia:633f6e56-6c7d-4a5b-b9c9-1a8adafd8960
    '@type': Process
    note: Claudia transports the apples
    hasInput:

    - '@id': claudia:fd399b37-0740-4a68-a184-1e655021ca21
      '@type': EconomicEvent
      action: pickup
      resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
      provider: https://alice.example/
      receiver: https://claudia.example/
      resourceQuantity:
        hasUnit: kilogram
        hasNumericalValue: 30

    hasOutput:

    - '@id': claudia:57f1c1d0-432e-4bfa-9d32-002b8955a708
      '@type': EconomicEvent
      action: dropoff
      resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
      provider: https://claudia.example/
      receiver: https://claudia.example/
      resourceQuantity:
        hasUnit: kilogram
        hasNumericalValue: 30

  - '@id': claudia:c404cff5-19c7-453d-b0d8-d8e96055bd0c
    '@type': Process
    note: Claudia transports the apples
    hasInput:

    - '@id': claudia:856c43b1-0a63-445f-a56f-707b257f086e
      '@type': EconomicEvent
      action: pickup
      resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
      provider: https://claudia.example/
      receiver: https://claudia.example/
      resourceQuantity:
        hasUnit: kilogram
        hasNumericalValue: 30

    hasOutput:

    - '@id': claudia:9cb4944b-d26d-4774-a530-d18f2747c0d8
      '@type': EconomicEvent
      action: dropoff
      resourceInventoriedAs: claudia:27be5cab-d740-4194-9298-1661a69d9d95
      toResourceInventoriedAs: bob:9bd19194-a36d-4a1f-896b-8082887962cb
      provider: https://claudia.example/
      receiver: https://bob.example/
      resourceQuantity:
        hasUnit: kilogram
        hasNumericalValue: 30

    - '@id': urn:uuid:68cabaf3-deb8-4bd5-a439-798263abe35a
      '@type': EconomicEvent
      note: Transportation of alice's apples from alice's location to bob's location
      action: deliverService
      resourceConformsTo: wd:Q7590 # transportation service
      provider: https://claudia.example/
      receiver: https://alice.example/
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1
      fulfills: urn:uuid:c7897c39-7f05-4a5d-a487-80e130a2414a # the commitment

  # receipt of the apples triggers finalizing the transfer of ownership

  - '@id': urn:uuid:ad56a7ed-be3c-4937-a3fb-0f156bcd2c47
    '@type': EconomicEvent
    action: transferAllRights
    resourceClassifiedAs: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    provider: https://alice.example/
    receiver: https://bob.example/
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30
    fulfills: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86 # the commitment

  # resources snapshot

  - '@id': alice:21f361a6-2375-46bb-b192-c21b5ba833bf
    '@type': EconomicResource
    conformsTo: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:70ee3034-0d15-4471-8ee3-91c60bb1a9c9 # only the possessed amount
    primaryAccountable: https://alice.example
    accountingQuantity:
      hasUnit: kilogram
      hasNumericalValue: 200
    onhandQuantity:
      hasUnit: kilogram
      hasNumericalValue: 200

  - '@id': bob:9bd19194-a36d-4a1f-896b-8082887962cb
    '@type': EconomicResource
    conformsTo: wd:Q41777871 # haralson apples
    trackingIdentifier: lot-alice-apples-2018-10-11
    locatedAt: geo:b52a5815-fae9-43bf-be95-833b95dc0ada # only the possessed amount
    primaryAccountable: https://bob.example
    accountingQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30
    onhandQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30

  - '@id': claudia:27be5cab-d740-4194-9298-1661a69d9d95 # claudia's bill of lading on the truck
    '@type': EconomicResource
    conformsTo: wd:Q41777871 # haralson apples
    onhandQuantity:
      hasUnit: kilogram
      hasNumericalValue: 0

  # alice pays claudia for the transportation service

  - '@id': urn:uuid:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9
    '@type': EconomicEvent
    action: transfer
    resourceConformsTo: wd:Q4917 # US Dollar
    resourceInventoriedAs: alice:daa2ec3b-2c1a-4eb1-839f-8dcec1a1f93a # alice's bank account
    toResourceInventoriedAs: claudia:bd5806d6-4a36-45b9-b3b6-3e7d361a5a14 # claudia's bank account
    provider: https://alice.example/
    receiver: https://claudia.example/
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 10
    fulfills: urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083 # the commitment
```

#### Combine and separate

Simple pack and unpack of resources into and out of a container resource, using `combine` and `separate`.

![pack unpack diagram reflecting the yaml below](../assets/examples/pack-unpack.png)

``` yaml
# Example: Simple pack and unpack processes

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - med: https://medical.example/
    wash: https://laundry.example/

'@graph':

  # Economic resources before

  - '@id': med:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    conformsTo: wd:Q987767 # container
    trackingIdentifier: cont234
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn:

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown789
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: 

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b0
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown734
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: 

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b1
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown698
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: 

  # Packing process

  - '@id': med:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Pack medical gowns
    note: Each gown is scanned for tracking identifier as packed
    hasInput:

    - '@id': med:b52a5815-fae9-43bf-be95-833b95dc0adb
      '@type': EconomicEvent
      action: combine
      provider: https://medical.example/
      receiver: https://medical.example/
      resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da15bf # a container
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1
      note: Container is empty at this point.

    - '@id': med:b90b0b77-09a2-42e2-8bd4-e9ae2c1c6172
      '@type': EconomicEvent
      action: combine
      provider: https://medical.example/
      receiver: https://medical.example/
      resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b9 # a medical gown
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': med:a8236bbb-81e0-422d-9861-56d2417db0fb
      '@type': EconomicEvent
      action: combine
      provider: https://medical.example/
      receiver: https://medical.example/
      resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b0 # a medical gown
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': med:6f438393-7f87-4914-806c-e23a4fd15e89
      '@type': EconomicEvent
      action: combine
      provider: https://medical.example/
      receiver: https://medical.example/
      resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b1 # a medical gown
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    hasOutput:

    - '@id': med:b52a5815-fae9-43bf-be95-833b95dc0456
      '@type': EconomicEvent
      action: produce
      provider: https://medical.example/
      receiver: https://medical.example/
      resourceConformsTo: wd:Q2127468 # packaging unit
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1
      note: This is a new resource, a package containing all inputs.

  # Economic resources after packing

  - '@id': med:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    conformsTo: wd:Q987767 # container
    trackingIdentifier: cont234
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: med:e1721a61-cd47-4556-84b9-8b1b81da564h

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown789
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: med:e1721a61-cd47-4556-84b9-8b1b81da564h

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b0
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown734
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: med:e1721a61-cd47-4556-84b9-8b1b81da564h

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b1
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown698
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: med:e1721a61-cd47-4556-84b9-8b1b81da564h

  - '@id': med:e1721a61-cd47-4556-84b9-8b1b81da564h
    '@type': EconomicResource
    conformsTo: wd:Q2127468 # packaging unit
    trackingIdentifier: pack6789
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  # The package is transferred to the laundry

  - '@id': med:b52a5815-fae9-43bf-be95-833berqojdasf7
    '@type': EconomicEvent
    action: transferCustody
    provider: https://medical.example/
    receiver: https://laundry.example/
    resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da564h # the package
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    note: Contains gowns and container.

  # The package is unpacked at the laundry
  
  - '@id': wash:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': Process
    name: Unpack medical gowns
    note: Each gown is scanned for tracking identifier as unpacked
    hasInput:

    - '@id': wash:33e8933b-ff73-4a01-964a-ca7a98893
      '@type': EconomicEvent
      action: consume
      provider: https://laundry.example/
      receiver: https://laundry.example/
      resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da564h # the package
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    hasOutput:

    - '@id': wash:60f4204e-b8d2-4026-8577-102c3f82c0af
      '@type': EconomicEvent
      action: separate
      provider: https://laundry.example/
      receiver: https://laundry.example/
      resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da15bf # a container
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': wash:60f4204e-b8d2-4026-8577-102c3fkm98g1
      '@type': EconomicEvent
      action: separate
      provider: https://laundry.example/
      receiver: https://laundry.example/
      resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b9 # a medical gown
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': wash:60f4204e-b8d2-4026-8577-102c3fsd89cv
      '@type': EconomicEvent
      action: separate
      provider: https://laundry.example/
      receiver: https://laundry.example/
      resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b0 # a medical gown
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': wash:60f4204e-b8d2-4026-8577-102c3fd9kjre
      '@type': EconomicEvent
      action: separate
      provider: https://laundry.example/
      receiver: https://laundry.example/
      resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b1 # a medical gown
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

  # Economic resources after unpacking

  - '@id': med:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    conformsTo: wd:Q987767 # container
    trackingIdentifier: cont234
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown789
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: 

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b0
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown734
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn:

  - '@id': med:3129ca8b-fcda-45be-bbda-294dc924d3b1
    '@type': EconomicResource
    conformsTo: wd:Q89990310 # medical gown
    trackingIdentifier: gown698
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    containedIn: 
```
Alternate view of these pack-unpack processes, using the more relational directionality option.
``` yaml
# Example: Simple pack and unpack processes

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - med: https://medical.example/
    wash: https://laundry.example/

'@graph':

  # Packing process

  - '@id': med:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Pack medical gowns
    note: Each gown is scanned for tracking identifier as packed

  - '@id': med:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': EconomicEvent
    inputOf: med:02b39a30-3e04-4305-9656-7f261aa63c84
    action: combine
    provider: https://medical.example/
    receiver: https://medical.example/
    resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da15bf # a container
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    note: Container is empty at this point.

  - '@id': med:b90b0b77-09a2-42e2-8bd4-e9ae2c1c6172
    '@type': EconomicEvent
    inputOf: med:02b39a30-3e04-4305-9656-7f261aa63c84
    action: combine
    provider: https://medical.example/
    receiver: https://medical.example/
    resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b9 # a medical gown
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': med:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: med:02b39a30-3e04-4305-9656-7f261aa63c84
    action: combine
    provider: https://medical.example/
    receiver: https://medical.example/
    resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b0 # a medical gown
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': med:6f438393-7f87-4914-806c-e23a4fd15e89
    '@type': EconomicEvent
    inputOf: med:02b39a30-3e04-4305-9656-7f261aa63c84
    action: combine
    provider: https://medical.example/
    receiver: https://medical.example/
    resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b1 # a medical gown
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': med:b52a5815-fae9-43bf-be95-833b95dc0456
    '@type': EconomicEvent
    outputOf: med:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://medical.example/
    receiver: https://medical.example/
    resourceConformsTo: wd:Q2127468 # packaging unit
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    note: This is a new resource, a package containing all inputs.

  # The package is unpacked at the laundry

  - '@id': wash:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': Process
    name: Unpack medical gowns
    note: Each gown is scanned for tracking identifier as unpacked

  - '@id': wash:33e8933b-ff73-4a01-964a-ca7a98893
    '@type': EconomicEvent
    inputOf: wash:33e8933b-ff73-4a01-964a-ca7a98893083
    action: consume
    provider: https://laundry.example/
    receiver: https://laundry.example/
    resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da564h # the package
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': wash:60f4204e-b8d2-4026-8577-102c3f82c0af
    '@type': EconomicEvent
    outputOf: wash:33e8933b-ff73-4a01-964a-ca7a98893083
    action: separate
    provider: https://laundry.example/
    receiver: https://laundry.example/
    resourceInventoriedAs: med:e1721a61-cd47-4556-84b9-8b1b81da15bf # a container
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': wash:60f4204e-b8d2-4026-8577-102c3fkm98g1
    '@type': EconomicEvent
    outputOf: wash:33e8933b-ff73-4a01-964a-ca7a98893083
    action: separate
    provider: https://laundry.example/
    receiver: https://laundry.example/
    resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b9 # a medical gown
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': wash:60f4204e-b8d2-4026-8577-102c3fsd89cv
    '@type': EconomicEvent
    outputOf: wash:33e8933b-ff73-4a01-964a-ca7a98893083
    action: separate
    provider: https://laundry.example/
    receiver: https://laundry.example/
    resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b0 # a medical gown
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': wash:60f4204e-b8d2-4026-8577-102c3fd9kjre
    '@type': EconomicEvent
    outputOf: wash:33e8933b-ff73-4a01-964a-ca7a98893083
    action: separate
    provider: https://laundry.example/
    receiver: https://laundry.example/
    resourceInventoriedAs: med:3129ca8b-fcda-45be-bbda-294dc924d3b1 # a medical gown
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
```
#### Stage and state

Simple assembly and testing showing use of stage and state.

![stage state diagram reflecting the yaml below](../assets/examples/stage-state-simple.png)

``` yaml
# Example: Process using stage and state
# credit Fabulaser-Mini, https://github.com/fab-machines/Fabulaser-Mini/blob/main/manual/Fabulaser%20manual%20L2M2.pdf

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - mfg: https://manufacturing.example/

'@graph':

  # Process Specifications

  - '@id': mfg:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': ProcessSpecification
    name: Attach air filter

  - '@id': mfg:3be5259d-10f0-431c-9fec-9c0c15a461e4
    '@type': ProcessSpecification
    name: Attach air compressor

  - '@id': mfg:3be5259d-10f0-431c-9fec-9c0c15a461f9
    '@type': ProcessSpecification
    name: Test machine

  # Resource Specification

  - '@id': mfg:3be525ee-10f0-431c-9fec-9c0c15a4dv97
    '@type': ResourceSpecification
    name: Fabulaser laser cutter

  # Economic resource before attach air filter process

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    resourceConformsTo: mfg:3be525ee-10f0-431c-9fec-9c0c15a4dv97 # Fabulaser
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    stage: mfg:3be5259d-10f0-431c-9fec-9c0c15a461e4 # attach air compressor

  # Assembly process

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Attach the air filter (step 33)
    basedOn: mfg:3be5259d-10f0-431c-9fec-9c0c15a461d3 # process specification: attach air filter
    hasInput:

    - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
      '@type': EconomicEvent
      action: accept
      provider: https://manufacturing.example/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1
      stage: mfg:3be5259d-10f0-431c-9fec-9c0c15a461e4 # attach air compressor

    - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0ss
      '@type': EconomicEvent
      action: consume
      provider: https://manufacturing.example/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81dlk4d0 # an air filter
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0st
      '@type': EconomicEvent
      action: consume
      provider: https://manufacturing.example/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81dlcvgk # a hose clamp
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

    hasOutput:

    - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
      '@type': EconomicEvent
      action: modify
      provider: https://manufacturing.example/
      receiver: https://manufacturing.example/
      resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
      resourceQuantity:
        hasUnit: one
        hasNumericalValue: 1

  # Economic resource after attach air filter process

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    resourceConformsTo: mfg:3be525ee-10f0-431c-9fec-9c0c15a4dv97 # Fabulaser
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    stage: mfg:3be5259d-10f0-431c-9fec-9c0c15a461d3 # attach air filter

  # Testing process

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c98
    '@type': Process
    name: Test the laser cutter
    basedOn: mfg:3be5259d-10f0-431c-9fec-9c0c15a461d3 # final test after all assembly

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c98
    action: accept
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    stage: mfg:02b39a30-3e04-4305-9656-7f261aa63c84 #attach air filter

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c98
    action: modify
    state: pass
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  # Economic resource after testing

  - '@id': mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': EconomicResource
    resourceConformsTo: mfg:3be525ee-10f0-431c-9fec-9c0c15a4dv97 # Fabulaser
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    stage: mfg:02b39a30-3e04-4305-9656-7f261aa63c98 # test machine
    state: pass

```
Alternate view of these stage-state processes, using the more relational directionality option.
``` yaml
# Example: Process using stage and state
# credit Fabulaser-Mini, https://github.com/fab-machines/Fabulaser-Mini/blob/main/manual/Fabulaser%20manual%20L2M2.pdf

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - mfg: https://manufacturing.example/

'@graph':

  # Assembly process

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Attach the air filter (step 33)
    basedOn: mfg:3be5259d-10f0-431c-9fec-9c0c15a461d3 # process specification: attach air filter

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: accept
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    stage: mfg:3be5259d-10f0-431c-9fec-9c0c15a461e4 # attach air compressor

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0ss
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81dlk4d0 # an air filter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0st
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81dlcvgk # a hose clamp
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: modify
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  # Testing process

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c98
    '@type': Process
    name: Test the laser cutter
    basedOn: mfg:3be5259d-10f0-431c-9fec-9c0c15a461d3 # final test after all assembly

  - '@id': mfg:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c98
    action: accept
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    stage: mfg:02b39a30-3e04-4305-9656-7f261aa63c84 #attach air filter

  - '@id': mfg:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c98
    action: modify
    state: pass
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # a laser cutter
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
```

#### Correcting errors

Simple one-process manufacturing with corrections.

Note that the diagram below shows the actual data in the flow.  If a use case calls for it, the events can be combined on a user interface so that a "corrected" event would be displayed, for example just "work 6 hours machining" and "consume 5 plywood sheets" as the two inputs to this process. In that case, you could show all of events, including the correcting events, in another view.

![event correction diagram reflecting the yaml below](../assets/examples/correction.png)

``` yaml
# Example: Correcting a data recording error in an event

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    mfg: https://manufacturing.example/

'@graph':

  # Before corrections

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Make the lean desk

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # plywood sheets
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 3
    hasPointInTime: 2019-04-08T10:00:00-5:00
    created: 2019-04-08T18:00:00-5:00

  - '@id': mfg:6f438393-7f87-4914-806c-e23a4fd15e89
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: work
    provider: https://alice.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: wd:Q192047 # machining
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 7
    hasBeginning: 2019-04-08T10:30:00-5:00
    hasEnd: 2019-04-08T16:30:00-5:00
    created: 2019-04-08T18:00:00-5:00

  - '@id': mfg:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # desk
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    hasPointInTime: 2019-04-08T17:30:00-5:00
    created: 2019-04-08T18:02:00-5:00

  # After corrections

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Make the lean desk

  # original consume event

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # plywood sheets
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 3
    hasPointInTime: 2019-04-08T10:00:00-5:00
    created: 2019-04-08T18:00:00-5:00

  # the consume event is backed out completely and a new event entered to replace it

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0sdf
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # plywood sheets
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: -3
    hasPointInTime: 2019-04-08T18:00:00-5:00
    created: 2019-04-08T18:00:00-5:00
    corrects: mfg:b52a5815-fae9-43bf-be95-833b95dc0adb

  - '@id': mfg:b52a5815-fae9-43bf-be95-833b95dc0yu8
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:3129ca8b-fcda-45be-bbda-294dc924d3b9 # plywood sheets
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 5
    hasPointInTime: 2019-04-08T10:00:00-5:00
    created: 2019-04-08T18:01:00-5:00

  # original work event

  - '@id': mfg:6f438393-7f87-4914-806c-e23a4fd15e89
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: work
    provider: https://alice.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: wd:Q192047 # machining
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 7
    hasBeginning: 2019-04-08T10:30:00-5:00
    hasEnd: 2019-04-08T16:30:00-5:00
    created: 2019-04-08T18:00:00-5:00

  # the work event is corrected without backing it out completely

  - '@id': mfg:6f438393-7f87-4914-806c-e23a4fd158uj
    '@type': EconomicEvent
    inputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: work
    provider: https://alice.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: wd:Q192047 # machining
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: -1
    hasBeginning: 2019-04-08T10:30:00-5:00
    hasEnd: 2019-04-08T16:30:00-5:00
    created: 2019-04-08T18:00:00-5:00
    corrects: mfg:6f438393-7f87-4914-806c-e23a4fd15e89

  # the produce event is not corrected

  - '@id': mfg:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
    '@type': EconomicEvent
    outputOf: mfg:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://manufacturing.example/
    receiver: https://manufacturing.example/
    resourceInventoriedAs: mfg:e1721a61-cd47-4556-84b9-8b1b81da15bf # desk
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    hasPointInTime: 2019-04-08T17:30:00-5:00
    created: 2019-04-08T18:02:00-5:00
```

