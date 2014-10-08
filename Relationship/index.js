module.exports = {
  id: "Relationship",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "org": "  http://www.w3.org/ns/org#",
  },
  description: "A relationship between multiple agents.",
  context: "org:Membership",
  properties: {
    description: {
      description: "A description of the agents' relations.",
      context: "description",
      type: "string",
    },
    roles: {
      // TODO: how to associate a role with a specific agent
      description: "The roles those in the relationship play.",
      context: "org:role",
      type: "array",
      items: {
        $ref: "Role",
      },
    },
    state: {
      description: "The state of the relationship.",
      enum: ["active", "inactive", "potential"],
    },
  },
  dependencies: {
    'role-vocab': "git://github.com/openvocab/role",
  },
};
