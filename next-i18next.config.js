module.exports = ({
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
    },
    backend: {
        loadPath: 'public/locales/{{lng}}/{{ns}}.json',
    }
})