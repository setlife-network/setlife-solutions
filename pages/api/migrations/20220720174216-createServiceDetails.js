'use strict'

module.exports = {
  
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('service_details', {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      service_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'services',
            key: 'id'
          }
      },
      detail: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('servicedetails');
  }

}
