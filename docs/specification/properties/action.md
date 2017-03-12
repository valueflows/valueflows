### vf:action

<table>
<tr><td>rdf:type</td><td>owl:ObjectProperty</td></tr>
<tr><td>rdfs:label</td><td>action</td></tr>
<tr><td>rdfs:comment</td><td>A vf:action relates a process input or output (or other vf:IPOEVent) to a verb.</td></tr>
<tr><td>rdfs:domain (property of)</td><td>vf:EconomicEvent</td></tr>
<tr><td>rdfs:range (allowed values)</td><td></td></tr>
</table>

##### Verbs associated with vf:action

###### Input
* vf:use - for example a tool used in process, after the process, the tool still exists
* vf:consume - for example an ingredient composed into the output, after the process the ingredient is gone
* vf:cite - for example a design file, neither used nor consumed, the file remains available at all times
* vf:work - labor power towards a process
* vf:accept - in processes like repair or maintentance, same resource will appear in output with *vf:improve* verb
* vf:load -  transported resource enters the process

###### Output

* vf:create - new resource created in that process
* vf:improve - in processes like repair or maintentance, same resource will appear in input with *vf:accept* verb
* vf:unload -  transported resource leaves the process