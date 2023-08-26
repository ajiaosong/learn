
/**
 * 题目描述：
 * 小明今年升学到了小学一年级， 来到新班级后，发现其他小朋友身高参差不齐， 然后就想基于各小朋友和自己的身高差，对他们进行排序，
 * 输入：
 * 第一行为正整数H和N
 * 0 < H < 200  为小明的身高
 * 0 < N < 50  为新班级其他小朋友个数
 *  第二行为 N 个正整数 分别是其他小朋友的身高
 *  取值范围0 < Hi < 200 且N个正整数各不相同
 * 
 * 输出：
 * 输出排序结果，各正整数以空格分割
 *  和小明身高差绝对值最小的小朋友排在前面
 *  和小明身高差绝对值最大的小朋友排在后面
 *  如果两个小朋友和小明身高差一样
 *  则个子较小的小朋友排在前面
 */

function solveMethod(height, otherHeights) {
  const diffs = otherHeights.map((h) => Math.abs(h - height));
  console.log(diffs)
  let students = otherHeights.map((h, i) => ({height: h, diff: diffs[i]}))

  students.sort((a, b) => {
    return a.diff === b.diff ? a.height - b.height : a.diff - b.diff
  })

  console.log(students, '---studeng')
}