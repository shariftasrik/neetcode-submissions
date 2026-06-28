class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = new Map();

        for(let i=0; i<nums.length; i++){
            const n = nums[i];
            const diff = target - n;

            if(hashmap.has(diff)){
                return [hashmap.get(diff),i];
            }
            hashmap.set(n,i);
        }
        return [];
    }
}
