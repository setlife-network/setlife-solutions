'use strict'

module.exports = {
  
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('service_packages', {
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
      estimated_cost: {
          type: Sequelize.DataTypes.STRING,
      },
      minimum_cost: {
          type: Sequelize.DataTypes.STRING,
      },
      meeting_frequency: {
          type: Sequelize.DataTypes.STRING,
      },
      subtitle: {
          type: Sequelize.DataTypes.STRING,
      },
      additional_notice: {
          type: Sequelize.DataTypes.STRING,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('service_packages');
  }

}
