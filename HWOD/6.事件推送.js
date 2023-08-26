/**
 * 题目描述：
 * 同一个数轴X上有两个点的集合A={A1, A2, …, Am} B={B1, B2, …, Bn}
 * Ai和Bi为正整数 A B已经从小到大排好序 A B 均不为空
 *  给定一个距离R  列出同时满足如下条件的所有（Ai, Bj）数对
 * 1、Ai <= Bj
 * 2、之间的距离小于等于
 * 3、在满足 1 2 的情况下，每个Ai 只需输出距离最近的 Bi
 * 4、输出结果按从小到大的顺序排序
 *
 */

/**
 * 输入：
 * 4 5 5
  1 5 5 10
  1 3 8 8 20

  输出：
  1 1
  5 8
  5 8
 */

 rl.on("line", (line) => {
    lines.push(line);
    if (lines.length === 3) {
      let [m, n, R] =
      lines[0].split(" ").map((ele) => parseInt(ele));
      let A = lines[1].split(" ").slice(0, m).map((ele) => parseInt(ele));
      let B = lines[2].split(" ").slice(0, n).map((ele) => parseInt(ele));
      postMessage(A, B, R);
      lines.length = 0;
    }
  });
  function postMessage(A, B, R) {
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
        if (A[i] <= B[j] && B[j] - A[i] <= R) {
          console.log(A[i] + " " + B[j]);
          break;
        }
      }
    }
  }