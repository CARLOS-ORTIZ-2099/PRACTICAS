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



// asignacion de atributos

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





