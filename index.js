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
    ).catch(error=>{
        console.log(error.response)
    })
    
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})