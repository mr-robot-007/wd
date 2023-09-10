import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
var isUsetAuthorised = true;

function checker(req, res, next) {
    const passwd = req.body.password;
    if (passwd == "hacker") {
        isUsetAuthorised = false;
    } else {
        isUsetAuthorised = true;
    }
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(checker);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isUsetAuthorised) {
    res.sendFile(__dirname + "/public/index.html");
  } else {
    res.sendFile(__dirname + "/public/secret.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on Port : ${port}`);
});
