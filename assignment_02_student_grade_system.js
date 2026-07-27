// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
//
// Write a JavaScript program that reads a student's score and outputs the
// corresponding letter grade based on the scale below.
//
// Grading Scale:
//   Score 80 – 100  →  Grade A
//   Score 70 – 79   →  Grade B
//   Score 60 – 69   →  Grade C
//   Score 50 – 59   →  Grade D
//   Score below 50  →  Grade F
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_02_student_grade_system.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter student score (0-100): 85
//   Grade: A
//
//   Enter student score (0-100): 73
//   Grade: B
//
//   Enter student score (0-100): 45
//   Grade: F
//
//   Enter student score (0-100): 110
//   Error: Score must be between 0 and 100.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST use functions (see scaffold below).
// - Validate the score inside getGrade(). If it is out of range, return null
//   and let main() print the error message.
// - Use if / else if / else to determine the grade.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');
/**
 * Validates the score and determines the corresponding letter grade.
 * 
 * @param {number} score - The numerical score (0-100).
 * @returns {string|null} The letter grade ('A', 'B', 'C', 'D', 'F') or null if out of range.
 */
function getGrade(score) {
    // Validate that the score is within the valid range [0, 100]
    if (isNaN(score) || score < 0 || score > 100) {
        return null; // Return null for invalid range or invalid number
    }
    // Determine grade using if / else if / else
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}
/**
 * Main function to prompt for input and output the grade or error message.
 */
function main() {
    // Prompt the user for student score
    const scoreInput = readlineSync.questionFloat('Enter student score (0-100): ');
    // Call getGrade to get letter grade or null
    const grade = getGrade(scoreInput);
    // Check for validation failure
    if (grade === null) {
        console.log('Error: Score must be between 0 and 100.');
    } else {
        console.log(`Grade: ${grade}`);
    }
}
// Execute the program
main();