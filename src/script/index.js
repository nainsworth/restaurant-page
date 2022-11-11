import { createHeader, createFooter } from "./webpage";
import createHero from "./home";
import createMenu from "./menu";

const content = document.querySelector(".content");

// Load Webpage
const loadWebpage = () => {
  createHeader();

  createHero();
  createMenu();
  createFooter();
};

export default content;

loadWebpage();
