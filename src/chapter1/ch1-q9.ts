/**
 * Time: O(N)
 * Space: O(N)
 * where N is the length of of the `str` string from which we have to check if
 * the `rotatedStr` string is a rotated substring of `str` string.
 */
export function isRotatedSubstring(str: string, rotatedStr: string): boolean {
    if (!str || !rotatedStr) {
        throw new Error('invalid input');
    }

    if (str.length !== rotatedStr.length) {
        return false;
    }

    return isSubstring(rotatedStr, str + str);
}

function isSubstring(subStr: string, str: string): boolean {
    return str.includes(subStr);
}
