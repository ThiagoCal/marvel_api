// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"



const publicKey = "354b64a846079737d78c7b7ab3a299ea"


const hash = "a904ee4ee86230876bf125b5355e9024"

const baseURL = `https://gateway.marvel.com/v1/public/characters?events=238&limit=100&ts=1&apikey=${publicKey}&hash=${hash}`;



export default class extends Controller {
  static targets = [ "output" ]

  connect() {
    this.outputTarget.innerHTML = "<li>Loading comits for</li>"
    fetch(baseURL)
      .then(response => response.json())
      .then((data) => {
        var outputHTML = "";
        const result = data.data.results
        const objectifier = Object.assign({}, result)
        console.log(objectifier)
        Object.values(objectifier).forEach((resultJSON) => {
         outputHTML += outputTemplate(resultJSON);
        });
        this.outputTarget.innerHTML = outputHTML;
      });
      //   const result = data.data.results
      //   const objectifier = Object.assign({}, result)


      //   // document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
      //   // this.outputTarget.innerText = data
      // }).then( output => {

  }
}

function outputTemplate(char) {
  return ` <li>
      <span class="author">${ char.name }</span>
      <span class="message">${ char.description }</span><br>
      <img src="${ char.thumbnail.path }.${char.thumbnail.extension}">

    </li>`;
}
