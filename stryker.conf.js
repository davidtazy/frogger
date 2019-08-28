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
    mutate:["Car.js","Frog.js","Log.js","Surface.js","HorizontalMovingSurface.js"]

  });
};
