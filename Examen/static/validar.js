db.createCollection("Productos", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Validacion de propiedades de Productos",
          required: [ "id_producto", "id_categoria", "nombre", "precio","detalle","imagem","cantidad","stock","estado" ],
          properties: {
             id_poducto: {
                bsonType: "int",
                description: "'name' must be a string and is required"
             },
             id_categoria: {
                bsonType: "int",
                minimum: 2017,
                maximum: 3017,
                description: "'year' must be an integer in [ 2017, 3017 ] and is required"
             },
             nombre: {
                bsonType: [ "string" ],
                description: "'gpa' must be a double if the field exists"

            },
            precio: {
             bsonType: [ "int" ],
             description: "'gpa' must be a double if the field exists"
             

            }
            ,
             detalle: {
                bsonType: [ "string" ],
                description: "'gpa' must be a double if the field exists"
                

          },
          imagen: {
             bsonType: [ "string" ],
             description: "'gpa' must be a double if the field exists"
             

       },
       cantidad: {
          bsonType: [ "string" ],
          description: "'gpa' must be a double if the field exists"
          

    },
    stock: {
       bsonType: [ "string" ],
       description: "'gpa' must be a double if the field exists"
       

    }
 ,
        Estado: {
        bsonType: [ "bolean" ],
        description: "'gpa' must be a double if the field exists"
                

          }

       }
       }}
 } )