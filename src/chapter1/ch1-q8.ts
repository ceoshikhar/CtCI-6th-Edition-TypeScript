/**
 * Time: O(N * M)
 * Space: O(N + M)
 * N = matrix Y dimension
 * M = matrix X dimension
 */
export function zeroMatrix(matrix: number[][]): number[][] {
    if (!matrix) {
        throw new Error('invalid matrix');
    }

    const numOfRows = matrix.length;
    const numOfCols = matrix[0].length;

    if (numOfRows === 1 || numOfCols === 1) {
        return matrix;
    }

    const rowsToZero = new Set<number>();
    const colsToZero = new Set<number>();

    for (let row = 0; row < numOfRows; row++) {
        for (let col = 0; col < numOfCols; col++) {
            if (matrix[row][col] === 0) {
                if (!rowsToZero.has(row)) {
                    rowsToZero.add(row);
                }

                if (!colsToZero.has(col)) {
                    colsToZero.add(col);
                }
            }
        }
    }

    for (let row = 0; row < numOfRows; row++) {
        for (let col = 0; col < numOfCols; col++) {
            if (colsToZero.has(col) || rowsToZero.has(row)) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
}
