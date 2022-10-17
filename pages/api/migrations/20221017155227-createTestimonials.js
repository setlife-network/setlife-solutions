module.exports = {
  
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('testimonials', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            person_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            company_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            testimony: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            person_image_url: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            company_image_url: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('testimonials');
    }

}
