import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let response = await fetch(config.backendEndpoint+`/cities`);
    console.log(response)
    let data = await response.json();
    console.log(data)

    return data
  } catch(error) {
    // catches errors both in fetch and response.json
    return null;
  }
}
//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  const data = document.getElementById("data");
  const Column_div =document.createElement("div");
  Column_div.className ="col-12 col-sm-6 col-lg-3 mb-3";
  Column_div.innerHTML =`
  
  <a href="pages/adventures/?city=${id}" id="${id}"
  <div class="tile d-flex">
  <img src="${image}" alt="" class="img-fluid">
  <div class="tile-text">
  <h5>${city}</h5>
  <p>${description}</p>
  </div>
  </div>
  </a>
  
  `
  data.append(Column_div);
  }

export { init, fetchCities, addCityToDOM };
