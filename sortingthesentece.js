const sortSentence = function(s) {
   const arr = s.split(' ');
   console.log(arr)
   const numberHolder = [];
   

   for(let i=0; i<arr.length; i++){
     let word = arr[i];
     numberHolder.push(parseInt(word[word.length-1])-1)
     let tmpWord = word.slice(0,word.length-1)
     arr[i] = tmpWord
   }

   console.log(numberHolder)


   for(let i=0; i<numberHolder.length; i++){
    let min = i;
      for(let j=i+1; j<numberHolder.length; j++){
        if(numberHolder[min]>numberHolder[j]){
          min = j
        }
      }
      if(min !== i){
        let tmp = numberHolder[i];
        numberHolder[i] = numberHolder[min];
        numberHolder[min] = tmp

        let wordtmp = arr[i];
        arr[i] = arr[min];
        arr[min] = wordtmp
      }
   }
  
    return arr.join(' ')
};
