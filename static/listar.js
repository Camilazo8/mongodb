// const {MongoClient}=require('mongodb')
// const{faker} = require('@faker-js/faker');

// const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'

// // async function crear(nueva){
// //     const client=new MongoClient(uri)

// //     try{
// //             await client.connect();
// //             const result=await client.db('publigrafit').collection('productos').findOne({nombre_producto: nueva});
            
// //             if(result){
// //                 console.log(result);
// //             }
// //         }
// //         catch(e){
// //             console.log(e)
// //         }finally{
// //             await client.close()
// //         }
// // }
// // crear('Chicken')

// // mostrar todas la colecciones
// // async function crear(nueva){
// //     const client=new MongoClient(uri)

// //     try{
// //             await client.connect();
// //             const result=await client.db('publigrafit').collection('productos').find().toArray();
            
            
// //                 console.log(result);
            
// //         }
// //         catch(e){
// //             console.log(e)
// //         }finally{
// //             await client.close()
// //         }
// // }
// // crear()

// //listar los documentos con el limit
// // async function crear(nueva){
// //     const client=new MongoClient(uri)

// //     try{
// //             await client.connect();
// //             const result=await client.db('publigrafit').collection('productos').find().limit(6);
// //             const consulta= await result.toArray();
            
            
// //                 console.log(consulta);
            
// //         }
// //         catch(e){
// //             console.log(e)
// //         }finally{
// //             await client.close()
// //         }

// // }
// // crear()
// // listar los documentos con el sort
// async function crear(nueva){
//     const client=new MongoClient(uri)

//     try{
//             await client.connect();
//             const result=await client.db('publigrafit').collection('productos').find().sort({nombre_producto:1});
//             const consulta= await result.toArray();
            
            
//                 console.log(consulta);
            
//         }
//         catch(e){
//             console.log(e)
//         }finally{
//             await client.close()
//         }

// }
// crear()


