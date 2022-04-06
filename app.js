const express = require("express");

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://127.0.0.1:8020",
    "http://localhost:3000",
    "http://127.0.0.1:9000",
    "http://localhost:3001",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, DELETE, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});

app.use(express.json());

app.listen("http://jsonplaceholder.typicode.com/users", () => {
  console.log("Server started");
});
