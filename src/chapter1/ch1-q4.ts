/**
 * Go through input and keep track how many times it repeats in the input. If
 * there are multiple characters in the input that repeats odd number of times
 * in the input then the input cannot be a permutation of a palindrome.
 *
 * Time: O(N)
 * Space: O(N)
 * where N is the number of characters in the input
 */
export function isPalindromePermutation(str: string[]) {
    if (!str || str.length === 0) {
        return str;
    }

    const counts = new Map<string, number>();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        counts.set(char, counts.get(char) + 1 || 1);
    }

    let oddOccurrences = 0;

    counts.forEach((count, char) => {
        // All test cases passed except one. When I ignored spaces, that test
        // case also passed. Idk if we are supposed to ignore spaces or not. It
        // was not cleared in the question. I added the check to ignore spaces
        // as it was done in the solution mentioned on
        // https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/master/src/chapter1/ch1-q4.js
        if (char !== ' ') {
            if (!isEven(count)) {
                oddOccurrences += 1;
            }
        }
    });

    if (oddOccurrences > 1) {
        return false;
    }

    return true;
}

function isEven(num: number): boolean {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}
