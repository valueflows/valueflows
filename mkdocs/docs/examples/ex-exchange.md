# Transfer and Exchange Examples

#### Exchange agreement

An exchange agreement with commitments.

![agreement diagram reflecting the yaml below](../assets/examples/exch-commit.png)

``` yaml
# Example: Simple exchange agreement

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - alice: https://alice.example/
    bob: https://bob.example/

'@graph':

  # Exchange agreement with commitments

  - '@id': alice:57f1c1d0-432e-4bfa-9d32-002b8955a708
    '@type': Agreement
    note: Alice commits to giving Bob 50 kg of apples in exchange for 10 liters of apple cider.

  - '@id': alice:2342d456-5d6f-46d5-a7ed-3ac7bfd5a86c
    '@type': Commitment
    clauseOf: alice:57f1c1d0-432e-4bfa-9d32-002b8955a708
    action: transfer
    provider: https://alice.example/
    receiver: https://bob.example/
    resourceConformsTo: wd:Q89 # apples
    resourceQuantity:
      hasUnit: kilogram
      hasNumericalValue: 50

  - '@id': bob:fd399b37-0740-4a68-a184-1e655021ca21
    '@type': Commitment
    clauseOf: alice:57f1c1d0-432e-4bfa-9d32-002b8955a708
    action: transfer
    provider: https://bob.example/
    receiver: https://alice.example/
    resourceConformsTo: wd:Q5977438 # soft apple cider
    resourceQuantity:
      hasUnit: litre
      hasNumericalValue: 10
```

#### Retail exchange

An exchange without prior commitments.  Note we are still using the Agreement to tie together the reciprocal events, even there were no commitments ahead of time.

![retail diagram reflecting the yaml below](../assets/examples/exch-pos.png)

``` yaml
# Example: Simple retail exchange without commitments

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - carol: https://carol.example/
    store: https://store.example/

'@graph':

  - '@id': store:ac9ec98d-db80-44dc-97be-7aa149b2fe5d
    '@type': Agreement
    note: Carol purchased a new bucket at the hardware store and paid 5 dollars for it.

  - '@id': store:a8356625-bf64-4c16-9099-28aa1b718c4b
    '@type': EconomicEvent
    realizationOf: store:ac9ec98d-db80-44dc-97be-7aa149b2fe5d
    action: transfer
    provider: https://store.example/
    receiver: https://carol.example/
    resourceConformsTo: wd:Q47107 # bucket
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1

  - '@id': store:2342d456-5d6f-46d5-a7ed-3ac7bfd5a86c
    '@type': EconomicEvent
    reciprocalRealizationOf: store:ac9ec98d-db80-44dc-97be-7aa149b2fe5d
    action: transfer
    provider: https://carol.example/
    receiver: https://store.example/
    resourceConformsTo: wd:Q4917 # US dollar
    resourceInventoriedAs: carol:e56fd654-7b94-4d96-8e60-de39e08329a7 # Carol's bank account
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 5
```

#### Crypto-currency transfer

A simple transfer of a currency from one agent to another.

![crypto transfer diagram reflecting the yaml below](../assets/examples/xfer-crypto.png)

``` yaml
# Transfer of crypto-currency, ignoring the fee, but to record time involved in the transfer validation process

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - bob: https://bob.example/
    alice: https://alice.example/
    fair: https://faircoin.example/

'@graph':

  # accounts before

  - '@id': fair:b75d8f6a-e2df-4e52-b36d-1a22a66f4ead
    '@type': EconomicResource
    note: Alice's wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 540

  - '@id': fair:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': EconomicResource
    note: Bob's wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 480

  # transfer from Alice to Bob

  - '@id': urn:uuid:e5afaa28-1080-4912-835b-46883efb83e6
    '@type': EconomicEvent
    action: transfer
    resourceConformsTo: wd:Q21002847 # FairCoin
    resourceInventoriedAs: fair:b75d8f6a-e2df-4e52-b36d-1a22a66f4ead # Alice's wallet address
    toResourceInventoriedAs: fair:3be5259d-10f0-431c-9fec-9c0c15a461d3 # Bob's wallet address
    provider: https://alice.example
    receiver: https://bob.example
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 100
    hasPointInTime: 2019-04-18T8:30:08-5:00

  # accounts after

  - '@id': fair:b75d8f6a-e2df-4e52-b36d-1a22a66f4ead
    '@type': EconomicResource
    note: Alice's wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 440

  - '@id': fair:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': EconomicResource
    note: Bob's wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 580
```

#### Moving crypto-currency

A simple move of a currency from one account to another by one agent.

![crypto move diagram reflecting the yaml below](../assets/examples/move-crypto.png)

``` yaml
# Move of crypto-currency for one agent, ignoring the fee

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - bob: https://bob.example/
    fair: https://faircoin.example/

'@graph':

  # accounts before

  - '@id': fair:6fb358a3-2859-4d6a-a4fa-431603ee70f5
    '@type': EconomicResource
    note: Bob's first wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 540

  - '@id': fair:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': EconomicResource
    note: Bob's second wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 480

  # move between Bob's accounts

  - '@id': urn:uuid:e5afaa28-1080-4912-835b-46883efb83e6
    '@type': EconomicEvent
    action: move
    resourceconformsTo: wd:Q21002847 # FairCoin
    resourceInventoriedAs: fair:6fb358a3-2859-4d6a-a4fa-431603ee70f5 # Bob's first wallet address
    toResourceInventoriedAs: fair:3be5259d-10f0-431c-9fec-9c0c15a461d3 # Bob's second wallet address
    provider: https://bob.example
    receiver: https://bob.example
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 100
    hasPointInTime: 2019-04-18T8:30:08-5:00

  # accounts after

  - '@id': fair:b6fb358a3-2859-4d6a-a4fa-431603ee70f5
    '@type': EconomicResource
    note: Bob's first wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 440

  - '@id': fair:3be5259d-10f0-431c-9fec-9c0c15a461d3
    '@type': EconomicResource
    note: Bob's second wallet address
    conformsTo: wd:Q21002847 # FairCoin
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 580
```

#### Checkout book

Checking out and checking back in a library book (a loan).

![checkout diagram reflecting the yaml below](../assets/examples/book.png)

``` yaml
# Checking out a book

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - library: https://library.example/
    bob: https://bob.example/

'@graph':

  # resource before

  - '@id': library:2402b57c-1c45-423a-acb2-f50961c97d65
    '@type': EconomicResource
    note: Valueflows cookbook ISBN:1234 copy 2
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    onhandQuantity:
      hasUnit: one
      hasNumericalValue: 1

  # check out

  - '@id': library:f47064eb-7120-4b31-b882-770165901fe6
    '@type': Agreement
    note: loaning Valueflows cookbook to Bob

  - '@id': urn:uuid:54b814ee-62dc-40c1-bb96-f8582aa4f771
    '@type': EconomicEvent
    realizationOf: library:f47064eb-7120-4b31-b882-770165901fe6
    action: transferCustody
    resourceInventoriedAs: library:2402b57c-1c45-423a-acb2-f50961c97d65
    hasPointInTime: 2019-04-18T8:00:00-5:00
    provider: https://library.example/
    receiver: https://bob.example/
    resourceQuantity: 
      hasUnit: one
      hasNumericalValue: 1

  - '@id': urn:uuid:98c2bfeb-9c70-4801-896c-4646b975a7d9
    '@type': Commitment
    clauseOf: library:f47064eb-7120-4b31-b882-770165901fe6
    action: transferCustody
    resourceInventoriedAs: library:2402b57c-1c45-423a-acb2-f50961c97d65
    provider: https://bob.example/
    receiver: https://library.example/
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    due: 2019-05-17T18:00:00-5:00

  # resource after check out

  - '@id': library:2402b57c-1c45-423a-acb2-f50961c97d65
    '@type': EconomicResource
    note: Valueflows cookbook ISBN:1234 copy 2
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    onhandQuantity:
      hasUnit: one
      hasNumericalValue: 0

  # return

  - '@id': urn:uuid:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da59
    '@type': EconomicEvent
    realizationOf: library:f47064eb-7120-4b31-b882-770165901fe6
    action: transferCustody
    resourceInventoriedAs: library:2402b57c-1c45-423a-acb2-f50961c97d65
    provider: https://bob.example/
    receiver: https://library.example/
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 1
    hasPointInTime: 2019-05-14T10:20:00-5:00
    fulfills: urn:uuid:98c2bfeb-9c70-4801-896c-4646b975a7d9 # the commitment

  # resource after return

  - '@id': library:2402b57c-1c45-423a-acb2-f50961c97d65
    '@type': EconomicResource
    note: Valueflows cookbook ISBN:1234 copy 2
    accountingQuantity:
      hasUnit: one
      hasNumericalValue: 1
    onhandQuantity:
      hasUnit: one
      hasNumericalValue: 1
```

#### Claim for income

Logged work triggers a claim for future income distribution for that work.

![claim diagram reflecting the yaml below](../assets/examples/claim.png)

``` yaml
# Example: Claim (simple)

'@context':
  - '@vocab': http://w3id.org/valueflows/ont/vf#
  - bob: https://bob.example/
    mfg: https://manufacturer.example/

'@graph':

  # Bob does some work to create a product that the mfg team wishes to sell on the marketplace

  - '@id': mfg:02b39a30-3e04-4305-9656-7f261aa63c83
    '@type': EconomicEvent
    action: work
    provider: https://bob.example/
    receiver: https://manufacturing.example/
    resourceConformsTo: wd:Q192047 # machining
    effortQuantity:
      hasUnit: hour
      hasNumericalValue: 7
    hasBeginning: 2018-10-14T8:00:00-0:00
    hasEnd: 2018-10-14T15:00:00-0:00

  # this triggers a claim for payment in the future based on an income distribution agreement among the mfg group

  - '@id': mfg:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58
    '@type': Claim
    action: transfer
    provider: https://manufacturing.example/
    receiver: https://bob.example/
    resourceConformsTo: wd:Q1104069 # Canadian dollar
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 140
    created: 2018-10-14T15:30:00-0:00
    triggeredBy: mfg:02b39a30-3e04-4305-9656-7f261aa63c83

  # half of the manufactured product is sold, and income is distributed

  - '@id': mfg:c7897c39-7f05-4a5d-a487-80e130a2414a
    '@type': EconomicEvent
    action: transfer
    provider: https://manufacturing.example/
    receiver: https://bob.example/
    resourceConformsTo: wd:Q1104069 # Canadian dollar
    resourceQuantity:
      hasUnit: one
      hasNumericalValue: 70 # partially settles the claim
    hasPointInTime: 2018-10-25T09:30:00-0:00
    settles: mfg:d4d2fd71-34f2-41c3-b1c5-19ad5ed2da58 # the claim

```

