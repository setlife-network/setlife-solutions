module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('services', {
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
            }
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('services');
    }

}
