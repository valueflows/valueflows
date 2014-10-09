module.exports = {
  id: "RelationshipType",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "ovn": "http://vocab.ovn.is/",
  },
  description: "A relationship between multiple agents.",
  context: "org:Membership",
  properties: {
    "@id": {
      description: "The identifier for the relationship type",
      type: "string",
    },
    name: {
      description: "The name of the type of agent relationship.",
      context: "name",
      $ref: "RelationshipType",
    },
    description: {
      description: "A description of the type of agent relationship.",
      context: "description",
      type: "string",
    },
  },
};
