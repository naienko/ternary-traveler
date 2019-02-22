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
        switch (buttonBits[0]) {
            case "add":
                formFactory.newEntry();
                break;
            case "create":
                let newObject = objectFactory();
                apiManager.create("interests", newObject)
                    .then(dashDisplay);
                break;
            case "delete":
                apiManager.delete("interests", buttonBits[1])
                    .then(dashDisplay);
                break;
            default:
                break;
        }
    })
};

export default clickBubbler;