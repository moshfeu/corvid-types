const compiler = require("../utils/compiler");

describe("typescript backend folder", () => {
  describe("should complied successfully", () => {
    it("when the code uses only backend modules", async () => {
      const configurationFilename =
        "test/it/code-samples/backend/tsconfig.json";

      const result = compiler(configurationFilename);
      expect(result.length).toEqual(0);
    });
  });
});
