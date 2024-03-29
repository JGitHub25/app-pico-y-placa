//Imports
const express = require("express");
require("dotenv").config();

//Server
const app = express();

//Parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>PICO Y PLACA app is live!</h1>");
});

//Email
const sendEmail = require("./controllers/sendEmails");
app.get("/send", sendEmail);

//NOT FOUND and Error handler
const errorHandlerMiddleware = require("./middleware/error-handler");
const NotFoundMiddleware = require("./middleware/not-found");

app.use(NotFoundMiddleware);
app.use(errorHandlerMiddleware);

//Start server
const port = 3000;
app.listen(port, () => {
  console.log(`-------App in ${process.env.NODE_ENV} stage.-------`);
  console.log(`Server is listening on port ${port}...`);
});
