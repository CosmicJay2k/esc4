import { topThree } from "./drawChallenges.js";
import fetchData from "./fetchData.js";
import openMobileMenu from "./mobMenu.js";

const data = await fetchData();
console.log(data);

openMobileMenu();
topThree(data);