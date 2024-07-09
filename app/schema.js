module.exports = {
    type: 'object',
    properties: {
      ingredients: { type: 'array' },
      bodyPart: { type: 'string' },
    },
    required: ['ingredients', 'bodyPart'],
};