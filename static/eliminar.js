// const {MongoClient}=require('mongodb')
// const{faker} = require('@faker-js/faker');

// const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'


// async function eliminarPropiedad(nombrePropiedad){
//     const client = new MongoClient(uri);
    
//     try {
//         await client.connect();
//         const result = await client.db('publigrafit').collection('productos').deleteOne({nombre_producto: nombrePropiedad})

        
        
//         console.log(`${result.deletedCount} propiedade(s) fue(ron) eliminada(s)`);
  
//     } catch (e) {
//         console.error(e);
//     }finally{

//     await client.close();
//     }
// }

// eliminarPropiedad("Camiseta")
