use('publigrafit');


// // db.createCollection("productos",  {
// //    validator: {
// //       $jsonSchema: {
// //          required: ["nombre_producto", "precio","detalle","imagen","cantidad_producto","stock","estado" ],
// //          properties: {
// //             nombre_producto: {
// //                bsonType: "string",
// //                description: "'nombre_producto' es un campo requerido"
// //             },
// //             precio: {
// //                bsonType: "int",
// //                description: "'precio' es un campo requerido"
// //             },
// //             detalle: {
// //                bsonType: "string",
// //                description: "'detalle' must be a double if the field exists"
// //             },
// //             imagen: {
// //                 bsonType: "string",
// //                 description: "'imagen' must be a string and is required"
// //              },
// //               cantidad_producto:{
// //                 bsonType: "int",
// //                 description: "'cantidad_producto' must be a string and is required"
// //              },
// //              stock:{
// //                 bsonType: "int",
// //                 description: "'stock' must be a string and is required"
// //              },
// //              estado:{
// //                 bsonType: "string",
// //                 description: "'estado' must be a string and is required"
// //              },
// //          }
// //       }
// //    }
// // } )
// db.produc.aggregate([
//    {
//       $lookup: {
//         from:"detalle_venta",
//         localField: "'_id'",
//         foreignField:"'id_detalle_venta'",
//         as: "Documentos"
//       }
//    },{
//       $project: {
//          "_id":false,
//          "nombre_producto":true,
//          "precio":true,
//          "detalle":true,
//          "imagen":true,
//          "cantidad_producto":true,
//          "stock":true,
//          "estado":true,
//          Documentos: true
//    }
// }
// ])
// db.produc.aggregate([
//     {$unwind:"$size"}
// ])

// use('publigrafit');


// db.createCollection("produc",  {
//    validator: {
//       $jsonSchema: {
//         required: ["nombre_producto", "precio","detalle","imagen","cantidad_producto","stock","estado" ],
//        properties: {
//          nombre_producto: {
//              bsonType: "string",
//             description: "'nombre_producto' es un campo requerido"
//        },
//          precio: {
//                bsonType: "int",
//             description: "'precio' es un campo requerido"
//              },
//              detalle: {
//                 bsonType: "string",
//                 description: "'detalle' must be a double if the field exists"
//              },
//              imagen: {
//                  bsonType: "string",
//                  description: "'imagen' must be a string and is required"
//               },
//                cantidad_producto:{
//                 bsonType: "int",
//                  description: "'cantidad_producto' must be a string and is required"
//               },
//               stock:{
//                  bsonType: "int",
//                  description: "'stock' must be a string and is required"
//          },
//            estado:{
//                bsonType: "string",
//                description: "'estado' must be a string and is required"
//              },
//         }
//        }
//    }} )
// db.produc.aggregate([
//    {
//       $lookup: {
//         from:"detalle_venta",
//         localField: "'_id'",
//         foreignField:"'id_detalle_venta'",
//         as: "Documentos"
//       }
//    },{
//       $project: {
//          "_id":false,
//          "nombre_producto":true,
//          "precio":true,
//          "detalle":true,
//          "imagen":true,
//          "cantidad_producto":true,
//          "stock":true,
//          "estado":true,
//          Documentos: true
//    }
// }
// ])
// db.produc.aggregate([
//     {$unwind:"$size"}
// ])

// db.createCollection("detalle_venta",  {
//    validator: {
//       $jsonSchema: {
//         required: ["id_detalle_venta", "id_venta","id_producto","cantidad","iva","subtotal" ],
//        properties: {
//          id_detalle_venta: {
//              bsonType: "int",
//             description: "'nombre_producto' es un campo requerido"
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
//                  bsonType: "float",
//                  description: "'subtotal' must be a string and is required"
//          }
//         }
//        }
//    }} )





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

// db.productos1.aggregate([
//    {$match:{
//       nombre_producto:{$eq:"Computer"}

//    }
// },
// {
//    $project:{
//       "cantidad_producto":true,
//       "nombre_producto":true
//    }
// },
// {
//    $limit:7
// }])