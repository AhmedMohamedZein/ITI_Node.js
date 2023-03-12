// using Ajv to validate the requested data 
const Ajv = require('ajv');
const ajv = new Ajv(); //create new object

const schemaA = {
    type: "object",
    properties: {
      name: {type: "string"},
      creditHours: {type: "integer"},
    },
    required: ["name","creditHours"],
    additionalProperties: false,
}

const schemaB = {
    type: "object",
    properties: {
      name: {type: "string"}
    },
    required: ["name"],
    additionalProperties: false,
}

const schemaC = {
  type: "object",
  properties: {
    rename: {type: "string"},
    name: {type: "string"},
  },
  required: ["name","rename"],
  additionalProperties: false,
}


const validate = ajv.compile(schemaA);
const validateGetRequest = ajv.compile(schemaB);
const validateUpdate = ajv.compile(schemaC);
module.exports = { validate , validateGetRequest , validateUpdate } ;