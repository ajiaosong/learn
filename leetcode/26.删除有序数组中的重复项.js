/**
 * 题目描述：
 * 给你一个 升序排列 的数组 nums ，
 * 请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数
 *
 */

// 解法一：双指针 i为慢指针 j为快指针 nums循环 如果i ==j 则不做处理 否则i++，nums[i] == nums[j]
var removeDuplicates = function removeDuplicates(nums) {
  let len = nums.length, i = 0;
  if(!len) return 0;
  for(let j = 1; i < len; j++) {
    if(nums[i] !== nums) {
      i++;
      nums[i] = nums[j]
    }
  }
  return i+1
}
