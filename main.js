// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!

const modal = document.querySelector("#modal");
const hearts = document.querySelectorAll(".like-glyph");
modal.classList.add("hidden"); 
for(let i=0; i< hearts.length; i++) {
  hearts[i].addEventListener("click", (e) =>{
    let heartParent = e.target;
    heartEvent(heartParent);
    console.log(heartParent)

  });
}
function heartEvent(heartParent) {
  mimicServerCall()
    .then(function(response){
      heartClicked(heartParent);
      console.log("Success!");
      console.log(response);
    })

    .catch(function(error) {
      modal.classList.remove("hidden");
      console.log(error);
    });

}
function heartClicked(heartParent) {
  if (heartParent.innerHTML === EMPTY_HEART) {
    heartParent.classList.add("activated-heart");
    heartParent.innerHTML = FULL_HEART;
    console.log("Success!");
  } else {
    heartParent.classList.remove("activated-heart");
    heartParent.innerHTML = EMPTY_HEART;
  }
}


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
