const compiler = require("../utils/compiler");

describe("typescript public folder", () => {
  describe("should complied successfully", () => {
    it("when the code uses only backend modules", async () => {
      const configurationFilename = "test/it/code-samples/public/tsconfig.json";

      const result = compiler(configurationFilename);
      console.log(result);
      expect(result.length).toEqual(0);
    });
  });
});
