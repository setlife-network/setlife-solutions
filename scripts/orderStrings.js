const fs = require('fs')
const orderBy = require('lodash/orderBy')

module.exports = (() => {
    return {
        sortStrings: () => {

            const generateStringsPairs = (text) => {
                const splitLines = text.split('\n')

                return splitLines.reduce((variables, s) => {
                    const afterConst = s.split('export const ')[1]
                    const keyAndValue = afterConst && afterConst.split(' = ')

                    const key = keyAndValue && keyAndValue[0]
                    const value = keyAndValue && keyAndValue[1]

                    if (key && value) {
                        variables.push({ key, value })
                    }

                    return variables
                }, [])
            }

            const sortStringsFile = (strings, path) => {
                
                console.log(`Sorting ${strings.length} strings`)
        
                const sortedStrings = orderBy(strings, 'key', 'asc')
        
                let sortedStringsText = ``
                sortedStrings.forEach(ss => {
                    sortedStringsText += `export const ${ss.key} = ${ss.value}\n`
                })
                fs.writeFileSync(path, sortedStringsText)
                
                console.log(`Sorting complete and written to ${path}`)
            }
        
            const STRING_PATH = __dirname + '/../constants/strings.ts'

            const stringFile = fs.readFileSync(STRING_PATH, {encoding: 'utf-8'})

            const constStrings = generateStringsPairs(stringFile)

            console.log(`${constStrings.length} strings`)

            sortStringsFile(constStrings, __dirname + '/../constants/strings.ts')
        
        }
    }
})()