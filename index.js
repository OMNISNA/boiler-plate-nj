const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jhk:ipez0807@boilerplate.5cji5.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
 }).then(() => console.log('MongodB Conneted...'))
 .catch(err => console.log(err))



app.get('/',(req, res) => res.send('Hello world!'))

app.listen(port,() => console.log(`ESxample app listening on port ${port}!`))

