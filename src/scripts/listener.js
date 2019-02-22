/*
Author: Panya
Task: listen for button clicks
*/

import formFactory from "./formfactory";
import printToDom from "./printToDom";

const clickBubbler = () => {
    document.body.addEventListener("click", event => {
        let buttonBits = event.target.id.split("--");
        if (buttonBits[0] === "add") {
            let htmlString = formFactory.newEntry();
            printToDom.replace(".output", htmlString);
        }
    })
};

export default clickBubbler;