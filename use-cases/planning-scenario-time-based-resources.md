# Planning for time-based resources

Time-based resources, like human work and machines like 3d printers, are used, not consumed.

In the typical old-school manufacturing planning process, [Material Requirements Planning](https://en.wikipedia.org/wiki/Material_requirements_planning) (MRP) planned consumable material inputs and the production of material outputs. [Capacity Requirements Planning](https://smallbusiness.chron.com/definition-capacity-requirements-planning-36994.html) (CRP) used the MRP results to somewhat plan the time-based resources. 

But CRP assumed infinite substitutable quantities of time-based resources (infinite humans or 3d printers) because if two MRP planned processes used a time-based resource of the same type at the same time, CRP would plan two uses at the same time. Or three or ten...

[Finite Capacity Scheduling](https://searcherp.techtarget.com/definition/finite-capacity-scheduling) systems have been added to the mix more recently. They tend to be add-on systems, and they also tend to be expensive and difficult to implement.

We have a friend who has been working on implementing a finite capacity planning system for 2 years, with more than one death march along the way.

It is possible to all three - MRP, CRP, and Finite Capacity Scheduling - using the same model, in the same system. ValueFlows will be able to support that. NRP was almost capable. I worked on [this skunkworks project](https://en.wikipedia.org/wiki/Quick_Response_Engine) in the mid-1990s that as capable of doing it all in real time, event-driven, always up-to-date.

If you look at that Finite Capacity Scheduling link, it lists a bewildering variety of complex techniques. We used a simple technique called production sequence synchronization, where the workloads for every time-based resource were sequenced according to the sequence of end-item demands. That way, each time-based resource will be scheduled for only one job at a time. We tried on optimization technique, but the manufacturing shop floor people hated it because it was very sensitive to any change in conditions and could reschedule everything if anything changed. Sequencing was not "optimal", but was good enough, and the sequences were stable unless an end-item demand changed.
