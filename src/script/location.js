const createLocation = () => {

    return location;
}

const loadLocation = () => {
    const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createLocation());
}

export default loadLocation;