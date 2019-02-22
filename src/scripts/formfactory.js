/*
Author: Panya
Task: create form html string
*/

import apiManager from "./apiManager";

const formFactory = {
    newEntry: () => {
        apiManager.get("places","")
            .then(
                placeArray => {
                    let htmlString = "";
                    htmlString = `<section id="pointsForm">
<fieldset>
<label for="pointName">Point of Interest</label>
<input type="text" name="pointName" id="pointName" required />
</fieldset>
<fieldset>
<label for="pointDesc">Description</label>
<input type="text" name="pointDesc" id="pointDesc" required />
</fieldset>
<fieldset>
<label for="pointPlace">Location</label>
<select name="pointPlace" id="pointPlace" required>`;
                    placeArray.forEach(element => {
                        htmlString += `<option id="${element.id}>${element.name}</option>`
                    });
                    htmlString += `</select>                    
</fieldset>
<button id="create--point">Add Point of Interest</button>
</section>`;
                    return htmlString;
                }
            )
    }
};

export default formFactory;