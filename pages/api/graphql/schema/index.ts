const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const ProjectType = require('./types/ProjectType')
const ServiceDetailType = require('./types/ServiceDetailType')
const ServiceType = require('./types/ServiceType')
const TestType = require('./types/TestType')

// Import resolvers
const ProjectResolver = require('./resolvers/ProjectResolver')
const ServiceDetailResolver = require('./resolvers/ServiceDetailResolver')
const ServiceResolver = require('./resolvers/ServiceResolver')
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    ProjectType,
    ServiceDetailType,
    ServiceType,
    TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
    ProjectResolver,
    ServiceDetailResolver,
    ServiceResolver,
    TestResolver
])

// Export generated schema
const schema: any = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
