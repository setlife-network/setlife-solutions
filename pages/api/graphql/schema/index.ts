const { makeExecutableSchema } = require('apollo-server')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const TestType = require('./types/TestType')

// Import resolvers
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
  TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
  TestResolver
])

// Export generated schema
const schema = ({
  typeDefs,
  resolvers
})

export default schema
