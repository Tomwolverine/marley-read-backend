const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 9000
const csvToJson = require('convert-csv-to-json')

app.use(cors())
app.use(bodyParser.json( ))


csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

app.get('/', (request, response) => {
    return response.json({data})
})

app.listen(port, ( ) => { console.log('I am listening on ${port}') })