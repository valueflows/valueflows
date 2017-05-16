## Snippet to study fulfillment of process and exchange related commitments

This initial version of the picture does not have any of the proposed differentiation between process-related and exchange-related commitments.  The yaml has some of that.  It is all here to facilitate discussion on the issue, see what it actually might look like.

Use case:
* The bakery orders 2 bushels of apples from the fruit farm in exchange for 1000 Faircoin.
* The fruit farm delivers 1.5 bushels of apples (all they had left) to the bakery.
* The fruit farm does a day of harvesting apples.
* The bakery order another .5 bushel of apples, since they have a delivery coming anyhow.
* The fruit farm delivers 1 bushel of apples, so that all orders are fulfilled.
* The bakery pays for all the apples at once, with 1250 Faircoin.

![pic](https://github.com/valueflows/valueflows/blob/master/snippets/order-fulfillment.png)

#### Resources before
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/apples
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q89#apple-category
'skos:note': This only has a resource category, the fruitfarm does not keep inventory records on its apples.
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://bakery.example/apples
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q89#apple-category
'vf:quantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Bushel
  'qudt:numericValue': .5
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://chain.fair-coin.org/address/fVRdLE87ywagHTLkWf7B4y2f3DU1K59nFE/#
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q8142#currency
'vf:resourceModel': https://ocp.freedomcoop.eu/accounting/resource-type/26/#Faircoin-address #best way to do currency?
'vf:quantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 20433
'skos:note': the bakery faircoin address (account)
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://chain.fair-coin.org/address/fFdw8QyWwJjHVPnjkWkYAYbQ1GxmT5JA7w/#
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q8142#currency
'vf:resourceModel': https://ocp.freedomcoop.eu/accounting/resource-type/26/#Faircoin-address #best way to do currency?
'vf:quantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 5400
'skos:note': the fruit farm faircoin address (account)
```
#### The bakery orders apples from the fruit farm
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rf789f7f#exchange
'@type': vf:ExchangeAgreement
'skos:note': bakery orders apples in exchange for Faircoin
'vf:commitments':
  - '@id': '#unload-1'
    '@type': vf:Commitment
    'vf:committedAction': vf:unload
    'vf:involves': https://fruitfarm.example/apples
    'vf:committedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 2
    'vf:provider': https://fruitfarm.example/#agent
    'vf:receiver': https://customer.example/#agent
  - '@id': '#receive-3'
    '@type': vf:Commitment
    'vf:committedAction': vf:transfer #just trying this out; could also be vf:receive
    'vf:resourceCategory': https://www.wikidata.org/wiki/Q8142#currency #don't even really need this
    'vf:committedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Faircoin
      'qudt:numericValue': 1000
    'vf:provider: https://bakery.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent    
```
#### Fruit Farm delivers some of the apples
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rf782334df#process
'@type': vf:Transportation
'vf:input':
  - '@id': '#work-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:work
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Hour
      'qudt:numericValue': .5  
    'vf:provider': https://bob.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
  - '@id': '#load-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:load
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 1.5
    'vf:provider': https://fruitfarm.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
'vf:output':
  - '@id': '#unload-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:unload # deliver sounds better in this use case
    'vf:affects': https://bakery.example/apples
    'vf:action': vf:unload
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 1.5
    'vf:provider: https://fruitfarm.example/#agent
    'vf:receiver': https://bakery.example/#agent
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rf78233ccc#fulfillment
'@type': vf:TransferFulfillment
'vf:fulfillsTransfer': https://fruitfarm.example/rf789f7f#unload-1   #commitment
'vf:fulfilledBy': https://fruitfarm.example/rf782334df#unload-1    #event
'vf:fulfilledQuantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Bushel
  'qudt:numericValue': 1.5
```

#### Fruit Farm plans and harvests more apples
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rf78234uj8#process
'@type': vf:Transformation
'skos:note': harvest apples
'vf:input':
  - '@id': '#commitment-1'
    '@type': vf:Commitment
    'vf:action': vf:work
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Hour
      'qudt:numericValue': 8  
    'vf:provider': https://alice.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
  - '@id': '#work-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:work
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Hour
      'qudt:numericValue': 8  
    'vf:provider': https://alice.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
    'vf:fulfills': https://fruitfarm.example/rf78234uj8#commitment-1
'vf:output':
  - '@id': '#commitment-2'
    '@type': vf:EconomicEvent
    'vf:action': vf:produce
    'vf:affects': https://fruitfarm.example/apples 
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 12
    'vf:provider: https://fruitfarm.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
  - '@id': '#produce-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:produce
    'vf:affects': https://fruitfarm.example/apples 
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 15
    'vf:provider: https://fruitfarm.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
    'vf:fulfills': https://fruitfarm.example/rf78234uj8#commitment-2
```
#### The bakery decides to order some more apples as long as they are still due a delivery
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rf78as88#exchange
'@type': vf:ExchangeAgreement
'skos:note': bakery ordersapples in exchange for Faircoin
'vf:commitments':
  - '@id': '#unload-1'
    '@type': vf:Commitment
    'vf:committedAction': vf:unload
    'vf:involves': https://fruitfarm.example/apples
    'vf:committedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': .5
    'vf:provider: https://fruitfarm.example/#agent
    'vf:receiver': https://customer.example/#agent
  - '@id': '#receive-3'
    '@type': vf:Commitment
    'vf:committedAction': vf:transfer #just trying this out; could also be vf:receive
    'vf:resourceCategory': https://www.wikidata.org/wiki/Q8142#currency #don't even really need this
    'vf:committedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Faircoin
      'qudt:numericValue': 250
    'vf:provider: https://bakery.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent    
```

#### Fruit farm plans and delivers the rest of the apples 
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rf782334df#process
'@type': vf:Transportation
'vf:input':
  - '@id': '#commitment-1'
    '@type': vf:Commitment
    'vf:action': vf:load
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 1
    'vf:provider': https://fruitfarm.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
  - '@id': '#load-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:load
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 1
    'vf:provider': https://fruitfarm.example/#agent
    'vf:receiver': https://fruitfarm.example/#agent
    'vf:fulfills': https://fruitfarm.example/rf782334df#commitment-1
'vf:output':
  - '@id': '#commitment-2'
    '@type': vf:Commitment
    'vf:action': vf:unload # deliver sounds better in this use case
    'vf:affects': https://bakery.example/apples
    'vf:action': vf:unload
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 1
    'vf:provider: https://fruitfarm.example/#agent
    'vf:receiver': https://bakery.example/#agent
  - '@id': '#unload-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:unload # deliver sounds better in this use case
    'vf:affects': https://bakery.example/apples
    'vf:action': vf:unload
    'vf:affectedQuantity':
      '@type': qudt:QuantityValue
      'qudt:unit': unit:Bushel
      'qudt:numericValue': 1
    'vf:provider: https://fruitfarm.example/#agent
    'vf:receiver': https://bakery.example/#agent
    'vf:fulfills': https://fruitfarm.example/rf782334df#commitment-2
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rfdfs7789d#fulfillment
'@type': vf:TransferFulfillment
'vf:fulfillsTransfer': https://fruitfarm.example/rf789f7f#unload-1   #commitment
'vf:fulfilledBy': https://fruitfarm.example/rf782334df#unload-1    #event
'vf:fulfilledQuantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Bushel
  'qudt:numericValue': .5
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rfdfs778ww#fulfillment
'@type': vf:TransferFulfillment
'vf:fulfillsTransfer': https://fruitfarm.example/rf78as88#unload-1   #commitment
'vf:fulfilledBy': https://fruitfarm.example/rf782334df#unload-1    #event
'vf:fulfilledQuantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Bushel
  'qudt:numericValue': .5
```
#### The bakery pays for all the apples
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://bakery.example/erw890e8r#transfer
'@type': vf:Transfer #???? one event? two events? do like issue/receive?
'vf:affectedQuantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 1250
'vf:provider': https://bakery.example/#agent
'vf:receiver': https://fruitfarm.example/#agent
'vf:give':
  - '@id': '#give-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:give
    'vf:affects': '@id': https://chain.fair-coin.org/address/fVRdLE87ywagHTLkWf7B4y2f3DU1K59nFE/#
'vf:take':
  - '@id': '#take-1'
    '@type': vf:EconomicEvent
    'vf:action': vf:take
    'vf:affects': '@id': https://chain.fair-coin.org/address/fFdw8QyWwJjHVPnjkWkYAYbQ1GxmT5JA7w/#
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rfdfwerw3#fulfillment
'@type': vf:TransferFulfillment
'vf:fulfillsTransfer': https://fruitfarm.example/rf789f7f#receive-3   #commitment
'vf:fulfilledBy': https://bakery.example/erw890e8r#take-1    #event
'vf:fulfilledQuantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 1000
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/rfdfwerw4#fulfillment
'@type': vf:TransferFulfillment
'vf:fulfillsTransfer': https://fruitfarm.example/rf78as88#receive-3   #commitment
'vf:fulfilledBy': https://bakery.example/erw890e8r#take-1    #event
'vf:fulfilledQuantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 250
```  

#### Resources after
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://fruitfarm.example/apples
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q89#apple-category
'skos:note': This only has a resource category, the fruitfarm does not keep inventory records on its apples.
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://bakery.example/apples
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q89#apple-category
'vf:quantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Bushel
  'qudt:numericValue': 3
```
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://chain.fair-coin.org/address/fVRdLE87ywagHTLkWf7B4y2f3DU1K59nFE/#
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q8142#currency
'vf:resourceModel': https://ocp.freedomcoop.eu/accounting/resource-type/26/#Faircoin-address #best way to do currency?
'vf:quantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 19183
'skos:note': the bakery faircoin address (account)
``` yaml
'@context': https://w3id.org/valueflows/v1
'@id': https://chain.fair-coin.org/address/fFdw8QyWwJjHVPnjkWkYAYbQ1GxmT5JA7w/#
'@type': vf:EconomicResource
'vf:resourceCategory': https://www.wikidata.org/wiki/Q8142#currency
'vf:resourceModel': https://ocp.freedomcoop.eu/accounting/resource-type/26/#Faircoin-address #best way to do currency?
'vf:quantity':
  '@type': qudt:QuantityValue
  'qudt:unit': unit:Faircoin
  'qudt:numericValue': 6650
'skos:note': the fruit farm faircoin address (account)
```
