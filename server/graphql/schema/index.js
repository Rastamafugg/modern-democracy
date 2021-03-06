const Bylaw = require('./bylaws/bylaw');
const LawDocument = require('./bclaws/lawDocument');
const Act = require('./bclaws/act');
const TaxData = require('./taxes/taxData');
const Property = require('./taxes/property');
/*
 {lawsDocument(path: ["statreg", "1527898742", "98043", "1138648009"]) {
 title,
 id,
 ancestors
 }}

 {
 regionalDistricts: propertyValues(collectionName: "taxes", propertyName: "regionalDistrict") {
 name,
 value
 },
 years: propertyValues(collectionName: "taxes", propertyName: "year") {
 name,
 value
 }
 }

 */
const Query = `
  type Query {
    bylaws(property: String): [Bylaw]
    lawsDocumentList(path: [String]): [LawDocument]
    lawsDocument(path: [String]): Act
    taxes(regionalDistrict: String, municipality: String, year: Int): [TaxData]
    propertyValues(collectionName: String, propertyName: String): [Property!]
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

module.exports = [SchemaDefinition, Query, Bylaw, LawDocument, Act, TaxData, Property];
