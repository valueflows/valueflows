# Location

## Spatial Location

Perhaps the original concept of location is a physical place.  This could be a point, or some other geometry, from simple to complex.  The main requirement in VF for a physical location tends to be for geographic mapping, which is usually a point on a map, but could be an area.  It also could be used for things like locations of resources, many of which could be in one building.  Managing space in a warehouse could be automated.

In VF, location tends to be on the edge of the model, thus is not modeled deeply.  An agent can have a primary location, an economic resource can have a current location, and the flows can happen at a location.  Certain economic events can also change the location of an economic resource. Our experience is this covers most of the economic needs for locations.  Some implementations will want more than this, which can be added per implementation.

The location data itself is also fairly basic.  The core is the latitude, longitude, and altitude, subclassed from the [Basic Geo Vocabulary (WGS84)](https://www.w3.org/2003/01/geo/wgs84_pos#).  We have included some other descriptive information for human understanding.  None of the information is meant to be globally unique identification of a spatial location, and the accuracy of the geometry should be what is needed by your application. Our definition is also more limited, since we focus on somewhat fixed locations. We also assume locations are specified relative to the Earth.

To accommodate needs for more complex spatial location definitions, we include a data reference to the extensive Geography information of the [GEOSPARQL Specification](https://docs.ogc.org/is/22-047r1/22-047r1.html#_b3644674-c6c7-4971-b600-a24d2bda0e01), which can then be used for purposes not supported in the core VF.

See also [Specification location information](../../specification/external-terms/#locations).

## Virtual Location

We support two kinds of virtual locations for economic resources, and more can be added as needs arise.

* One is a URI location for economic resources that are electronic, such as documents, code or designs.
* The other is a currency location for economic resources that are located in an account, crypto wallet, etc.  The latter should be formatted according to the specific requirements of the type of currency.

For agents that do not have a physical location, implementations can use website or other agent information from other vocabularies (see [Agents](../agents)).
