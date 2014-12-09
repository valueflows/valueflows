module.exports = {
  allOf: [{
    $ref: "Agent",
  }, {
    id: "Person",
    prefixes: {
      "": "http://schema.org/",
      "org": "http://www.w3.org/TR/vocab-org#",
      "foaf": "http://xmlns.com/foaf/0.1/", 
    },
    context: "Person",
    description: "A person.",
    type: 'object',
    properties: {
      name: {
        description: "The person's name.",
      },
      description: {
        description: "A short bio of the person.",
      },
      handle: {
        context: "foaf:nick",
        description: "The person's online alias.",
        type: "string",
      },
      location: {
        context: "foaf:based_near",
        description: "The location(s) this person is based near.",
        type: "array",
        items: {
          $ref: "Location",
        },
      },
      image: {
        context: "image",
        description: "An avatar of the person.",
        type: "string",
        format: "uri",
      },
      url: {
        context: "url",
        description: "The person's website.",
        type: "string",
        format: "uri",
      },
      relationships: {
        description: "The relationships the person has or is with other agents.",
      },
      groups: {
        context: "memberOf",
        description: "The groups this person is a member of.",
        items: {
          $ref: "Group",
        },
        get: function () {
          // from this Person's relationships
          return this.relationships
          // that have additionalType with name 'member',
          .filter(function (rel) {
            return rel.additionalType.name === "member"
          })
          // return object that has related (i.e. has member)
          .map(function (m) {
            return r.hasRelated;
          })
          ;
        },
      },
    },
  }],
};
module.exports.dependencies = {
  Group: require('./Group'),
  Location: require('./Location'),
};
