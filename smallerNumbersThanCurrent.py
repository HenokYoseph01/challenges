class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        counter = []
        for i in nums:
            counter.append(0)

        for i in range(len(nums)):
            for j in range(len(nums)):
                if (nums[i] > nums[j]):
                    counter[i] = counter[i] + 1

        return counter
