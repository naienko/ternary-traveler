/*
Author: Panya
Task: create html string
*/

const htmlFactory = {
    // given a single object, format it in HTML and return
    placeFactory: placeObject => {
        return `<section id="place--${placeObject.id}">
<h2>${placeObject.name}</h2>
<p>Do I need a visa?: ${placeObject.visa_required}</p>
<div id="points--${placeObject.id}"></div>
</section>
        `;
    },
    pointFactory: () => {

    }
}

export default htmlFactory;