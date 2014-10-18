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
    additionalType: {
      description: "The type of agent relationship.",
      context: "additionalType",
      $ref: "RelationshipType",
    },
    description: {
      description: "A description of the agents' relations.",
      context: "description",
      type: "string",
    },
    isRelated: {
      description: "The agent that is <relationship name>",
      context: "ovn:isRelated",
      $ref: "Agent",
    },
    hasRelated: {
      description: "The agent that has <relationship name>",
      context: "ovn:hasRelated",
      $ref: "Agent",
    },
    state: {
      description: "The state of the relationship.",
      enum: ["active", "inactive", "potential"],
    },
  },
  dependencies: {
    RelationshipType: require('./RelationshipType'),
    Agent: require('./Agent'),
  },
};
