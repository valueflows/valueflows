module.exports = {
  id: "Relationship",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "ovn": "http://vocab.ovn.is/",
  },
  description: "A relationship between multiple agents.",
  context: "org:Membership",
  properties: {
    relationshipType: {
      description: "The type of agent relationship.",
      context: "ovn:relationshipType",
      $ref: "RelationshipType",
    },
    description: {
      description: "A description of the agents' relations.",
      context: "description",
      type: "string",
    },
    is: {
      description: "The agent that is <relationship name>",
      context: "ovn:isRelated",
      $ref: "Agent",
    },
    has: {
      description: "The agent that has <relationship name>",
      context: "ovn:hasRelated",
      $ref: "Agent",
    },
    status: {
      description: "The status of the relationship.",
      context: "ovn:status",
      enum: [
        "active",
        "inactive",
        "potential",
      ],
    },
    symmetric: {
      description: "The symmetric relationship that corresponds to this relationship.",
      context: "ovn:symmetric",
      $ref: "Relationship",
    },
  },
  dependencies: {
    RelationshipType: require('./RelationshipType'),
    Agent: require('./Agent'),
  },
};
