const compiler = require("../utils/compiler");

describe("typescript page folder", () => {
  describe("should complied successfully", () => {
    it("when the code uses only static known page modules", async () => {
      const configurationFilename =
        "test/it/code-samples/pages/static-code/tsconfig.json";

      const result = compiler(configurationFilename);
      expect(result.length).toEqual(0);
    });
    it("when the code uses page modules and dynamic elements that are available on the page", () => {});
  });
  describe("should NOT complied successfully", () => {
    it("when the code uses page modules and dynamic elements that are NOT available on the page", () => {});
    it("when the code uses unknown modules", () => {});
    it("when the code uses backend modules", () => {});
    it("when the code uses public modules", () => {});
  });
});
