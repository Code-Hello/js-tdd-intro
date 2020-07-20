const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

// TESTS
// assert.strictEqual(typeof capitalizeFirstLetters, "function");
// assert.strictEqual(capitalizeFirstLetters.length, 1);
// assert.strictEqual(
//     capitalizeFirstLetters("i am learning TDD"),
//     "I Am Learning TDD"
// );
// assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// assert.strictEqual(capitalizeFirstLetters(""), "");

// TESTS WITH MOCHA
describe("capitalizeFirstLetters", () => {
    it("is a function accepting one argument", () => {
        assert.strictEqual(typeof capitalizeFirstLetters, "function");
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms "i am learning TDD" correctly', () => {
        assert.strictEqual(
            capitalizeFirstLetters("i am learning TDD"),
            "I Am Learning TDD"
        );
    });

    it("works with a 1-character string", () => {
        assert.strictEqual(capitalizeFirstLetters("z"), "Z");
    });

    it("works with an empty string", () => {
        assert.strictEqual(capitalizeFirstLetters(""), "");
    });
});