import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //this are my cariables to work with
  const domainList = document.querySelector("#list-of-domains")
  let pronoun = ["the", "our", "my", "best"];
  let adj = ["great", "big", "super", "awesome", "last"];
  let noun = ["jogger", "racoon", "pizza", "developer", "of"];
  let domain = ["com", "info", "biz", "in", "net", "us", "io", "app", "dev", "us"];

  // this is the nested loop all the way to line  29
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let p = 0; p < noun.length; p++) {
        for (let r = 0; r < domain.length; r++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[p]}.${domain[r]}`);
          const listElement = document.createElement("li")
          // with this line im creating the content inside the li that we created above
          listElement.textContent = `${pronoun[i]}${adj[j]}${noun[p]}.${domain[r]}`
          // this is inserting the li insed the ul with the id list-of-domains
          domainList.appendChild(listElement)
        }
        
      }
    }
  }
};

