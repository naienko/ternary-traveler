/*
Author: Panya
Task: display data on the DOM
*/

const printToDom = {
    // given a method returning a string of HTML, add it to the DOM
    add: (where, what) => {
        document.querySelector(`${where}`).innerHTML += what;
    },
    replace: (where, what) => {
        document.querySelector(`${where}`).innerHTML = what;
    }
};

export default printToDom;