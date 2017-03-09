### vf:Event

<table>
<tr><td>rdf:type</td><td> owl:Class </td></tr>
<tr><td>rdfs:label</td><td>IPOEvent</td></tr>
<tr><td>rdfs:comment</td><td>A vf:IOPEvent is an inflow or outflow of an economic resource in relation to a process. This could reflect a change in the quantity of a vf:Resource. It is also defined by its behavior in relation to the vf:Resource and a vf:Process (consume, use, create, etc.)</td></tr>
<tr><td>Properties</td><td>vf:action, vf:resource, vf:eventQuantity, vf:eventStart, vf:note</td></tr>
</table>

*How resources relate to events*

An event can trigger incrementing or decrementing a resource. This is clear in the case of consuming a component or creating a product.  Sometimes it does neither, as in the case of citing a document. We consider a citation to be an inflow of a resource, but it does not decrement the resource. In fact, more citations make the resource more valuable. But the cited resource presumably added value to the output of the process (for example, the design of a 3D printed product, without which it cannot be made).

In any case, the quantity of a resource related to the event is not a resource itself, it is just a property of the event.  For example a resource could be 100 widgets on a pallet, lot number 1234.  If 10 of those widgets are consumed in a process that makes something out of them, that is an event: consumption of 10 widgets of lot number 1234.  The event triggers the decrement of the original resource of 100 widgets, which now has quantity of 90.

(More work needs to be done in the quantity area for durations....)