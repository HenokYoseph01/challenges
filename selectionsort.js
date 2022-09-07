const inputArr = arr;

  for(let check = 0; check < n ; check++) {
    
    let min = check;
    for(let j = check+1; j < n; j++){
        if(inputArr[j] < inputArr[min]) {
            min=j; 
        }
     }
     if (min != check) {
        
         let tmp = inputArr[check]; 
         inputArr[check] = inputArr[min];
         inputArr[min] = tmp;      
    }
  }
  return inputArr;
    
  }
