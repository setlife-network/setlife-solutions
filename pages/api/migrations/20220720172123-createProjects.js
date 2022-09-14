module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('projects', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            client_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            client_description: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            project_resource: {
                type: Sequelize.DataTypes.STRING,
            },
            other_resource: {
                type: Sequelize.DataTypes.STRING,
            }
        })
    },

    async down (queryInterface) {
        return queryInterface.dropTable('projects');
    }

}
