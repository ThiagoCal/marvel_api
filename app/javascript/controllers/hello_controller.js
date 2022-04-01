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

const baseURL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;



export default class extends Controller {
  // static targets = [ "output" ]

  connect() {

    fetch(baseURL)
      .then(response => response.json())
      .then((data) => {
        console.log(data.data.results)
      })
  }
}
