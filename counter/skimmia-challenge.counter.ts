/**
 * SKIMMIA Backend Challenge
 * fvvelasquez, this.fvvelasquez@gmail.com (Nov 23, 2020)
 * uses: 'nodejs', 'javascript', 'typescript'
 *
 * Main Class
 *
 * Invoke 'count()' method, to do the job.
 *
 * ============================
 * SkimmiaChallengeCounter
 * ============================
 *
 */
// Our own types.
import { SpecialPrints_e, SpecialPrints_t } from "./types.counter";
// ----------------------------

// ============================
class SkimmiaChallengeCounter {
	// ========================

	// Count init and count end
	private initsAt: number;
	private endsAt: number;
	// ----------------------------

	// List of numbers and 'special prints' values that solve out the REQUIREMENT specification.
	private countList: Array<number | SpecialPrints_t>;
	// ----------------------------

	constructor() {
		// Count from 1 to 100
		this.initsAt = 1;
		this.endsAt = 100;
		// At the beggining, our solution is empty.
		this.countList = [];
		// ----------------------------
	}

	// MAIN METHOD:
	count(): void {
		// For easy handling:
		const __3: number = 3;
		const __5: number = 5;
		// ----------------------------

		// THE WHOLE NUMBER COUNT:
		this.countNumbers();
		this.test_UNIT_TEST(
			`Llenamos'countList' con números del ${this.initsAt} al ${this.endsAt}.`
		);
		// ----------------------------

		// CONDITION 1:
		// If number is multiple of 3:      Print "Music" instead of number.
		const mOf_3 = this.countMultiplesOf(SpecialPrints_e.MULTIPLE_OF_3, __3);
		this.test_UNIT_TEST(
			`Insertamos "${SpecialPrints_e.MULTIPLE_OF_3}" en lugar de cada multiplo de ${__3}.`
		);
		// ----------------------------

		// CONDITION 2:
		// If number is multiple of 5:      Print "TI" instead of number.
		const mOf_5 = this.countMultiplesOf(SpecialPrints_e.MULTIPLE_OF_5, __5);
		this.test_UNIT_TEST(
			`Insertamos "${SpecialPrints_e.MULTIPLE_OF_5}" en lugar de cada multiplo de ${__5}.`
		);
		// ----------------------------

		// CONDITION 3:
		// If number is both, condition 1 and condition 2:      Print "Musical".
		this.countMultiplesOfBoth(
			SpecialPrints_e.MULTIPLE_0F_3_AND_5,
			mOf_3,
			mOf_5
		);
		this.test_UNIT_TEST(
			`Insertamos "${SpecialPrints_e.MULTIPLE_0F_3_AND_5}" en lugar de cada multiplo de la interseccion de ambos ${__3} AND ${__5}.`
		);
		// ----------------------------

		// PRINT RESULTS !
		// ****************************
		this.printCount();
		// ****************************
	}
	// ----------------------------

	// We push in the 'countList' all the numbers of the count.
	private countNumbers(): void {
		let counter: number;
		for (counter = this.initsAt; counter <= this.endsAt; counter++) {
			this.countList.push(counter);
		}
	}
	// ----------------------------

	// We fill in the countList with the 'multipleOf' SpecialPrints
	private countMultiplesOf(
		specialPrint: SpecialPrints_t,
		MULTIPLE_OF: number
	): Array<number> {
		// Array of all 'multiple' values of MULTIPLE_OF.
		let multiplesOf: Array<number> = [];
		// current 'multiple' value.
		let multiple: number;
		// ----------------------------
		let i: number;
		for (
			multiple = MULTIPLE_OF, i = 1;
			multiple <= this.endsAt;
			multiple = MULTIPLE_OF * ++i
		) {
			// Programming languajes count from 0
			const ARRAY_POSITION = multiple - 1;
			// ----------------------------
			// Write the 'specialPrint' value instead of the 'multiple' number value.
			this.countList[ARRAY_POSITION] = specialPrint;
			// ----------------------------
			// We push the current 'multiple' value.
			multiplesOf.push(multiple);
			// ----------------------------
		}
		// Array of all 'multiple' values of MULTIPLE_OF.
		return multiplesOf;
		// ----------------------------
	}
	// ----------------------------

	// We fill in the countList with the 'multipleOf_BOTH' SpecialPrints
	countMultiplesOfBoth(
		specialPrint: SpecialPrints_t,
		multiplesOf_A: Array<number>,
		multiplesOf_B: Array<number>
	): Array<number> {
		// Array of all 'multiple' values of MULTIPLE_OF_BOTH.
		let multiplesOf_BOTH: Array<number> = [];
		// current 'multiple' value.
		let multiple: number;
		// ----------------------------

		console.log(multiplesOf_A);
		console.log(multiplesOf_B);

		let i, j: number;
		// We provoke the Intersection of sets multiplesOf_A and multiplesOf_B:
		for (i = 0; i < multiplesOf_A.length; i++) {
			for (j = 0; j < multiplesOf_B.length; j++) {
				// If Intersection occurs:
				// *************************************************
				// Let me introduce to you to THE ONLY IF in the whole project. XD
				if (multiplesOf_A[i] === multiplesOf_B[j]) {
					// *********************************************
					// current 'multiple' value.
					multiple = multiplesOf_A[i];
					// Programming languajes count from 0
					const ARRAY_POSITION = multiple - 1;
					// ----------------------------
					// Write the 'specialPrint' value instead of the 'multiple' number value.
					this.countList[ARRAY_POSITION] = specialPrint;
					// ----------------------------
					// We push the current 'multiple' value.
					multiplesOf_BOTH.push(multiplesOf_A[i]);
				}
				// ----------------------------
			}
		}
		// Array of all 'multiple' values of MULTIPLE_OF_BOTH.
		return multiplesOf_BOTH;
		// ----------------------------
	}
	// ----------------------------

	// Lets check on the current state of process!
	private test_UNIT_TEST(message: string): void {
		const CURRENT_VALUE_STR = this.countList.join(", ");
		console.log(`\n[ TEST_UNIT: ${message} ]`);
		console.log(`\n[ ${CURRENT_VALUE_STR} ]\n`);
	}
	// ----------------------------

	// PRINT RESULTS !
	private printCount() {
		console.log("\n === Resultado: ===\n");
		console.log(" (n) -> valor\n");
		for (let i = 0; i < this.countList.length; i++) {
			console.log(" (" + (i + 1) + ") -> " + this.countList[i]);
		}
		console.log("\n ==================\n");
	}
	// ----------------------------
}

// exports class
export default SkimmiaChallengeCounter;
// ----------------------------
