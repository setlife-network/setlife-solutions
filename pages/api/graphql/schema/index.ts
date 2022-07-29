const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const ProjectType = require('./types/ProjectType')
const ProjectDetailType = require('./types/ProjectDetailType')
const ServiceDetailType = require('./types/ServiceDetailType')
const ServicePackageType = require('./types/ServicePackageType')
const ServiceType = require('./types/ServiceType')
const TestType = require('./types/TestType')

// Import resolvers
const ProjectResolver = require('./resolvers/ProjectResolver')
const ProjectDetailResolver = require('./resolvers/ProjectDetailResolver')
const ServiceDetailResolver = require('./resolvers/ServiceDetailResolver')
const ServicePackageResolver = require('./resolvers/ServicePackageResolver')
const ServiceResolver = require('./resolvers/ServiceResolver')
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    ProjectType,
    ProjectDetailType,
    ServiceDetailType,
    ServicePackageType,
    ServiceType,
    TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
    ProjectResolver,
    ProjectDetailResolver,
    ServiceDetailResolver,
    ServicePackageResolver,
    ServiceResolver,
    TestResolver
])

// Export generated schema
const schema: any = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
