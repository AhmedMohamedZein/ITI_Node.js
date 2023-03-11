// using Ajv to validate the requested data 
const Ajv = require('ajv');
const ajv = new Ajv(); //create new object

const schemaA = {
    type: "object",
    properties: {
      name: {type: "string"},
      creditHours: {type: "string"},
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

const validate = ajv.compile(schemaA);
const validateGetRequest = ajv.compile(schemaB);
module.exports = { validate , validateGetRequest } ;