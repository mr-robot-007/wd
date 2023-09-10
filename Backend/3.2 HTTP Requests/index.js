import express from "express";
const app = express();
const port = 3000;


app.get("/",(req,res) => {
  res.send("<h1>Home Page</h1>");
})

app.get("/contact",(req,res) => {
  res.send("<h1><a href = '/about' >About </a></h1>")
})

app.get("/about",(req,res) => {
  res.send("<h1><a href = '/' >Home Page</a></h1>")
})


app.post("/register",(req,res)=> {
  res.sendStatus(201);
  console.log(req.body);
});

app.put("/user/anuj",(req,res)=> {
  res.sendStatus(200);
})
app.patch("/user/anuj",(req,res)=> {
  res.sendStatus(200);
})
app.delete("/user/anuj",(req,res)=> {
  res.sendStatus(2000);
})


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
