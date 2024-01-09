function insertarDatos(){
  
   db.unhacolecion.insertOne({
    _id:0,
    nome:"Juan",
    apelido:"Rodriguez"
   })
}

insertarDatos()