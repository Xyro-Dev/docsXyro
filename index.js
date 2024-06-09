const express = require('express');
const app = express();

app.use = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname, "docs.html");
});

app.get("/playground", (req, res) => {
  res.sendFile(path.join(__dirname, "playground.html")); 
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});