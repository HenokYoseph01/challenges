def sortColor(nums):

    for num in range(len(nums)):
        min_num = num

        for j in range(len(nums)):
            if (nums[j] > nums[min_num]):
                swap = nums[min_num]
                nums[min_num] = nums[j]
                nums[j] = swap
