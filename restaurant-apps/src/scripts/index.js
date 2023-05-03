import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';


const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

body.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});


const listRestaurant = (data) => {
    const restElement = document.querySelector("#restoran-list");
    restElement.innerHTML = "";
    data.forEach((restaurants) => {
        const { name, description, pictureId, city, rating } = restaurants;
        const listResto = document.createElement("div");

        listResto.innerHTML = `
                <div class="card">

                    <div class="card-header">
                        <img class="post-item__thumbnail" src="${pictureId}"
                        alt="${name}">
                        <h4  class="city">${city}</h4>
                        <p  title="rating restaurant" class="rating">${rating}<i class="fa fa-star"></i></p>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title"><a href="">${name}</a></h3>
                        <p tabindex="-1" class="description">${description}</p>
                    </div>
                    
                </div>
          `;

        restElement.appendChild(listResto);
    });
};
listRestaurant(data.restaurants);


