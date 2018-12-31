/*
 * Create a list that holds all of your cards
 */
//Sam's Notes: Create an empty array which will reference the callback function 'shuffle'

//Section 1) Variables

let cardArray = Array.from(document.querySelectorAll('.card'));
//['i.fa fa-anchor', 'i.fa fa-anchor', 'i.fa fa-bicycle', 'i.fa fa-bolt', 'i.fa fa-cube', 'i.fa fa-diamond', 'i.fa fa-diamond', 'i.fa fa-plane', 'i.fa fa-leaf', 'i.fa fa-bomb', 'i.fa fa-leaf', 'i.fa fa-bomb', 'i.fa fa-bolt', 'i.fa fa-bicycle', 'i.fa fa-plane', 'i.fa fa-cube'];
let matchedCards = 0
let cardsFlipped= [];
const restartbtn = document.querySelector('.restart');
let deck = document.querySelector('ul.deck');
let moves = 0;
let cards = document.querySelectorAll('.card');
//let allStars = document.getElementsByClassName('fa fa-star');
let allStars = document.querySelectorAll('.stars li');
let timerOff = true;
let time = 0;
let minutes = Math.floor(time/60);
let seconds = Math.floor(time%60);
let clock;
const timer = document.querySelector('.timer');




console.log(matchedCards);
console.log(minutes)

//Section 2: Event Handlers


//handles card flip click event
deck.addEventListener('click', (e) => {
    const clickTarget= e.target;
    if (clickTarget.classList.contains('card')) {
        flipCard(clickTarget);
    }
    if (cardsFlipped.length < 2) {   
        flippedCards(clickTarget);
        compareCards();
        console.log(cardsFlipped);
    };
     
})

//handles start timer event once user clicks a card
deck.addEventListener('click', (e) => {
    const clickTarget = e.Target;
    if (moves === 0) {
    if (timerOff=true) {
    startTimer();
    let timeroff = false;
};
};
})

//time display handler
if (seconds < 10) {
    timer.innerHTML = `${minutes}:0${seconds}`;
} else {
    timer.innerHTML = `${minutes}:${seconds}`;
}

//restart game handler
restartbtn.addEventListener('click', (e) => {
    alert("you clicked the restart button!")
    shuffleCards();
}
);

//adds to move counter and compares cards once 2 cards are flipped
if (cardsFlipped.length === 2) {
compareCards();
moveCounter();
console.log(moves)
};

//end game event handler
if (matchedCards == 7) {
    alert("You won! Great Job!")
toggleModal();
};



//SECTION 3: Functions

//adds to array of flipped cards once player has flipped
function flippedCards(clickTarget) {
    cardsFlipped.push(clickTarget);
    console.log('cardsFlipped');
}

//compares cards on screen as flipped by user and checks for a match, flips down if not a match
function compareCards() {
    let firstCard = cardsFlipped[0];
    let secondCard = cardsFlipped[1];
    if (firstCard.firstElementChild.className == secondCard.firstElementChild.className) {
        firstCard.classList.toggle('match');
        secondCard.classList.toggle('match')
        cardsFlipped = [];
        matchedCards = matchedCards + 1;
        console.log("It's a match!")
        console.log(matchedCards);
        moveCounter();
        starScore();
        //card.classList.add("match"); 
        //matchedCards.push(firstCard[i], secondCard[i])
    }
    else {
        cardsFlipped = [];
        console.log("Not a match! try again!")
        setTimeout( () => {
        flipCard(firstCard);
        flipCard(secondCard);
        cardsFlipped = [];
        }, 700);
        moveCounter();
        starScore();
    }
}

//flips cards on screen
function flipCard(clickTarget) {
    clickTarget.classList.toggle('open')
    clickTarget.classList.toggle('show')
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976



//included mathematical shuffle function
function shuffle() {
    var currentIndex = cardArray.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }

    return cardArray;
}

//shuffles cards on screen
function shuffleCards(){
    let cardsToShuffle = cardArray;
    //console.log ('cards to shuffle', cardsToShuffle);
    const shuffledCards = shuffle(cardsToShuffle);
    //console.log ('ShuffledCards', shuffledCards);
    for (card of shuffledCards) {
        deck.appendChild(card);
    }
}
shuffleCards();


function newGameboard() {
    let cardsFlipped = 0;
    let output = 0;
    cardArray.shuffle();
    for (var i = 0; i< cardArray.length; i++) {
        //logic for flipping all tiles down
    }
    document.getElementsByClassName('.deck').innerHTML = output;
    //this.addEventListener("load" function (resetGame))(('I\'m a new game!')
    // )
    //add event listener for resetting the game board, button functionality on html
}



//display number of moves made by the player
function moveCounter() {
    moves++;
        const displayCounter = document.querySelector('.moves');
        displayCounter.innerHTML = moves;
        console.log("You made this many moves!"+" "+ moves)
    };

//star removal based on user score
function starScore() {
    if ((moves === 12)|| (moves === 21))
    { removeStar();
    console.log('The removestar function works!');
     }
}

//removes star from scoreboard
function removeStar() {
    for (star of allStars) {
        if (star.style.display != 'none') {
           star.style.display = 'none';
           break;
        }
    }
}



//starts timer
function startTimer(){
     clock = setInterval(()=> {
        time++;
        timer.innerHTML= time;
        console.log(time);
    }, 1000)
}

function display() {
    timer.innerHTML = time;
    console.log(timer);
    console.log("why is this not working")
    if (seconds < 10) {
        timer.innerHTML = `${minutes}:0${seconds}`;
    } else {
        timer.innerHTML = `${minutes}:${seconds}`;
    }
}


//stops timer 
function stopTimer(){
    clearInterval(clock);
}

//turns modal on and off, end game screen
function toggleModal() {
    let modal = document.querySelector('.modal_shadow');
    modal.classList.toggle('hide');
}





/*function timerDisplay () {
    for (let i=0; i < time; i++) {
    if (seconds < 10) {
        timer.innerHTML = `${minutes}:0${seconds}`;
    }
    else {
        timer.innerHTML = `${minutes}:${seconds}`;
    }
}
}
*/



/*
Note: Will use as a possible point counter function later, not suitable code
for move counter

function moveCounter() {
    let count = moves;
    if (matchedCards = true) {
        count++;
        const displayCounter = document.querySelector('.moves');
        displayCounter.innerHTML = count;
    } else {
        count--;
    }
};*/


function gameOver() {
    //if matched cards = 8, return you win!

}

//shuffle deck class --






//match cards function--

//if card matches, show, open and remain open (possibly .capture?)

/*
 * set up the event listener for a card. If a card is clicked:

 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Sam's Notes: Class for event listener is "card"
// - display the card's symbol (put this functionality in another function that you call from this one)
//  document.query.addEventListener(click, showCard)
/*
 * Create a list that holds all of your cards
 */
//Sam's Notes: Create an empty array which will reference the callback function 'shuffle'

