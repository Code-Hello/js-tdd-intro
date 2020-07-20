const assert = require("assert");
const Rectangle = require("../Rectangle");

// TESTS WITH MOCHA
describe("Rectangle", () => {
    it("is a square", () => {
        const rectangle = new Rectangle(5, 5);
        assert.strictEqual(rectangle.isSquare(), true);
    });

    it("is not a square", () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.isSquare(), false);
    });

    it("gets area correctly", () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91);
    });

    it("gets perimeter correctly", () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getPerimeter(), 40);
    });
});