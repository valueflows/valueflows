module.exports = {
  id: "Role",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "org": "http://www.w3.org/TR/vocab-org#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
  },
  context: "org:Role",
  description: "A role a member plays within a group.",
  properties: {
    name: {
      context: "name",
      description: "The primary name of the role.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the role.",
      type: "string",
    },
    related: {
      context: "skos:related",
      description: "Roles that are related to this role.",
      type: "array",
      items: {
        $ref: "Role",
      },
    },
    broader: {
      context: "skos:broader",
      description: "Roles that are broader than this role.",
      type: "array",
      items: {
        $ref: "Role",
      },
    },
    narrower: {
      context: "skos:narrower",
      description: "Roles that are narrower than this role.",
      type: "array",
      items: {
        $ref: "Role",
      },
    },
  },
  dependencies: {
  },
};
