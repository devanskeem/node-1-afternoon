const products = require('../products')

const getProducts = (req, res) => {
    if (req.query.price)    {
        const filtered = products.filter((prod) => 
        prod.price >= +req.query.price)
        return res.status(200).send(filtered)
    }
    res.status(200).send(products)
}

module.exports = getProducts