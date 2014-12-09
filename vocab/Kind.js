module.exports = {
  id: "Kind",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "qudt": "http://qudt.org/1.1/schema/qudt",
  },
  context: "qudt:QuantityKind",
  description: "A kind is any observable property that can be measured and quantified numerically.",
  properties: {
    description: {
      description: "A description of the kind.",
      context: "qudt:description",
      type: "string",
    },
    abbreviation: {
      description: "An abbreviation of the kind.",
      context: "qudt:abbreviation",
      type: "string",
    },
    symbol: {
      description: "A symbol of the kind.",
      context: "qudt:symbol",
      type: "string",
    },
    generalization: {
      description: "The kind that this is generalized from.",
      context: "qudt:quantityKind",
      $ref: "Kind",
    },
  },
};

module.exports.dependencies = {
}
