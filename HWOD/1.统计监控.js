/**
 * 题目描述：
 * 在一长方形停车场内，每个车位上方都有对应监控器，当且仅当在当前车位或者前后左右四个方向任意一个车位范围停车时，
 * 监控器才需要打开，给出某一时刻停车场的停车分布，请统计最少需要打开多少个监控器。
 */

let rowCount = 3, colCount = 3;
let grid = new Array(20);

for(let i = 0; i < grid.length; i++) {
  grid[i] = new Array(20).fill(0)
}

const inputGrid = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]

for(let row = 1; row <= rowCount; row++) {
  for(let col = 1; col <= colCount; col++) {
    grid[row][col] = inputGrid[row-1][col-1]
  }
}

let result = 0;
for(let row = 1; row <= rowCount; row++) {
  for(let col = 1; col <= colCount; col++) {
    if(grid[row][col] === 1) {
      // 当前格子是车
      result++;
      continue;
    }
    // 否则 遍历相邻的格子
    if(
      (row > 1 && grid[row - 1][col] == 1) || // 上方格子
      (row < rowCount && grid[row+1][col] == 1) || // 下方格子
      (col > 1 && grid[row][col-1] == 1) || // 左侧格子
      (col < colCount && grid[row][col+1] == 1) || // 右侧格子
      grid[row][col] == 1
    ) {
      result++
    }
  }
}

console.log(result)



// 方案二

let result2 = 0;
let rowCount2 = 3, colCount2 = 3;
const inputGrid2 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]

for(let i = 0; i < rowCount2; i++) {
  for(let j = 0; j < colCount2; j++) {
    if(inputGrid2[i][j] == 1 ||
      (i-1 >= 0 && inputGrid2[i-1][j] == 1) ||
      (i + 1 < rowCount2 &&inputGrid2[i+1][j] == 1) ||
      (j+1 < colCount2) && inputGrid2[i][j+1] == 1 ||
      (j-1 >= 0) &&inputGrid2[i][j-1] == 1) {
        result2++
    }
  }
}
console.log(result2, '--result')