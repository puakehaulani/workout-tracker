// ROUTES to mirror API.js

// index.html get last workout GET /api/workouts

// stats.html get workouts in range GET /api/workouts/range

// exercise.html create workout POST /api/workouts

// index.html add exercise(data) PUT /api/workouts/:id

const router = require("express").Router();
const Workout = require("../models/workout.js");

// router.post("/api/workout", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/workout", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
