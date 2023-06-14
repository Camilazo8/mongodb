// use('publigrafit')
// const {MongoClient}=require('mongodb')
// const{faker} = require('@faker-js/faker');

// const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'

// async function crear_produc(nuevoProduc){
//     const client=new MongoClient(uri)

//     try{
//             await client.connect();
//             const result=await client.db('publigrafit').collection('produc').insertMany(nuevoProduc);
//             console.log(`Los datos que inserto ${result.insertId}`)
//             console.log(nuevoProduc)
//         }
//         catch(e){
//             console.log(e)
//         }finally{
//             await client.close()
//         }
// }
// for(let i=0; i<100; i++){
// crear_produc([
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo",
//         "size":["lunes","martes","miercoles","jueves","viernes"]
//     }])}
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
//     {
        
//         "nombre_producto":faker.commerce.product(),
//         "precio":faker.number.int({min:100 , max:1000000}),
//         "detalle":faker.lorem.sentences(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int({min:100 , max:100000}),
//         "stock":faker.number.int({min:100 , max:10000000}),
//         "estado":"activo"
//     },
// ])
// }

// db.produc.aggregate([
//     {
//        $lookup: {
//          from:"detalle_venta",
//          localField: "'_id'",
//          foreignField:"'id_detalle_venta'",
//          as: "Documentos"
//        }
//     },{
//        $project: {
//           "_id":false,
//           "nombre_producto":true,
//           "precio":true,
//           "detalle":true,
//           "imagen":true,
//           "cantidad_producto":true,
//           "stock":true,
//           "estado":true,
//           Documentos: true
//     }
//  }
//  ])
//  db.produc.aggregate([
//      {$unwind:"$size"}
//  ])