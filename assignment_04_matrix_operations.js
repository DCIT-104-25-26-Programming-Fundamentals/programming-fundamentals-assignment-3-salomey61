// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
/**
 * Prints a matrix (2D array) in a neat, aligned grid format.
 * 
 * @param {number[][]} matrix - The 2D matrix to print.
 */
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const rowStr = matrix[i].map(val => String(val).padStart(4, ' ')).join(' ');
        console.log(rowStr);
    }
}
/**
 * Helper function to read an M x N matrix from the user.
 * 
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} name - Name of the matrix for prompt display.
 * @returns {number[][]} Matrix array.
 */
function readMatrix(rows, cols, name = "Matrix") {
    console.log(`\nEntering ${name} (${rows}x${cols}):`);
    const matrix = [];
    for (let i = 1; i <= rows; i++) {
        while (true) {
            const line = readlineSync.question(`Enter row ${i}: `).trim();
            const values = line.split(/\s+/).map(Number);
            if (values.length !== cols || values.some(isNaN)) {
                console.log(`  Error: Expected ${cols} numbers separated by spaces. Try again.`);
                continue;
            }
            matrix.push(values);
            break;
        }
    }
    return matrix;
}
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
/**
 * Transposes an M x N matrix to an N x M matrix.
 * 
 * @param {number[][]} matrix - Source matrix.
 * @returns {number[][]} Transposed matrix.
 */
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
/**
 * Computes element-wise sum of two M x N matrices.
 * 
 * @param {number[][]} matrixA - First matrix.
 * @param {number[][]} matrixB - Second matrix.
 * @returns {number[][]} Resulting sum matrix.
 */
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];
    for (let i = 0; i < rows; i++) {
        const rowSum = [];
        for (let j = 0; j < cols; j++) {
            rowSum.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(rowSum);
    }
    return result;
}
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
/**
 * Multiplies Matrix A (M x N) by Matrix B (N x P).
 * 
 * @param {number[][]} matrixA - Matrix A (M x N).
 * @param {number[][]} matrixB - Matrix B (N x P).
 * @returns {number[][]|null} Product matrix (M x P) or null if inner dimensions mis-match.
 */
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    if (colsA !== rowsB) {
        return null; // Inner dimensions do not match
    }
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        const resultRow = [];
        for (let j = 0; j < colsB; j++) {
            let dotProduct = 0;
            for (let k = 0; k < colsA; k++) {
                dotProduct += matrixA[i][k] * matrixB[k][j];
            }
            resultRow.push(dotProduct);
        }
        result.push(resultRow);
    }
    return result;
}
/**
 * Main application driver for Parts A, B, and C.
 */
function main() {
    console.log('='.repeat(55));
    console.log('      MATRIX OPERATIONS (Part A, Part B, Part C)');
    console.log('='.repeat(55));
    // --- PART A ---
    console.log('\n--- PART A: Transpose a Matrix ---');
    const rowsA = readlineSync.questionInt('Enter number of rows: ');
    const colsA = readlineSync.questionInt('Enter number of columns: ');
    if (rowsA <= 0 || colsA <= 0) {
        console.log('Error: Dimensions must be positive integers.');
        return;
    }
    const matA = readMatrix(rowsA, colsA, 'Original Matrix');
    console.log('\nOriginal Matrix:');
    printMatrix(matA);
    const transposed = transposeMatrix(matA);
    console.log('\nTransposed Matrix:');
    printMatrix(transposed);
    // --- PART B ---
    console.log('\n\n--- PART B: Add Two Matrices ---');
    const rowsB = readlineSync.questionInt('Enter number of rows for both matrices: ');
    const colsB = readlineSync.questionInt('Enter number of columns for both matrices: ');
    if (rowsB <= 0 || colsB <= 0) {
        console.log('Error: Dimensions must be positive integers.');
        return;
    }
    const matB1 = readMatrix(rowsB, colsB, 'Matrix A');
    const matB2 = readMatrix(rowsB, colsB, 'Matrix B');
    const sumMat = addMatrices(matB1, matB2);
    console.log('\nMatrix A + Matrix B:');
    printMatrix(sumMat);
    // --- PART C ---
    console.log('\n\n--- PART C: Multiply Two Matrices ---');
    const rA = readlineSync.questionInt('Enter number of rows for Matrix A (M): ');
    const cA = readlineSync.questionInt('Enter number of columns for Matrix A (N): ');
    console.log(`Matrix B must have ${cA} rows (N).`);
    const rB = cA;
    const cB = readlineSync.questionInt('Enter number of columns for Matrix B (P): ');
    if (rA <= 0 || cA <= 0 || cB <= 0) {
        console.log('Error: Dimensions must be positive integers.');
        return;
    }
    const matC1 = readMatrix(rA, cA, 'Matrix A');
    const matC2 = readMatrix(rB, cB, 'Matrix B');
    const productMat = multiplyMatrices(matC1, matC2);
    console.log('\nMatrix A x Matrix B:');
    printMatrix(productMat);
}
// Execute program
main();
