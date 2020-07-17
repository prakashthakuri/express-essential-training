const express = require('express')
const data = require('./data/data.json')
const app = express()
const PORT = 3000

//adding static route for file sharing 

//this is for the public folder for the path
app.use(express.static('public'))

//images folder  on the path images

app.use('/images', express.static('images'))


app.get('/', (req, res) => 
    // res.send(`get request with / route on the port ${PORT}`)
    //get the data first 
    res.json(data)
)

//improvised with route
app.route('/download')
        .get((req, res) => {
        // res.redirect('https://linkedin.com')
        res.download('/images/techcity.jpg')

        })
        //put is for update
        .put( (req, res) => 
        res.send(`a post request with /item route on the port ${PORT}`)
)

app.get('/item/:id', (req, res, next) => {

    console.log(req.params.id)
    let user = Number(req.params.id)
    console.log(user)
    console.log(data[user])
    res.send(data[user])
    next()
}, (req,res) =>
        console.log('Did you get the right data')
)


app.post('/newItem', (req, res) => 
    res.send(`a post request with /newItem route on the port ${PORT}`)
)


//update 
//improvisedwith route above
// app.put('/item', (req, res) => 
//         res.send(`a post request with /item route on the port ${PORT}`)
// )



//delete

app.delete('/item', (req, res) => 
    res.send(`a delete request with /item route on the port ${PORT}`)
)
app.listen(PORT, () =>

    console.log(`Your server is running on ${PORT}`),
    // console.log(data)

)


