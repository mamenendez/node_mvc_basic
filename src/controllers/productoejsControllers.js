const path = require('path');   

const productoejsControllers = 
{
    productosejs: (req, res) => 
    {
        return res.render('productosejs');
    }

}

module.exports = productoejsControllers;