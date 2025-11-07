import { isDecimal } from "@/utils/numbers";

describe("isDecimal", () => {
  test("1.6", () => {
    expect(isDecimal(1.6)).toEqual(true);
  });

  test("1.23456", () => {
    expect(isDecimal(1.23456)).toEqual(true);
  });

  test("0.1234", () => {
    expect(isDecimal(0.1234)).toEqual(true);
  });

  test("-4.5", () => {
    expect(isDecimal(-4.5)).toEqual(true);
  });

  test("-0.12345", () => {
    expect(isDecimal(-4.5)).toEqual(true);
  });

  test("1.0", () => {
    expect(isDecimal(1.0)).toEqual(false);
  });

  test("0", () => {
    expect(isDecimal(0)).toEqual(false);
  });

  test("1", () => {
    expect(isDecimal(1)).toEqual(false);
  });

  test("1234", () => {
    expect(isDecimal(1234)).toEqual(false);
  });
});
