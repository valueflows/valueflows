From our neighbor who works in one for OV = [Organic Valley](https://www.organicvalley.coop/)

* WCS = Warehouse Control System: talks to the [Programmable Logic Controllers = PLCs](https://en.wikipedia.org/wiki/Programmable_logic_controller) ( runs conveyors, cranes, etc.).
* WMS = Warehouse Management System creates the accounting transactions through an integration to the Enterprise Resource Planning system = ERP.  Some data (e.g. master data) about the products also comes in from ERP.

1. When the product is brought in from the truck it is checked in via [RFID](https://en.wikipedia.org/wiki/Radio-frequency_identification).  OV now takes possession of the goods, and the inventory goes into a Received status.
2. A fork lift driver brings the pallet over to a staging area, near the Infeed, at which point it goes into a Staged status.
3. A fork lift moves the pallet onto the infeed conveyor, it now goes into an Infeed status
4. The ASRS (automated storage and retrieval system) moves the pallet into storage and notifies the WMS that it is put away.  The pallet goes into a ASRS status.  The WMS has no idea where exactly the pallet is.  Only the WCS knows.
