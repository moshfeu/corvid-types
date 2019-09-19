const ts = require("typescript");

module.exports = function compiler(configFilePath) {
  const compilerErrors = [];
  const host = ts.sys;
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    configFilePath,
    undefined,
    host
  );

  const { options, fileNames } = parsedCmd;

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  console.log(`compiling ${fileNames.length} files`, fileNames);

  const emitResult = program.emit(undefined, undefined, undefined, undefined, {
    before: [],
    after: [],
    afterDeclarations: []
  });

  ts.getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)
    .forEach(diagnostic => {
      let msg = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      if (diagnostic.file) {
        const {
          line,
          character
        } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        msg = `${diagnostic.file.fileName} (${line + 1},${character +
          1}): ${msg}`;
      }
      compilerErrors.push(msg);
    });

  return compilerErrors;
};
