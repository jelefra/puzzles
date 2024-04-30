/*
 * You are at the bottom of a staircase with n stairs.
 * You can jump 1, 2, or 3 stairs at a time.
 * How many different ways can you jump up the stairs?
 *
 */

const countWays = (n: number) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (i >= 1) dp[i] += dp[i - 1];
    if (i >= 2) dp[i] += dp[i - 2];
    if (i >= 3) dp[i] += dp[i - 3];
  }

  return dp[n];
};

export default countWays;
