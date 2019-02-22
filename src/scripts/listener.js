/*
Author: Panya
Task: listen for button clicks
*/

import formFactory from "./formfactory";

const clickBubbler = () => {
    document.body.addEventListener("click", event => {
        let buttonBits = event.target.id.split("--");
        if (buttonBits[0] === "add") {
            formFactory.newEntry();
        }
    })
};

export default clickBubbler;