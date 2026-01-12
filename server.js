const app = require("./app");

const port = process.env.PORT || 5000;

// Only start the HTTP server when this file is executed directly (e.g. `node server.js`).
// This prevents side effects when importing the app in tests.
if (require.main === module) {
  app.listen(port, () => {
    console.log("Listening on " + port);
  });
}

module.exports = app;
