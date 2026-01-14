const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ns16uj",
  e2e: {
    baseUrl: "https://qacart-todo.herokuapp.com/",
    viewportHeight:900,
    viewportWidth:1440,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
