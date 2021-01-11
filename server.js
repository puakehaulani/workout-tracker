const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const User = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// ROUTES to mirror API.js

// index.html get last workout GET /api/workouts

// stats.html get workouts in range GET /api/workouts/range

// exercise.html create workout POST /api/workouts

// index.html add exercise(data) PUT /api/workouts/:id

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});