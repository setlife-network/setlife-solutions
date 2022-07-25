module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('provided_services', {
            project_id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references : {
                    model: 'projects',
                    key: 'id'
                }
            },
            service_id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'services',
                    key: 'id'
                }
            },
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('provided_services');
    }

}
