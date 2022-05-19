// Dentro del IDE, creamos nuestro punto de acceso, es decir, el archivo app.js. En el mismo
// indicaremos que utilizaremos Express con la siguiente línea:
const { application } = require("express");
const express = require("express");
//Como require(express) nos retorna una función, debemos invocarla:
const app = express();


//ruta para los archivos estaticos.
app.use(express.static("Public"));

//incluyo la biblioteca path.
const path = require('path');

//ejs template in node js 
//instalar paquete npm install ejs 
//referencia
app.set('views',path.join(__dirname, 'views'));
app.set("view engine", "ejs");


// requerir archivos de rutas.
const mainRouter = require('./routers/mainRouter');        
const productosRouter =require('./routers/productoRouter');       
const productosEjsRouter =require('./routers/productoejsRouter');       



//Ahora ya estamos listos para configurar nuestro servidor.
app.listen(3000, () => {
  console.log("Servidor funcionando");
});



//mapeo de rutas
app.use('/', mainRouter);
app.use('/productos', productosRouter);
app.use('/productosejs', productosEjsRouter);
