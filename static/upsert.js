// const {MongoClient}=require('mongodb')
// const{faker} = require('@faker-js/faker');

// const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'

// async function actualizarPropiedad(nombrePropiedad,  lastName, age ,address, idPerson, sizes){
//         const client = new MongoClient(uri);
    
//         try {
//             await client.connect();

//             const result = await client.db('publigrafit').collection('produc').
//             updateOne({firstName: nombrePropiedad}, {$set: {lastName:lastName, age:age ,address:address, idPerson:idPerson, sizes:sizes}},{upsert:true})
            
//             console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
//             console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
      
//         } catch (e) {
//             console.error(e);
//         }finally{
    
//         await client.close();
//         }
//     }
    
// actualizarPropiedad("Alicia", "Garcia", 100, "Medellin", 200, "[algo1,algo2]");