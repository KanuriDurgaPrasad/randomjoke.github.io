let jokeTextEl = document.getElementById('jokeText');
let jokeBtnEl = document.getElementById('jokeBtn');
let spinnerEl = document.getElementById('spinner');

function randomJoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove('d-none');
    jokeTextEl.classList.add('d-none');
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add('d-none');
            jokeTextEl.classList.remove('d-none');
            jokeTextEl.textContent = jsonData.value;
        });
}

jokeBtnEl.onclick = function() {
    randomJoke();
}