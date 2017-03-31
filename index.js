var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/nodeDriver"

var Operaciones = require{'./crud.js'}

MongoClient.connect(url.function(err,db){
	if(err)console.log(err)
		console.log("conexion establecida con la base de datos")
	Operaciones.InsertarRegistro(db, (error, result) =>{
		if(error)console.log("error insertando datos:"+error)
	})
})

//cambiar funcion insertar por EliminarRegistro funcion