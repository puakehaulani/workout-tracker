const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouttracker";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

// ROUTES to mirror API.js

app.get("/", (req, res) => {
    res.send(index.html);
});



// Listen on port 3000
app.listen(8080, () => {
    console.log("App running on port 8080!");
});
