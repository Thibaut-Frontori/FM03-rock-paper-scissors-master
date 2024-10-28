import express from 'express';

const app = express();
const port = 3000;
const __dirname = import.meta.dirname;
app.use(express.static('public'));

// créer une première route
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/views/index.html");

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

