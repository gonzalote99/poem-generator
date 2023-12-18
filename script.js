function displayPoem(response) {
new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",

});
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector('#user-instructions');
  let apiKey = '905003053oa347f9820077ebadat1974';
  let prompt = `generate poem about: ${instructionsInput.value}`;
  let context = "contex";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector('#poem');
  poemElement.classList.remove('hidden');
  poemElement.innerHTML = `<div class="generating">generating poem about ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector('#poem-generator-form');
poemFormElement.addEventListener('submit', generatePoem);
