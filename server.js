'use strict'

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json('welcome to home page')
})

app.listen(3000,()=> console.log('running on port',3000))