const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expenditureRouter = require("./routes/expenditure");

const app = express();
const port = process.env.PORT || 3000;
const db =
  "mongodb+srv://steins:steins@cluster0.ajqocff.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(expenditureRouter);

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
