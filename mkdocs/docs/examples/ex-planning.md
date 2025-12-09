# Planning Examples

#### Simple plan

A plan for creating two different resources needed for one campaign.  The first resource requires two chained processes.

![plan diagram reflecting the yaml below](../assets/examples/simple-plan.png)

``` yaml
# Example: Simple operational plan

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - printer: https://printer.example/

'@graph':

  - '@id': printer:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    '@type': Plan
    name: Anti climate-change campaign materials
    note: A set of printed materials for the campaign by Students for Peace and Justice
    due: 2019-04-08T17:00:00-5:00
    created: 2019-04-01T10:35:00-5:00

  - '@id': printer:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Print climate brochures
    plannedWithin: printer:8e5fe80d-a769-4bd5-89e5-2136d33eab9f

  - '@id': printer:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': Commitment
    outputOf: printer:02b39a30-3e04-4305-9656-7f261aa63c84
    independentDemandOf: printer:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    action: produce
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceInventoriedAs: printer:6b97b1be-8e07-44ac-82e5-214f1b2aaf33 # specific brochures
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1000

  - '@id': printer:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': Commitment
    inputOf: printer:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceConformsTo: printer:3129ca8b-fcda-45be-bbda-294dc924d3b9 # paper
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1020

  - '@id': printer:9bd19194-a36d-4a1f-896b-8082887962cb
    '@type': Process
    name: Print climate posters
    plannedWithin: printer:8e5fe80d-a769-4bd5-89e5-2136d33eab9f

  - '@id': printer:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': Commitment
    outputOf: printer:9bd19194-a36d-4a1f-896b-8082887962cb
    independentDemandOf: printer:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    action: produce
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceInventoriedAs: printer:6078f30a-b15b-4b1c-8e77-797abae11378 # specific posters
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 35

  - '@id': printer:60f4204e-b8d2-4026-8577-102c3f82c0af
    '@type': Commitment
    inputOf: printer:9bd19194-a36d-4a1f-896b-8082887962cb
    action: consume
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceConformsTo: printer:e56fd654-7b94-4d96-8e60-de39e08329a7 # paper
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 35

  - '@id': printer:b90b0b77-09a2-42e2-8bd4-e9ae2c1c6172
    '@type': Commitment
    inputOf: printer:9bd19194-a36d-4a1f-896b-8082887962cb
    action: use
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceConformsTo: printer:e4783bef-9006-490c-9c03-389272c7444d # printing plate for the specific posters
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 1.5

  - '@id': printer:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59b
    '@type': Process
    name: Create poster plate
    plannedWithin: printer:8e5fe80d-a769-4bd5-89e5-2136d33eab9f

  - '@id': printer:583e83d9-a46d-44ff-bd71-88513a1d83c0
    '@type': Commitment
    outputOf: printer:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59b
    action: produce
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceConformsTo: printer:e4783bef-9006-490c-9c03-389272c7444d # printing plate for the specific posters
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': printer:ad56a7ed-be3c-4937-a3fb-0f156bcd2c47
    '@type': Commitment
    inputOf: printer:9bd19194-a36d-4a1f-896b-8082887962cb
    action: consume
    provider: https://printer.example/
    receiver: https://printer.example/
    resourceInventoriedAs: printer:86ad6e22-7640-4b93-972a-db7177ab2616 # blank printing plate
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
```

#### Simple plan from recipe

A plan generated from a recipe, for making a component.

![plan from recipe diagram reflecting the yaml below](../assets/examples/plan-recipe.png)

``` yaml
# Example: Simple plan from recipe

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    sensor: https://sensorica.example/
    open: https://openhardware.example

'@graph':

  # the recipe

  - '@id': urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': ResourceSpecification
    name: Delivery fiber
    note: Optical fiber that connects 2 devices.

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: produce
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # the delivery fiber spec
    resourceQuantity:
      hasUnit: metre
      hasNumericalValue: .5

  - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': RecipeProcess
    name: Make delivery fiber component
    note: The delivery fiber makes the optical connection between an optical transducer and the sensor [electro-photonics device]. Requires cutting a piece of optical fiber and connectorizing it

  - '@id': urn:uuid:9bd19194-a36d-4a1f-896b-8082887962cb
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: consume
    resourceConformsTo: http://www.wikidata.org/entity/Q162 # optical fiber
    resourceQuantity:
      hasUnit: metre
      hasNumericalValue: .5
    note: Optical guide, can be of glass of polymer. Usually it comes in a cylindrical shape. Can be MM (multimode) or SM (single mode)

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82c0af
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: work
    resourceConformsTo: http://www.wikidata.org/entity/Q640621 # optical engineering
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 2

  # the plan

  - '@id': sensor:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    '@type': Plan
    name: Delivery fiber
    note: Make the optical fiber that makes the connection between the device and the transducer.
    due: 2019-04-08T17:00:00-5:00
    created: 2019-04-01T10:35:00-5:00

  - '@id': sensor:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': Commitment
    independentDemandOf: sensor:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    outputOf: sensor:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://sensorica.example/
    receiver: https://sensorica.example/
    resourceConformsTo: urn:uuid:b90b0b77-09a2-42e2-8bd4-e9ae2c1c6172 # delivery fiber
    resourceQuantity:
      hasUnit: metre
      hasNumericalValue: .5

  - '@id': sensor:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Make optical fiber component
    plannedWithin: sensor:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    note: The delivery fiber makes the optical connection between an optical transducer and the sensor [electro-photonics device]. Requires cutting a piece of optical fiber and connectorizing it.

  - '@id': sensor:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': Commitment
    inputOf: sensor:02b39a30-3e04-4305-9656-7f261aa63c84
    action: consume
    provider: https://sensorica.example/
    receiver: https://sensorica.example/
    resourceConformsTo: http://www.wikidata.org/entity/Q162 # optical fiber
    resourceQuantity:
      hasUnit: metre
      hasNumericalValue: .5
    note: Optical guide, can be of glass of polymer. Usually it comes in a cylindrical shape. Can be MM (multimode) or SM (single mode).

  - '@id': sensor:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': Commitment
    inputOf: sensor:02b39a30-3e04-4305-9656-7f261aa63c84
    action: work
    provider: https://alice.example/
    receiver: https://sensorica.example/
    resourceConformsTo: http://www.wikidata.org/entity/Q640621 # optical engineering
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 2
```

#### Plan from recipe with production and exchange

This shows a simple recipe that includes both a process and the exchange of work that is input to the process for currency.

![process-exchange diagram reflecting the yaml below](../assets/examples/process-exchange.png)

``` yaml
# Example: Simple recipe with both process and exchange

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    doc: https://documenters.example

'@graph':

  # the recipe

  - '@id': urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': ResourceSpecification
    name: Training handout
    substitutable: false

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86
    '@type': ResourceSpecification
    name: Technical writing # a skill

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    action: produce
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # the handout spec
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': RecipeProcess
    name: Write and format training handout

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82c0af
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # the recipe process
    recipeClauseOf: urn:uuid:9bd19194-a36d-4a1f-896b-8082887962cb # the recipe exchange
    action: work
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86 # technical writing
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 15

  - '@id': urn:uuid:9bd19194-a36d-4a1f-896b-8082887962cb
    '@type': RecipeExchange
    name: Exchange documentation work for FairCoin

  - '@id': urn:uuid:3129ca8b-fcda-45be-bbda-294dc924d3b9
    '@type': RecipeFlow
    recipeReciprocalClauseOf: urn:uuid:9bd19194-a36d-4a1f-896b-8082887962cb # the recipe exchange
    action: transfer
    resourceConformsTo: http://www.wikidata.org/entity/Q21002847 # FairCoin
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 300

  # the plan

  - '@id': doc:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    '@type': Plan
    name: X Training Handout and Payment
    note: Write and format the training handout, payment for writing work.
    due: 2019-04-08T17:00:00-5:00
    created: 2019-04-01T10:35:00-5:00

  - '@id': doc:a8236bbb-81e0-422d-9861-56d2417db0fb
    '@type': Commitment
    independentDemandOf: doc:8e5fe80d-a769-4bd5-89e5-2136d33eab9f # the plan
    outputOf: doc:02b39a30-3e04-4305-9656-7f261aa63c84
    action: produce
    provider: https://documenters.example/
    receiver: https://documenters.example/
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a461d3 # training handout
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': doc:02b39a30-3e04-4305-9656-7f261aa63c84
    '@type': Process
    name: Write and format X training handout
    plannedWithin: doc:8e5fe80d-a769-4bd5-89e5-2136d33eab9f # the plan

  - '@id': doc:52f0e212-3c4f-4d27-b345-5e964c135824
    '@type': Commitment
    inputOf: doc:02b39a30-3e04-4305-9656-7f261aa63c84
    clauseOf: urn:uuid:583e83d9-a46d-44ff-bd71-88513a1d83c0
    action: work
    provider: https://alice.example/
    receiver: https://documenters.example/
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f1f86
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 20 # the estimate for this particular work is higher than the generic recipe

  - '@id': urn:uuid:583e83d9-a46d-44ff-bd71-88513a1d83c0
    '@type': Agreement
    name: Exchange technical documentation work for FairCoin

  - '@id': doc:b52a5815-fae9-43bf-be95-833b95dc0adb
    '@type': Commitment
    plannedWithin: doc:8e5fe80d-a769-4bd5-89e5-2136d33eab9f # the plan
    reciprocalClauseOf: doc:02b39a30-3e04-4305-9656-7f261aa63c84
    action: transfer
    provider: https://documenters.example/
    receiver: https://alice.example/
    resourceConformsTo: http://www.wikidata.org/entity/Q21002847 # FairCoin
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 400 # the plan payment is adjusted from the generic recipe
```

#### Building recipes

This shows two recipes used together for one economic function (dairy farming). Most of the recipe processes are re-used in both recipes.

![recipes diagram reflecting the yaml below](../assets/examples/recipe-reuse.png)

``` yaml
# Example: Complex set of recipes with re-use of recipe process.

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#

'@graph':

  - '@id': urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234
    '@type': ResourceSpecification
    name: Milking herd

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fasdf
    '@type': ResourceSpecification
    name: ATV

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqer8
    '@type': ResourceSpecification
    name: Milking shed

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt98
    '@type': ResourceSpecification
    name: Paddock

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt99
    '@type': ResourceSpecification
    name: Milker pellets summer

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt90
    '@type': ResourceSpecification
    name: Milker pellets winter

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fio33
    '@type': ResourceSpecification
    name: Vat milk

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10ftg7y
    '@type': ResourceSpecification
    name: Antibiotic milk

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fse43
    '@type': ResourceSpecification
    name: Fresh cow milk

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fdfre
    '@type': ResourceSpecification
    name: Milking


  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fxs34
    '@type': ProcessSpecification
    name: Milk cows

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgtml
    '@type': ProcessSpecification
    name: Collect cows

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f56jn
    '@type': ProcessSpecification
    name: Return cows

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqd9m
    '@type': ProcessSpecification
    name: Setup milking shed


  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect
    action: modify
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt98 # the paddock
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98893084
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect
    action: modify
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf
    '@type': RecipeProcess
    name: Collect cows from paddock
    basedOn: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgtml
    hasDuration:
      hasUnit: hour
      hasNumericalValue: .5
    note: Milker gets quad (ATV) from Machine Shed and goes to collect cows (2.30am).  Round them up and Move Cows calmly from their paddock along the laneway to the dairy.  At the dairy yard, cows stand on the backing gate and flow into the dairy at their own pace.  Note which cows are lame or have saw feet

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82c0ah
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect
    action: work
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fdfre # milking
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: .5

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82c0ai
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect
    action: use
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fasdf # ATV
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: .5

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a988930aj
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect
    action: modify
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt98 # the paddock
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a988930ak
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect
    action: modify
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1


  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: produce
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10ftg7y # antibiotic milk
    resourceQuantity:
      hasUnit: liter
      hasNumericalValue: 30

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889ggf0
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: produce
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fse43 # fresh cow milk
    resourceQuantity:
      hasUnit: liter
      hasNumericalValue: 200

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889vbmk
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: produce
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fio33 # vat milk
    resourceQuantity:
      hasUnit: liter
      hasNumericalValue: 5000

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: modify
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeoutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: modify
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqer8 # the milking shed
    effortQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz
    '@type': RecipeProcess
    name: Milk and dip the cows winter
    basedOn: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fxs34
    hasDuration:
      hasUnit: hour
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82vb87
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: accept
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82zss8
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: work
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fdfre # milking
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 1.5
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 2

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: accept
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqer8 # the milking shed
    stage: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqd9m # the shed must be at stage setup
    effortQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82ft77
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk
    action: consume
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt90 # milker pellets winter
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 500

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: produce
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10ftg7y # antibiotic milk
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 30

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889ggf0
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: produce
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fse43 # fresh cow milk
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 200

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889vbmk
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: produce
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fio33 # vat milk
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 1000

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: modify
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeoutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: modify
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqer8 # the milking shed
    effortQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq
    '@type': RecipeProcess
    name: Milk and dip the cows summer
    basedOn: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fxs34
    hasDuration:
      hasUnit: hour
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82vb87
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: accept
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    stage: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgtml # the herd must be at stage collect (already collected)
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82zss8
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: work
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fdfre # milking
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 1.5
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 2 # 2 skillsets (2 people for 1.5 hours each)

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889dfi9
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: accept
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqer8 # the milking shed
    stage: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fqd9m # the shed must be at stage setup
    effortQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82ft77
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk
    action: consume
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt99 # milker pellets summer
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 1000


  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889lopi
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows
    action: modify
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt98 # the paddock
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a9889cvbb
    '@type': RecipeFlow
    recipeOutputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows
    action: modify
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd
    '@type': RecipeProcess
    name: Return the cows
    basedOn: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10f56jn
    hasDuration:
      hasUnit: hour
      hasNumericalValue: .5
    note: Milker uses Quad (ATV) to chase stranglers and herd to new paddock. Ensure fences are set up for morning collection. Check feed in paddock and pasture strip size. Check water troughs.

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82gt90
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows
    action: accept
    resourceConformsTo: urn:uuid:3be5259d-10f0-431c-9fec-9c0c15a41234 # the milking herd
    stage: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fxs34 # resource must be at stage milk (have been milked)
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:33e8933b-ff73-4a01-964a-ca7a98895tgf
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows
    action: accept
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fgt98 # the paddock
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:60f4204e-b8d2-4026-8577-102c3f82rflm
    '@type': RecipeFlow
    recipeInputOf: urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows
    action: use
    resourceConformsTo: urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fasdf # ATV
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: .5


  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fd3ou
    '@type': Recipe
    name: Milk cows winter
    recipeIncludes:
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect cows
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81dakofd # setup milking shed
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bz # milk and dip cows winter
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows

  - '@id': urn:uuid:6b5bc786-b9ed-4189-b34f-5ef7d10fd3ou
    '@type': Recipe
    name: Milk cows summer
    recipeIncludes:
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da15bf # collect cows
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81dakofd # setup milking shed
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45bq # milk and dip cows summer
    - '@id': urn:uuid:e1721a61-cd47-4556-84b9-8b1b81da45sd # return cows
```
