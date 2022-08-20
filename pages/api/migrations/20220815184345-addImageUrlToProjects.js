module.exports = {

    async up (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('projects', 'tile_image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t }),
                queryInterface.addColumn('projects', 'device_image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t }),
                queryInterface.addColumn('projects', 'logo_image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t }),
                queryInterface.addColumn('projects', 'background_banner_image_url', {
                    type: Sequelize.DataTypes.STRING
                }, { transaction: t })
            ])
        })
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('projects', 'tile_image_url', { transaction: t }),
                queryInterface.removeColumn('projects', 'device_image_url', { transaction: t }),
                queryInterface.removeColumn('projects', 'logo_image_url', { transaction: t }),
                queryInterface.removeColumn('projects', 'background_banner_image_url', { transaction: t }),
            ])
        })
    }

}