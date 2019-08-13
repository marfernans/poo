//_________________________________________________
// Cliente Ytterp
// const clienteYtterp ={
//     nombre : 'Mario',
//     apellido: 'Fernandez',
//     email: 'me.fernandezserrano@gmail.com',
//     pass : 'bfuein3in2ojai'
// }

// // sintaxis punto
// console.log(clienteYtterp.nombre)

// // sintaxis corchete
// clienteYtterp['nombre'] = 'Ronald'

//__________________________________________________
//DECLARACIÓN DE OBJETO #1

// let na = 'nom'
// let me = 'bre'

// const tabla = {
//     [`${na}${me}`] : 'Mario',

// }
// console.log(tabla)

//____________________________________________
//DECLARACIÓN DE OBJETO #2

// const clienteYtterp = {
//     nombre : 'Mario',
//     edad : 37,
//     peso : 89,
//     altura : 1.86,
//     fechaRegistro : '20/20/2020'
// }
// const clienteYtterp1 = {
//     nombre : 'Mario',
//     edad : 37,
//     peso : 89,
//     altura : 1.86,
//     fechaRegistro : '20/20/2020'
// }
// const clienteYtterp2 = {
//     nombre : 'Mario',
//     edad : 37,
//     peso : 89,
//     altura : 1.86,
//     fechaRegistro : '20/20/2020'
// }

// console.log(clienteYtterp2)
// console.log([clienteYtterp],[clienteYtterp1])

//__________________________________________________
// CREACIÓN DE OBJETOS LITERALES
// let usuario1 = {
//     nombre:'Mario Fernandez',
//     email : 'me.fernandezserrano@gmail.com',
//     edad : 37
// }

// let usuario2 = {
//     nombre:'Ronald',
//     apellido: 'Fernandez',
//     correo : 'ronald@gmail.com',
//     edad : 28,
// }
// let nombreUsuario1 = usuario1.nombre;

//__________________________________________
//CREACIÓN DE CLASES

class Usuario {
  constructor(nombre, apellido, correo, edad) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.correo = correo),
      (this.edad = edad);
  }

  saludar() {
    return document.write(`

            <div>
             <h1>
                Hola mi nombre es ${this.nombre} :)
             </h1>
            </div>
        
        `);
  }
}

class Profesor extends Usuario {
  constructor(nombre, apellido, correo, edad, experiencia, lenguaje) {
    super(nombre, apellido, correo, edad);
    (this.experiencia = experiencia), (this.lengle = lenguaje);
  }
}
class Estudiante extends Usuario {
  constructor(nombre, apellido, correo, edad, activado) {
    super(nombre, apellido, correo, edad);
    this.activado = activado;
  }
}

class Forma {
  constructor(ancho, alto, color) {
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
  }

  dibujar() {
    return (document.body.innerHTML = `
            <div
                style="
                width: ${this.ancho}px;
                height: ${this.alto}px;
                background: ${this.color}" >
            </div>
        `);
  }
}

let forma1 = new Forma(220, 400, "red");

let pechi = new Profesor(
  "Pechi",
  "elpropio",
  "pechi@gmail.com",
  1.6,
  7.6,
  "JavaScript"
);

let pachamama = new Estudiante(
  "Pacghamama",
  "Madre tierra",
  "pcha@gmail.com",
  3.14,
  true
);

console.log(pechi);
console.log(pachamama);
