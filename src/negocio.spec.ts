import ventaDolares, { compraDolares } from "./negocio";
expect(ventaDolares(100)).toBe(360);
expect(compraDolares(100)).toBe(350);

describe("USD and PEN exchanges", () => {
  test("should return 350 for buy 100 USD", () => {
    expect(compraDolares(100)).toBe(350);
  });
  test("should return 350 for sell 100 USD", () => {
    expect(ventaDolares(100)).toBe(360);
  });
});
