async function fetchJokes() {
  // code here :
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const toJson = await response.json();
    return toJson;
  } catch (error) {
    console.error(error);
  }
}
const parent = document.getElementById('joke-container');

function displayJokes() {
  // code here :
  fetchJokes()
    .then((response) => {
      console.log(response);
      console.log(response.setup);
      console.log(response.punchline);

      const element = document.createElement('p');
      element.innerHTML = `<p><strong>Joke:</strong> ${response.setup}</p><p><strong>Punchline:</strong> ${response.punchline}</p>`;
      parent.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

displayJokes();
