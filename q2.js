let fAnt=0
let fAtual=1

//insira aqui o numero que voce deseja confirmar se faz parte
let number=2584

while(fAtual<number){
    calcFib()
}
number==fAtual?console.log('Faz parte da sequencia'):console.log('Não faz parte')

function calcFib(){
    let holder= fAtual

    fAtual= fAnt+fAtual
    fAnt=holder;
}