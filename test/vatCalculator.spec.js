import {
  multiply,
  multiplyBy2,
  sum,
  sumRows,
  calculateVAT,
  calculateVATForRows,
} from "../src/vatCalculator";

describe("index", () => {
  it("sum", () => {
      expect(sum(2, 3)).toEqual(5);
  });
  it("sumRows", () => {
    expect(sumRows([1, 2, 3, 4])).toEqual(10);
  });
  it("calculateVAT", () => {
    expect(calculateVAT(10)).toEqual(2.4);
  });
  it("calculateVATForRows", () => {
    expect(calculateVATForRows([1, 2, 3, 4])).toEqual(2.4);
  });
  it("multiply", () => {
    expect(multiply(2, 2)).toEqual(4);
  });
  it("multiplyBy2", () => {
    expect(multiplyBy2(2)).toEqual(4);
  });
});
