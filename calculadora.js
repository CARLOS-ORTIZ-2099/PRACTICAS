let opc= prompt("dime que quieres hacer")

while(!opc,opc!=="sumar" && opc!=="restar" && opc!== "multiplicar"){
       opc=prompt(`${opc} no es admisible dime una operacion valida`)
 }
    alert(`perfecto vamos a ${opc}`)



   let operacion1
   let operacion2

if(opc==="sumar"){
   operacion1= prompt(`inserta un numero para ${opc} `)
   operacion2=prompt(`inserta el otro numero para ${opc}`)

  
   let suma=(operacion1,operacion2)=>{
   console.log(`el resultado es ${Number(operacion1) + Number(operacion2)}`)
   }
      suma( Number(operacion1),Number(operacion2))
   }



if(opc==="restar"){
   operacion1=prompt(`inserta un numero para ${opc} `)
   operacion2=prompt(`inserta el otro numero para ${opc}`)

  
   let resta=(operacion1,operacion2)=>{
   console.log(`el resultado es ${Number(operacion1) - Number(operacion2)}`)
   }
      resta( Number(operacion1),Number(operacion2))
   }


if(opc==="multiplicar"){
      operacion1=prompt(`inserta un numero para ${opc} `)
      operacion2=prompt(`inserta el otro numero para ${opc}`)
   
     
      let multiplicacion=(operacion1,operacion2)=>{
      console.log(`el resultado es ${Number(operacion1) * Number(operacion2)}`)
      }
         multiplicacion( Number(operacion1),Number(operacion2))
      }
      
   
function rpt(){
let pre=prompt(`quieres ${opc} otra vez?`)
while(!pre,pre!=="si" && pre!=="no"){
           pre= prompt("confirmar de nuevo")
   }
    return pre
   }   
   let dato=rpt()

// dato es la variable que contiene la respuesta que el usuario me acaba de retornar proveniente de la funcion 


if(opc==="sumar"){
while(dato==="si"){
     operacion1= prompt(`inserta un numero para ${opc} `)
     operacion2=prompt(`inserta el otro numero para ${opc}`)
     console.log(`el resultado es ${Number(operacion1) + Number(operacion2)}`)
     dato=rpt()
   }
   }



if(opc==="restar"){
   while(dato==="si"){
      operacion1= prompt(`inserta un numero para ${opc} `)
      operacion2=prompt(`inserta el otro numero para ${opc}`)
      console.log(`el resultado es ${Number(operacion1) - Number(operacion2)}`)
      dato=rpt()
   }
   }

if(opc==="multiplicar"){
   while(dato==="si"){
      operacion1= prompt(`inserta un numero para ${opc} `)
      operacion2=prompt(`inserta el otro numero para ${opc}`)
      console.log(`el resultado es ${Number(operacion1) * Number(operacion2)}`)
      dato=rpt()
   }
   }







