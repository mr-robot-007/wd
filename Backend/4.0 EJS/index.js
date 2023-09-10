import express from "express";

const app = express();
const port = 3000;

const today = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = today.getDay();

let type = "a weekday";
let adv = "it's time to work here";

if (day === 0 || day === 6) {
  type = "a weekend";
  adv = "its time to enjoy";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(3000, () => {
  console.log(`Listening on Port : ${port}`);
});
