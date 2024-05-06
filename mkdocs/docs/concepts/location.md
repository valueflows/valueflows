data about things that are implicitly or explicitly located relative to the Earth
Anything with spatial extent, i.e. size, shape, or position. e.g. people, places, bowling balls, as well as abstract areas like cubes

A Spatial Thing may move. We must take care not to oversimplify our concept of Spatial Thing by assuming that it is equivalent to definitions such as Location (from [DCTERMS]) or Place (from [SCHEMA-ORG]), which are respectively described as “A spatial region or named place” and "Entities that have a somewhat fixed, physical extension".

Furthermore, these geometries may be subject to change due to, say, a resurvey of the lighthouse. In such a situation, the geometry object would be updated — but the Spatial Thing that we are talking about is still Eddystone Lighthouse.

me: often more like a geometry, doesn't account for frequent movement given what it is used for in vf, only for earth, do we account for spatialthings separate from the calling entity? i think so

some use decimal degrees while others use degrees, minutes and seconds (dms)

Where your geospatial data has geometries defined as points, lines, and polygons (i.e. vector data), publishing in the World Geodetic System 1984 (WGS 84) Coordinate Reference System will help people to integrate data with mass-market Web applications, tools and libraries, thereby increasing the usefulness of that data for a large community of potential users. Also, since WGS 84 is also used by the GPS system, it's handy for all those mobile Apps!



Within this document, we include examples that use RDF and related technologies such as triple stores and SPARQL [SPARQL11-OVERVIEW] because we see evidence of its use in real world applications that support Linked Data. However, we must make clear to readers that there is no requirement for all publishers of spatial data on the Web to embrace the wider suite of technologies associated with the Semantic Web; we recognize that in many cases, a Web developer has little or no interest in the toolchains associated with Semantic Web due to its addition of complexity to any Web-centric solution.

Although we think that Linked Data need not necessarily require the use of RDF, it is probably the most common representation. We note that [JSON-LD] provides a bridge between those worlds by defining a data format that is compatible with RDF but relies on standard JSON tooling.

Furthermore, as the examples in this document illustrate, we often see a ‘hybrid’ approach being used in real-world applications; using RDF to work with graphs of information that interlink resources, while relying for performance reasons on other technologies to query and process the spatial aspects of that information.


note the long lat alt are as specific as needed for the application, not meaning to imply any identity of a location

use of float

