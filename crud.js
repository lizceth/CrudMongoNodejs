module.exports.InsertarRegistro = function(db,callback){
	let coleccion = db.collection("users")

	coleccion.insertMany([
		{nombre: "David", edad:25, peso: 60},
		{monbre:"Sandra", edad:18, peso:50},
		{nombre: "Alex", edad:22, peso:65}
		], (error, result)=> {
			console.log("resultado de insert:"+ result.toString())
		})
}

module.exports.EliminarRegistro = function(db, callback){
	let coleccion = db.collection("users")
	try{
		coleccion.deleteOne({edad:25})
		console.log("se elimino correctamente")

	}catch(e){
		console.log("se genero un error"+e)
	}
}

module.exports.ConsultarActualizar = function(db, callback){
	let coleccion = db.collection("users")

	coleccion.find().toArray((error, documents) =>{
		if(error)console.log(error)
			callback()
	})
	try{
		coleccion.updateOne({name:"Sandra"},{$set: {peso:50}})
		console.log("se actualizo correctamente")

	}catch(e){
		console.log("error en actualizacion de datos:"+e)
	}

	coleccion.find().toArray((error, documents) =>{
		if(error)console.log(error)
			console.log(documents)
		callback()
	})
}