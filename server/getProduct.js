const products = require('../products')


const getProduct = (req, res) => {
    let item = products.find((product) => product.id === parseInt(req.params.id))
    if (item) res.status(200).send(item);
    else res.status(500).send('Item not in list')
}

module.exports = getProduct