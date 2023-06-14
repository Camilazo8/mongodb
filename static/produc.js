const {MongoClient}=require('mongodb')
const{faker} = require('@faker-js/faker');

const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'

async function crear(nueva){
    const client=new MongoClient(uri)

    try{
            await client.connect();
            const result=await client.db('publigrafit').collection('productos1').insertMany(nueva);
            console.log(`Los datos que inserto${result.insertedIds}`)
            console.log(nueva)
        }
        catch(e){
            console.log(e)
        }finally{
            await client.close()
        }
}
for(let i=0; i<100; i++){
crear([
    {
        "nombre_producto":faker.commerce.product() ,
        "precio":faker.number.int({min:1000,max:99999999}),
        "detalle":faker.lorem.sentence(),
        "imagen":faker.image.url(),
        "cantidad_producto":faker.number.int({min:100,max:99999999}),
        "stock":faker.number.int({min:5,max:99999999}),
        "estado":"activo",
        "size":["lunes","martes","miercoles","jueves","viernes"]
    }
])}


//unwind


//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     },
// ])
// }
// //insertOne
// async function crear(nueva){
//     const client=new MongoClient(uri)

//     try{
//             await client.connect();
//             const result=await client.db('publigrafit').collection('productos').insertOne(nueva);
//             console.log(`Los datos que inserto${result.insertedIds}`)
//             console.log(nueva)
//         }
//         catch(e){
//             console.log(e)
//         }finally{
//             await client.close()
//         }
// }

// crear(
//     {
//         "nombre_producto":faker.commerce.product() ,
//         "precio":faker.number.int(),
//         "detalle":faker.lorem.sentence(),
//         "imagen":faker.image.url(),
//         "cantidad_producto":faker.number.int(),
//         "stock":faker.number.int(),
//         "estado":"activo"
//     }
// )
