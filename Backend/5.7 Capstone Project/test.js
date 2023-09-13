import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/',
  headers: {
    'X-RapidAPI-Key': '00a669100dmsh079de9b0f25970bp1dbccbjsn44bf83d7d450',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}