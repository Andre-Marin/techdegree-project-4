/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/
function randomNumber() {
  let num = Math.floor( (Math.random() * 255) + 1 );
  return num;
}
function changeBackgroundColour() {
  var backgroundColour = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  document.getElementById('quote-box').style.backgroundColor = backgroundColour;
}
// console.log(changeBackgroundColour());
/***
 * An array of random quotes
***/

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney'
  },
  {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    source: 'Steve Jobs'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    year: 1950
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    source: 'John Lennon',
    citation: 'Let It Be/Abbey Road : the Beatles. New York '
  },
];

/***
 * Chooses a random number from 0 to the total number of quotes in the array. Picks quote based off of random number chosen.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * Function takes a chosen randomQuote Object and turns it into a string that prints to Index.html
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
  <p class='quote'>${randomQuote.quote}</p>
  <p class='source'>${randomQuote.source}</p>
  `;

  if ('citation' in randomQuote) {
     html = `
    <p class='quote'>${randomQuote.quote}</p>
    <p class='source'>${randomQuote.source}
      <span class='citation'>${randomQuote.citation}</span>
    </p>
    `;
  } else if ('year' in randomQuote) {
    html = `
    <p class='quote'>${randomQuote.quote}</p>
    <p class='source'>${randomQuote.source}
      <span class='source'>${randomQuote.year}</span>
    </p>
    `;
  }
  return document.getElementById('quote-box').innerHTML = html;
}

setInterval(printQuote, 3000);
setInterval(changeBackgroundColour, 3000);
/***
 * EventListener that changes quote on user click.
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", changeBackgroundColour, false);
