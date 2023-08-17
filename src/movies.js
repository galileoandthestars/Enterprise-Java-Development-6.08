// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((movie) => movie.director);
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergMovies = moviesArray.filter((movie) => {
        if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) return movie;
    });
    return stevenSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray.map((movie) => typeof movie.score === 'number' ? movie.score : 0); //checks if the movie has a score or not
    const totalScores = scores.reduce((counter, currentValue)=> counter + currentValue, 0);
    if(totalScores === 0) return 0;
    const averageScore = totalScores/scores.length;
    const roundedAverage = Math.round(averageScore * 100) / 100;
    return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        if(movie.genre.includes('Drama')) return movie;
    })
    const dramaScores = dramaMovies.map((movie) => movie.score);
    const totalScores = dramaScores.reduce((counter, currentValue) => counter + currentValue, 0);
    if(totalScores === 0) return 0;
    const averageScore = totalScores/dramaScores.length;
    const roundedAverage = Math.round(averageScore * 100) / 100;
    return roundedAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year; //ascending
        } else {
            return a.title.localeCompare(b.title); 
        }
    });

    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovies = moviesArray.slice().sort((a,b) => a.title.localeCompare(b.title))
    const movieTitles = orderedMovies.slice(0, 20).map((movie) => movie.title);
    return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
