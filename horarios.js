const dia = document.querySelector ("#dia")
const horario = document.querySelector ("#horario")
const disponibilidad = document.querySelector ("#disponibilidad")
const botonAgregar = document.querySelector ("#botonAgregar")


class Horario {
    constructor (dia,horario,disponibilidad) {
        this.dia = dia
        this.horario = horario
        this.disponibilidad = disponibilidad
    }
}



let horarios = []


if (localStorage.getItem('horarios')) {
    horarios = JSON.parse(localStorage.getItem('horarios'))
}

botonAgregar.onclick = () => {
    const horarioNew = new Horario (dia.value, horario.value, disponibilidad.value) 
    horarios.push(horarioNew)
    localStorage.setItem ('horarios', JSON.stringify(horarios))
    console.log (horarios)
}
