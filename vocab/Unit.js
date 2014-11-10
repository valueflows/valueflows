module.exports = {
  id: "Unit",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "qudt": "http://qudt.org/1.1/schema/qudt",
  },
  context: "qudt:Unit",
  description: "An unit is a particular quantity of a given kind that has been chosen as a scale for measuring other quantities of the same kind.",
  properties: {
    description: {
      description: "A description of the unit.",
      context: "qudt:description",
      type: "string",
    },
    abbreviation: {
      description: "An abbreviation of the unit.",
      context: "qudt:abbreviation",
      type: "string",
    },
    symbol: {
      description: "An abbreviation of the unit.",
      context: "qudt:symbol",
      type: "string",
    },
    kind: {
      description: "The kind of the unit.",
      context: "qudt:quantityKind",
      $ref: "Kind",
    },
    conversionMultiplier: {
      description: "A multiplier for this unit in relation to the given kind",
      context: "qudt:conversionMultiplier",
      type: "number",
    },
    conversionOffset: {
      description: "An offset for this unit in relation to the given kind",
      context: "qudt:conversionOffset",
      type: "number",
    },
  },
};

module.exports.dependencies = {
  Kind: require('./Kind'),
};
