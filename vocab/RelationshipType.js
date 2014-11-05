module.exports = {
  id: "RelationshipType",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "ovn": "http://vocab.ovn.is/",
  },
  description: "A type of relationship between multiple agents.",
  context: "ovn:RelationshipType",
  properties: {
    name: {
      description: "The name of the type of agent relationship.",
      context: "name",
      enum: [
        "member",
        "child",
        "supplier",
        "customer",
      ],
    },
    description: {
      description: "A description of the type of agent relationship.",
      context: "description",
      type: "string",
    },
    label: {
      description: "A label of the type of agent relationship.",
      context: "skos:prefLabel",
    },
    pluralLabel: {
      description: "A plural label of the type of agent relationship.",
      context: "skos:altLabel",
    },
  },
};
