for (let k = 1; k < 101; k++){
    if  (k % 3 == 0 && k % 5 == 0){
        console.log(`FIZZBUZZ`)
    }
    else if (k % 5 == 0 ){
        console.log(`Buzz`)
    }
    else if (k % 3 == 0){
        console.log(`FIZZ`)
    }
    else{
        console.log(k)
    }

}