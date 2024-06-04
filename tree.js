/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */
	sumValues() {
		let total = 0;
		if (!this.root) return total;

		let stack = [this.root];
		while (stack.length) {
			let node = stack.pop();
			total += node.val;
			stack.push(...node.children);
		}
		return total;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */
	countEvens() {
		let count = 0;
		if (!this.root) return count;

		let stack = [this.root];
		while (stack.length) {
			let node = stack.pop();
			if (node.val % 2 === 0) count++;
			stack.push(...node.children);
		}
		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */
	numGreater(lowerBound) {
		let count = 0;
		if (!this.root) return count;

		let stack = [this.root];
		while (stack.length) {
			let node = stack.pop();
			if (node.val > lowerBound) count++;
			stack.push(...node.children);
		}
		return count;
	}
}

module.exports = { Tree, TreeNode };
