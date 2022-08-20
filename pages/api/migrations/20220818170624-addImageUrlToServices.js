module.exports = {

    async up (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('services', 'background_banner_image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t }),
                queryInterface.addColumn('services', 'tile_image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t })
            ])
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('services', 'background_banner_image_url', { transaction: t }),
                queryInterface.removeColumn('services', 'tile_image_url', { transaction: t })
            ])
        })
    }

} 