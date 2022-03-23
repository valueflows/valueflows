### Action Definitions

All flows (Economic Event, Commitment, Intent, Claim, Recipe Flow) use an action property to designate what the flow is doing and how it will affect an economic resource (or not).  Actions are defined as follows.

**vf:produce** - A new resource is created in that process or an addition to an existing stock resource of the same type is incremented.  `produce` is used in manufacturing of goods, but also in any kind of creation of a material or digital or energy resource.

**vf:use** - Most often `use` is employed for equipment or tools that are used in a process, but not consumed.  After the process, the piece of equipment of tool still exists, but during the process, it is unavailable. This can be useful to know if the resource must be scheduled, or if one needs to know how much the resource is used.

**vf:consume** - Most often, an ingredient or component is transformed  into the output(s) of the process. Or the input resource can be used up during the process, like energy. After the process the specified quantity of the consumed input is gone.

**vf:cite** - `cite` is used when a resource is input to a process, but is neither used nor consumed, and remains available during the process.  Examples are a design file or a scientific paper, any digital knowledge, which is cited so that the agent(s) responsible for the resource receive credit.

**vf:work** - `work` refers to labor power applied to a process.  There is generally no identifiable resource involved, only the provider agent. In this case, the type of work or skill involved can be identified by a resource specification. A possible exception would be if the agent's work schedule is kept on a calendar, representing when the specific agent is available to work.

**vf:pickup** -  The transported resource or person enters the process; the same resource will appear later in an output of the process.  It is assumed that the resource is already in custody of the agent providing the transportation.

**vf:dropoff** -  The transported resource or person leaves the process; the same resource or person appeared in an input of this process.

**vf:accept** - This is used as input to a process involving repair, modification, testing, or similar of a resource.  The same resource will appear in the output of the process.  It is sometimes a bit of a gray area when to use `accept`/`modify` vs. `consume`/`produce`.  The choice is based on the need to have the same identified resource before and after the process. Generally if the resource is involved in a series of processes to create it before anything else happens to it, `accept`/`modify` is appropriate.  If the input resource and the output resource need to be identified as different resource specifications for any reason, then `accept`/`modify` is not appropriate.

**vf:modify** - The identified resource that was accepted into a process appears in the output of that process, with modifications made.  Note not all modifications require a physical change, for example quality testing.  In all cases though, it matters that the resource has gone through that process, and the `stage` of the resource (the process specification of the process) is then used as part of the logical identification of the resource when the resource is requested as a process input or for a transfer.

**vf:combine** - A resource is put in a package or a combination resource; the same resource might appear later when it is separated.  Examples are packing one or more resources for transportation or storage, or creation of a kit resource.  The combined resource is still identified in the system, but is `containedIn` the package or combination resource, which would be usually produced in the process.  When a resource is `containedIn` another resource, it is not available on its own.  Note that packing materials or containers which will continue to have their own identity later are also combined in the process; if not, they can be consumed.

**vf:separate** - A resource is removed from a package or a combination resource; the same resource appeared as input earlier in this or another process when it was combined.  When the resource is separated, it loses its `containedIn` reference, and becomes available on its own.

**vf:deliver-service** - A new service is produced and delivered as output of a process. A service implies that an agent actively receives the service at the same time as it is delivered.  Services are not tangible, so would not create or increment an inventoried resource. Services are perhaps most often delivered directly to an agent. But unlike other actions, sometimes the service is at the same time being delivered into another documented process, in which case it can be output from a process and input to another, at the same time. 

**vf:transfer-all-rights** - This action gives full (in the human realm) rights and responsibilities to another agent, without transferring physical custody.  People might call this "ownership"; or it might be considered "stewardship" or similar.  This occurs instantaneously, and does not involve documented physical transfer.  It is often `triggeredBy` a transfer of custody, for example shipping or receipt of goods.

**vf:transfer-custody** - This action gives physical custody and control of a resource to another agent, without full rights. The physical custodian often has responsibilities associated with custody, however.  Examples where transfer of custody is useful are loaning a resource to another agent, or when a resource is transferred to have a service performed by another agent, like transportation or repair.

**vf:transfer** - This action gives full (human) rights and responsibilities plus physical custody, combining the last two actions.

**vf:move** - `move` changes the location, and possibly the identifier, if location is part of the logical identifier, of a resource with no transfer of agent rights or custodianship.

**vf:raise** - This action adjusts a quantity up, used either when a computer system is brought up and existing resources must be entered with a beginning balance, or when an inventory count in the real world shows that there the quantity in the computer system is too low.  When it is known how a resource was obtained, it is preferable to use the real action.

**vf:lower** - This action adjusts a quantity down, based on an inventory count in the real world showing that the quantity in the computer system is too high.  When it is known how a resource was lowered, it is preferable to use the real action.

### Action Behaviors

Action | Accounting effect | Onhand effect | I/O | Other effect | Pairs with |
------ | ------ | --- | ----------------- | ---------- | --------- |
produce | Increment | Increment | Output | N/A | N/A |
consume | Decrement | Decrement | Input | N/A | N/A |
use | No effect(1) | No effect(1) | Input | N/A | N/A |
work | No effect(1) | No effect(1) | Input | N/A | N/A |
cite | No effect  | No effect  | Input | N/A | N/A |
deliver-service | No effect | No effect | Output(3) | N/A | N/A |
pickup | No effect | No effect  | Input | N/A | dropoff |
dropoff | No effect | No effect | Output | currentLocation(4) | pickup |
accept | No effect | Decrement  | Input | N/A | modify |
modify | No effect | Increment  | Output | N/A | accept |
combine | No effect | Decrement  | Input | add containedIn | separate |
separate | No effect | Increment | Output | remove containedIn | combine |
transfer-custody | No effect | Decr+Incr(2) | N/A | currentLocation(4) | N/A |
transfer-all-rights | Decr+Incr(2) | No effect | N/A | N/A | N/A |
transfer | Decr+Incr(2) | Decr+Incr(2) | N/A | currentLocation(4) | N/A |
move | Decr+Incr(2) |Decr+Incr(2) | N/A | currentLocation(4) | N/A |
raise | Increment | Increment | N/A | N/A | N/A |
lower | Decrement | Decrement | N/A | N/A | N/A |

We have defined a core set of actions, but expect that this will be extended with some others. If extended, they should be defined as part of this or another formal vocabulary so that all can use them and assume the same meaning. However, the effects of the actions are included in the data definitions so that computer systems can be "data driven" in their effects on resources if desired.

(1) The actions `use` and `work` are time-based actions, either with or without an explicit schedule. If the schedule is documented as part of the economic resource, then those economic events could decrement that schedule, although not the "current quantity" of the resource.

(2) The actions `transfer` and `move` can optionally define a second identified resource on the receiver side.

(3) The action `deliver-service` can sometimes be an input to another process, at the same time as it is an output from a process.  This is because services imply delivery as they are created.

(4) These actions should update the resource's `currentLocation` if `toLocation` is provided on the event. For `dropoff` it is the resource which is affected by the event, for all others it is the to resource, the resource that results from the event. For the latter, the resource and to resource may be the same resource, depending on how resources are identified in the user community.
