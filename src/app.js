import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const domainList = document.querySelector("#list-of-domains")
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = ["com", "info", "biz", "in", "net"];

  
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let p = 0; p < noun.length; p++) {
        for (let r = 0; r < domain.length; r++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[p]}.${domain[r]}`);
          const listElement = document.createElement("li")
          listElement.textContent = `${pronoun[i]}${adj[j]}${noun[p]}.${domain[r]}`
          domainList.appendChild(listElement)
        }
        
      }
    }
  }
};

