class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	minDepth(node = this.root) {
		if (!node) return 0;
		if (!node.left && !node.right) return 1;
		if (!node.left) return this.minDepth(node.right) + 1;
		if (!node.right) return this.minDepth(node.left) + 1;
		return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
	}

	maxDepth(node = this.root) {
		if (!node) return 0;
		return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
	}

	maxSum(node = this.root) {
		if (!node) return 0;
		let maxSum = -Infinity;

		function helper(node) {
			if (!node) return 0;
			let leftMax = Math.max(0, helper(node.left));
			let rightMax = Math.max(0, helper(node.right));
			let localMax = node.val + leftMax + rightMax;
			maxSum = Math.max(maxSum, localMax);
			return node.val + Math.max(leftMax, rightMax);
		}

		helper(node);
		return maxSum;
	}

	nextLarger(x, node = this.root) {
		if (!node) return null;
		let queue = [node];
		let closest = null;
		while (queue.length) {
			let currentNode = queue.shift();
			let currentVal = currentNode.val;
			if (currentVal > x && (closest === null || currentVal < closest)) {
				closest = currentVal;
			}
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
		return closest;
	}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
