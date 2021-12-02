import { allChallenges, topThree } from "./drawChallenges.js";
import fetchData from "./fetchData.js";
import openMobileMenu from "./mobMenu.js";

const data = await fetchData();

openMobileMenu();

if (document.querySelector('.index.html')){
  topThree(data);
}

if (document.querySelector('.challenges.html')){
  allChallenges(data);
}