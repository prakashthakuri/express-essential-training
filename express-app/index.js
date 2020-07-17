const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const data = require('./data/data.json')
const app = express()
const PORT = 3000

//adding static route for file sharing 

//this is for the public folder for the path
app.use(express.static('public'))

// app.use(express.json()) //builin middleware

app.use(express.urlencoded({extended: true})) //application/urlencoded


//This is for proxies

app.set('trust proxy', 'loopback')

app.post('/newItem', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})

//images folder  on the path images

app.use('/images', express.static('images'))

//third party midleware favicon

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


app.get('/', (req, res) => 
    // res.send(`get request with / route on the port ${PORT}`)
    //get the data first 
    res.json(data)
)

//JSON Data

// {"Hello": "This JSON is cool"}
// URL Encoced data 
// hello=urlENcoded+is+cool

//improvised with route chaining
app.route('/item')
        .get((req, res) => {
            //handiling error

            throw new Error()
        // res.redirect('https://linkedin.com')
        res.download('/images/techcity.jpg')

        })
        //put is for update
        .put( (req, res) => 
        res.send(`a post request with /item route on the port ${PORT}`)
)

app.get('/item/:id', (req, res, next) => {


    //this is the middleware that pulls the data
    console.log(req.params.id)
    let user = Number(req.params.id)
    console.log(user)
    console.log(data[user])

    //middleware that uses the request object
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)

    //everything above is middleware

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

//Erroe Handling function

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`Red alert! \n ${err.stack}`)

})
// Error Handling ends here


app.listen(PORT, () =>

    console.log(`Your server is running on ${PORT}`),
    // console.log(data)

)


