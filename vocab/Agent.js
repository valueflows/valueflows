module.exports = {
  id: "Agent",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "foaf": "http://xmlns.com/foaf/0.1/", 
  },
  context: "foaf:Agent",
  description: "An agent.",
  properties: {
    name: {
      context: "name",
      description: "The primary name of the agent.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the agent.",
      type: "string",
    },
    relationships: {
      context: "ovn:hasRelationship",
      description: "The relationships the agent has or is with other agents.",
      type: "array",
      items: {
        anyOf: [{
          reverse: "has",
        }, {
          reverse: "is",
        }]
        $ref: "Relationship",
      },
    },
  },
};
module.exports.dependencies = {
  Relationship: require('./Relationship'),
};
