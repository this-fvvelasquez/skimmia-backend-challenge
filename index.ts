/**
 * ============================
 *
 * SKIMMIA Backend Challenge
 *
 * ============================
 * fvvelasquez, this.fvvelasquez@gmail.com (Nov 23, 2020)
 * uses: 'nodejs', 'javascript', 'typescript'
 *
 *
 *
 * REQUIREMENT:
 * ----------------------------
 * Write a program that prints all the numbers from 1 to 100.
 *
 * CONDITIONS:
 * ----------------------------
 * 1. If number is multiple of 3:
 *      Print "Music" instead of number.
 *
 * 2. If number is multiple of 5:
 *      Print "TI" instead of number.
 *
 * 3. If number is both, condition 1 and condition 2:
 *      Print "Musical".
 *
 * CONSTRAINTS:
 * ----------------------------
 * i. Only one 'if' can be used.
 *    No multiple branches, ternary operators or 'else', 'else if'.
 *
 */

// ----------------------------

// Require Main class
import SkimmiaChallengeCounter from "./counter/skimmia-challenge.counter";
// Get an instance of class
let skimmmiaChallengeCounter: SkimmiaChallengeCounter = new SkimmiaChallengeCounter();
// ----------------------------

// We invoke the method where all the magic happens..
// ****************************************
skimmmiaChallengeCounter.count();
// ****************************************
