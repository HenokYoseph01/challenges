var fizzBuzz = function(n) {
    
     const arr = [];
    let count = 1;
    while(count<=n){
        if(count%3===0 && count%5===0){
            arr.push('FizzBuzz')
            count++
            continue
        }else if(count%3===0){
            arr.push('Fizz')
            count++
            continue
        }else if(count%5===0){
            arr.push('Buzz')
            count++
            continue
        }else{
            arr.push(count.toString());
            count++
            continue
            
        }
    }
    return arr;
    
};
