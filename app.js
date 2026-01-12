const express = require("express");

/**
 * Build and configure the Express application.
 *
 * Keeping app construction separate from server startup avoids side effects when
 * importing the app in tests (e.g., unintended listening sockets / open handles).
 */
function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    return res.status(200).json({
      message: "Hello World!",
    });
  });

  return app;
}

module.exports = createApp();
