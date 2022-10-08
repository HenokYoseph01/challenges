def targetIndecies(nums, target):
    targetInd = []
    for i in range(len(nums)):
        for j in range(len(nums)):
            if (nums[i] < nums[j]):
                swap = nums[i]
                nums[i] = nums[j]
                nums[j] = swap

    for i in range(len(nums)):
        if nums[i] == target:
            targetInd.append(i)

    print(targetInd)
