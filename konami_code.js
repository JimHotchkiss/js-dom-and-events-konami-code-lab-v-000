const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0
  // Write your JavaScript code inside the init() function

// You'll want to attach an event listener to document.body and check for 'keydown' events.
const body = document.body

// If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message

body.addEventListener('keydown', function(e) {
  const key = parseInt(e.detail || e.location || e.which);
debugger
  if (code[index] === key) {
    index++;

    if (index === code.length) {
      alert('Congratulations');

      index = 0;
    }
  } else {
    index = 0;
  }
})
}

init()
/*
// Key codes for A, B, and C keys.
const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.

let index = 0;

// This is the function that would be invoked by the event listener.

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

*/
