const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const ProjectType = require('./types/ProjectType')
const TestType = require('./types/TestType')

// Import resolvers
const ProjectResolver = require('./resolvers/ProjectResolver')
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    ProjectType,
    TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
    ProjectResolver,
    TestResolver
])

// Export generated schema
const schema: any = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
