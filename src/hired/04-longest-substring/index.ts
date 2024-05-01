/*
 * Given a string, s, find the length of the longest substring that contains no repeated characters.
 *
 * Example input:
 * s: "nndNfdfdf"
 *
 * Example Output:
 * 4
 *
 * Explanation:
 * "ndNf" is the longest substring within "nndNfdfdf" that contains no repeated characters, and its length is 4 characters.
 *
 */

const findLongestSubstringLength = (s: string): number => {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    const charIndex = charMap.get(char);
    if (charIndex !== undefined && charIndex >= start) {
      start = charIndex + 1;
    }

    charMap.set(char, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

export default findLongestSubstringLength;
