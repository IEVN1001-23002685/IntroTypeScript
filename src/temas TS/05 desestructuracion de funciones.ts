export interface Prodructo {
    desc:string
    precio:number
}

const telefono:Prodructo = {
    desc:"Nokia A1",
    precio:1500
}

const tablet:Prodructo = {
    desc:"iPad air",
    precio:3500
}

function calcularISV(prodructos:Prodructo[]):number {
    let total = 0;
    for (const producto of prodructos){
        total += producto.precio;    
    }
    
    return total * 0.15
}

export function calcularISV2(prodructos:Prodructo[]):[number,number] {
    let total = 0;
    for (const producto of prodructos){
        total += producto.precio;    
    }
    
    return [total,total * 0.15];
}


const articulos = [telefono,tablet];
const isv = calcularISV(articulos);

const [total,isv2] = calcularISV2(articulos);

console.log('Total', total)

console.log('ISV ', isv)
console.log('ISV ', isv2)
