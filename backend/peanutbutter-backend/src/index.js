// const mongoose = require('mongoose');
// const app = require('./app');
// const config = require('./config/config');
// const logger = require('./config/logger');
const express = require("express");
const app = express();
const getRawBody = require("raw-body");
const crypto = require("crypto");
require("dotenv").config();
const secretKey = process.env.SHOPIFY_SECRET_KEY;
const { ThirdwebSDK } = require("@thirdweb-dev/sdk");
const { Shopify, DataType } = require("@shopify/shopify-api");

// Listen for requests to the /webhooks/orders/create route
app.post("/webhooks/orders/create", async (req, res) => {
  console.log("Order event received!");

  // Below, we're verifying the webhook was sent from Shopify and not a potential attacker
  // Learn more here: https://shopify.dev/apps/webhooks/configuration/https#step-5-verify-the-webhook
  const hmac = req.get("X-Shopify-Hmac-Sha256");
  const body = await getRawBody(req);
  const hash = crypto
    .createHmac("sha256", secretKey)
    .update(body, "utf8", "hex")
    .digest("base64");

// Compare our hash to Shopify's hash
if (hash === hmac) {
  res.sendStatus(200);
} else {
  res.sendStatus(403);
}
});


app.listen(3000, () => console.log("Example app listening on port 3000!"));


// let server;
// mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
//   logger.info('Connected to MongoDB');
//   server = app.listen(config.port, () => {
//     logger.info(`Listening to port ${config.port}`);
//   });
// });

// const exitHandler = () => {
//   if (server) {
//     server.close(() => {
//       logger.info('Server closed');
//       process.exit(1);
//     });
//   } else {
//     process.exit(1);
//   }
// };

// const unexpectedErrorHandler = (error) => {
//   logger.error(error);
//   exitHandler();
// };

// process.on('uncaughtException', unexpectedErrorHandler);
// process.on('unhandledRejection', unexpectedErrorHandler);

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM received');
//   if (server) {
//     server.close();
//   }
// });
