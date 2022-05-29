alert('bem vindo ao campo minado!')
alert('Abra o console do seu navegador para ver sua execução.')

cm = [[0,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,1,1]]
console.log("Esta e a matriz do campo minado: ", cm)

let jogada1=(cm[0][0])
let jogada2=(cm[1][0])
let jogada3=(cm[0][1])

jogadas=[]
jogadas.push(jogada1)
/*jogadas.push(jogada2)
Retire o comentário deste código para perder no campo minado.
*/
jogadas.push(jogada3)

console.log("Jogadas feitas: ", jogadas)

for(let i=0; i<jogadas.length;i++){
    if(jogadas[i]==1){
        console.log('Você perdeu!')
    } else if (i==jogadas.length-1){
        console.log('Você venceu!')
    }
}