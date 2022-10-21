
const dias = prompt(`Ingrese el numero correspondiente a la opcion del día que quiere reservar un turno.
1. Lunes
2. Martes
3. Miércoles
4. Jueves
5. Viernes
6. Sábado
7. Domingo
8. No quiero sacar un turno!
`);

let OpcionA = "2pm a 3pm";
let OpcionB = "3pm a 4pm";
let OpcionC = "6pm a 7pm";
let OpcionD = "9pm a 10pm";
let OpcionE = "2pm a 3pm";
let OpcionF = "4pm a 5pm";
let OpcionG = "6pm a 7pm";
let OpcionH = "11pm a 12pm";
let OpcionI = "2pm a 3pm";
let OpcionJ = "3pm a 4pm";
let OpcionK = "4pm a 5pm";
let OpcionL = "5pm a 6pm";
let OpcionM = "8pm a 9pm";
let OpcionN = "9pm a 10pm";
let OpcionO = "4pm a 5pm";
let OpcionP = "5pm a 6pm";
let OpcionQ = "6pm a 7pmm";
let OpcionR = "9pm a 10pm";
let OpcionS = "10pm a 11pm";
let OpcionT = "1pm a 2pm";
let OpcionU = "3pm a 4pm";
let OpcionV = "4pm a 5pm";
let OpcionW = "9pm a 10pm";
let OpcionX = "pm a 8pm";
let OpcionY = "8pm a 9pm";
let OpcionZ = "11pm a 12pm";


let opcion = "";
let flag;
let errorHorario = false;

const horarios = parseInt(dias);
console.log("tu horario es ...", dias);

if (horarios == 1) {
    alert("Horarios libres dia Lunes:\n Opcion A: (2pm a 3pm)\n Opcion B: (3pm a 4pm)\n Opcion C: (6pm a 7pm)\n Opcion D: (9pm a 10pm)")
} else if (horarios == 2) {
    alert("Horarios libres dia Martes:\n Opcion E: (2pm a 3pm)\n Opcion F: (4pm a 5pm)\n Opcion G: (6pm a 7pm)\n Opcion H: (11pm a 12pm)")
} else if (horarios == 3) {
    alert("Horarios libres dia Miercoles:\n Opcion I: (2pm a 3pm)\n Opcion J: (3pm a 4pm)\n Opcion K: (4pm a 5pm)\n Opcion L: (5pm a 6pm)\n Opcion M: (8pm a 9pm)")
} else if (horarios == 4) {
    alert("Horarios libres dia Jueves:\n Opcion O: (4pm a 5pm)\n Opcion P: (5pm a 6pm)\n Opcion Q: (6pm a 7pm)\n Opcion R: (9pm a 10pm)\n Opcion S: (10pm a 11pm)")
} else if (horarios == 5) {
    alert("Horario OCUPADO dia Viernes: Cumpleaños");
} else if (horarios == 6) {
    alert("Horarios libres dia Sabado:\n Opcion T: (1pm a 2pm)\n Opcion U: (3pm a 4pm)\n Opcion V: (4pm a 5pm)\n Opcion W: (9pm a 10pm)")
} else if (horarios == 7) {
    alert("Horarios libres dia Domingo:\n Opcion X: (7pm a 8pm)\n Opcion Y: (8pm a 9pm)\n Opcion Z: (11pm a 12pm)")
} else if (horarios == 8) {
    ""
} else {
    alert("No has ingresado un numero valido.");
}
do {
    let turno = prompt("Para elegir el turno solo escriba en mayuscula la letra de la opcion del dia correspondiente.")
    switch (turno) {
        case "A":
            opcion +=  OpcionA
            break;
        case "B":
            opcion +=  OpcionB
            break;
        case "C":
            opcion +=  OpcionC
            break;
        case "D":
            opcion +=  OpcionD
            break;
        case "E":
            opcion +=  OpcionE
            break;
        case "F":
            opcion +=  OpcionF
            break;
        case "G":
            opcion +=  OpcionG
            break;
        case "H":
            opcion +=  OpcionH
            break;
        case "I":
            opcion +=  OpcionI
            break;
        case "J":
            opcion +=  OpcionJ
            break;
        case "K":
            opcion +=  OpcionK
            break;
        case "L":
            opcion +=  OpcionL
            break;
        case "M":
            opcion +=  OpcionM
            break;
        case "N":
            opcion +=  OpcionN
            break;
        case "O":
            opcion +=  OpcionO
            break;
        case "P":
            opcion +=  OpcionP
            break;
        case "Q":
            opcion +=  OpcionQ
            break;
        case "R":
            opcion +=  OpcionR
            break;
        case "S":
            opcion +=  OpcionS
            break;
        case "T":
            opcion +=  OpcionT
            break;
        case "U":
            opcion +=  OpcionU
            break;
        case "V":
             opcion +=  OpcionV
             break;
        case "W":
             opcion +=  OpcionW
             break;
        case "X":
             opcion +=  OpcionX
             break;
        case "Y":
             opcion +=  OpcionY
             break;
        case "Z":
             opcion +=  OpcionZ
             break;
    


        default:
            errorHorario = true;
            break;
    }
    if (errorHorario) {
        alert("Caracter ingresado no valido.");
        errorHorario = flase;
        flag = "SI";
        continue;
    }
    flag = prompt("En el caso que quiera pedir otro turno escriba la palabra (SI) en el caso de que no quiera otro turno escriba la palabra (NO)");
    console.log("flag", flag);
} while (flag == "SI");

alert("Escogiste la opcion:  " + opcion + "   ¡Muchas gracias!. ");





