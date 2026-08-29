# Units of Measure

Valueflows uses the units of measure from [OM2](https://github.com/HajoRijgersberg/OM), and as of July 2026 from [UNTP](https://vocabulary.uncefact.org/untp/). This directory is for keeping artifacts and useful files as we make units more accessible for user groups' workflow and configuration.

Files in this directory:

* rdf_server_tester is a script written by Robin Vobruba (thanks!) that installs Jena, puts the OM2 rdf file into it, so that SPARQL can be used to extract data.
* om-2.0.rdf is the original file from OM2 that we used, copied here in case something happens to OM2. It lives [here](https://raw.githubusercontent.com/HajoRijgersberg/OM/master/om-2.0.rdf).  Note that OM2 makes occasional additions and changes to their units.  For VF purposes, those are unlikely to be useful to economic based user groups - although it could happen.
* units-unions.rq is the SPARQL query used for OM2. It is based on [this query](https://github.com/fusion-jena/unit-ontology-review/blob/master/data/OM2/sparql/unit.rq), with thanks to Hajo Rijgersberg and Sirko Schindler.  Here is [the issue](https://github.com/HajoRijgersberg/OM/issues/68) in OM2.
* unit-type-queryResults.csv is the original results from the base query in OM2.  It includes all languages in the OM2 file.
* unit-en-useful.csv is the modified results of the query from OM2.  This is English only (for now), currencies are removed, a column for classification is added and partially populated.  **This is the file we should use for helping groups populate their units.  This is the file that people should make updates to that apply to everyone, especially the classifications.**
* UNTP-units-of-measure-all.csv is the complete current (July 2026) units including deprecated and deleted.
* UNTP-units-of-measure.csv is the complete current (July 2026) units with deprecated and deleted units removed.

