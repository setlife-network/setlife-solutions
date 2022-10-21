module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('consultations', {
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
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            max_budget: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            min_budget: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            company_type: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            project_goals: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false
            },
            constraints: {
                type: Sequelize.DataTypes.TEXT
            },
            phone_number: {
                type: Sequelize.DataTypes.STRING
            }
        })
    },

    async down (queryInterface) {
        return queryInterface.dropTable('consultations');
    }

}
