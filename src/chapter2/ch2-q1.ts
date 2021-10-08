import { Node } from './helpers';

/**
 * Time: O(N)
 * Space: O(N)
 * where N is the length of the LinkedList
 */
export function removeDups(head: Node): Node {
    if (!head) {
        return head;
    }

    let node: Node = head;

    const seen = new Set();
    seen.add(node.val);

    while (node.next !== null) {
        if (seen.has(node.next.val)) {
            node.next = node.next.next;
        } else {
            seen.add(node.next.val);
            node = node.next;
        }
    }

    return node;
}
