/**
 * We brute force by looping through the input entirely for each input and
 * compare if any input is repeated.
 *
 * Time: O(N^2)
 * Space: O(1)
 * where N is the number of characters in the string.
 */
export function hasUniqueCharactersBrute(str: string[]) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }

    return true;
}

/**
 * We keep track of characters by adding them to a Set while looping
 * the input. For every character we check if Set has that character
 * or not and add the current character to Set for future checks.
 *
 * Time: O(N)
 * Space: O(N)
 * where N is the number of characters in the string.
 */
export function hasUniqueCharactersSet(str: string[]) {
    const chars = new Set();

    for (let i = 0; i < str.length; i++) {
        if (chars.has(str[i])) {
            return false;
        }

        chars.add(str[i]);
    }

    return true;
}

/**
 * We sort the input first. If same characters exists in the input, they
 * will appear together.
 *
 * Time: O(NlogN)
 * Space: O(1)
 * where N is the number of characters in the string.
 */
export function hasUniqueCharactersSort(str: string[]) {
    str.sort();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            return false;
        }
    }

    return true;
}
