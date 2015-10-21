#DHen value flow

An example of a value flow combining Exchanges and Processes.

```
  0 Catnip: 60915
 . 1 Transfer 2015-06-20 from Namaste Lane Gardens to Tea for the People 0.89 Lbs Catnip: 60915
 .. 2 Transfer Catnip, Transfer starting 2015-06-20
 .. 2 Resource Production 2015-06-09 from Namaste Lane Gardens to Namaste Lane Gardens 12.41 Lbs Catnip: 60915
 ... 3 Combined harvested: new lot  starting 2015-06-09 ending 2015-06-09
 .... 4 Resource Consumption 2015-06-09 from Namaste Lane Gardens to Namaste Lane Gardens 8.19 Lbs Catnip: Catnip from farm
 .... 4 Resource Consumption 2015-06-09 from Namaste Lane Gardens to Namaste Lane Gardens 4.22 Lbs Catnip: Catnip from farm
 ..... 5 Catnip: Catnip from farm
 ...... 6 Transfer 2015-06-09 from Megan Pierce to Namaste Lane Gardens 8.19 Lbs Catnip: Catnip from farm
 ....... 7 Transfer Catnip, Transfer starting 2015-06-09
 ....... 7 Receipt 2015-06-09 from Dancing Waters Permaculture Coop to Megan Pierce 8.19 Lbs Catnip: Catnip from farm
 ........ 8 Purchase Catnip, Purchase Contribution starting 2015-06-09
 ..... 5 Catnip: Catnip from farm
 ...... 6 Transfer 2015-06-09 from Lauren McElroy to Namaste Lane Gardens 4.22 Lbs Catnip: Catnip from farm
 ....... 7 Transfer Catnip, Transfer starting 2015-06-09
 ....... 7 Receipt 2015-06-09 from Dancing Waters Permaculture Coop to Lauren McElroy 4.22 Lbs Catnip: Catnip from farm
 ........ 8 Purchase Catnip, Purchase Contribution starting 2015-06-09
```

What's going on here, from end of flow to beginnings:
* Lot 60915 of Catnip
    * was transferred from Namaste Lane Gardens to Tea for the People
        * in an Exchange
    * Lot 60915 was created in a Process that combined two previous lots of Catnip from farm 
        * those lots of Catnip from farm had been transferred from the harvester to Namaste Lane Gardens
        
I can sequence and present all of this information on [this page](http://dhen.webfactional.com/accounting/incoming-value-flows/502/), 
but my algorithm is not yet reliable for all conditions.  When I get a reliable algorithm, I will add it to this use case.
