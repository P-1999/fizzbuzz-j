

let fizzBuzzCustom = function () {

    let arr = []
    for(let i = 1; arr.length < 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push('FizzBuzz')
        } else if(i % 3 === 0) {
         arr.push('Fizz')
         }else if(i % 5 === 0){
            arr.push('buzz')
         } 
         else {
             arr.push(i)
         }
    }
    return arr 
}

console.log(fizzBuzzCustom())