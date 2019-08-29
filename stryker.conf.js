module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mochaOptions:{files:"test/*.test.js"},
    mutate:["src/Car.js","src/Frog.js","src/Log.js","src/Surface.js","src/HorizontalMovingSurface.js"]

  });
};
