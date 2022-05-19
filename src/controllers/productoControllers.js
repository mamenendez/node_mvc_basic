const path = require('path');   

const productoController =
{
    productos: (req, res) => 
    {
        res.sendFile(path.resolve(__dirname, "../views/productos.html"))
        
    },

    detalle: (req, res) => 
    {
        res.sendFile(path.resolve(__dirname, "../views/productos_detalle.html"))
    }
}
module.exports = productoController;