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

// index.html get last workout GET /api/workouts

// stats.html get workouts in range GET /api/workouts/range

// exercise.html create workout POST /api/workouts

// index.html add exercise(data) PUT /api/workouts/:id


app.listen(8080, () => {
    console.log("App running on port 8080!");
});
