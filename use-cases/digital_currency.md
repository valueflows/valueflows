# This is the first draft of a digital currency example

## Currency: [FairCoins](https://fair-coin.org/), a BitCoin variant.

* Bob sends 2 FairCoins from his address to Lynn's address.
* His software creates a FairCoin Transaction, which it attempts to broadcast to a FairCoin network.
    * The attempt to broadcast may fail; the network may not accept the transaction.
* The network immediately takes a 0.001 FC fee, leaving 1.999 FCs to go to Lynn (maybe).
* FairCoin, like BitCoin, requires sending the whole quantity of one or more inputs as an output. 
    * Bob's transaction inputs total 5 Faircoins, so the outputs include 1.999 FCs to Lynn and 3 FCs in change that go back to Bob.
* FairCoin transactions, like BitCoin's, require [confirmation](https://en.bitcoin.it/wiki/Confirmation). 
    * Bob's transaction may take several minutes to be confirmed, so Lynn cannot consider the transaction amount to be usable until that happens. And it also may fail to be confirmed.
* Both Bob's address and Lynn's address are Economic Resources. 
    * Bob has rights to the amount of FCs in his address, and Lynn has already had rights to those in hers.
    * If and then the transaction is confirmed, Bob's balance will be decremented by 2 FCs and Lynn's balance will be incremented by 1.999 FCs.
    * The amount of FCs on the transaction to Lynn (1.999) is not an Economic Resource. Nobody can use it. It is just a record of the amount by which Lynn's balance will increase if the transaction succeeds.
    
I think this is analogous to how wire transfers of legal currencies work.
