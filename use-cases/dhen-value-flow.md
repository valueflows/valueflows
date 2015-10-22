#DHen value flow

An example of an incoming value flow combining Exchanges and Processes.

```
  0 EconomicResource: Catnip: 60915
 . 1 EconomicEvent: Transfer 2015-06-20 from Namaste Lane Gardens to Tea for the People 0.89 Lbs Catnip: 60915
 .. 2 Exchange: Transfer Catnip
 .. 2 EconomicEvent: Resource Production 2015-06-09 12.41 Lbs Catnip: 60915
 ... 3 Process: Combined harvested: new lot  starting 2015-06-09 ending 2015-06-09
 .... 4 EconomicEvent: Resource Consumption 2015-06-09 8.19 Lbs Catnip: Catnip from farm
 .... 4 EconomicEvent: Resource Consumption 2015-06-09 4.22 Lbs Catnip: Catnip from farm
 ..... 5 EconomicResource: Catnip: Catnip from farm2
 ...... 6 EconomicEvent: Transfer 2015-06-09 from Megan Pierce to Namaste Lane Gardens 8.19 Lbs Catnip: Catnip from farm2
 ....... 7 Exchange: Transfer Catnip
 ....... 7 EconomicEvent: Receipt 2015-06-09 from Dancing Waters Permaculture Coop to Megan Pierce 8.19 Lbs Catnip: Catnip from farm2
 ........ 8 Exchange: Purchase Catnip
 ..... 5 EconomicResource: Catnip: Catnip from farm1
 ...... 6 EconomicEvent: Transfer 2015-06-09 from Lauren McElroy to Namaste Lane Gardens 4.22 Lbs Catnip: Catnip from farm1
 ....... 7 Exchange: Transfer Catnip
 ....... 7 EconomicEvent: Receipt 2015-06-09 from Dancing Waters Permaculture Coop to Lauren McElroy 4.22 Lbs Catnip: Catnip from farm1
 ........ 8 Exchange: Purchase Catnip
```

What's going on here, from beginning of flow to end (note only the catnip flow is displayed, nothing of reverse flows):
* Megan and Lauren both harvested catnip at Dancing Waters farm. (Process not recorded, no need.)
* There is a transfer from DW to each of them so they now own the catnip. (This is the 7 receipt, 8 exchange. They could pay the farm as part of this exchange, but in this case, they don't bother because they both live there.  And often the farms donate the herbs anyhow.)
* They each sold the catnip to Namaste Lane. (7 transfer, 6, 5. Two exchanges - only the transfer (receipt by NL) of the herbs shows in this directional sequence, the harvesters are either paid or owed money.)
* Namaste Lane combined the catnip into one lot and put it into the drying room (a process 3, with inputs 4 and 4, and output 2 resource production - this is where the lot number is created)
* When it got dry, it was removed from the drying room.  (Process not recorded.)
* When it comes out though, it also changes ownership - transfered from NL to Tea for People.  Still has the same lot number, but much less weight because it is dry. (Exchange 2 Transfer, and 1. Now it is just sitting in a storage room waiting to be sold.  Again reverse side of the exchange not shown.)

###Sequencing the flows (pseudocode):

```
resource = Catnip: 60915:
resource.depth_first_search():
    events = resource.all_economic_events()
    data = {} #a dictionary
    for event in events:
        event.previous_events = events.filter(to_agent=event.from_agent).exclude(id=event.id)
        data[event] = event.previous_events
    # Sequence events via topological sort, 
    # starting from events with no previous_events,
    # following the chain from previous to next event.
    event_sequence = toposort(data) 
    event_sequence.reverse()
    for event in event_sequence:
        if event.is_transfer():
            follow from transfer to exchange to reciprocal_transfer
        elif event.is_production():
            for input in event.process.inputs():
                input.resource.depth_first_search()
                
        
```
 [topological sort](https://bitbucket.org/ericvsmith/toposort/src/25b5894c4229cb888f77cf0c077c05e2464446ac/toposort.py?at=default&fileviewer=file-view-default)

Will follow with link to NRP code when it's better tested...
