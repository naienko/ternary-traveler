import apiManager from "./apiManager";
import printToDom from "./printToDom";
import htmlFactory from "./htmlfactory";
import clickBubbler from "./listener";

apiManager.get("places","")
    .then(
        placesArray => {
            let htmlString = "";
            placesArray.forEach(element => {
                htmlString += htmlFactory.placeFactory(element);
            });
            printToDom.replace(".output", htmlString);
        }
    )

clickBubbler();