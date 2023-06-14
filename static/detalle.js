const {MongoClient}=require('mongodb')
const{faker} = require('@faker-js/faker');

const uri='mongodb+srv://camilo568:admin@cluster0.b0fdgln.mongodb.net/?retryWrites=true&w=majority'

async function crear(nueva){
    const client=new MongoClient(uri)

    try{
            await client.connect();
            const result=await client.db('publigrafit').collection('produc').insertMany(nueva);
            console.log(`Los datos que inserto${result.insertId}`)
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
            "precio":faker.number.int(),
            "detalle":faker.lorem.sentence(),
            "imagen":faker.image.url(),
            "cantidad_producto":faker.number.int(),
            "stock":faker.number.int(),
            "estado":"activo",
            "size":["lunes","martes","miercoles","jueves","viernes"]
        }
    ])}
// for(let i=0; i<100; i++){
// crear([
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     },
//     {
//         "id_detalle_venta":faker.number.int({min:100, max:10000000}),
//         "id_venta":faker.number.int({min:100, max:10000000}),
//         "id_producto":faker.number.int({min:100, max:10000000}),
//         "cantidad":faker.number.int({min:100, max:10000000}),
//         "iva":faker.number.int({min:100, max:10000000}),
//         "subtotal":faker.number.int({min:100, max:10000000})
//     }
// ])}
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
        
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int({ min: 1000, max: 9000 }),
//         "id_venta":faker.number.int({ min: 100, max: 900}) ,
//         "id_producto":faker.number.int({ min: 10000, max: 90000}),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     },
//     {
//         "id_detalle_venta":faker.number.int(),
//         "id_venta":faker.number.int() ,
//         "id_producto":faker.number.int(),
//         "cantidad":faker.number.int(),
//         "iva":faker.number.int(),
//         "subtotal":faker.number.int()
//     }
// ])
// }
