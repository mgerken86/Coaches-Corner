const mongoose = require('../controllers/connection')

// MODELS
const { Schema, model } = mongoose

//athlete schema
const workoutSchema = new Schema({
    date: Date,
    maxFinger: Number,
    maxPullup: Number,
    core: Number,
    endurance: Number
})

// athlete model
const Workout = model('Workout', workoutSchema)

module.exports = Workout