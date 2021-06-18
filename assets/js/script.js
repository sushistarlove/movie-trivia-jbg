//parent element for all quiz content
const parentElForQuiz = $('#parent-El');
//question one variables
const questionOne = $('#questionOne');
const questionOneMovieDescription = $('#questionOneMovieDescription');
const questionOneMoviePoster = $('#questionOneMoviePoster');
const questionOneInput = $('#questionOne-input');
const submitBtnInputOne = $('#SubmitBtnforQuestionOne');

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
const submitBtnInputFive = $('#SubmitBtnforQuestionFive');

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

//parent element for displaying a users results
const resultsEl = $('#viewResults');
//where final score will be appended to 
const finalScoreEl = $('#finalScore');

//submit button
const submitBtn = $('#submitBtn');

//submit button for results page
const highScoreSubmitBtn = $('#SubmitBtnForHighScore');

//play again button
const playAgainBtn = $('#playAgain');

//input field for submiting high score
const inputHighScoresPage = $('#InputForSubmitHighScore');

//set points to 0
let points = 0;
//set accurate to false, this will be used on our guess the movie questions, it will be called when we display the results after the user submited their answers
let Ques1accurate = false;
let Ques5accurate = false;
//list of movie names to pass through our OMD api
const movieNames = ['Lone Survivor', 'The Hangover', 'cheaper by the dozen', 'Shrek', 'Mary Poppins', 'Wedding Crashers', 'The Irishman', 'The Godfather', 'Pulp Fiction', 'The Dark Knight', 'Titanic', 'Night at the Museum', 'Jaws', 'Die Hard'];

//generates a random number between zero and the length of our list of movies
let randomIndex = Math.floor(Math.random() * (movieNames.length - 1) + 1);

const highScoreUl = $("#highScoresHousingEl")

//first half of the url to be fetched
let requestedUrlbase = 'http://www.omdbapi.com/?t=';
let moveTitle = movieNames[randomIndex]; //grab a random movie name using the index of whatever number was generated
let requestedUrlEnd = '&plot=full&apikey=38928375&';

let readyUrl = requestedUrlbase + moveTitle + requestedUrlEnd;

// let requestedUrl = 'http://www.omdbapi.com/?t=Major+League&plot=full&apikey=38928375&';

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
    submitBtnInputOne.on('click', () => {
        if(questionOneInput.val() == data.Title) {
            points++;
            Ques1accurate = true;
       
        } else {
            points = points;
            Ques1accurate = false;
        }
        questionOneInput.val('');
        
    })
    
    
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
    submitBtnInputFive.on('click', () => {
        if(questionFiveInput.val() == data.Title) {
            points++;
            Ques5accurate = true;

        } else {
   
            points = points;
            Ques5accurate = false;
        }
        questionFiveInput.val('');
        
    })
    
    
    
    
})


let triviaUrl = 'https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple&encode=url3986';

//this fetch will contain our multiple choice questions
//question two, question four, question 6, question 8, question 9
fetch(triviaUrl)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log('---------------');
    console.log(data);
    //below is all the replace methods needed on each question, hopfully the same symbols are used for the options
    // .replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ')
    
    //question two
    let readyQuestionTwo = data.results[0].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionTwoOptionA = data.results[0].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionTwoOptionB = data.results[0].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionTwoOptionC = data.results[0].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionTwoOptionD = data.results[0].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    
    // put all choices into an array
    let q2choices = [readyQuestionTwoOptionA, readyQuestionTwoOptionB, readyQuestionTwoOptionC, readyQuestionTwoOptionD];
    let q2OptionEls = [questionTwoOptionA, questionTwoOptionB, questionTwoOptionC, questionTwoOptionD];
    console.log(q2choices);
    // randomize choices
    q2choices = q2choices.sort(() => Math.random() - 0.5);
    
    console.log(q2choices);
    
    questionTwo.text(readyQuestionTwo);
    questionTwoOptionA.text(q2choices[0]);
    questionTwoOptionB.text(q2choices[1]);
    questionTwoOptionC.text(q2choices[2]);
    questionTwoOptionD.text(q2choices[3]);
    
    KeepScore(q2OptionEls, data, 0);
    
    //question 4
    let readyQuestionFour = data.results[1].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionFourOptionA = data.results[1].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionFourOptionB = data.results[1].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionFourOptionC = data.results[1].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionFourOptionD = data.results[1].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    
    // put all choices into an array
    let q4choices = [readyQuestionFourOptionA, readyQuestionFourOptionB, readyQuestionFourOptionC, readyQuestionFourOptionD];
    let q4OptionEls = [questionFourOptionA, questionFourOptionB, questionFourOptionC, questionFourOptionD];
    console.log(q4choices);
    // randomize choices
    q4choices = q4choices.sort(() => Math.random() - 0.5);
    
    console.log(q4choices);
    
    questionFour.text(readyQuestionFour);
    questionFourOptionA.text(q4choices[0]);
    questionFourOptionB.text(q4choices[1]);
    questionFourOptionC.text(q4choices[2]);
    questionFourOptionD.text(q4choices[3]);
    KeepScore(q4OptionEls, data, 1);
    
    //question 6
    let readyQuestionSix = data.results[2].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionSixOptionA = data.results[2].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionSixOptionB = data.results[2].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionSixOptionC = data.results[2].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionSixOptionD = data.results[2].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    
    // put all choices into an array
    let q6choices = [readyQuestionSixOptionA, readyQuestionSixOptionB, readyQuestionSixOptionC, readyQuestionSixOptionD];
    let q6OptionsEl = [questionSixOptionA, questionSixOptionB, questionSixOptionC, questionSixOptionD];
    console.log(q6choices);
    // randomize choices
    q6choices = q6choices.sort(() => Math.random() - 0.5);
    
    console.log(q6choices);
    
    questionSix.text(readyQuestionSix);
    questionSixOptionA.text(q6choices[0]);
    questionSixOptionB.text(q6choices[1]);
    questionSixOptionC.text(q6choices[2]);
    questionSixOptionD.text(q6choices[3]);
    
    KeepScore(q6OptionsEl, data, 2);
    
    //question 8
    let readyQuestionEight = data.results[3].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionEightOptionA = data.results[3].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionEightOptionB = data.results[3].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionEightOptionC = data.results[3].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionEightOptionD = data.results[3].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    
    // put all choices into an array
    let q8choices = [readyQuestionEightOptionA, readyQuestionEightOptionB, readyQuestionEightOptionC, readyQuestionEightOptionD];
    let q8OptionsEl = []
    console.log(q8choices);
    // randomize choices
    q8choices = q8choices.sort(() => Math.random() - 0.5);
    q8OptionsEl = [questionEightOptionA, questionEightOptionB, questionEightOptionC, questionEightOptionD];
    
    console.log(q8choices);
    
    questionEight.text(readyQuestionEight);
    questionEightOptionA.text(q8choices[0]);
    questionEightOptionB.text(q8choices[1]);
    questionEightOptionC.text(q8choices[2]);
    questionEightOptionD.text(q8choices[3]);
    
    KeepScore(q8OptionsEl, data, 3);
    
    //question 9
    let readyQuestionNine = data.results[4].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionNineOptionA = data.results[4].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionNineOptionB = data.results[4].incorrect_answers[0].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionNineOptionC = data.results[4].incorrect_answers[1].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionNineOptionD = data.results[4].incorrect_answers[2].replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    
    // put all choices into an array
    let q9choices = [readyQuestionNineOptionA, readyQuestionNineOptionB, readyQuestionNineOptionC, readyQuestionNineOptionD];
    let q9OptionsEl = [questionNineOptionA, questionNineOptionB, questionNineOptionC, questionNineOptionD];
    console.log(q9choices);
    // randomize choices
    q9choices = q9choices.sort(() => Math.random() - 0.5);
    
    console.log(q9choices);
    
    questionNine.text(readyQuestionNine);
    questionNineOptionA.text(q9choices[0]);
    questionNineOptionB.text(q9choices[1]);
    questionNineOptionC.text(q9choices[2]);
    questionNineOptionD.text(q9choices[3]);
    
    KeepScore(q9OptionsEl, data, 4);
    
    
    //create fetch with true or false url and do remaining questions
    //brainstorm randomizing the order of your li's
    
})

let trueFalseUrlAPI = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean&encode=url3986';

fetch(trueFalseUrlAPI)
.then((response) => {
    return response.json();
})
.then((data) => {
    
    //do questions 3, 7, 10
    let readyQuestionThree = data.results[0].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionSeven = data.results[1].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    let readyQuestionTen = data.results[2].question.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word').replaceAll('%E2%80%99', '');
    
    questionThree.text(readyQuestionThree);
    questionSeven.text(readyQuestionSeven);
    questionTen.text(readyQuestionTen);
    
    let q3OptionsEl = [questionThreeOptionA, questionThreeOptionB];
    let q7OptionsEl = [questionSevenOptionA, questionSevenOptionB];
    let q10OptionsEl = [questionTenOptionA, questionTenOptionB];
    
    KeepScore(q3OptionsEl, data, 0);
    KeepScore(q7OptionsEl, data, 1);
    KeepScore(q10OptionsEl, data, 2);
    
    
    
    
})

function KeepScore(myArray, Info, Index) {
    
    let answerSelected = false;
    let clicked = [];
    for (let currentOption = 0; currentOption < myArray.length; currentOption++) {
        myArray[currentOption].on('click', (event) => {
            let readyCompareVal = Info.results[Index].correct_answer.replaceAll('%20', ' ').replaceAll('%3A%20', ' ').replaceAll('%3F', ' ').replaceAll('%27s%201989%20', ' ').replaceAll('%20%22', ' ').replaceAll('%22', ' ').replaceAll('%28', ' ').replaceAll('%29', ' ').replaceAll('%27', ' ').replaceAll('%60', ' ').replaceAll('%2C', '"').replaceAll('%21', '"').replaceAll('%26', '&').replaceAll('%3A', ' ').replaceAll('%2', ' ').replaceAll('%C3%B1%C3%', ' ').replaceAll('%E2%80%99', '').replaceAll('Fuck', 'Freak').replaceAll('fuck', 'freak').replaceAll('Fucker', 'Freaker').replaceAll('fucker', 'freaker').replaceAll('Bitch', 'B-word').replaceAll('bitch', 'b-word').replaceAll('Shit', 'S-word').replaceAll('shit', 's-word').replaceAll(' Ass ', 'a-word').replaceAll(' ass ', 'a-word');
            thisOption = $(event.target);
            if (clicked.length == 0) {
                clicked.push(thisOption);
                clicked[0].addClass('clicked');
                answerSelected = true;
                
                
            }
            if (clicked.length == 1 && answerSelected === true) {
                clicked[0].removeClass('clicked');
                clicked.shift();
                clicked.push(thisOption);
                
                for (let i = 0; i < clicked.length; i++) {
                    clicked[i].addClass('clicked');
                    
                }
            }
            
            if (thisOption.text() == readyCompareVal) {
                
                points++;
            } else {
                points = points;
            }
        })
    }
    
    
    
}

function guessTheMovieGrading(input, MovieTitle) {
    if (input.val() == MovieTitle) {
        points++;
        alert('correct');
    } else {
        alert('wrong');
        points = points;
    }
}


let testArray = ['this option'];
console.log(testArray.length);

function displayResults() {
    console.log(q8OptionsEl);
}

function SubmitAnswers() {
    parentElForQuiz.html('');
    resultsEl.css('display', 'block');
    finalScoreEl.text('Final Score: ' + points + '/' + '10');
    
    
}

submitBtn.on('click', SubmitAnswers);

playAgainBtn.on('click', () => {
    points = 0;
    location.reload();
})

// High Score submission

let allScores = []

var localStorageGet = JSON.parse(localStorage.getItem("highscore"))
if (localStorageGet !== null) {
    allScores = localStorageGet;
};


highScoreSubmitBtn.on('click', function() {
    console.log(points);
    console.log(inputHighScoresPage.val());
    // let newItem = "name: " + nameInputEl.value;
    // var newScore = {
    //     name: inputHighScoresPage.val(),
    //     score: points
    // }
    var newScore = inputHighScoresPage.val() + ": " + points
    allScores.push(newScore);
    console.log(allScores);

    localStorage.setItem('highscore', JSON.stringify(allScores));
    input()
});



function input (){
    // console.log(localStorage.getItem("highscore"));
    var tobesorted = JSON.parse(localStorage.getItem("highscore"));
    // tobesorted.sort(function (a,b){
    //     return a.score + b.score;
    // });
    // console.log(tobesorted);

    for (let i = 0; i < tobesorted.length; i++) {
        let newItem = $("<li></li>");
        newItem.addClass("highscoreItem");
        newItem.text(tobesorted[i]);
        highScoreUl.append(newItem);
        
    }


    // document.querySelector("#playername").textContent = tobesorted[0].name;
}

input()
