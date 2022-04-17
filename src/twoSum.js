/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
const nums = [2, 7, 11, 15];
// numA + numB = target, return [numA index, numB index];
const twoSum = (nums, target) => {
  const map = new Map();
  let ary;

  nums.forEach((num, index) => {
    /*
      If find map key equal to num,
      map.get(num) will get that index value,
      ans: [map.get(num), current num index]
    */
    if (map.has(num)) {
      ary = [map.get(num), index]
      return;
    }

    // key = target-num, curretn num add target-num = target.
    // value = index, current num index.
    map.set(target - num, index)
  })

  return ary;
};

console.log(twoSum(nums, 9));;