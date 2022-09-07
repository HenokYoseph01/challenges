const smallerNumbersThanCurrent = function(nums) {
  let counter = 0
  const arrHolder = [];
    for(let i=0; i<nums.length; i++){
      
      for(let j=0; j<nums.length; j++){
        if(nums[i]>nums[j]){
          counter++;
        }
      }
      arrHolder.push(counter);
      counter = 0;
    }
    return arrHolder;
};
