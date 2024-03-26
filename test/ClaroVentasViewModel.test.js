const webViewModel = require("../main/domain/ClaroVentasViewModel")

it("getClaroVentas", () => {
  const result = webViewModel.getUrlClaroVentas();
  expect(typeof result).toBe("string");
  expect(result).toMatch(/^https?:\/\/[^\s/$.?#].[^\s]*$/);
})
