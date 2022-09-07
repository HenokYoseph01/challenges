const targetIndices = function(nums, target) {
    const arr = [];
    let index = 0;

    for(let i=0; i<nums.length; i++){
      let min = i;
      for(let j=0; j<nums.length; j++){
        if(nums[i]<nums[j]){ 
          let tmp = nums[i];
          nums[i] = nums[j];
          nums[j] = tmp;
        }
      }
      
      
      
      if(i === nums.length-1){
        for(const numbers of nums ){
          if(numbers === target){
            arr.push(index)
          }
          index++;
        }
      }
    }

    return arr;
};
