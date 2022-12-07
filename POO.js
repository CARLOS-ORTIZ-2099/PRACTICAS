// acceder a un objeto dentro de otro objeto

const objetos={
    mesa:"marron",
    carro:"azul",
    computadora:"grande",
    casa: {
        dormitorio:"grande",
        baño:"pequeño", 
        garaje:"mediano",
        patio:"grande"
    },
    tv:"49'"
}



console.log(objetos.carro)



// ASIGNACION DE ATRIBUTOS

const objetos2={
    mesa:"marron",
    carro:"azul",
    computadora:"grande",
    casa: {
        dormitorio:"grande",
        baño:"pequeño", 
        garaje:"mediano",
        patio:"grande"
    },
    tv:"49'"
}

console.log(objetos2)
// cuando creamos un atributo nuevo para el objeto, este aparecera  en el 
// objeto independientemente de si lo ejecutamos antes o despues  de haberlo creado
objetos2.equipo_sonido="grande"


objetos2.computadora="pequeña"

console.log(objetos2)
// ahora cuando modificamos un elemento que ya esta predefinido o asignado en el objeto este aparecera
// solo despues de haberlo modificado, no antes


// ATRIBUTOS Y METODOS

const alumno1 ={
    nombres:"beto",
    apellidos:"quiroga M.",
    edad:29,
    padre:{
        nombre:"hector L quiroga",
        edad:62    
    },

    //RECALCAR QUE LAS FUNCIONES QUE VALLAN ANIDADAS DENTRO DE UN OBJETO SE LES CONOCE COMO METODOS
    //Y PARA ACCEDER A LOS ATRIBUTOS DE DICHO OBJETO USAMOS LA PALABRA THIS.ATRIBUTO, DONDE ESTA TENDRA UN SCOOP
    //LOCAL Y BUSCARA A LOS ATRIBUTOS CREADOS EN EL OBJETO
    PRESENTARSE(){
        console.log("hola mi nombre es "+ this.nombres +" "+ this.apellidos +" y tengo" + this.edad + "años")
    },
    QUIENESTUPADRE(){
        console.log("mi padre es "+ this.padre.nombre)
    }
}       
    // AHORA PARA LLAMAR A LA A DICHA FUNCION ANIDADA DENTRO DEL OBJETO SE HACE DE LA MISMA MANERA QUE CON LAS FUNCIONES NORMALES
    // Y ANTECEDIDO DEL NOMBRE DEL OBJETO 
    alumno1.PRESENTARSE()
    alumno1.QUIENESTUPADRE()




    
//FUNCIONES CONSTRUCTORAS EN JAVASCRIPT
// estas basicamente se utilizan para crear "moldes" es decir para evitar redundancia de datos
// a la hora de crear objetos estos siempre tendran la misma estrucutra y no habra necedsidad 
// de escribir repetidamente

  
function usuario(nombres, apellidos, correo, activo){
//cabe recalcar que no es necesario poner el this.atributo identicos que los parametros de la funcion
//pero se recomienda que sean asi para su mayor legibilidad
    this.nombres=nombres,
    this.apellidos=apellidos,
    this.correo=correo,
    this.activo=activo
}

// posteriormente llamamos a la funcion pero precedida de la palabra reservada "new" para indicarle al programa que los valores de 
// salida se deberan procesar en dicha funcion, finalmente guardamos esos cambios en una variable para imprimirlas en consola
const carlos=new usuario("carlos", "quiroga", "carlos@gmail", true)
console.log(carlos)




// CLASES 
// las clases no son mas que una variacion o forma alterna de usar las funciones constructoras en javascript

class usuario2 {
    //se asigna la funcion constructos para indicarle que se crearan modelos
    constructor(nombres, apellidos, correo, activo){
        this.nombres=nombres,
        this.apellidos=apellidos,
        this.correo=correo,
        this.activo=activo
    }
}

const beto =new usuario2("beto", "quiroga", "beto@gmail", true)
console.log(beto)

