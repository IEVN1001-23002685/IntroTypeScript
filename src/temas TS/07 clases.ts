class Persona {
    nombre:string;
    edad:number;

    constructor (nombre:string, edad:number) {
        this.nombre = nombre
        this.edad = edad
    }

    imprimir () {
        console.log(`Hola me llamo ${this.nombre} tengo estos anos ${this.edad}`)
    }
}

let persona:Persona

persona = new Persona ('Juan', 23)
persona.imprimir()