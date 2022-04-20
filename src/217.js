/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => nums.length > new Set(nums).size;
