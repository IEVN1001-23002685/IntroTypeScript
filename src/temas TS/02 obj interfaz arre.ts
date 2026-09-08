interface Alumno {
    nombre:string,
    apellido:string,
    edad:number,
    email:string,
    nota?:number
}

const alumnos:Alumno = {
    nombre:'Mario',
    apellido:'Lopez',
    edad: 23,
    email:'lopezm@gmail.com',
}

console.table(alumnos)

let mascotas = [
    'perros', 'gato', 'perico'
]

console.log(mascotas)

mascotas[1] = "Nuevo Gato"
console.log(mascotas)
mascotas.push('leon')
console.log(mascotas)

let tem:(number|string)[] = []
tem.push(11)
tem.push('Once numero')

console.log(tem)
