const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

// Import types
const ConsultationType = require('./types/ConsultationType')
const ProjectDetailType = require('./types/ProjectDetailType')
const ProjectType = require('./types/ProjectType')
const ServiceDetailType = require('./types/ServiceDetailType')
const ServicePackageType = require('./types/ServicePackageType')
const ServiceType = require('./types/ServiceType')
const TestType = require('./types/TestType')

// Import resolvers
const ConsultationResolver = require('./resolvers/ConsultationResolver')
const ProjectDetailResolver = require('./resolvers/ProjectDetailResolver')
const ProjectResolver = require('./resolvers/ProjectResolver')
const ServiceDetailResolver = require('./resolvers/ServiceDetailResolver')
const ServicePackageResolver = require('./resolvers/ServicePackageResolver')
const ServiceResolver = require('./resolvers/ServiceResolver')
const TestResolver = require('./resolvers/TestResolver')

// Merge types
const typeDefs = mergeTypeDefs([
    ConsultationType,
    ProjectDetailType,
    ProjectType,
    ServiceDetailType,
    ServicePackageType,
    ServiceType,
    TestType
])

// Merge resolvers
const resolvers = mergeResolvers([
    ConsultationResolver,
    ProjectDetailResolver,
    ProjectResolver,
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
