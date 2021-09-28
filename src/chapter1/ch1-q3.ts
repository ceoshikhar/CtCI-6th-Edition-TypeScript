/**
 * Time: O(N)
 * Space: O(1)
 * where N is the number of characters in the string.
 */
export function urlify(url: string[]): string[] {
    if (!url || url.length === 0) {
        return url;
    }

    let numOfSpaces = 0;

    for (let i = 0; i < url.length; i++) {
        if (url[i] === ' ') {
            ++numOfSpaces;
        }
    }

    const newLength = url.length - 1 + 2 * numOfSpaces;

    for (let i = url.length - 1, j = newLength; i >= 0; i--, j--) {
        if (url[i] === ' ') {
            url[j] = '0';
            url[--j] = '2';
            url[--j] = '%';
        } else {
            url[j] = url[i];
        }
    }

    return url;
}
