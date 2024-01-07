const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interest = (principal * rate * time) / 100;
  let totalsum = principal + interest;
  res.json({
    totalsum: totalsum,
    interest: interest,
  });
});

app.listen(3000);
