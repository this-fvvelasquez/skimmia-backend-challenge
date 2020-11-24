/**
 * SKIMMIA Backend Challenge
* fvvelasquez, this.fvvelasquez@gmail.com (Nov 23, 2020)
 * uses: 'nodejs', 'javascript', 'typescript'
 *
 * Types
 */

// Enums a 'special print' for each 'multiplesOf' case CONDITION.
enum SpecialPrints_e {
	MULTIPLE_OF_3 = "Music",
	MULTIPLE_OF_5 = "TI",
	MULTIPLE_0F_3_AND_5 = "Musical",
}
// ----------------------------

// Gets a sub type from enum values.
type SpecialPrints_t = SpecialPrints_e;
// ----------------------------

// Exports
export { SpecialPrints_e, SpecialPrints_t };
// ----------------------------
