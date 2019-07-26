// Connect our button to JS
// $ is used to access an element from HTML below. It is NOT interpolation.
var button = $('button');
var container = $('.container');
var messageList = ["message1", "message2", "message3", "message4"];

// How are we going to enact our JS when the user interacts?
// We will use an event listener.
button.on("click", generateMessage);

// How do we declare a function?
// When you use a FORM, the 1st line of function should be prevent default.
function generateMessage() {
  event.preventDefault();
  var randomNumber = Math.random() * messageList.length;
  var finalIndex = Math.floor(randomNumber);
  var finalMessage = messageList[finalIndex];

  container.append(`<p>Your fortune is ${finalMessage}</p>`);
}
