module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('packaged_services', {
            service_id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'services',
                    key: 'id'
                }
            },
            service_package_id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'service_packages',
                    key: 'id'
                }
            },
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('packaged_services');
    }

}
