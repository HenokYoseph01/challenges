const sortColors = function(nums) {
      for(let i= nums.length; i>0; i--){
    for(let j=0; j<i-1; j++){
      if(nums[j]>nums[j+1]){
        let temp =nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
      }
    }
   }
    
};
