module.exports = {
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
      context: "name",
      description: "The person's name.",
      type: "string",
    },
    handle: {
      context: "foaf:nick",
      description: "The person's online alias.",
      type: "string",
    },
    bio: {
      context: "description",
      description: "A short bio of the person.",
      type: "string",
    },
    location: {
      context: "foaf:based_near",
      description: "The location(s) this person is based near.",
      type: "array",
      items: {
        $ref: "Place",
      },
    },
    avatar: {
      context: "image",
      description: "An avatar of the person.",
      type: "string",
      format: "uri",
    },
    homepage: {
      context: "url",
      description: "The person's homepage.",
      type: "string",
      format: "uri",
    },
    memberships: {
      context: "org:hasMembership",
      description: "The membership relationships that the person plays.",
      type: "array",
      items: {
        reverse: "member",
        $ref: "Membership",
      },
    },
    groups: {
      context: "memberOf",
      value: function () {
        return this.memberships.map(function (m) {
          return m.group;
        });
      },
    },
  },
  dependencies: {
    'membership-vocab': 'git://github.com/openvocab/membership',
    'place-vocab': 'git://github.com/openvocab/place',
  },
};
