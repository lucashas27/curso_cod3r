let valor 
console.log(valor)
// vai ficar undefined pq nao tem nada


valor = null // nao tem nenhum valor dentro dela nem endereco (ausencia de valor)
console.log(valor)


const produto  = {}
produto.preco = 3.50.toFixed(2)
console.log(produto.preco) //Nao vai dar erro pq produto foi declarado


// declarar um produto com valor gratis (0,00) use o null
let xiaomi = {}
xiaomi.preco = null
console.log (xiaomi.preco)
