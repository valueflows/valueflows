---
hide:
  - toc
---

# Formatted specification

*This page is normative.*



  <style>
    #pylode {
        top: 15em;
        left: -12em;
        font-size: small;
        color: grey;
    }
    #pylode a {
        font-size: 1.5em;
        font-weight: bold;
        text-decoration: none;
        color: #005A9C;
    }
    #pylode a:hover {
        color: #333;
    }
    #pylode #p {
        color: #329545;
    }
    #pylode #y {
        color: #f9cb33;
    }
    #pylode #version {
        font-size: 1.0em;
    }
       .cardinality {
            font-style: italic;
            color: #aa00aa;
        }

        dl {
            /*border: 1px solid navy;*/
            /*padding:5px;*/
        }

        dt {
            font-weight: bold;
            padding: 0;
        }

        dd {
            margin-bottom: 10px;
            padding-top: 7px;
        }

        #metadata ul,
        #classes ul {
            list-style-type: none;
        }


        ul.hlist {
            list-style-type: none;
            border: 1px solid navy;
            padding:5px;
            background-color: #F4FFFF;
        }

        ul.hierarchy {
            border: 1px solid navy;
            padding: 5px 25px 5px 25px;
            background-color: #F4FFFF;
        }


        ul.hlist li {
            display: inline;
            margin-right: 10px;
        }

        .entity {
            border: 1px solid navy;
            margin:5px 0 5px 0;
            padding: 5px;
        }

        .entity th {
            width: 150px;
            vertical-align: top;
        }

        .entity th,
        .entity td {
            padding-bottom: 20px;
        }

        .entity table th {
            text-align: left;
        }

        .figure {
            margin-bottom: 20px;
        }

        .sup-c,
        .sup-op,
        .sup-fp,
        .sup-dp,
        .sup-ap,
        .sup-p,
        .sup-ni,
        .sup-con,
        .sup-col {
            cursor:help;
        }

        .sup-c {
            color:orange;
        }

        .sup-op {
            color:navy;
        }

        .sup-fp {
            color:lightskyblue;
        }

        .sup-dp {
            color:green;
        }

        .sup-ap {
            color:darkred;
        }

        .sup-p {
            color:black;
        }

        .sup-ni {
            color:brown;
        }

        .sup-con {
            color:orange;
        }

        .sup-col {
            color:darkred;
        }

        sup {
            margin-left: -3px;
        }

        /* less prominent links for properties */
        .proplink {
            color: #336;
            text-decoration: none;
        }

  #content {
    width: 85%;
    padding-right: 40px;
    }

  #toc {
    position: fixed;
    margin-top: 210px;
    top: 0;
    right: 0;
    z-index: 2;
    height: 100%;
    overflow-y: auto;
    padding: 10px 10px 280px 10px;
    border: solid 1px navy;
    font-size: small;
    width: 15%;
}

#toc h3 {
    margin-top: 5px;
}

#toc ul {
    list-style: none;
    padding-left: 0;
}

#toc .first > li {
    margin-top: 5px;
}

#toc .second,
#toc .third {
    padding-left: 10px;
}

/* added class in the html */
a.toc-link {color:darkblue;}
a.toc-link:hover {color:darkturquoise;}

/* changed class name code to pycode in html */
pycode {
    color: darkred;
}

</style>


  <div id="content">
    <div id="pylode">
    <p>It is a formatted version of the vocabulary as defined in the RDF turtle file system of record, excluding the Named Individuals, the Classes needed to manage those, and the "layer" definitions. In other words, this includes the base ontological Classes and Properties for building with Valueflows.</p>
      <p> Credit:
        <a href="https://github.com/rdflib/pyLODE">
          <span id="p">p</span>
          <span id="y">y</span>
          <span>LODE</span>
        </a>
        <a href="https://github.com/rdflib/pyLODE/release/3.2.1" id="version">3.2.1</a>
        <span> with the </span>
        <a href="https://w3id.org/profile/ontpub" id="profile">OntPub</a>
        <span>profile (modified to fit inside the Valueflows site)</span>
      </p>
    </div>
      <div class="section" id="classes">
        <h2>Classes</h2>
        <div class="property entity" id="Action">
          <h3>Action
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Action</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>An action verb defining the kind of flow and its behavior.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <span>
                  <a href="#action">action</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Agent">
          <h3>Agent
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Agent</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>An identifiable entity that can commit to and/or perform economic and/or ecological activity under its own power or authority.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <span>
                  <a href="#primaryLocation">primary location</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#provider">provider</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#receiver">receiver</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#inScopeOf">in scope of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#primaryAccountable">primary accountable</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#proposedTo">proposed to</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/superClassOf" title="Inverse of RDFS' subClassOf. Defined in Ontology Documentation Profile">Super Class Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#EcologicalAgent">Ecological Agent</a>
                      <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#Organization">Organization</a>
                      <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#Person">Person</a>
                      <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Agreement">
          <h3>Agreement
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Agreement</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A set of reciprocal commitments among economic agents, or a set of reciprocal economic events.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#stipulates">stipulates</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#stipulatesReciprocal">stipulates reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#realizes">realizes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#realizesReciprocal">realizes reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#bundledIn">bundled in</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#clauseOf">clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#reciprocalClauseOf">reciprocal clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#realizationOf">realization of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#reciprocalRealizationOf">reciprocal realization of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#bundles">bundles</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="AgreementBundle">
          <h3>Agreement Bundle
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#AgreementBundle</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A grouping of agreements to bundle detailed line item reciprocity.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <span>
                  <a href="#bundles">bundles</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <span>
                  <a href="#bundledIn">bundled in</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="BatchLotRecord">
          <h3>Batch Lot Record
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#BatchLotRecord</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A document which contains all the needed detail related to the production process of a particular batch or lot, a resource processed in the same process(es) so that it is expected to be homogeneous.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#batchLotCode">batch or lot code</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#expirationDate">expiration date</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <span>
                  <a href="#ofBatchLot">of batch or lot</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Commitment">
          <h3>Commitment
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Commitment</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A planned economic flow that has been scheduled or promised by one agent to another agent.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#independentDemandOf">independent demand of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#clauseOf">clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#reciprocalClauseOf">reciprocal clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasIndependentDemand">has independent demand</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#fulfills">fulfills</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#stipulates">stipulates</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#stipulatesReciprocal">stipulates reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="EcologicalAgent">
          <h3>Ecological Agent
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#EcologicalAgent</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A non-human being; or a functional group of non-human beings; or an ecosystem of living beings that includes non-humans; but it has agency and receives and/or provides economic/ecological resources.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subClassOf" title="The subject is a subclass of a class. Defined in The RDF Schema vocabulary (RDFS)">Sub Class Of</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="EconomicEvent">
          <h3>Economic Event
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#EconomicEvent</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>An observed economic flow, which could reflect creation or a change in the quantity, location, accountability and/or responsibility, of an economic resource, whether material or not.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#toResourceInventoriedAs">to resource inventoried as</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#corrects">corrects</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#settles">settles</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#toLocation">to location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#fulfills">fulfills</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#realizationOf">realization of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#reciprocalRealizationOf">reciprocal realization of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#triggeredBy">triggered by</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#corrects">corrects</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#realizes">realizes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#realizesReciprocal">realizes reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="EconomicResource">
          <h3>Economic Resource
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#EconomicResource</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Economic or environmental things (material or digital), media of exchange, which agents agree should be accounted for and which can be inventoried.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#containedIn">contained in</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#contains">contains</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#primaryAccountable">primary accountable</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#accountingQuantity">accounting quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#onhandQuantity">onhand quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#currentLocation">current location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#currentVirtualLocation">current virtual location</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#currentCurrencyLocation">current currency location</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#trackingIdentifier">tracking identifier</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#ofBatchLot">of batch or lot</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#unitOfEffort">unit of effort</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#conformsTo">conforms to</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#resourceInventoriedAs">resource inventoried as</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#toResourceInventoriedAs">to resource inventoried as</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#containedIn">contained in</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#contains">contains</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Intent">
          <h3>Intent
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Intent</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A desired or proposed or planned or estimated economic flow, usually with only one agent associated, which could become a commitment and/or economic event.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#availableQuantity">available quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#minimumQuantity">minimum quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#satisfies">satisfies</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#publishes">publishes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#reciprocal">reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Measure">
          <h3>Measure
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Measure</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A quantity expressed as a numeric value with a unit of measure.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subClassOf" title="The subject is a subclass of a class. Defined in The RDF Schema vocabulary (RDFS)">Sub Class Of</a>
              </th>
              <td>
                <a href="http://www.ontology-of-units-of-measure.org/resource/om-2/Measure">om:Measure</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasNumericalValue">has numerical value</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#hasUnit">has unit</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasDuration">has duration</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#accountingQuantity">accounting quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#onhandQuantity">onhand quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#resourceQuantity">resource quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#effortQuantity">effort quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#availableQuantity">available quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#minimumQuantity">minimum quantity</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Organization">
          <h3>Organization
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Organization</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A functional structure, formal or informal, which can include people and/or other organizations, and has its own agency.  Something called a group is an Organization in Valueflows if it has agency as the group.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subClassOf" title="The subject is a subclass of a class. Defined in The RDF Schema vocabulary (RDFS)">Sub Class Of</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Person">
          <h3>Person
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Person</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A human being. All persons are considered agents.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subClassOf" title="The subject is a subclass of a class. Defined in The RDF Schema vocabulary (RDFS)">Sub Class Of</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Plan">
          <h3>Plan
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Plan</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A logical collection of processes, with optional connected agreements, that constitute a body of scheduled work with defined deliverable(s).</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#planIncludes">plan includes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#hasIndependentDemand">has independent demand</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#plannedWithin">planned within</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#independentDemandOf">independent demand of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Process">
          <h3>Process
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Process</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>An activity that changes inputs into outputs, by transforming or transporting economic resource(s).</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasInput">has input</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#hasOutput">has output</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#inScopeOf">in scope of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#basedOn">based on</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#inputOf">input of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#outputOf">output of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="ProcessSpecification">
          <h3>Process Specification
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#ProcessSpecification</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Specifies the kind of process, and also the stage of the process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#basedOn">based on</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#processConformsTo">process conforms to</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#stage">stage</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Proposal">
          <h3>Proposal
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Proposal</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Published requests or offers, sometimes with what is expected in return.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#purpose">purpose</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#eligibleLocation">eligible location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#publishes">publishes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#reciprocal">reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#listedIn">listed in</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <span>
                  <a href="#lists">lists</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="ProposalList">
          <h3>Proposal List
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#ProposalList</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A grouping of proposals, for publishing as a list.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <span>
                  <a href="#lists">lists</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <span>
                  <a href="#listedIn">listed in</a>
                  <sup class="sup-op" title="OWL Object Property">op</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Recipe">
          <h3>Recipe
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Recipe</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Optional instance of a recipe which directly specifies the recipe processes included.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#primaryOutput">primary output</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeIncludes">recipe includes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="RecipeExchange">
          <h3>Recipe Exchange
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#RecipeExchange</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Specifies an exchange type agreement as part of a recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#recipeStipulates">recipe stipulates</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeStipulatesReciprocal">recipe stipulates reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#recipeClauseOf">recipe clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeReciprocalClauseOf">recipe reciprocal clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="RecipeFlow">
          <h3>Recipe Flow
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#RecipeFlow</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The specification of a resource inflow to, or outflow from, a recipe process; and/or a clause, or reciprocal clause, of a recipe exchange.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#recipeInputOf">recipe input of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeOutputOf">recipe output of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeClauseOf">recipe clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeReciprocalClauseOf">recipe reciprocal clause of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasRecipeInput">has recipe input</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#hasRecipeOutput">has recipe output</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeStipulates">recipe stipulates</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeStipulatesReciprocal">recipe stipulates reciprocal</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="RecipeProcess">
          <h3>Recipe Process
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#RecipeProcess</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Specifies a process in a recipe for use in planning from recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasRecipeInput">has recipe input</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#hasRecipeOutput">has recipe output</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#processClassifiedAs">process classified as</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#processConformsTo">process conforms to</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#recipeInputOf">recipe input of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeOutputOf">recipe output of</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#recipeIncludes">recipe includes</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="ResourceSpecification">
          <h3>Resource Specification
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#ResourceSpecification</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Specifies the kind of economic or environmental resource, even if the resource is not instantiated as an EconomicResource. Could define a material or digital thing, service, medium of exchange or currency, skill or type of work.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#mediumOfExchange">medium of exchange</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#substitutable">substitutable</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#defaultUnitOfEffort">default unit of effort</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#defaultUnitOfResource">default unit of resource</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#primaryOutput">primary output</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#resourceConformsTo">resource conforms to</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#conformsTo">conforms to</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="SpatialThing">
          <h3>Spatial Thing
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#SpatialThing</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Data that locates something relative to the Earth, usually a somewhat fixed location.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subClassOf" title="The subject is a subclass of a class. Defined in The RDF Schema vocabulary (RDFS)">Sub Class Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing">geo:SpatialThing</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#long">vf:long</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#lat">vf:lat</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#alt">vf:alt</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#mappableAddress">mappable address</a>
                      <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#hasDetailedGeometry">currency address</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#currentLocation">current location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#primaryLocation">primary location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#eligibleLocation">eligible location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#toLocation">to location</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="Unit">
          <h3>Unit
            <sup class="sup-c" title="OWL/RDFS Class">c</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#Unit</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A standard unit of measure, defined and adopted by convention or by law.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subClassOf" title="The subject is a subclass of a class. Defined in The RDF Schema vocabulary (RDFS)">Sub Class Of</a>
              </th>
              <td>
                <a href="http://www.ontology-of-units-of-measure.org/resource/om-2/Unit">om:Unit</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inDomainOf" title="Inverse of rdfs:domain. Defined in Ontology Documentation Profile">In Domain Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <a href="#omUnitIdentifier">om unit identifier</a>
                  </li>
                  <li>
                    <a href="#symbol">symbol</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="https://w3id.org/profile/ontdoc/inRangeOf" title="Inverse of rdfs:range. Defined in Ontology Documentation Profile">In Range Of</a>
              </th>
              <td>
                <ul>
                  <li>
                    <span>
                      <a href="#hasUnit">has unit</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#unitOfEffort">unit of effort</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#defaultUnitOfEffort">default unit of effort</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="#defaultUnitOfResource">default unit of resource</a>
                      <sup class="sup-op" title="OWL Object Property">op</sup>
                    </span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="section" id="objectproperties">
        <h2>Object Properties</h2>
        <div class="property entity" id="accountingQuantity">
          <h3>accounting quantity
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#accountingQuantity</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The current amount and unit of the economic resource for which the agent has primary rights and responsibilities, sometimes thought of as ownership. This can be either stored or derived from economic events affecting the resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="action">
          <h3>action
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#action</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Defines the kind of flow, such as consume, produce, work, transfer, etc.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Action">Action</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="availableQuantity">
          <h3>available quantity
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#availableQuantity</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The amount and unit of the offered resource currently available.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="basedOn">
          <h3>based on
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#basedOn</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The definition or standard specification for a process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ProcessSpecification">Process Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="bundledIn">
          <h3>bundled in
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#bundledIn</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This agreement is bundled with other agreements, for example in an order.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#AgreementBundle">Agreement Bundle</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="bundles">
          <h3>bundles
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#bundles</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the agreements included in this agreement bundle.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#AgreementBundle">Agreement Bundle</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="classifiedas">
          <h3>classified as
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#classifiedAs</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>References one or more uri's for a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping; or it can be one or more string classifications such as tags.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EcologicalAgent">Ecological Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Organization">Organization</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Unit">Unit</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="clauseOf">
          <h3>clause of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#clauseOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This commitment is a primary part of the agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="conformsTo">
          <h3>conforms to
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#conformsTo</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The primary resource specification or definition of an existing or potential economic resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="containedIn">
          <h3>contained in
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#containedIn</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Used when an economic resource contains units also defined as separate economic resources, for example a tool kit or a package of resources for shipping.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="contains">
          <h3>contains
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#contains</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>An economic resource contains at least one other economic resource, for example a tool kit or package of resources for shipping.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="corrects">
          <h3>corrects
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#corrects</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Used when an event was entered incorrectly and needs to be backed out or corrected. (The initial event cannot be changed.)</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="currentLocation">
          <h3>current location
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#currentLocation</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The current physical location of an economic resource.  Could be at any level of granularity, from a town to an address to a warehouse location.  Usually mappable.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="defaultUnitOfEffort">
          <h3>default unit of effort
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#defaultUnitOfEffort</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The default unit used for use or work.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Unit">Unit</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="defaultUnitOfResource">
          <h3>default unit of resource
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#defaultUnitOfResource</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The default unit used for the resource itself.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Unit">Unit</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="effortQuantity">
          <h3>effort quantity
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#effortQuantity</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The amount and unit of the work or use or citation effort-based action. This is often expressed with a time unit, but also could be cycle counts or other measures of effort or usefulness.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="eligibleLocation">
          <h3>eligible location
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#eligibleLocation</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Location or area where the proposal is valid.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="fulfills">
          <h3>fulfills
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#fulfills</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The commitment(s) fulfilled completely or partially by an economic event.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasDetailedGeometry">
          <h3>currency address
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasDetailedGeometry</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A spatial geometry of any complexity and tooling supported by geosparql.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.opengis.net/ont/geosparql#Geometry">geosparql:Geometry</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasDuration">
          <h3>has duration
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasDuration</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The temporal extent of the process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasIndependentDemand">
          <h3>has independent demand
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasIndependentDemand</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The commitments and/or intents which this plan was created to deliver.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasInput">
          <h3>has input
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasInput</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the input flows of a process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasOutput">
          <h3>has output
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasOutput</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the output flows of a process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasRecipeInput">
          <h3>has recipe input
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasRecipeInput</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the inputs of a recipe process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasRecipeOutput">
          <h3>has recipe output
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasRecipeOutput</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the outputs of a recipe process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasUnit">
          <h3>has unit
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasUnit</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A standard unit of measure.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit">om:hasUnit</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Unit">Unit</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="independentDemandOf">
          <h3>independent demand of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#independentDemandOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This plan is the way this commitment or intent will be realized.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="inputOf">
          <h3>input of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#inputOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Relates an input flow to its process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="inScopeOf">
          <h3>in scope of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#inScopeOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Scope here means executed in the context of an agent.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="listedIn">
          <h3>listed in
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#listedIn</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This proposal is part of these lists of proposals.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ProposalList">Proposal List</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="lists">
          <h3>lists
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#lists</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the proposals included in this proposal list.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ProposalList">Proposal List</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="minimumQuantity">
          <h3>minimum quantity
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#minimumQuantity</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The minimum required order amount and unit of the offered resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="ofBatchLot">
          <h3>of batch or lot
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#ofBatchLot</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The batch lot record of this resource, if it is a batch or lot resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#BatchLotRecord">Batch Lot Record</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="onhandQuantity">
          <h3>onhand quantity
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#onhandQuantity</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The current amount and unit of the economic resource which is under direct control of the agent.  It may be more or less than the accounting quantity. This can be either stored or derived from economic events affecting the resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="outputOf">
          <h3>output of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#outputOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Relates an output flow to its process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="planIncludes">
          <h3>plan includes
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#planIncludes</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The processes and and non-process commitments/intents that constitute the plan.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="plannedWithin">
          <h3>planned within
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#plannedWithin</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The process with its inputs and outputs, or the non-process commitment or intent, is part of the plan.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="primaryAccountable">
          <h3>primary accountable
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#primaryAccountable</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The agent currently with primary rights and responsibilites for the economic resource. It is the agent that is associated with the accountingQuantity of the economic resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="primaryLocation">
          <h3>primary location
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#primaryLocation</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The main place an agent is located, often an address where activities occur and mail can be sent. This is usually a mappable geographic location.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="primaryOutput">
          <h3>primary output
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#primaryOutput</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The main output the recipe is intended to produce or deliver.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Recipe">Recipe</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="processClassifiedAs">
          <h3>process classified as
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#processClassifiedAs</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>References one or more uri's for a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping; or can be one or more string classifications such as tags.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="processConformsTo">
          <h3>process conforms to
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#processConformsTo</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The standard specification or definition of a type of process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ProcessSpecification">Process Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="proposedTo">
          <h3>proposed to
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#proposedTo</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The agent(s) to which the proposal or proposal list is published.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ProposalList">Proposal List</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="provider">
          <h3>provider
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#provider</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The economic agent by whom the intended, committed, or actual economic event is initiated.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="publishes">
          <h3>publishes
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#publishes</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The primary intent(s) of this published proposal. Would be used in intent matching.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="purpose">
          <h3>purpose
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#purpose</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The type of proposal, whether offer or request (others may be added as need arises).</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="#ProposalPurpose">vf:ProposalPurpose</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="realizationOf">
          <h3>realization of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#realizationOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This non-reciprocal economic event occurs as part of this agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="realizes">
          <h3>realizes
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#realizes</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the non-reciprocal economic events (with or without commitments) that realize the agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="realizesReciprocal">
          <h3>realizes reciprocal
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#realizesReciprocal</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the reciprocal economic events (with or without commitments) that realize the agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="receiver">
          <h3>receiver
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#receiver</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The economic agent whom the intended, committed, or actual economic event is for.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeClauseOf">
          <h3>recipe clause of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeClauseOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Relates a flow to its exchange agreement in a recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeExchange">Recipe Exchange</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeIncludes">
          <h3>recipe includes
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeIncludes</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The collection of processes needed for this recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Recipe">Recipe</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeInputOf">
          <h3>recipe input of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeInputOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Relates an input flow to its process in a recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeOutputOf">
          <h3>recipe output of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeOutputOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Relates an output flow to its process in a recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeReciprocalClauseOf">
          <h3>recipe reciprocal clause of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeReciprocalClauseOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Relates a reciprocal flow to its exchange agreement in a recipe.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeExchange">Recipe Exchange</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeStipulates">
          <h3>recipe stipulates
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeStipulates</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the primary clauses of a recipe exchange.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeExchange">Recipe Exchange</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="recipeStipulatesReciprocal">
          <h3>recipe stipulates reciprocal
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#recipeStipulatesReciprocal</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the reciprocal clauses of a recipe exchange.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeExchange">Recipe Exchange</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="reciprocal">
          <h3>reciprocal
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#reciprocal</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The reciprocal intent(s) of this published proposal. Not meant to be used for intent matching.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="reciprocalClauseOf">
          <h3>reciprocal clause of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#reciprocalClauseOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This commitment is a reciprocal part of the agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="reciprocalRealizationOf">
          <h3>reciprocal realization of
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#reciprocalRealizationOf</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This reciprocal economic event occurs as part of this agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="resourceclassifiedas">
          <h3>resource classified as
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#resourceClassifiedAs</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>References one or more uri's for a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping; or can be one or more string classifications such as tags.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="resourceConformsTo">
          <h3>resource conforms to
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#resourceConformsTo</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The lowest level resource specification or definition of an existing or potential economic resource, whether one will ever be instantiated or not.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="resourceInventoriedAs">
          <h3>resource inventoried as
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#resourceInventoriedAs</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Economic resource involved in the flow.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="resourceQuantity">
          <h3>resource quantity
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#resourceQuantity</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The amount and unit of the economic resource counted or inventoried.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="satisfies">
          <h3>satisfies
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#satisfies</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The intent(s) satisfied fully or partially by an economic event or commitment.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="settles">
          <h3>settles
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#settles</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The claim(s) settled fully or partially by the economic event.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="#Claim">vf:Claim</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="stage">
          <h3>stage
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#stage</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The required stage of the desired input economic resource. References the ProcessSpecification of the last process the economic resource went through.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#ProcessSpecification">Process Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="state">
          <h3>state
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#state</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The required state of the desired input economic resource, after coming out of a test or review process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeFlow">Recipe Flow</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="stipulates">
          <h3>stipulates
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#stipulates</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the primary commitments that constitute the agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="stipulatesReciprocal">
          <h3>stipulates reciprocal
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#stipulatesReciprocal</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>All the reciprocal commitments that constitute the agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="toLocation">
          <h3>to location
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#toLocation</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The new location of the receiver resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="toResourceInventoriedAs">
          <h3>to resource inventoried as
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#toResourceInventoriedAs</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Additional economic resource on the economic event when needed by the receiver. Used when a transfer or move, or sometimes other actions, requires explicitly identifying an economic resource by the receiver, which is identified differently by the sender.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="triggeredBy">
          <h3>triggered by
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#triggeredBy</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>References an economic event that implied the claim, often based on a prior agreement.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <a href="#Claim">vf:Claim</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="unitOfEffort">
          <h3>unit of effort
            <sup class="sup-op" title="OWL Object Property">op</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#unitOfEffort</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The unit used for use or work or sometimes cite actions.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <span>
                  <a href="#Unit">Unit</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <span class="cardinality">or</span>
      <div class="section" id="datatypeproperties">
        <h2>Datatype Properties</h2>
        <div class="property entity" id="alt">
          <h3>alt
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#alt</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The WGS84 altitude of a spatial thing (decimal meters above the local reference ellipsoid)</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2003/01/geo/wgs84_pos#alt">geo:alt</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.linkedmodel.org/schema/dtype#numericUnion">dtype:numericUnion</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="batchLotCode">
          <h3>batch or lot code
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#batchLotCode</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The code or identifier for this batch or lot, used to physically label individuals in the batch or lot.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#BatchLotRecord">Batch Lot Record</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="created">
          <h3>created
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#created</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The date, and time if desired, the information was agreed to or recorded.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#dateTimeStamp">xsd:dateTimeStamp</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="currentCurrencyLocation">
          <h3>current currency location
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#currentCurrencyLocation</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The current virtual place a currency economic resource is located, for example the address for a bank account, crypto wallet, etc., in a domain standard format.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="currentVirtualLocation">
          <h3>current virtual location
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#currentVirtualLocation</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The current virtual place a digital economic resource is located. Usually used for documents, code, or other electronic resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#anyURI">xsd:anyURI</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="due">
          <h3>due
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#due</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The date, and time if desired, something is expected to be complete.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#dateTimeStamp">xsd:dateTimeStamp</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="expirationDate">
          <h3>expiration date
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#expirationDate</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The date after which a resource of this batch or lot should no longer be used or consumed.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#BatchLotRecord">Batch Lot Record</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#dateTimeStamp">xsd:dateTimeStamp</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="finished">
          <h3>finished
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#finished</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The commitment or intent or process is complete or not.  This is irrespective of if the original goal has been met, and indicates that no more will be done.  Default false.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Claim">vf:Claim</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#boolean">xsd:boolean</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasbeginning">
          <h3>has beginning
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasBeginning</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The planned or actual beginning date, and time if desired, of a flow or process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2006/time#hasBeginning">time:hasBeginning</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#dateTimeStamp">xsd:dateTimeStamp</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasend">
          <h3>has end
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasEnd</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The planned or actual ending date, and time if desired, of a flow or process.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2006/time#hasEnd">time:hasEnd</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#dateTimeStamp">xsd:dateTimeStamp</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="hasNumericalValue">
          <h3>has numerical value
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasNumericalValue</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A numeric amount.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.ontology-of-units-of-measure.org/resource/om-2/hasNumericalValue">om:hasNumericalValue</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Measure">Measure</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.linkedmodel.org/schema/dtype#numericUnion">dtype:numericUnion</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="haspointintime">
          <h3>has point in time
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#hasPointInTime</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The planned or actual date, and time if desired, of a flow; can be used instead of hasBeginning and hasEnd, if so, hasBeginning and hasEnd should be able to return this value.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2006/time#inXSDDateTimeStamp">time:inXSDDateTimeStamp</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Commitment">Commitment</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#dateTimeStamp">xsd:dateTimeStamp</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="image">
          <h3>image
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#image</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The uri to an image relevant to the entity, such as a logo, avatar, photo, diagram, etc.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#ProcessSpecification">Process Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicEvent">Economic Event</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#anyURI">xsd:anyURI</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="imagelist">
          <h3>image list
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#imageList</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A comma separated list of uri addresses to images relevant to the resource.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Intent">Intent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#anyURI">xsd:anyURI</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="lat">
          <h3>lat
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#lat</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The WGS84 latitude of a spatial thing (decimal degrees).</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2003/01/geo/wgs84_pos#lat">geo:lat</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.linkedmodel.org/schema/dtype#numericUnion">dtype:numericUnion</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="long">
          <h3>long
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#long</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>The WGS84 longitude of a spatial thing (decimal degrees).</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#subPropertyOf" title="The subject is a subproperty of a property. Defined in The RDF Schema vocabulary (RDFS)">Sub Property Of</a>
              </th>
              <td>
                <a href="http://www.w3.org/2003/01/geo/wgs84_pos#long">geo:long</a>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.linkedmodel.org/schema/dtype#numericUnion">dtype:numericUnion</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="mappableAddress">
          <h3>mappable address
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#mappableAddress</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>A textual address that can be mapped using mapping software.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="mediumOfExchange">
          <h3>medium of exchange
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#mediumOfExchange</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>True if the resource is a currency, money, token, credit, etc. used as a medium of exchange.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#boolean">xsd:boolean</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="name">
          <h3>name
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#name</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>An informal or formal textual identifier for an object. Does not imply uniqueness.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Process">Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#SpatialThing">Spatial Thing</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Agent">Agent</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#ProcessSpecification">Process Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#RecipeProcess">Recipe Process</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Plan">Plan</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Recipe">Recipe</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
                <span class="cardinality">or</span>
                <span>
                  <a href="#Agreement">Agreement</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="substitutable">
          <h3>substitutable
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#substitutable</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Defines if any resource of that type can be freely substituted for any other resource of that type when used, consumed, traded, etc.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#ResourceSpecification">Resource Specification</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#boolean">xsd:boolean</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="trackingIdentifier">
          <h3>tracking identifier
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#trackingIdentifier</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>Any identifier used to track a singular resource, such as a serial number or VIN.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#EconomicResource">Economic Resource</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#string">xsd:string</a>
              </td>
            </tr>
          </table>
        </div>
        <div class="property entity" id="unitbased">
          <h3>unit based
            <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
          </h3>
          <table>
            <tr>
              <th>IRI</th>
              <td>
                <pycode>https://w3id.org/valueflows/ont/vf#unitBased</pycode>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://purl.org/dc/terms/description" title="An account of the resource. Defined in DCMI Metadata Terms">Description</a>
              </th>
              <td><p>This group of intents contains unit based quantities, which can be multipied to create commitments; commonly seen in a price list or e-commerce. Default false.</p></td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#domain" title="A domain of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Domain</a>
              </th>
              <td>
                <span>
                  <a href="#Proposal">Proposal</a>
                  <sup class="sup-c" title="OWL/RDFS Class">c</sup>
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <a class="hover_property" href="http://www.w3.org/2000/01/rdf-schema#range" title="A range of the subject property. Defined in The RDF Schema vocabulary (RDFS)">Range</a>
              </th>
              <td>
                <a href="http://www.w3.org/2001/XMLSchema#boolean">xsd:boolean</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="namespaces">
        <h2>Namespaces</h2>
        <dl>
          <dt id="cc">cc</dt>
          <dd>
            <pycode>http://creativecommons.org/ns#</pycode>
          </dd>
          <dt id="dcterms">dcterms</dt>
          <dd>
            <pycode>http://purl.org/dc/terms/</pycode>
          </dd>
          <dt id="dtype">dtype</dt>
          <dd>
            <pycode>http://www.linkedmodel.org/schema/dtype#</pycode>
          </dd>
          <dt id="foaf">foaf</dt>
          <dd>
            <pycode>http://xmlns.com/foaf/0.1/</pycode>
          </dd>
          <dt id="geo">geo</dt>
          <dd>
            <pycode>http://www.w3.org/2003/01/geo/wgs84_pos#</pycode>
          </dd>
          <dt id="geosparql">geosparql</dt>
          <dd>
            <pycode>http://www.opengis.net/ont/geosparql#</pycode>
          </dd>
          <dt id="om">om</dt>
          <dd>
            <pycode>http://www.ontology-of-units-of-measure.org/resource/om-2/</pycode>
          </dd>
          <dt id="org">org</dt>
          <dd>
            <pycode>http://www.w3.org/ns/org#</pycode>
          </dd>
          <dt id="owl">owl</dt>
          <dd>
            <pycode>http://www.w3.org/2002/07/owl#</pycode>
          </dd>
          <dt id="rdf">rdf</dt>
          <dd>
            <pycode>http://www.w3.org/1999/02/22-rdf-syntax-ns#</pycode>
          </dd>
          <dt id="rdfs">rdfs</dt>
          <dd>
            <pycode>http://www.w3.org/2000/01/rdf-schema#</pycode>
          </dd>
          <dt id="skos">skos</dt>
          <dd>
            <pycode>http://www.w3.org/2004/02/skos/core#</pycode>
          </dd>
          <dt id="spdxl">spdxl</dt>
          <dd>
            <pycode>https://spdx.org/licenses/</pycode>
          </dd>
          <dt id="spdxt">spdxt</dt>
          <dd>
            <pycode>http://spdx.org/rdf/terms#</pycode>
          </dd>
          <dt id="time">time</dt>
          <dd>
            <pycode>http://www.w3.org/2006/time#</pycode>
          </dd>
          <dt id="vann">vann</dt>
          <dd>
            <pycode>http://purl.org/vocab/vann/</pycode>
          </dd>
          <dt id="vf">vf</dt>
          <dd>
            <pycode>https://w3id.org/valueflows/ont/vf#</pycode>
          </dd>
          <dt id="vs">vs</dt>
          <dd>
            <pycode>http://www.w3.org/2003/06/sw-vocab-status/ns#</pycode>
          </dd>
          <dt id="xsd">xsd</dt>
          <dd>
            <pycode>http://www.w3.org/2001/XMLSchema#</pycode>
          </dd>
        </dl>
      </div>
      <div id="legend">
        <h2>Legend</h2>
        <table class="entity">
          <tr>
            <td>
              <sup class="sup-c" title="OWL/RDFS Class">c</sup>
            </td>
            <td>Classes</td>
          </tr>
          <tr>
            <td>
              <sup class="sup-op" title="OWL Object Property">op</sup>
            </td>
            <td>Object Properties</td>
          </tr>
          <tr>
            <td>
              <sup class="sup-dp" title="OWL Datatype Property">dp</sup>
            </td>
            <td>Datatype Properties</td>
          </tr>
        </table>
      </div>
    </div></div>
    <div id="toc">
      <h3>Alphabetical Links</h3>
      <ul class="first">
        <li>
          <h4>
            <a class="toc-link" href="#classes">Classes</a>
          </h4>
          <ul class="second">
            <li>
              <a class="toc-link" href="#Action">Action</a>
            </li>
            <li>
              <a class="toc-link" href="#Agent">Agent</a>
            </li>
            <li>
              <a class="toc-link" href="#Agreement">Agreement</a>
            </li>
            <li>
              <a class="toc-link" href="#AgreementBundle">Agreement Bundle</a>
            </li>
            <li>
              <a class="toc-link" href="#BatchLotRecord">Batch Lot Record</a>
            </li>
            <li>
              <a class="toc-link" href="#Claim">Claim</a>
            </li>
            <li>
              <a class="toc-link" href="#Commitment">Commitment</a>
            </li>
            <li>
              <a class="toc-link" href="#EcologicalAgent">Ecological Agent</a>
            </li>
            <li>
              <a class="toc-link" href="#EconomicResource">Economic Resource</a>
            </li>
            <li>
              <a class="toc-link" href="#Intent">Intent</a>
            </li>
            <li>
              <a class="toc-link" href="#Measure">Measure</a>
            </li>
            <li>
              <a class="toc-link" href="#Organization">Organization</a>
            </li>
            <li>
              <a class="toc-link" href="#Person">Person</a>
            </li>
            <li>
              <a class="toc-link" href="#Plan">Plan</a>
            </li>
            <li>
              <a class="toc-link" href="#Process">Process</a>
            </li>
            <li>
              <a class="toc-link" href="#ProcessSpecification">Process Specification</a>
            </li>
            <li>
              <a class="toc-link" href="#Proposal">Proposal</a>
            </li>
            <li>
              <a class="toc-link" href="#ProposalList">Proposal List</a>
            </li>
            <li>
              <a class="toc-link" href="#Recipe">Recipe</a>
            </li>
            <li>
              <a class="toc-link" href="#RecipeExchange">Recipe Exchange</a>
            </li>
            <li>
              <a class="toc-link" href="#RecipeFlow">Recipe Flow</a>
            </li>
            <li>
              <a class="toc-link" href="#RecipeProcess">Recipe Process</a>
            </li>
            <li>
              <a class="toc-link" href="#ResourceSpecification">Resource Specification</a>
            </li>
            <li>
              <a class="toc-link" href="#SpatialThing">Spatial Thing</a>
            </li>
            <li>
              <a class="toc-link" href="#Unit">Unit</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            <a class="toc-link" href="#objectproperties">Object Properties</a>
          </h4>
          <ul class="second">
            <li>
              <a class="toc-link" href="#accountingQuantity">accounting quantity</a>
            </li>
            <li>
              <a class="toc-link" href="#action">action</a>
            </li>
            <li>
              <a class="toc-link" href="#availableQuantity">available quantity</a>
            </li>
            <li>
              <a class="toc-link" href="#basedOn">based on</a>
            </li>
            <li>
              <a class="toc-link" href="#bundledIn">bundled in</a>
            </li>
            <li>
              <a class="toc-link" href="#bundles">bundles</a>
            </li>
            <li>
              <a class="toc-link" href="#classifiedas">classified as</a>
            </li>
            <li>
              <a class="toc-link" href="#clauseOf">clause of</a>
            </li>
            <li>
              <a class="toc-link" href="#conformsTo">conforms to</a>
            </li>
            <li>
              <a class="toc-link" href="#containedIn">contained in</a>
            </li>
            <li>
              <a class="toc-link" href="#contains">contains</a>
            </li>
            <li>
              <a class="toc-link" href="#corrects">corrects</a>
            </li>
            <li>
              <a class="toc-link" href="#currentLocation">current location</a>
            </li>
            <li>
              <a class="toc-link" href="#defaultUnitOfEffort">default unit of effort</a>
            </li>
            <li>
              <a class="toc-link" href="#defaultUnitOfResource">default unit of resource</a>
            </li>
            <li>
              <a class="toc-link" href="#effortQuantity">effort quantity</a>
            </li>
            <li>
              <a class="toc-link" href="#eligibleLocation">eligible location</a>
            </li>
            <li>
              <a class="toc-link" href="#fulfills">fulfills</a>
            </li>
            <li>
              <a class="toc-link" href="#hasDetailedGeometry">currency address</a>
            </li>
            <li>
              <a class="toc-link" href="#hasDuration">has duration</a>
            </li>
            <li>
              <a class="toc-link" href="#hasIndependentDemand">has independent demand</a>
            </li>
            <li>
              <a class="toc-link" href="#hasInput">has input</a>
            </li>
            <li>
              <a class="toc-link" href="#hasOutput">has output</a>
            </li>
            <li>
              <a class="toc-link" href="#hasRecipeInput">has recipe input</a>
            </li>
            <li>
              <a class="toc-link" href="#hasRecipeOutput">has recipe output</a>
            </li>
            <li>
              <a class="toc-link" href="#hasUnit">has unit</a>
            </li>
            <li>
              <a class="toc-link" href="#independentDemandOf">independent demand of</a>
            </li>
            <li>
              <a class="toc-link" href="#inputOf">input of</a>
            </li>
            <li>
              <a class="toc-link" href="#inScopeOf">in scope of</a>
            </li>
            <li>
              <a class="toc-link" href="#listedIn">listed in</a>
            </li>
            <li>
              <a class="toc-link" href="#lists">lists</a>
            </li>
            <li>
              <a class="toc-link" href="#minimumQuantity">minimum quantity</a>
            </li>
            <li>
              <a class="toc-link" href="#ofBatchLot">of batch or lot</a>
            </li>
            <li>
              <a class="toc-link" href="#onhandQuantity">onhand quantity</a>
            </li>
            <li>
              <a class="toc-link" href="#outputOf">output of</a>
            </li>
            <li>
              <a class="toc-link" href="#planIncludes">plan includes</a>
            </li>
            <li>
              <a class="toc-link" href="#plannedWithin">planned within</a>
            </li>
            <li>
              <a class="toc-link" href="#proposedTo">proposed to</a>
            </li>
            <li>
              <a class="toc-link" href="#publishes">publishes</a>
            </li>
            <li>
              <a class="toc-link" href="#purpose">purpose</a>
            </li>
            <li>
              <a class="toc-link" href="#primaryAccountable">primary accountable</a>
            </li>
            <li>
              <a class="toc-link" href="#primaryLocation">primary location</a>
            </li>
            <li>
              <a class="toc-link" href="#primaryOutput">primary output</a>
            </li>
            <li>
              <a class="toc-link" href="#processClassifiedAs">process classified as</a>
            </li>
            <li>
              <a class="toc-link" href="#processConformsTo">process conforms to</a>
            </li>
            <li>
              <a class="toc-link" href="#provider">provider</a>
            </li>
            <li>
              <a class="toc-link" href="#realizationOf">realization of</a>
            </li>
            <li>
              <a class="toc-link" href="#realizes">realizes</a>
            </li>
            <li>
              <a class="toc-link" href="#realizesReciprocal">realizes reciprocal</a>
            </li>
            <li>
              <a class="toc-link" href="#receiver">receiver</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeClauseOf">recipe clause of</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeIncludes">recipe includes</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeInputOf">recipe input of</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeOutputOf">recipe output of</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeReciprocalClauseOf">recipe reciprocal clause of</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeStipulates">recipe stipulates</a>
            </li>
            <li>
              <a class="toc-link" href="#recipeStipulatesReciprocal">recipe stipulates reciprocal</a>
            </li>
            <li>
              <a class="toc-link" href="#reciprocal">reciprocal</a>
            </li>
            <li>
              <a class="toc-link" href="#reciprocalClauseOf">reciprocal clause of</a>
            </li>
            <li>
              <a class="toc-link" href="#reciprocalRealizationOf">reciprocal realization of</a>
            </li>
            <li>
              <a class="toc-link" href="#resourceclassifiedas">resource classified as</a>
            </li>
            <li>
              <a class="toc-link" href="#resourceConformsTo">resource conforms to</a>
            </li>
            <li>
              <a class="toc-link" href="#resourceInventoriedAs">resource inventoried as</a>
            </li>
            <li>
              <a class="toc-link" href="#resourceQuantity">resource quantity</a>
            </li>
            <li>
              <a class="toc-link" href="#satisfies">satisfies</a>
            </li>
            <li>
              <a class="toc-link" href="#settles">settles</a>
            </li>
            <li>
              <a class="toc-link" href="#stage">stage</a>
            </li>
            <li>
              <a class="toc-link" href="#state">state</a>
            </li>
            <li>
              <a class="toc-link" href="#stipulates">stipulates</a>
            </li>
            <li>
              <a class="toc-link" href="#stipulatesReciprocal">stipulates reciprocal</a>
            </li>
            <li>
              <a class="toc-link" href="#toLocation">to location</a>
            </li>
            <li>
              <a class="toc-link" href="#toResourceInventoriedAs">to resource inventoried as</a>
            </li>
            <li>
              <a class="toc-link" href="#triggeredBy">triggered by</a>
            </li>
            <li>
              <a class="toc-link" href="#unitOfEffort">unit of effort</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            <a class="toc-link" href="#datatypeproperties">Datatype Properties</a>
          </h4>
          <ul class="second">
            <li>
              <a class="toc-link" href="#alt">alt</a>
            </li>
            <li>
              <a class="toc-link" href="#batchLotCode">batch or lot code</a>
            </li>
            <li>
              <a class="toc-link" href="#created">created</a>
            </li>
            <li>
              <a class="toc-link" href="#currentCurrencyLocation">current currency location</a>
            </li>
            <li>
              <a class="toc-link" href="#currentVirtualLocation">current virtual location</a>
            </li>
            <li>
              <a class="toc-link" href="#due">due</a>
            </li>
            <li>
              <a class="toc-link" href="#expirationDate">expiration date</a>
            </li>
            <li>
              <a class="toc-link" href="#finished">finished</a>
            </li>
            <li>
              <a class="toc-link" href="#hasbeginning">has beginning</a>
            </li>
            <li>
              <a class="toc-link" href="#hasend">has end</a>
            </li>
            <li>
              <a class="toc-link" href="#haspointintime">has point in time</a>
            </li>
            <li>
              <a class="toc-link" href="#hasNumericalValue">has numerical value</a>
            </li>
            <li>
              <a class="toc-link" href="#image">image</a>
            </li>
            <li>
              <a class="toc-link" href="#imagelist">image list</a>
            </li>
            <li>
              <a class="toc-link" href="#long">long</a>
            </li>
            <li>
              <a class="toc-link" href="#lat">lat</a>
            </li>
            <li>
              <a class="toc-link" href="#mappableAddress">mappable address</a>
            </li>
            <li>
              <a class="toc-link" href="#name">name</a>
            </li>
            <li>
              <a class="toc-link" href="#substitutable">substitutable</a>
            </li>
            <li>
              <a class="toc-link" href="#trackingIdentifier">tracking identifier</a>
            </li>
            <li>
              <a class="toc-link" href="#unitbased">unit based</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            <a class="toc-link" href="#namespaces">Namespaces</a>
          </h4>
          <ul class="second">
            <li>
              <a class="toc-link" href="#cc">cc</a>
            </li>
            <li>
              <a class="toc-link" href="#dcterms">dcterms</a>
            </li>
            <li>
              <a class="toc-link" href="#dtype">dtype</a>
            </li>
            <li>
              <a class="toc-link" href="#foaf">foaf</a>
            </li>
            <li>
              <a class="toc-link" href="#geo">geo</a>
            </li>
            <li>
              <a class="toc-link" href="#geosparql">geosparql</a>
            </li>
            <li>
              <a class="toc-link" href="#om">om</a>
            </li>
            <li>
              <a class="toc-link" href="#org">org</a>
            </li>
            <li>
              <a class="toc-link" href="#owl">owl</a>
            </li>
            <li>
              <a class="toc-link" href="#rdf">rdf</a>
            </li>
            <li>
              <a class="toc-link" href="#rdfs">rdfs</a>
            </li>
            <li>
              <a class="toc-link" href="#skos">skos</a>
            </li>
            <li>
              <a class="toc-link" href="#spdxl">spdxl</a>
            </li>
            <li>
              <a class="toc-link" href="#spdxt">spdxt</a>
            </li>
            <li>
              <a class="toc-link" href="#time">time</a>
            </li>
            <li>
              <a class="toc-link" href="#vann">vann</a>
            </li>
            <li>
              <a class="toc-link" href="#vf">vf</a>
            </li>
            <li>
              <a class="toc-link" href="#vs">vs</a>
            </li>
            <li>
              <a class="toc-link" href="#xsd">xsd</a>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            <a class="toc-link" href="#legend">Legend</a>
          </h4>
          <ul class="second"></ul>
        </li>
      </ul>
    </div>


