export function isRotatedSubstring(str1: string, str2: string): boolean {
    if (!str1 || !str2) {
        throw new Error('invalid input');
    }

    if (str1.length !== str2.length) {
        return false;
    }

    return isSubstring(str2, str1 + str1);
}

function isSubstring(word: string, another: string): boolean {
    return another.includes(word);
}
