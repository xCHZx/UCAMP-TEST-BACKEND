const router = require('express').Router();
const {getProducts} = require('../controllers/productsController')

router.get('/',(req, res)=>{
  res.send("URL NO VÁLIDA")
})

router.get('/search',getProducts)

module.exports = router