// to test this code, go to google.be
// then, open the console (in Chrome right click, inspect, select the console tab)
// then paste the below code

// get search box on google.be
const searchBox = document.querySelector('.gLFyf');

// censored word we want to spy on
const censored = "daech";

// create a function that retrieves the latitude
// that will print in the console the latitude

const latitude = (position) => {
  console.log(position.coords.latitude)
}

// we will listen the search box if something is happening. We will listen
// every time the user release a key on his/her keyboard. If the user has typed
// the censored word we will print in the console "we are watching you" and retrieves
// his/her location. Otherwise, we will just print in the console what the user is typing

searchBox.addEventListener('keyup', (event) => {
  if (searchBox.value === censored) {
    console.log(`We are WATCHING YOU!!!!!!!`);
    navigator.geolocation.getCurrentPosition(latitude);
  } else {
    console.log(searchBox.value);
  }
});
