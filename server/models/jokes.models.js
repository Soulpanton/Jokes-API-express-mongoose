const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be a least 10 characters long Brothaa"]
    },
    punchline: {
        type: String,
        required: [true, "Must have a punchline dude"],
        minlength: [3, "punchline should be at least 3 characters long my man"]
    },
})

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;