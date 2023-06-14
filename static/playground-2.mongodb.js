
// use('publigrafit');


// db.createCollection("detalle_venta",  {
//    validator: {
//       $jsonSchema: {
//         required: ["id_detalle_venta", "id_venta","id_producto","cantidad","iva","subtotal" ],
//        properties: {
//          id_detalle_venta: {
//              bsonType: "int",
//             description: "'id_detalle_venta' es un campo requerido"
//        },
//        id_venta: {
//                bsonType: "int",
//             description: "'id_venta' es un campo requerido"
//              },
//              id_producto: {
//                 bsonType: "int",
//                 description: "'id_producto' must be a double if the field exists"
//              },
//              cantidad: {
//                  bsonType: "int",
//                  description: "'cantidad' must be a string and is required"
//               },
//               iva:{
//                 bsonType: "int",
//                  description: "'iva' must be a string and is required"
//               },
//               subtotal:{
//                  bsonType: "int",
//                  description: "'subtotal' must be a string and is required"
//          }
//         }
//        }
//    }} )