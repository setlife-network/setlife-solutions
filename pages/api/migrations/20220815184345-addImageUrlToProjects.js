module.exports = {

    async up (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('projects', 'image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t })
            ])
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('projects', 'image_url', { transaction: t })
            ])
        })
    }

}