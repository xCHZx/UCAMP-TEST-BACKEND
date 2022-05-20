const express = require('express')
const cors = require('cors');
const apiRouter = require('./routes/api')

const app = express()

app.use(cors())

app.use('/api', apiRouter)

app.get('/',(req, res)=>{
  res.send("URL NO VÁLIDA")
})

app.listen(4000, ()=>{
  console.log("Servidor arrancado en 4000")
})