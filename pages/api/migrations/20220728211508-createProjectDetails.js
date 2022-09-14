module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('project_details', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            project_id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'projects',
                    key: 'id'
                }
            },
            description: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.DataTypes.STRING
            },
            sub_type: {
                type: Sequelize.DataTypes.STRING
            }
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('project_details');
    }

}
