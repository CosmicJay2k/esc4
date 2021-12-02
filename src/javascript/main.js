import { allChallenges, topThree } from "./drawChallenges.js";
import fetchData from "./fetchData.js";
import openMobileMenu from "./mobMenu.js";

const body = document.querySelector('body');
const data = await fetchData();

openMobileMenu();

if (body.className == 'index.html'){
  topThree(data);
}

if (body.className == 'challenges.html'){
  allChallenges(data);
}