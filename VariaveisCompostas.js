let pc = ['Informatica', 'BHZINFO01', ]
pc.push('Ambulatorio')

console.log(`O computador ${pc[1]} vai para o setor ${pc[2]}`)

while (pc.length<15) {
    pc.push('ESPAÇO EM BRANCO') // adiciona mais um na variavel composta
}
console.log(pc)

console.log(pc.sort()) // coloca em ordem crescente
console.log(pc)
console.log(pc[2])

for (let pos=0;pos<pc.length;pos++)
console.log(pos)



num = pc.indexOf(`Ambulatorio`) // procura onde está o valor 'ambulatorio' e retorna 
console.log(`O valor ambulatorio esta na posicao ${num}`)

num1 = pc.indexOf(`Radiologia`) // como não tem, vai retornar -1
if (num1 == -1) {
    console.log('Valor nao encontrado') }
else {
    console.log(`O valor esta na posicao ${num1}`)
}
