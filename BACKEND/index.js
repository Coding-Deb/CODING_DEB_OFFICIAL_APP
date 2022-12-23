const express = require('express')
const app = express()
const port = 5000
const routes = require('./routes/routes')
const web = require('./web/web')
const Delete = require('./delete/delete')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CodingDeb_App',()=>{
    console.log('Database Connected');
})

app.use(express.json()) 

app.use('/api',routes)
app.use('/dataapi',web)
app.use('/deleteapi',Delete)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))