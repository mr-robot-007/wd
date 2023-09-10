import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

var todayTodos = [];
var workTodos = [];

var work = false;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var today = new Date();
  var day = today.getDate();
  work = false;
  res.render("index.ejs", { tDate: "Saturday" , items: todayTodos });
});

app.post("/", (req, res) => {
  var todo = req.body.mytodo;
  var todos = todayTodos;
  if(work) {
    workTodos.push(todo);
    todos = workTodos;
  }
  else{
    todayTodos.push(todo);
    todos = todayTodos
  }
  res.render("index.ejs",{items: todos});
});


app.get("/work", (req,res) => {
  work = true;
  res.render("index.ejs", { tDate: "Work List" , items: workTodos });
})

app.listen(port, () => {
  console.log("Listening on port 3000");
});
