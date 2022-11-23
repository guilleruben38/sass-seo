const inputNombre= document.querySelector ("#nombre")
const inputApellido= document.querySelector ("#apellido")
const inputPassword= document.querySelector ("#password")
const inputGmail= document.querySelector ("#gmail")
const botonDatos= document.querySelector ("#botonDatos")

botonDatos.onclick = () => {
    const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        contraseña: inputPassword.value,
        gmail: inputGmail.value,
    }

    inputNombre.value = ''
    inputApellido.value = ''
    inputPassword.value = ''
    inputGmail.value = ''
    console.log (usuario)
 
    if (inputNombre == inputNombre && inputApellido == inputApellido && inputPassword == inputPassword && inputGmail == inputGmail) {
        window.location= "principal.html"
    }
  else {
    alert ("No has ingresado un dato valido")
  }


       //guardar en el storage
       localStorage.setItem('infoUsuario', JSON.stringify(usuario))

}

    
  

    