// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const input = document.querySelectorAll('media-post');

console.log(input)

console.log("test")

function like(element) {
  mimicServerCall()
  .then(() => {
    document.getElementById(element.id.like).classList.add("activated-heart")})
  .catch(() => {
    document.getElementById("modal").classList.remove("hidden")
  })
}

input.forEach(element => element.like.addEventListener('click', like(element)))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
