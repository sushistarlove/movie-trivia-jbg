//question one variables
const questionOne = $('#questionOne');
const questionOneMovieDescription = $('#questionOneMovieDescription');
const questionOneMoviePoster = $('#questionOneMoviePoster');
const questionOneInput = $('#questionOne-input');

//question two variables
const questionTwo = $('#questionTwo');
const questionTwoOptionA = $('#QuestionTwoOptionA');
const questionTwoOptionB = $('#QuestionTwoOptionB');
const questionTwoOptionC = $('#QuestionTwoOptionC');
const questionTwoOptionD = $('#QuestionTwoOptionD');

//question three variables
const questionThree = $('#questionThree');
const questionThreeOptionA = $('#QuestionThreeOptionA');
const questionThreeOptionB = $('#QuestionThreeOptionB');

//question four variables
const questionFour = $('#questionFour');
const questionFourOptionA = $('#QuestionFourOptionA');
const questionFourOptionB = $('#QuestionFourOptionB');
const questionFourOptionC = $('#QuestionFourOptionC');
const questionFourOptionD = $('#QuestionFourOptionD');

//question five variables
const questionFive = $('#questionFive');
const questionFiveMovieDescription = $('#questionFiveMovieDescription');
const questionFiveMoviePoster = $('#questionFiveMoviePoster');
const questionFiveInput = $('#questionFive-input');

//question six variables
const questionSix = $('#questionSix');
const questionSixOptionA = $('#QuestionSixOptionA');
const questionSixOptionB = $('#QuestionSixOptionB');
const questionSixOptionC = $('#QuestionSixOptionC');
const questionSixOptionD = $('#QuestionSixOptionD');

//question seven variables
const questionSeven = $('#questionSeven');
const questionSevenOptionA = $('#QuestionSevenOptionA');
const questionSevenOptionB = $('#QuestionSevenOptionB');

//question eight variables
const questionEight = $('#questionEight');
const questionEightOptionA = $('#QuestionEightOptionA');
const questionEightOptionB = $('#QuestionEightOptionB');
const questionEightOptionC = $('#QuestionEightOptionC');
const questionEightOptionD = $('#QuestionEightOptionD');

//question nine variables
const questionNine = $('#questionNine');
const questionNineOptionA = $('#QuestionNineOptionA');
const questionNineOptionB = $('#QuestionNineOptionB');
const questionNineOptionC = $('#QuestionNineOptionC');
const questionNineOptionD = $('#QuestionNineOptionD');

//question ten variables
const questionTen = $('#questionTen');
const questionTenOptionA = $('#QuestionTenOptionA');
const questionTenOptionB = $('#QuestionTenOptionB');

//list of movie names to pass through our OMD api
const movieNames = ['Lone Survivor', 'The Hangover', 'cheaper by the dozen', 'Shrek', 'Mary Poppins', 'Wedding Crashers', 'The Irishman', 'The Godfather', 'Pulp Fiction', 'The Dark Knight', 'Titanic', 'Night at the Museum', 'Jaws', 'Die Hard'];

//generates a random number between zero and the length of our list of movies
let randomIndex = Math.floor(Math.random() * (movieNames.length - 1) + 1);

//first half of the url to be fetched
let requestedUrlbase = 'http://www.omdbapi.com/?t=';
let moveTitle = movieNames[randomIndex]; //grab a random movie name using the index of whatever number was generated
let requestedUrlEnd = '&plot=full&apikey=38928375&';

let readyUrl = requestedUrlbase + moveTitle + requestedUrlEnd;

let requestedUrl = 'http://www.omdbapi.com/?t=Major+League&plot=full&apikey=38928375&';

const pEl = document.getElementById('textEl');
const plot = document.getElementById('plot');
const movieImgEl = document.getElementById('move-pic');

fetch(readyUrl)

.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    let readyPlotQuestionOne = data.Plot.replaceAll('&quot', '"');
    questionOneMovieDescription.text(readyPlotQuestionOne);

})
//random index will never be zero so its safe to assign newIndex to randomIndex--, the goal is to avoid the same number being generated
let newIndex = randomIndex - 1;

let newMovieTitle = movieNames[newIndex];
let newreadyUrl = requestedUrlbase + newMovieTitle + requestedUrlEnd;

//this fetch will contain our guess the movie question!!!
fetch(newreadyUrl)
.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log(data);
    let readyPlotQuestionFive = data.Plot.replaceAll('&quot', '"');
    questionFiveMovieDescription.text(readyPlotQuestionFive);
    
    
})


let triviaUrl = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple&encode=url3986';

//this fetch will contain our multiple choice questions
//question two, question four, question 6, question 8, question 9
fetch(triviaUrl)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    //below is all the replace methods needed on each question, hopfully the same symbols are used for the options
    // .replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ')
    let readyQuestionTwo = data.results[0].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionTwoOptionA = data.results[0].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionTwoOptionB = data.results[0].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionTwoOptionC = data.results[0].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionTwoOptionD = data.results[0].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    
    questionTwo.text(readyQuestionTwo);
    questionTwoOptionA.text(readyQuestionTwoOptionA);
    questionTwoOptionB.text(readyQuestionTwoOptionB);
    questionTwoOptionC.text(readyQuestionTwoOptionC);
    questionTwoOptionD.text(readyQuestionTwoOptionD);


    let readyQuestionFour = data.results[1].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionFourOptionA = data.results[1].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionFourOptionB = data.results[1].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionFourOptionC = data.results[1].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionFourOptionD = data.results[1].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    
    questionFour.text(readyQuestionFour);
    questionFourOptionA.text(readyQuestionFourOptionA);
    questionFourOptionB.text(readyQuestionFourOptionB);
    questionFourOptionC.text(readyQuestionFourOptionC);
    questionFourOptionD.text(readyQuestionFourOptionD);

    let readyQuestionSix = data.results[2].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionSixOptionA = data.results[2].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionSixOptionB = data.results[2].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionSixOptionC = data.results[2].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    let readyQuestionSixOptionD = data.results[2].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ');
    
    questionSix.text(readyQuestionSix);
    questionSixOptionA.text(readyQuestionSixOptionA);
    questionSixOptionB.text(readyQuestionSixOptionB);
    questionSixOptionC.text(readyQuestionSixOptionC);
    questionSixOptionD.text(readyQuestionSixOptionD);

    //do question 8 and 9
    //create fetch with true or false url and do remaining questions
    //brainstorm randomizing the order of your li's
    
})






