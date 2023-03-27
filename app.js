const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hola mundo de Node. Adios mundo de Apache");
});

app.listen(port,()=>{
    console.log("El servidor esta corriendo en el puerto",port);
})

