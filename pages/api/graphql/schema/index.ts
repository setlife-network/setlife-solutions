const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const ProjectType = require('./types/ProjectType')
const ServiceType = require('./types/ServiceType')
const TestType = require('./types/TestType')

// Import resolvers
const ProjectResolver = require('./resolvers/ProjectResolver')
const ServiceResolver = require('./resolvers/ServiceResolver')
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    ServiceType,
    ProjectType,
    TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
    ServiceResolver,
    ProjectResolver,
    TestResolver
])

// Export generated schema
const schema: any = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
