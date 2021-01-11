const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()

app.get('/api/rates',async (request,response)=>{
    const {base,currency}= request.query
    await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`).then(res=>{
        return response.status(200).json({
                "results": {
                    "base": base,
                    "date": res.data.date,
                    "rates": res.data.rates
                }
        })    

    }
    )
    
})

const port = 5000 || process.env.port

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})