import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//
function getCurrentDateTime() {
  const now = new Date();

  // Get the year, month, day, hours, minutes, and seconds
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Create the formatted date string
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  return formattedDateTime;
}

// const currentDateTime = getCurrentDateTime();
// console.log(currentDateTime);

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req, res) => {
  console.log("hello");
  const id = parseInt(req.params.id);
  const result = posts.find((post) => post.id === id);
  res.json(result);
});

//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
  // console.log(req.body);
  const newPost = req.body;
  newPost.date = getCurrentDateTime();
  posts.push(newPost);
  res.json(posts);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  const index = posts.findIndex((post) => post.id === id);
  const exisitingPost = posts[index];
  posts[index] = {
    id: id,
    title: body.title || exisitingPost.title,
    content: body.title || exisitingPost.title,
    author: body.author || exisitingPost.author,
    date: getCurrentDateTime(),
  };
  res.json(posts);
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  posts.splice(index, 1);
  res.json({ message: "Post Deleted" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});


db.products.insertOne({
  _id: 2,
  name: "Pencil",
  price: 0.80,
  stock: 12,
  reviews: [
    {
      authorName: "James",
      rating: 5,
      review: "Best !",
    },
    {
      authorName: "Jono",
      rating: 5,
      review: "Awesom Pencil!",
    },
  ],
});

db.products.updateOne({_id:1},{$set: {
  reviews: [
    {
      authorName: "Sally",
      rating: 5,
      review: "Best Pen ever!",
    },
    {
      authorName: "John",
      rating: 5,
      review: "Awesom Pen!",
    },
  ]
}})