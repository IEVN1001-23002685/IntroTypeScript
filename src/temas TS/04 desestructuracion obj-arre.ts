interface Reproductor {
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles {
    autor:string,
    anio:number
}

const reproductor:Reproductor = {
    volumen:90,
    segundo:30,
    cancion:'Mesa',
    detalles:{
        autor:'Ed Sheran',
        anio:2015
    }
}

console.log("El volumnen actual es ", reproductor.volumen);
console.log("El segundo actual es ", reproductor.segundo);
console.log("La cancion actual es ", reproductor.cancion);
console.log("El autor es ", reproductor.detalles.autor);
console.log("El año es ", reproductor.detalles.anio);

const {volumen,segundo,cancion,detalles} = reproductor
const {autor,anio} = detalles

console.log("El volumnen actual es ", volumen);
console.log("El segundo actual es ", segundo);
console.log("La cancion actual es ", cancion);
console.log("El autor es ", autor);
console.log("El año es ", anio);

const dbz:string[] = ['Goku', 'Vegeta', 'Truncks', 'Picolo'] 

console.log(dbz[1])

const [d1,d2] = dbz
const [p1,,,p2] = dbz

console.log(d2)
console.log(p1)

