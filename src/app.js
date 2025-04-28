import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronouns = ["the", "our"];
  let adjetives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io"];

  for (const pronoun of pronouns) {
    for (const adjetive of adjetives) {
      for (const noun of nouns) {
        for (const domain of domains) {
          console.log(`${pronoun}${adjetive}${noun}${domain}`); 
        }
      }
    }
  }
};
