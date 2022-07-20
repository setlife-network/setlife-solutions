'use strict'

module.exports = {
  
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('servicedetails', {
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
            model: 'Service',
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
