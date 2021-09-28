/**
 * Keep track of the count of occurences of a char in both strings.
 * If the count for a char is same in both strings, then one string is a
 * permutation of other.
 *
 * Time: O(M + N)
 * Space: O(M + N)
 * where M is length of str1 and N is length of str2.
 */
export function isPermutationOfOtherMap(
    str1: string[],
    str2: string[]
): boolean {
    if (str1.length !== str2.length || str1.length === 0) {
        return false;
    }

    const countOfCharsInStr1 = new Map<string, number>();
    const countOfCharsInStr2 = new Map<string, number>();

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (countOfCharsInStr1.has(char)) {
            countOfCharsInStr1.set(char, countOfCharsInStr1.get(char) + 1);
        } else {
            countOfCharsInStr1.set(char, 1);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (countOfCharsInStr2.has(char)) {
            countOfCharsInStr2.set(char, countOfCharsInStr2.get(char) + 1);
        } else {
            countOfCharsInStr2.set(char, 1);
        }
    }

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (countOfCharsInStr1.get(char) !== countOfCharsInStr2.get(char)) {
            return false;
        }
    }

    return true;
}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * Time: O(NlogN + MlogM)
 * Space: O(1) if able to modify original strings, O(N + M) otherwise
 * where M is length of str1 and N is length of str2.
 */
export function isPermutationOfOtherSort(
    str1: string[],
    str2: string[]
): boolean {
    if (str1.length === 0 || str1.length !== str2.length) {
        return false;
    }

    str1.sort();
    str2.sort();

    return str1.every((char, idx) => char === str2[idx]);
}
