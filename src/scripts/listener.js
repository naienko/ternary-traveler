/*
Author: Panya
Task: listen for button clicks
*/

import formFactory from "./formfactory";
import apiManager from "./apiManager";
import objectFactory from "./objectFactory";
import dashDisplay from "./dashDisplay";

const clickBubbler = () => {
    document.body.addEventListener("click", event => {
        let buttonBits = event.target.id.split("--");
        if (buttonBits[0] === "add") {
            formFactory.newEntry();
        } else if (buttonBits[0] === "create") {
            let newObject = objectFactory();
            apiManager.create("interests", newObject)
                .then(dashDisplay)
        }
    })
};

export default clickBubbler;