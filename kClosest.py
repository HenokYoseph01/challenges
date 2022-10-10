class Solution(object):
    def kClosest(self, points, k):
        minheap = []
        result = []
        for x, y in points:
            distanceCalc = (x**2)+(y**2)
            minheap.append([distanceCalc,x,y])

        heapq.heapify(minheap)
        while (k > 0):
            distanceCalc, x, y = heapq.heappop(minheap)
            result.append([x, y])
            k = k-1

        return result
