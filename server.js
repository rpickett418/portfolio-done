const express = require('express')
const serverStatic= require('serve-static')
const path = require('path')

//create express app 
const app =  express()
//create middleware to handle the serving the app
app.use('/', serverStatic (path.join (__dirname, 'public')))
//serve index by default 
app.get('/', function (req,res){
    res.sendFile(__dirname + '/public/index.html')
})
//Create default port e the app on 
const port = process.env.PORT || 5000

app.listen(port)
//log to feedback that this is actually running
console.log('Serving' + port)