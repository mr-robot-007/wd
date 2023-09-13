import express from "express"
import axios from "axios"
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";

const API_KEY = "00a669100dmsh079de9b0f25970bp1dbccbjsn44bf83d7d450"


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


const config = {
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
      }
}
app.get("/",async(req,res) => {
    try {
        const result = await axios.get(API_URL + '1/' ,config);
        console.log(result.data);
        const _content = {
            ch_num : result.data.chapter_number,
            ch_name : result.data.name,
            summary : result.data.chapter_summary,
            hindi : result.data.chapter_summary_hindi,
        }
        console.log(req.body);
        res.render("index.ejs",{content : _content});
    } catch(error) {
        console.log(error.message)
    }
});

app.post("/", async(req,res) => {
    try {
        const result = await axios.get(API_URL + `${req.body.ch_num}/` ,config);
        console.log(result.data);
        const _content = {
            ch_num : result.data.chapter_number,
            ch_name : result.data.name,
            summary : result.data.chapter_summary,
            hindi : result.data.chapter_summary_hindi,
        }
        console.log(req.body);
        res.render("index.ejs",{content : _content});
    } catch(error) {
        console.log(error.message)
    }
})


app.listen(port,(req,res) => {
    console.log("Listing on Port : " + port);
})