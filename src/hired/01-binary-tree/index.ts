/*
 *
 * Suppose you're given a binary tree represented as an array. For example, [3, 6, 2, 9, -1, 10] represents the following binary tree (where -1 is a non-existent node):
 *
 *      3
 *     / \
 *    6   2
 *   /   /
 *  9   10
 *
 * Write a function that determines whether the left or right branch of the tree is larger. The size of each branch is the sum of the node values. The function should return the string "Right" if the right side is larger and "Left" if the left side is larger.  If the tree has 0 nodes or if the size of the branches are equal, return the empty string.
 *
 * Example Input:
 * [3, 6, 2, 9, -1, 10]
 *
 * Example Output:
 * Left
 *
 */

const compareBranches = (tree: number[]): string => {
  const filteredTree = tree.filter((n) => n !== -1 && n !== 0);

  if (filteredTree.length === 0) {
    return '';
  }

  const { left, right } = filteredTree.slice(1).reduce(
    (sums: { left: number; right: number }, n, index) => {
      const side = index % 2 ? 'right' : 'left';
      sums[side] += n;
      return sums;
    },
    { left: 0, right: 0 }
  );

  if (left === right) {
    return '';
  } else {
    return left > right ? 'Left' : 'Right';
  }
};

export default compareBranches;
