/*
Author: Panya
Task: display all the places and points of interest
*/

import apiManager from "./apiManager";
import printToDom from "./printToDom";
import htmlFactory from "./htmlfactory";

const dashDisplay = () => {
    apiManager.get("interests","?_expand=place&_sort=placeId")
        .then(
            placesArray => {
                let htmlString = "";
                placesArray.forEach(element => {
                    htmlString += htmlFactory.placeFactory(element);
                });
                printToDom.replace(".output", htmlString);
            }
        )
};

export default dashDisplay;