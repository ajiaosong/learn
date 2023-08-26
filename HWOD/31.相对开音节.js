/**
 * 相对开音节构成的结构为：辅音 + 元音（aeiou）+ 辅音(r 除外) + e
 * 常见的单词有 bike cake 等
 * 给定一个字符串，以空格为分隔符，反转每个单词中的字母，若单词中包含如数字等其他非字母时不进行反转。
 * 反转后计算其中含有相对开音节结构的子串个数（连续的子串中部分字符可以重复）。
 * 例子：
 * 输入：ekam a ekac  输出：2
 * 反转后为make a cake 其中make和cake为相对开音节子串
 *
 * 输入：!ekam a ekekac 输出：2
 * 反转后为 !ekam a cakeke 因为含有非英文字母，所以未反转 其中 cake和keke 为相对开音节子串 返回
 */

function getCount(str) {
  if (str.length < 4) {
      return 0;
  }
  let val = 0;
  if (!zimu(str)) {
      for (let i = 0; i <= str.length - 4; i++) {
          if (check(str[i], str[i + 1], str[i + 2], str[i + 3])) {
              val++;
          }
      }
  } else {
      for (let i = str.length - 1; i > 2; i--) {
          if (check(str[i], str[i - 1], str[i - 2], str[i - 3])) {
              val++;
          }
      }
  }
  return val;
}

function check(c1, c2, c3, c4) {
  if (c4 != "e") {
      return false;
  }
  if (c2 != "a" && c2 != "e" && c2 != "i" && c2 != "o" && c2 != "u") {
      return false;
  }
  if (c1 == "a" || c1 == "e" || c1 == "i" || c1 == "o" || c1 == "u") {
      return false;
  }
  if (!(c1 >= "a" && c1 <= "z")) {
      return false;
  }
  if (
      c3 == "a" ||
      c3 == "e" ||
      c3 == "i" ||
      c3 == "o" ||
      c3 == "u" ||
      c3 == "r"
  ) {
      return false;
  }
  return c3 >= "a" && c3 <= "z";
}

function zimu(s) {
  for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (!(c >= "a" && c <= "z")) {
          return false;
      }
  }
  return true;
}

function solveMethod(line) {
  const words = line.trim().split(" ");
  let count = 0;
  for (let s of words) {
      count += getCount(s);
  }
  return count;
}
var line = "!ekam a ekekac";
console.log(solveMethod(line));

