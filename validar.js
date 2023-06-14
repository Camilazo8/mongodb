use('Publigrafit');


db.createCollection("productos",  {
   validator: {
      $jsonSchema: {
         required: [ "id_producto", "id_categoria", "nombre_producto", "precio","detalle","imagen","cantidad_producto","stock","estado" ],
         properties: {
            nombre_producto: {
               bsonType: "string",
               description: "'nombre_producto' es un campo requerido"
            },
            precio: {
               bsonType: "int",
               description: "'precio' es un campo requerido"
            },
            detalle: {
               bsonType: "string",
               description: "'detalle' must be a double if the field exists"
            },
            imagen: {
                bsonType: "string",
                description: "'imagen' must be a string and is required"
             },
              cantidad_producto:{
                bsonType: "int",
                description: "'cantidad_producto' must be a string and is required"
             },
             stock:{
                bsonType: "int",
                description: "'stock' must be a string and is required"
             },
             estado:{
                bsonType: "string",
                description: "'estado' must be a string and is required"
             },
         }
      }
   }
} )