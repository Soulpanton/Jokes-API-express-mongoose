// api endpoints in this file, similar to urls.py
const JokesControllers = require("../controllers/jokes.controllers");
const Joke = require("../models/jokes.models");


module.exports = app => {
    app.get("/api/jokes", JokesControllers.findAllJokes);
    app.post("/api/jokes/create", JokesControllers.createJoke);
    app.get("/api/jokes/:jokeId", JokesControllers.findOne);
    app.put("/api/jokes/update/:jokeId", JokesControllers.updateJoke)
    app.delete("/api/jokes/destroy/:jokeId", JokesControllers.deleteJoke)
}