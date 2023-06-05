import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, world</h1>");
});

app.get('/about', function (req,res){
    res.send('I am a software engineer with lots of hobbies.')
})

app.listen(3000, "localhost", () => {
  console.log("Server listened on port 3000.");
});
