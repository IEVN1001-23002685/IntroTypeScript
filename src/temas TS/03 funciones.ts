function sumar(x:number,y:number,z:number=6): number {
    let a = 5
    let b = 5
    let rsultado = y + x

    console.log("la suma es " + rsultado)

    rsultado
    return rsultado
}

let res = sumar(5,8)
console.log(res)

interface Mascotas {
    nombre:string
    edad:number
    raza:string
    sexo?:string
    vacunado:boolean

    mostrar:() => void
}

const NuevaMacota:Mascotas = {
    nombre:'firulais',
    edad:2,
    raza:'pator Aleman',
    vacunado:true,
    
    mostrar() {
        console.log(`${this.nombre}`)
    },
}

function mostrarMscota(mascotas:Mascotas,x:number):void {
    mascotas.edad+=x    
    console.log(mascotas)
}

mostrarMscota(NuevaMacota,5)