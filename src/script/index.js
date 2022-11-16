import { createHeader, renderMain, createFooter } from "./webpage";


const content = document.querySelector(".content");

// Load Webpage
const loadWebpage = () => {
  createHeader();
  renderMain();
  createFooter();
};

export default content;

loadWebpage();
