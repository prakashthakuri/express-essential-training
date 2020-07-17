const express = require('express')
const data = require('./data/data.json')
const app = express()
const PORT = 3000

app.get('/', (req, res) => 
    // res.send(`get request with / route on the port ${PORT}`)
    //get the data first 
    res.json(data)
)

app.post('/newItem', (req, res) => 
    res.send(`a post request with /newItem route on the port ${PORT}`)
)

//put is for update
app.put('/item', (req, res) => 
    res.send(`a post request with /item route on the port ${PORT}`)
)

//delete

app.delete('/item', (req, res) => 
    res.send(`a delete request with /item route on the port ${PORT}`)
)
app.listen(PORT, () =>

    console.log(`Your server is running on ${PORT}`),
    // console.log(data)

)


