/*
Author: Panya
Task: create html string
*/

const htmlFactory = {
    // given a single object, format it in HTML and return
    placeFactory: placeObject => {
        return `<section class="point-of-interest">
<h2>${placeObject.name}</h2>
<p>${placeObject.description}</p>
<p>location: ${placeObject.place.name}</p>
<button id="delete--${placeObject.id}">del</button>
</section>
        `;
    },
}

export default htmlFactory;