const mongoose = require("mongoose")
const Movie = mongoose.model('Movie')

const createMovie = async function (data) {
    let movie = new Movie()
    movie.name = data.name
    movie.genre = data.genre
    movie.release = data.releaseTime
    movie.description = data.description
    movie = await movie.save()
    return { movie: movie }
}

const getListMovie = async function(){
    let listMovie = await Movie.find({})
    return { listMovie: listMovie}
}


module.exports = {
    createMovie: createMovie,
    getListMovie: getListMovie,

}