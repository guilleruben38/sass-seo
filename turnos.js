
// const dias = prompt(`Ingrese el numero correspondiente a la opcion del día que quiere reservar un turno.
// 1. Lunes
// 2. Martes
// 3. Miércoles
// 4. Jueves
// 5. Viernes
// 6. Sábado
// 7. Domingo
// 8. No quiero sacar un turno!
// `);

// let OpcionA = "2pm a 3pm";
// let OpcionB = "3pm a 4pm";
// let OpcionC = "6pm a 7pm";
// let OpcionD = "9pm a 10pm";
// let OpcionE = "2pm a 3pm";
// let OpcionF = "4pm a 5pm";
// let OpcionG = "6pm a 7pm";
// let OpcionH = "11pm a 12pm";
// let OpcionI = "2pm a 3pm";
// let OpcionJ = "3pm a 4pm";
// let OpcionK = "4pm a 5pm";
// let OpcionL = "5pm a 6pm";
// let OpcionM = "8pm a 9pm";
// let OpcionN = "9pm a 10pm";
// let OpcionO = "4pm a 5pm";
// let OpcionP = "5pm a 6pm";
// let OpcionQ = "6pm a 7pmm";
// let OpcionR = "9pm a 10pm";
// let OpcionS = "10pm a 11pm";
// let OpcionT = "1pm a 2pm";
// let OpcionU = "3pm a 4pm";
// let OpcionV = "4pm a 5pm";
// let OpcionW = "9pm a 10pm";
// let OpcionX = "7pm a 8pm";
// let OpcionY = "8pm a 9pm";
// let OpcionZ = "11pm a 12pm";


// let opcion = "";
// let flag;
// let errorHorario = false;

// const turnosSemanales = []
// class Turnos {
//     constructor (Id, Dia, Horario, Disponibilidad,) {
//         this.Id = Id
//         this.Dia = Dia
//         this.Horario = Horario
//         this.Disponibilidad = Disponibilidad  
//     }
// }
// const pedidoTurno = "Para elegir el turno solo escriba en mayuscula la letra de la opcion del dia correspondiente."
// const pedidoOtroTurno = "Ya a seleccionado un turno!! En el caso que quiera pedir otro, escriba  EN MAYUSCULA (SI), en el caso de que no quiera otro turno escriba (NO)"
// const horarios = parseInt(dias);
// console.log("El dia que eligio el usuario es...", dias);

// if (horarios == 1) {
//     alert("Horarios libres dia Lunes:\n Opcion A: (2pm a 3pm)\n Opcion B: (3pm a 4pm)\n Opcion C: (6pm a 7pm)\n Opcion D: (9pm a 10pm)")  
//     const turnos1 = new Turnos (1,"Lunes","(Opcion A: 2pm/3pm), (Opcion B: 3pm/4pm), (Opcion C: 6pm/7pm), (Opcion D:9pm/10pm)", "Libre")
//     turnosSemanales.push(turnos1)
// } else if (horarios == 2) {
//     alert("Horarios libres dia Martes:\n Opcion E: (2pm a 3pm)\n Opcion F: (4pm a 5pm)\n Opcion G: (6pm a 7pm)\n Opcion H: (11pm a 12pm)")
//     const turnos2 = new Turnos (2,"Martes","(Opcion E: 2pm/3pm), (Opcion F: 4pm/5pm), (Opcion G: 6pm/7pm), (Opcion H: 11pm/12pm)", "Libre")
//     turnosSemanales.push(turnos2)
// } else if (horarios == 3) {
//     alert("Horarios libres dia Miercoles:\n Opcion I: (2pm a 3pm)\n Opcion J: (3pm a 4pm)\n Opcion K: (4pm a 5pm)\n Opcion L: (5pm a 6pm)\n Opcion M: (8pm a 9pm)")
//     const turnos3 = new Turnos (3,"Miercoles","(Opcion I: 2pm/3pm), (Opcion J: 3pm/4pm), (Opcion K: 4pm/5pm), (Opcion L: 5pm/6pm), (Opcion M: 8pm a 9pm)", "Libre")
//     turnosSemanales.push(turnos3)
// } else if (horarios == 4) {
//     alert("Horarios libres dia Jueves:\n Opcion O: (4pm a 5pm)\n Opcion P: (5pm a 6pm)\n Opcion Q: (6pm a 7pm)\n Opcion R: (9pm a 10pm)\n Opcion S: (10pm a 11pm)")
//     const turnos4 = new Turnos (4,"Jueves","(Opcion O: 4pm/5pm), (Opcion P: 5pm/6pm), (Opcion Q: 6pm/7pm), (Opcion R: 9pm/10pm), (Opcion S: 10pm/11pm)", "Libre")
//     turnosSemanales.push(turnos4)
// } else if (horarios == 5) {
//     alert("Horario OCUPADO dia Viernes: Cumpleaños");
//     const turnos5 = new Turnos (5,"Viernes", "CUMPLEAÑOS", "Ocupado")
//     turnosSemanales.push(turnos5)
// } else if (horarios == 6) {
//     alert("Horarios libres dia Sabado:\n Opcion T: (1pm a 2pm)\n Opcion U: (3pm a 4pm)\n Opcion V: (4pm a 5pm)\n Opcion W: (9pm a 10pm)")
//     const turnos6 = new Turnos (6,"Sabado","(Opcion T: 1pm/2pm), (Opcion U: 3pm/4pm), (Opcion V: 4pm/5pm), (Opcion W: 9pm/10pm),", "Libre")
//     turnosSemanales.push(turnos6)
// } else if (horarios == 7) {
//     alert("Horarios libres dia Domingo:\n Opcion X: (7pm a 8pm)\n Opcion Y: (8pm a 9pm)\n Opcion Z: (11pm a 12pm)")
//     const turnos7 = new Turnos (7,"Domingo","(Opcion X: 7pm/8pm), (Opcion Y: 8pm/9pm), (Opcion Z: 11pm/12pm)", "Libre")
//     turnosSemanales.push(turnos7)
// } else if (horarios == 8) {
//     ""
// } else {
//     alert("No has ingresado un numero valido.");
// }
// console.log (turnosSemanales)
// do {
//     let turno = prompt(pedidoTurno)
//     switch (turno) {
//         case "A":
//             if (opcion +=  OpcionA) 
//             console.log ("El usuario eligio la opcion (A)")

//             break;
//         case "B":
//             if (opcion +=  OpcionB) 
//             console.log ("El usuario eligio la opcion (B)")
            
//             break;
//         case "C":
//             if (opcion +=  OpcionC) 
//             console.log ("El usuario eligio la opcion (C)")
            
//             break;
//         case "D":
//             if (opcion +=  OpcionD) 
//             console.log ("El usuario eligio la opcion (D)")
            
//             break;
//         case "E":
//             if (opcion +=  OpcionE) 
//             console.log ("El usuario eligio la opcion (E)")
//             break;
//         case "F":
//             if (opcion +=  OpcionF) 
//             console.log ("El usuario eligio la opcion (F)")
//             break;
//         case "G":
//             if (opcion +=  OpcionG) 
//             console.log ("El usuario eligio la opcion (G)")
//             break;
//         case "H":
//             if (opcion +=  OpcionH) 
//             console.log ("El usuario eligio la opcion (H)")
//             break;
//         case "I":
//             if (opcion +=  OpcionI) 
//             console.log ("El usuario eligio la opcion (I)")
//             break;
//         case "J":
//             if (opcion +=  OpcionJ) 
//             console.log ("El usuario eligio la opcion (J)")
//             break;
//         case "K":
//             if (opcion +=  OpcionK) 
//             console.log ("El usuario eligio la opcion (K)")
//             break;
//         case "L":
//             if (opcion +=  OpcionL) 
//             console.log ("El usuario eligio la opcion (L)")
//             break;
//         case "M":
//             if (opcion +=  OpcionD) 
//             console.log ("El usuario eligio la opcion (D)")
//             break;
//         case "N":
//             if (opcion +=  OpcionN) 
//             console.log ("El usuario eligio la opcion (N)")
//             break;
//         case "O":
//             if (opcion +=  OpcionO) 
//             console.log ("El usuario eligio la opcion (O)")
//             break;
//         case "P":
//             if (opcion +=  OpcionP) 
//             console.log ("El usuario eligio la opcion (P)")
//             break;
//         case "Q":
//             if (opcion +=  OpcionQ) 
//             console.log ("El usuario eligio la opcion (Q)")
//             break;
//         case "R":
//             if (opcion +=  OpcionR) 
//             console.log ("El usuario eligio la opcion (R)")
//             break;
//         case "S":
//             if (opcion +=  OpcionS) 
//             console.log ("El usuario eligio la opcion (S)")
//             break;
//         case "T":
//             if (opcion +=  OpcionT) 
//             console.log ("El usuario eligio la opcion (T)")
//             break;
//         case "U":
//             if (opcion +=  OpcionU) 
//             console.log ("El usuario eligio la opcion (U)")
//             break;
//         case "V":
//             if (opcion +=  OpcionV) 
//             console.log ("El usuario eligio la opcion (V)")
//              break;
//         case "W":
//             if (opcion +=  OpcionW) 
//             console.log ("El usuario eligio la opcion (W)")
//              break;
//         case "X":
//             if (opcion +=  OpcionX) 
//             console.log ("El usuario eligio la opcion (X)")
//              break;
//         case "Y":
//             if (opcion +=  OpcionY) 
//             console.log ("El usuario eligio la opcion (Y)")
//              break;
//         case "Z":
//             if (opcion +=  OpcionZ) 
//             console.log ("El usuario eligio la opcion (Z)")
//              break;
//         default:
//             errorHorario = true;
//             break;
//     }
//     if (errorHorario) {
//         alert("Caracter ingresado no valido.");
//         errorHorario = false;
//         flag = "SI";
//         continue;
//     }
    
//     flag = prompt (pedidoOtroTurno);
//     console.log("flag", flag);
// } while (flag === "SI");


// alert("Escogiste la opcion:  ("+ opcion + ")    ¡Muchas gracias!. ");

const selectElement = document.querySelector ("#lista")
const botonAgregar = document.querySelector ("#agregar")
const botonFinalizar = document.querySelector ("#finalizar")

const horariosArray = JSON.parse(localStorage.getItem('horarios'))
console.log (horariosArray)

horariosArray.forEach (prod=> {
 const optionProd = document.createElement ('option')
 optionProd.innerText = `${prod.dia}: ${prod.disponibilidad} ${prod.horario}`
 selectElement.append(optionProd)
})


const carrito = []

botonAgregar.onclick = () => {
    const indexProd = selectElement.selectedIndex
    const prodSelect = horariosArray [indexProd]
    console.log (prodSelect)
}

botonFinalizar.onclick = () => {
   
    alert ("Horarios confirmados! Muchas gracias... Los esperamos!")
}

