const { request } = require("express");
const Joke = require("../models/jokes.models");


module.exports.findAllJokes = (req, res) => {
    console.log("im trying to find all the jokes")
    // mongoose command to retrieve all Jokes form the Joke table(collection)
    Joke.find()
        // add an object for best visibility
        //.then(allJokes => res.json(allJokes)) 
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({ errors: err }))

}

module.exports.createJoke = (req, res) => {
    console.log("were making a new joke brotha")
    Joke.create(req.body)
        .then(newJoke => res.json({ results: newJoke }))
        .catch(err => res.json({ errors: err }))
}

module.exports.findOne = (req, res) => {
    console.log("the joke id to find is :", req.params.jokeId)
    Joke.findOne({ _id: req.params.jokeId })
        .then(theJoke => res.json({ results: theJoke }))
        .catch(err => res.json({ errors: err }))
}

module.exports.updateJoke = (req, res) => {
    console.log("we are updating this joke", req.params.jokeId)
    Joke.findOneAndUpdate({ _id: req.params.jokeId }, req.body,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        .then(updatedJoke => res.json({ results: updatedJoke }))
        .catch(err => res.json({ errors: err }))
}

module.exports.deleteJoke = (req, res) => {
    console.log("the joke id to find is :", req.param.jokeId)
    Joke.findByIdAndDelete(req.params.jokeId)
        .then(deletedJoke => res.json({ results: deletedJoke }))
        .catch(err => res.json({ errors: err }))
}