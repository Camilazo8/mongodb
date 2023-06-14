// const {MongoClient}=require('mongodb')
// const{faker} = require('@faker-js/faker');
//pruebas

// const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'


// async function actualizarPropiedad(nombrePropiedad, campoActualizar){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('publigrafit').collection('productos').updateOne({nombre_producto: nombrePropiedad}, {$set: {precio: campoActualizar}})

        
//         console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
//         console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// actualizarPropiedad("Camiseta",20000)