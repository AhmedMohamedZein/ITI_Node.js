// using Ajv to validate the requested data 
const Ajv = require('ajv');
const ajv = new Ajv(); //create new object

const schemaA = {
    type: "object",
    properties: {
      name: {type: "string"},
      id: {type: "string"},
    },
    required: ["name","id"],
    additionalProperties: false,
}

const schemaB = {
    type: "object",
    properties: {
      id: {type: "string"}
    },
    required: ["id"],
    additionalProperties: false,
}

const validate = ajv.compile(schemaA);
const validateGetRequest = ajv.compile(schemaB);
module.exports = { validate , validateGetRequest } ;