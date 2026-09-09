import { type Prodructo,calcularISV2 } from './05 desestructuracion de funciones'

const carrito:Prodructo[] = [
    {
        desc:'Telefono 1',
        precio:2000,
    },
    {
        desc:'Telefono 2',
        precio:3400,
    },
    {
        desc:'Telefono 3',
        precio:1000,
    }
]

const [total,isv] = calcularISV2(carrito)

console.log(total)
console.log(isv)
