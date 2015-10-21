#DHen value flow

An example of an incoming value flow combining Exchanges and Processes.

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
