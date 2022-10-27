import { createHeader, createFooter } from "./webpage";
import createHero from "./home";

const content = document.querySelector(".content");

// Load Webpage
const loadWebpage = () => {
    createHeader();
    //createHero();
    createFooter();
};

export default content;

loadWebpage();
