import ThrMathEnvironment from "../src/thr-math-environment"

/**
 * Dummy test
 */
describe("Dummy test", () => {
    it("ThrMathEnvironment is instantiable", () => {
        const tme = new ThrMathEnvironment();
        expect(tme).toBeInstanceOf(ThrMathEnvironment)
    });

    it("works if true is truthy", () => {
        const tme = new ThrMathEnvironment();
        expect(tme.test('Thorsten')).toBeTruthy();
        expect(tme.test('Torsten')).toBeFalsy();
    });
})
