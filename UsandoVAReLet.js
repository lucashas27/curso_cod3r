var numero = 1
{
    var numero = 2
    console.log('Dentro', numero)
}
console.log ('Fora', numero)

// com var fica igual 



// com let nao fica

let numero1 = 2
{
    let numero1 = 3
    console.log('Dentro', numero1)
}
    console.log('Fora',numero)