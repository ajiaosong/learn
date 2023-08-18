// HJ22 汽水瓶
rl.on('line', function (line) {
  // const tokens = line.split(' ');
  // console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  if(line == 0) return;
  console.log(Math.floor(Number(line) / 2))
});


/***
 * HJ53 杨辉三角的变形
 * 求第n行第一个偶数出现的位置
 */
rl.on('line', function (line) {
  // const tokens = line.split(' ');
  // console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  line = Number(line);
  if(line < 3) {
      console.log(-1)
  } else if(line % 2 === 1) {
      console.log(2)
  } else if(line % 4 === 0) {
      console.log(3)
  } else {
      console.log(4)
  }
});

/***
 * HJ56 完全数计算
 * 完全数（Perfect number），又称完美数或完备数，是一些特殊的自然数。
 * 它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身。
 * 例如：28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。
 * 输入n，请输出n以内(含n)完全数的个数。
 */

rl.on('line', function (line) {
    let nums = [6,28,496,33550336];
    let count = 0;
    nums.forEach(item => {
        if(item <= line) {
          count ++;
        }
    })
    console.log(count);
});

/**
 * HJ60 查找组成一个偶数最接近的两个素数
 * 任意一个偶数（大于2）都可以由2个素数组成，组成偶数的2个素数有很多种情况，
 * 本题目要求输出组成指定偶数的两个素数差值最小的素数对。
 * 输入描述：输入一个大于2的偶数
 * 输出描述：从小到大输出两个素数
 */

rl.on('line', function (line) {
  // const tokens = line.split(' ');
  // console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  const takons = parseInt(line.trim());
  function issushu(num) {
    for(let i = 2; i< num; i++) {
      if(num % i  === 0) {
        return false
      }
    }
    return true
  }

  function action(n) {
    for(let i = n /2; i >= 2; i--) {
      if(issushu(i) && issushu(n - i)) {
        console.log(i);
        console.log(n-i);
        break;
      }
    }
  }
  action(takons)
});

/**
 * HJ61 放苹果 把m个同样的苹果放在n个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？
 * 注意：如果有7个苹果和3个盘子，（5，1，1）和（1，5，1）被视为是同一种分法。
 */
rl.on('line', function (line) {
  let [m, n] = line.split(' ');
  m = Number(m);
  n = Number(n);
  console.log(getCount(m, n))
});

function getCount(m, n) {
  if(m < 0 || n<= 0) {
      return 0
  }
  if(m == 1 || n == 1 || m == 0) {
      return 1
  }
  return getCount(m, n-1) + getCount(m-n, n)
}


/**
 * HJ72 百钱买百鸡问题
 * 公元五世纪，我国古代数学家张丘建在《算经》一书中提出了“百鸡问题”：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。
 * 百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？现要求你打印出所有花一百元买一百只鸡的方式。
 */
rl.on('line', function (line) {
  // const tokens = line.split(' ');
  // console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  let maxA = Math.floor(100 / 5);
  let maxB = Math.floor(100 / 3);
  for(let i = 0; i <= maxA; i++) {
      for(let j = 0; j <= maxB; j++) {
          const k = 100 - (i + j);
          if(k % 3 === 0 && (k / 3 + 5 * i + j * 3) == 100) {
              console.log(`${i} ${j} ${k}`);
          }
      }
  }
});

// HJ73 计算日期到天数转换
rl.on('line', function (line) {
  const [year, month, day] = line.split(' ');
  const time = new Date(`${year}-${month}-${day}`).getTime();
  const first = new Date(`${year}-01-01`).getTime();
  console.log(1 + (time -first) / (60*60*24*1000))
  // console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});



/**
 * HJ76 尼科彻斯定理
 * 验证尼科彻斯定理，即：任何一个整数m的立方都可以写成m个连续奇数之和。
 *
 */
// 找规律，经观察：第一项为n(n-1)+1，最后一项为n(n+1)-1，把中间的数print一下就ok
let str = ''
rl.on('line', function (line) {
  // const tokens = line.split(' ');
  // console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  line = +line;
  let start = line * (line - 1) + 1;
  let end = line * (line + 1) - 1;
  for(let i = start; i <= end; i += 2) {
      if(i === end) {
          // console.log(i)
          str += i
      } else {
          str += i+'+'
          // console.log(i + '+')
      }
  }
  console.log(str)
});







