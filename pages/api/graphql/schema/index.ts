const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const ProjectType = require('./types/ProjectType')
const ServicePackageType = require('./types/ServicePackageType')
const TestType = require('./types/TestType')

// Import resolvers
const ProjectResolver = require('./resolvers/ProjectResolver')
const ServicePackageResolver = require('./resolvers/ServicePackageResolver')
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    ProjectType,
    ServicePackageType,
    TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
    ProjectResolver,
    ServicePackageResolver,
    TestResolver
])

// Export generated schema
const schema: any = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
