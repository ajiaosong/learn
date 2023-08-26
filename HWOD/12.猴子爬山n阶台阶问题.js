/**
 * 猴子爬山
 * 一天一只顽猴想要从山脚爬到山顶， 途中经过一个有n个台阶的阶梯，  但是这个猴子有个习惯，每一次只跳1步或3步
 * 有多少种跳跃方式
 */

   //动态规划
   function monkey(n){
    //dp[n] = dp[n-1]+dp[n-3]
    let dp = [];
    //确定边界
    dp[0] = 1;
    dp[1]= 1;
    dp[2] = 1;
    dp[3] = 2;
    for(let i = 4 ; i <= n;i++){
        dp[i] = (dp[i-3]+dp[i-1]);
    }
    return dp[n];
  }

  console.log(monkey(50))