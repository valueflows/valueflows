# Offers/Requests Examples

#### Proposals to sell and give away

A simple proposal with reciprocity expected, then another one to give the item away.

![sell give diagram reflecting the yaml below](../assets/examples/prop-sell-give.png)

``` yaml
# Example: Simple proposals based on one intent

'@context':
  - https://git.io/vf-examples-jsonld-context
  - alice: https://alice.example/
    map: https://mapping.service/

'@graph':

  # One offer with expected reciprocity

  - '@id': alice:8791913c-0152-4c32-bb3f-f25d61df736c
    '@type': Proposal
    purpose: offer
    name: Used bike
    hasBeginning: 2019-03-01T00:00:00-5:00
    hasEnd: 2019-03-31T00:00:00-5:00
    eligibleLocation: map:566a2c01-96f8-4b3c-adcf-f197eced3092 # Madison, WI
    publishes:
    - '@id': alice:02b39a30-3e04-4305-9656-7f261aa63c84
      '@type': Intent
      name: Old adult Schwinn one speed bike
      skos:note: Pedals fine, not good for hills, has basket, brakes are a bit dodgy
      action: transfer
      provider: https://alice.example/
      resourceConformsTo: wd:Q11442 # bicycle
    reciprocal:
    - '@id': alice:e72f7d1d-4f0a-4518-a44c-96658cafda95
      '@type': Intent
      name: Payment
      action: transfer
      receiver: https://alice.example/
      resourceConformsTo: wd:Q4917 # US Dollar
      resourceQuantity:
        om2:hasUnit: om2:one
        om2:hasNumericalValue: 15

  # Alice did not get any responses to her proposal above, so decided to offer the bike for free

  - '@id': alice:8e5fe80d-a769-4bd5-89e5-2136d33eab9f
    '@type': Proposal
    purpose: offer
    name: Free used bike
    hasBeginning: 2019-04-01T00:00:00-5:00
    hasEnd: 2019-05-01T00:00:00-5:00
    eligibleLocation: map:566a2c01-96f8-4b3c-adcf-f197eced3092 # Madison, WI
    publishes:
    - '@id': alice:02b39a30-3e04-4305-9656-7f261aa63c84 # the intent (this is the same intent alice originally published)
```

#### Proposal in timebank

A simple proposal for a timebank.  The reciprocity is assumed based on the timebank policies.

![timebank diagram reflecting the yaml below](../assets/examples/prop-timebank.png)

``` yaml
# Example: Simple proposal in a timebank

'@context':
  - https://git.io/vf-examples-jsonld-context
  - bob: https://bob.example/
    timebank: https://timebank.example/

'@graph':

  # Timebank request, reciprocity defined in the timebank agreement (hour credits)

  - '@id': bob:23799c14-c368-4653-a584-83bf9ae8b82a
    '@type': Proposal
    purpose: request
    name: Seeking plumbing help
    hasBeginning: 2019-04-01T00:00:00-5:00
    hasEnd: 2019-04-05T00:00:00-5:00
    inScopeOf: https://timebank.example/
    publishes:
    - '@id': bob:e18c808c-929a-450d-9d0d-3b3f531bc126
      '@type': Intent
      name: Plumbing help please
      skos:note: Need someone with plumbing skills to fix leaky faucet and plugged drain asap
      action: work
      receiver: https://bob.example/
      resourceConformsTo: wd:Q252924 # plumber
```

#### Proposal for barter

A simple proposal for barter.

![barter diagram reflecting the yaml below](../assets/examples/prop-barter.png)

``` yaml
# Example: Simple proposal for barter
'@context':
  - https://git.io/vf-examples-jsonld-context
  - carol: https://carol.example/
    map: https://mapping.service/

'@graph':

  - '@id': carol:6405b8ad-0ac2-4d58-abdb-0808903c78ad
    '@type': Proposal
    purpose: request
    name: Cider press for cider
    hasBeginning: 2018-10-01T00:00:00-5:00
    hasEnd: 2018-10-15T00:00:00-5:00
    eligibleLocation: map:566a2c01-96f8-4b3c-adcf-f197eced3092 # Madison, WI
    publishes:
    - '@id': carol:e02e3f6b-420a-4ba8-89b0-909d7363ce07
      '@type': Intent
      name: Cider press
      skos:note: I can pick up or come to your place, will clean up.
      action: use
      receiver: https://carol.example/
      resourceConformsTo: wd:Q1111 # cider press (fictional)
      effortQuantity:
        om2:hasUnit: om2:hour
        om2:hasNumericalValue: 6
    reciprocal:
    - '@id': carol:b52a5815-fae9-43bf-be95-833b95dc0adb
      '@type': Intent
      name: Cider
      skos:note: Fresh cider from the pressing
      action: transfer
      provider: https://carol.example/
      resourceConformsTo: wd:Q5977438 # apple cider
      resourceQuantity:
        om2:hasUnit: om2:gallon-US
        om2:hasNumericalValue: 3
```

#### Proposal for work commitment

A simple proposal requesting help for work on a planned production process.  The reciprocal intent (payment) is based on the actual hours that will be worked.

![proposal work diagram reflecting the yaml below](../assets/examples/prop-work.png)

``` yaml
# Example: Simple proposal for commitment to an intent on a planned process

'@context':
  - https://git.io/vf-examples-jsonld-context
  - fablab: https://fablab.example/
    map: https://mapping.service/

'@graph':

  # Plan a process, publish request for worker with certain skills to collaborate

  - '@id': fablab:ad56a7ed-be3c-4937-a3fb-0f156bcd2c47
    '@type': Process
    name: Develop soil moisture sensor
    unitBased: true
    inScopeOf: https://fablab.example/
    hasInput:
    - '@id': fablab:60f4204e-b8d2-4026-8577-102c3f82c0af
      '@type': Intent
      inputOf: fablab:ad56a7ed-be3c-4937-a3fb-0f156bcd2c47
      name: Help with R&D for the sensor
      skos:note: Will need to be at the lab all day both days. It possibly could extend to a third day.
      action: work
      receiver: https://fablab.example/
      resourceConformsTo: wd:Q2474620 # electrochemical engineering
      effortQuantity:
        om2:hasUnit: om2:hour
        om2:hasNumericalValue: 1
      minimumQuantity:
        om2:hasUnit: om2:hour
        om2:hasNumericalValue: 16
      hasBeginning: 2019-04-12T08:00:00-5:00
      hasEnd: 2019-04-13T17:00:00-5:00
    # other planned inputs here

    - '@id': fablab:33e8933b-ff73-4a01-964a-ca7a98893083
    '@type': Proposal
    name: Electrochemical engineering skills
    hasBeginning: 2019-04-01T08:00:00-5:00
    hasEnd: 2019-04-11T17:00:00-5:00
    eligibleLocation: map:566a2c01-96f8-4b3c-adcf-f197eced3092 # Madison, WI
    published:
    - '@id': fablab:60f4204e-b8d2-4026-8577-102c3f82c0af # the Intent that was planned
    reciprocal:
    - '@id': fablab:583e83d9-a46d-44ff-bd71-88513a1d83c0
      '@type': Intent
      name: Payment
      skos:note: Payment when the unit is manufactured and sold
      action: transfer
      provider: https://fablab.example/
      resourceConformsTo: wd:Q4917 # US Dollar
      resourceQuantity:
        om2:hasUnit: om2:one
        om2:hasNumericalValue: 30
```

#### Proposals for price list

A simple set of proposals that make up a price list.

![price list diagram reflecting the yaml below](../assets/examples/prop-list.png)

``` yaml
# Example: Simple price list

'@context':
  - https://git.io/vf-examples-jsonld-context
  - farm: https://farm.example/
    map: https://mapping.service/

'@graph':

  # Price list
  - '@id': farm:da7bfa38-a1b2-4f6f-a896-b9bf1ec88dr9
    '@type': ProposalList
    name: Price List for Week of March 1
    lists:
    - '@id': farm:da7bfa38-a1b2-4f6f-a896-b9bf1ec8807a
      '@type': Proposal
      hasBeginning: 2019-03-01T00:00:00-5:00
      hasEnd: 2019-03-31T00:00:00-5:00
      eligibleLocation: map:566a2c01-96f8-4b3c-adcf-f197eced3092 # Madison, WI
      unitBased: true # often currently called 'unit pricing'
      publishes:
      - '@id': farm:c7897c39-7f05-4a5d-a487-80e130a24345
        '@type': Intent
        name: Carrots case 25#
        action: transfer
        provider: https://farm.example/
        resourceClassifiedAs: wd:Q81 # carrot
        resourceSpecifiedAs: farm:2402b57c-1c45-423a-acb2-f50961c97d65 # 25 pound case organic carrots seconds
        resourceQuantity:
          om2:hasUnit: om2:one
          om2:hasNumericalValue: 1
      reciprocal:
      - '@id': farm:0f563083-7f05-4a5d-a487-80e130a24345
        '@type': Intent
        name: Payment
        action: transfer
        receiver: https://farm.example/
        resourceConformsTo: wd:Q4917 # US Dollar
        resourceQuantity:
          om2:hasUnit: om2:one
          om2:hasNumericalValue: 18
    - '@id': farm:f47064eb-7120-4b31-b882-770165901fe6
      '@type': Proposal
      hasBeginning: 2019-03-01T00:00:00-5:00
      hasEnd: 2019-03-31T00:00:00-5:00
      eligibleLocation: map:566a2c01-96f8-4b3c-adcf-f197eced3092 # Madison, WI
      unitBased: true
      publishes:
      - '@id': farm:54b814ee-62dc-40c1-bb96-f8582aa4f771
        '@type': Intent
        name: Beets case 25#
        action: transfer
        provider: https://farm.example/
        resourceClassifiedAs: wd:Q165437 # beet root
        resourceConformsTo: farm:8baa8ff7-9c1e-4586-ae7b-79d620a3cac9 # 25 pound case organic beets
        resourceQuantity:
          om2:hasUnit: om2:one
          om2:hasNumericalValue: 1
      reciprocal:
      - '@id': farm:21f361a6-2375-46bb-b192-c21b5ba833bf
        '@type': Intent
        name: Payment
        action: transfer
        receiver: https://farm.example/
        resourceConformsTo: https://www.wikidata.org/wiki/Q4917 # US Dollar
        resourceQuantity:
          om2:hasUnit: om2:one
          om2:hasNumericalValue: 32
```
