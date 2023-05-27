const express = require('express');
const app     = express();

const quotes = require("./store/quotes.js");



app.get("/",(req,res)=>
{
    res.status(200).sendFile(__dirname +"/views/home.html");
})

app.get("/quotes", (req,res)=>

{
    res.status(200).json(quotes);
})

app.get("/quotes/search", (req, res) => {
    const search = req.query.author;
    const filteredQuotes = quotes.filter((quote) => {
        return quote.quote.toLowerCase().includes(search.toLowerCase()) || quote.author.toLowerCase().includes(search.toLowerCase());
    });
    res.status(200).json(filteredQuotes);
});




app.get("/quotes/random", (req, res) => {
    res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
  });
  

console.log(quotes);

app.listen(3003,()=>
{ console.log("server is running on port 3003") })