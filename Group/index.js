module.exports = {
  id: "Group",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "org": "http://www.w3.org/TR/vocab-org#",
    "ovn": "http://ovn.is/",
  },
  context: "org:Organization",
  description: "A collection of people and groups.",
  properties: {
    name: {
      context: "name",
      description: "The primary name of the group.",
      type: "string",
    },
    description: {
      context: "description",
      description: "A short description of the group.",
      type: "string",
    },
    relationships: {
      context: "ovn:relationships",
      description: "The relationships the group has or is with other agents.",
      type: "array",
      items: {
        anyOf: [{
          reverse: "hasRelated",
        }, {
          reverse: "isRelated",
        }]
        $ref: "Relationship",
      },
    },
    members: {
      context: "member",
      description: "The members of the group.",
      type: "array",
      items: {
        $ref: "Agent",
      },
      get: function () {
        // from this Group's relationships
        return this.relationships
        // that have additionalType with name 'member',
        .filter(function (rel) {
          return rel.additionalType.name === "member"
        })
        // return object that is related (i.e. is member)
        .map(function (m) {
          return r.isRelated;
        })
        ;
      },
    },
  },
  dependencies: {
    Agent: require('../Agent')
    Relationship: require('../Relationship'),
  },
};
