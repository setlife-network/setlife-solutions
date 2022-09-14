module.exports = {

    Test: {
        id: () => {
            return 1
        },
        title: () => {
            return 'Title'
        },
        desctription: () => {
            return 'Desctription'
        }
    },

    Query: {
        getTest: () => {
            return ({
                id: 1,
                title: 'Title',
                description: 'Description'
            })
        }
    },

    Mutation: {
        createType: () => {
            return ({
                id: 1,
                title: 'Title',
                description: 'Description'
            })
        }
    }
  
}

export {}