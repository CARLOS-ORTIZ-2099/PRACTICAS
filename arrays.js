let equipos=[
    {id:"e100",nombre:"real madrid",costo:1550,stock:10},
    {id:"e200",nombre:"chelsea",costo:1500,stock:15},
    {id:"e300",nombre:"manchester city",costo:1600,stock:20},
    {id:"e400",nombre:"juventus",costo:1450,stock:25}

]




equipos.forEach((equipo)=>{
  console.log(`el jersey es de ${equipo.nombre} el id es: ${equipo.id}`)
  console.log(`el stock actual: ${equipo.stock}`)
}
)


// stock disponible en tienda
let stocks=[10,15,20,25]


// esta funcion contiene un bucle que me asegura que el usuario me devuelva una respuesta valida si o no
let res

function respuesta(){
  res=prompt(`quieres seguir comprando?`)
  while(res!=="si" && res!== "no"){
    res=prompt(`${res} no es un un dato valido escribe si o no`)
  }
  return res
}


// llamo a la funcion "respuesta" donde esta retornara la respuesta del usuario, que asu ves esta 
// esta respuesta estara almacenada en una variable, que será utilizada posteriormente     
// con=respuesta()


let productos=["e100","e200","e300","e400"]


// a continuacion creo otra funcion llamada "bucle" que contendra un bucle for, que lo que hara sera 
// mostrarme el stock actual del elemento de la posicion 0 del array "stocks" disminuido en i
// es decir por cada iteracion se mostrara el valor de 10 menos el valor que tome i en cada iteracion 

// seguidamente de la impresion en consola hago el llamado de la funcion "respuesta", es decir me devolvera 
// la respuesta del usuario y esa respuesta sera almacenada en una variable llamada "con" que sera evaluada 
// en unas condicionales

// ahora si la respuesta del usuario es "no" se ejecutara la sentencia que este anidada en esta primera 
// condicion e inmediatamente con la sentencia break terminara el bucle
// por otra parte si la respuesta del usuario es "si" se ejecutara esta otra linea de código

// y evaluara esta otra condicion que se ejecutara cuando i llegue a su tope máximo en este 
// caso es 10, por cada iteracion i aumentara y esta condicion no se ejecutara si no hasta 
// que i llegue a 10 es decir hasta que la tienda se quede sin stock
let producto

// funcion que me permite evaluar la coincidencia del producto seleccionado por el cliente 
// y el producto almacenado en el array de "productos"

// aqui ocurre un problema y es que en la limea 75 se esta ejecutando la funcion eleccion
// pero eleccion tiene dentro de si a la variable producto que se esta signando un valor pero no 
// se le esta declarando en la funcion  si no fuera de ella
// let producto

function eleccion(){
  producto= prompt(`elige el id del producto deseado`)
     while(!producto,producto!==productos[0] && producto!==productos[1] &&
       producto!==productos[2] && producto!==productos[3]){
       producto= prompt(`${producto} no es valido,inserta nuevamente`)
    }
    return `el pedido seleccionado es el: ${producto}`
}

eleccion()




function bucle(){
  for(i=1;i<=stocks[0];i++){
      console.log(`el stock es ${stocks[0] - [i]}`)
      con=respuesta()
 
    if(con==="no"){
      alert(`ok hasta pronto`)
      break; 
    }
        
    if(con==="si"){ 
      alert(`bien adelante`)
      console.log(eleccion())
      if(i==10){
      alert(`lo siento ya no hay stock`)    
      }
    }      
  }
}   
bucle()






  
