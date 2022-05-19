const path = require('path');   

const personas =  
[
    {
        id:1,
        nombre:'Matias',
        apellido: 'Menendez'
    },
    {
        id:2,
        nombre:'Marisol',
        apellido: 'Murineddu'
    }
]

const productoejsControllers = 
{
    productosejs: (req, res) => 
    {
        return res.render('productosejs',{personas : personas});
    }



}

module.exports = productoejsControllers;