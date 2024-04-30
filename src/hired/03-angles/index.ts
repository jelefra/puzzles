/*
 * Given a string of angle brackets, `angles`, such as "<<><>><<<>", write a function that adds angle brackets to the beginning and end to make all angle brackets match and return it. The angle brackets "match" if for every < there is a corresponding > appearing after it in the string, and for every > there is a corresponding < appearing before it in the string.
 *
 * Example Input:
 * angles: "><<><"
 *
 * Example Output:
 * "<><<><>>"
 *
 * Explanation:
 * We added "<" to the beginning and ">>" to the end.
 *
 */

const addAngleBrackets = (angles: string): string => {
  let replaced = angles;
  while (/<>/.test(replaced)) {
    replaced = replaced.replace(/<>/g, '');
  }

  const missingOpeningBrackets = (replaced.match(/>/g) || []).length;
  const missingClosingBrackets = (replaced.match(/</g) || []).length;

  return (
    '<'.repeat(missingOpeningBrackets) +
    angles +
    '>'.repeat(missingClosingBrackets)
  );
};

export default addAngleBrackets;
