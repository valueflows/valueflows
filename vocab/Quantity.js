module.exports = {
  id: "Quantity",
  type: 'object',
  prefixes: {
    "": "http://schema.org/",
    "qudt": "http://qudt.org/1.1/schema/qudt",
  },
  context: "qudt:QuantityValue",
  description: "A quantity expresses magnitude and kind and is given by the product of a numerical value n and a unit of measure U.",
  properties: {
    description: {
      description: "A description of the quantity.",
      context: "qudt:description",
      type: "string",
    },
    abbreviation: {
      description: "An abbreviation of the quantity.",
      context: "qudt:abbreviation",
      type: "string",
    },
    symbol: {
      description: "A symbol of the quantity.",
      context: "qudt:symbol",
      type: "string",
    },
    value: {
      description: "The magnitude of the quantity.",
      context: "qudt:numericValue",
      type: "number",
    },
    relativeStandardUncertainty: {
      description: "The relative standard uncertainty of the value.",
      context: "qudt:relativeStandardUncertainty",
      type: "number",
    },
    standardUncertainty: {
      description: "The standard uncertainty of the value.",
      context: "qudt:standardUncertainty",
      type: "number",
    },
    unit: {
      description: "The unit of the quantity.",
      context: "qudt:unit",
      $ref: "Unit",
    },
  },
};

module.exports.dependencies = {
  Unit: require('./Unit'),
};
