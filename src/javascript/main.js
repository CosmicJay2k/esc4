import fetchData from "./fetchData.js";
import openMobileMenu from "./mobMenu.js";

openMobileMenu();

const data = await fetchData();
console.log(data);