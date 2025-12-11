import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const excuseLine = document.querySelector("#excuse");
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let p = 0; p < noun.length; p++) {
        for (let r = 0; r < dominio.length; r++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[p]}${dominio[r]}`);
        }
      }
    }
  }
};



console.log(`${pronoun[i]} ${adj[j]} ${noun[p]} $`);
