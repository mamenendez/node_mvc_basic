// Dentro del IDE, creamos nuestro punto de acceso, es decir, el archivo app.js. En el mismo
// indicaremos que utilizaremos Express con la siguiente línea:
const express = require("express");
const router = require("./routers/mainRouter");
//Como require(express) nos retorna una función, debemos invocarla:
const app = express();

app.use(express.static("Public"));


var mainRouter = require('./routers/mainRouter');        

app.use('/', mainRouter);
app.use('/about', mainRouter);




//Ahora ya estamos listos para configurar nuestro servidor.
app.listen(3050, () => {
  console.log("Servidor funcionando");
});


module.exports =router;