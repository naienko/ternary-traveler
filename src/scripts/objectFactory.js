/*
Author: Panya
Task: creates object from form
*/

const objectFactory = () => {
    const name = document.querySelector("#pointName").value;
    const desc = document.querySelector("#pointDesc").value;
    const loc = document.querySelector("#pointPlace").value;
    let pointObject = {
        placeId: loc,
        name: name,
        description: desc
    }
    return pointObject;
};

export default objectFactory;