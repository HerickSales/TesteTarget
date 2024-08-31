//insira aqui a string
let word='): evorpa em'
let reversedWord= reverse(word)

console.log(`Palavra a ser invertida: ${word}\nPalavra revertida: ${reversedWord}`)

function reverse(word){
    let arrWord= Array.from(word)
    let arrReversedWord=[]
    let reversed
    arrWord.forEach((letter)=>{
        arrReversedWord.splice(0,0 , letter)
    })
  
    return arrReversedWord.join('')
}   