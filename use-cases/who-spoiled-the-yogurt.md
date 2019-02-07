# Who spoiled the yogurt?
## or, transfers of custody in practice

*Excerpted from https://cacm.acm.org/magazines/2019/2/234355-blockchains-from-a-distributed-computing-perspective/fulltext*

*Note: a blockchain is not required for this scenario. Any local-consensus environment will do, like Holochain, and similar local-consensus mechanisms, countersignatures, and hashchains could be implemented in ActivityPub or Scuttlebutt.*

I've emboldened the paragraph about transfers of custody.

> Alice also owns a frozen yogurt parlor, and her business is in trouble. Several recent shipments of frozen yogurt have been spoiled, and Bob, her supplier, denies responsibility. When she sued, Bob's lawyers successfully pleaded that not only had Bob never handled those shipments, but they were spoiled when they were picked up at the yogurt factory, and they were in excellent condition when delivered to Alice's emporium.

> Alice decides it is time to "blockchain" her supply chain. She rents some cloud storage to hold the ledger, and installs Internet-enabled temperature sensors in each frozen yogurt container. She is concerned that sensors are not always reliable (and that Bob may have tampered with some), so she wires the sensors to conduct a Byzantine fault-tolerant consensus protocol,4 which uses several rounds of voting to ensure temperature readings cannot be distorted by a small number of faulty or corrupted sensors. At regular intervals, the sensors reach consensus on the current temperature. They timestamp the temperature record, and add a hash of the prior record, so that any attempt to tamper with earlier records will be detected when the hashes do not match. They sign the record to establish authenticity, and then append the record to the cloud storage's list of records.

> **Each time a frozen yogurt barrel is transferred from Carol's factory to Bob's truck, Bob and Carol sign a statement agreeing on the change of custody. (Alice and Bob do the same when the barrel is delivered to Alice.) At each such transfer, the signed change-of custody certificate is time stamped, the prior record is hashed, the current record is appended to the cloud storage's list.**

> Alice is happy because she can now pinpoint when a yogurt shipment melted, and who had custody at the time. Bob is happy because he cannot be blamed if the shipment had melted before he picked it up at the factory, and Carol is similarly protected.

> Here is a point that will become important later. At every stage, Alice's supply-chain blockchain includes identities and access control. The temperature sensors sign their votes, so voter fraud is impossible. Only Alice, Bob, and Carol (and the sensors) have permission to write to the cloud storage, so it is possible to hold parties accountable if someone tries to tamper with the ledger.
