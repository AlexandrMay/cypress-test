import { defineConfig } from "cypress";
import { initPlugin } from "cypress-plugin-snapshots/plugin";

export default defineConfig({
  projectId: 'auraac',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    "cypress-plugin-snapshots": {
      "imageConfig": {
        "threshold": 0.01
      }
    }
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {

      initPlugin(on, config);

      // implement node event listeners here
      on("task", {
        logToConsole(message) {
          console.log(message);
          return null;
        }
      });
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
        launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      return config;
    },
    baseUrl: "http://localhost:5001/",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/2-advanced-examples", "**/__snapshots__/*", "**/__image_snapshots__/*"],
  },
});
