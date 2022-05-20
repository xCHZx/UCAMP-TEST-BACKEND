const fetch = require('node-fetch')
const {response} = require('express')

const getApiData = async (keyword) => {
  const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${keyword}`
  let responseData = await fetch(apiUrl).then(resPromise => resPromise.json())
  return responseData
}

const setProductsData = async (queryParam) =>{
  const productsData = await getApiData(queryParam)
  let products = []
  Object.entries(productsData.results).forEach(result => {
    let tempObject = {
      "id" : result[1].id,
      "title" : result[1].title,
      "price" : result[1].price,
      "currency_id" : result[1].currency_id,
      "available_quantity" : result[1].available_quantity,
      "thumbnail" : result[1].thumbnail,
      "condition" : result[1].condition
    }
    products.push(tempObject)
  })
  return products
}

const getProducts = async (req, res = response) => {
  let query = req.query.query
  const products = await setProductsData(query)
  // console.log(products)
  res.status(200).json(products)
}

module.exports = {getProducts}