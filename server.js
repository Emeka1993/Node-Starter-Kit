const express = require("express");
const app = express();

app.listen(3001, function () {
console.log("Server is listenting on port 3001. ready to accept request!");
});

// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
//app.get("/", function (req, res) {
    //res.send("Hello World!");
  //});

  //app.get("/node", function (req, res) {
    //res.send("World");
  //});

  app.get("/even", function (req, res) {
      console.log(req.query);
      if (req.query.number) {
      let oddOrEven = req.query.number % 2 === 0;
      let reply = { number: req.query.number, answer: oddOrEven};
      res.json(reply);
      } else {
          res.json({ error: "You need to provide a number"});
      }
  });


