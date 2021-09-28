/**
 * Time: O(N)
 * Space: O(1)
 * Length of `str1` is N and length of `str2` is M and |N - M| = |M - N| = 1 so
 * we can assume both `str1` and `str2` are of same length N.
 */
export function isOneAway(str1: string, str2: string): boolean {
    if (str1 === str2) {
        return true;
    }

    // This proves there were more than 1 replacements done or both strings are
    // completely different.
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let numOfEdits = 0;

    for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
        if (str1[i] !== str2[j]) {
            // `str1` is longer than `str2` by `1` character, so for it to be
            // `oneAway` we increment to next character in `str1` and then the
            // rest of the chars in both strings should match.
            if (str1.length > str2.length) {
                i += 1;
            }

            // Same as above but for this `str2` is longer than `str1`.
            if (str2.length > str1.length) {
                j += 1;
            }

            numOfEdits += 1;
        }

        if (numOfEdits > 1) {
            return false;
        }
    }

    return true;
}
