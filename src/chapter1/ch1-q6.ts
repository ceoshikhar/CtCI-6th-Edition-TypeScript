/**
 * Time: O(N)
 * Space: O(N)
 */
export function compress(original: string): string {
    if (!original) {
        return original;
    }

    let prev = '';
    let count = 0;
    let compressed = '';

    for (let i = 0; i < original.length; i++) {
        const curr = original[i];

        if (prev) {
            if (curr === prev) {
                count += 1;
            } else {
                compressed += `${prev}${count}`;
                prev = curr;
                count = 1;
            }
        } else {
            prev = curr;
            count = 1;
        }

        // Character is at the end of the string
        if (i + 1 === original.length) {
            compressed += `${curr}${count}`;
        }
    }

    return compressed.length < original.length ? compressed : original;
}
