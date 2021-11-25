const { join } = require('path');
const { loadFileSync, mergeTypeDefs, mergeResolvers } = require("graphql-tools");

const allTypes = loadFileSync(join(__dirname, 'modules', '**', '*.graphql'));
const allResolvers = loadFileSync(join(__dirname, 'modules', '**', 'resolvers.js'));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = {
    typeDefs,
    resolvers
};