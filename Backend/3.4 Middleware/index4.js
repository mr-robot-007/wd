import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

function bandGenerator(req,res,next) {
  console.log(req.body);
  // bandName = req.body["street"] + req.body["pet"];
  bandName = req.body.street + req.body.pet;
  next();
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bandGenerator);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    // `<h1>Your Band Name is : </h1> <h2>${req.body.street} ${req.body.pet} </h2>`
    `<h1>Your Band Name is : </h1> <h2>${bandName} </h2>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
