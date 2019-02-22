/*
Author: Panya
Task: connect to api and manipulate data there
*/

const apiManager = {
    get: (db, query) => {
        return fetch(`http://localhost:8088/${db}${query}`)
            .then(res => res.json());
    },
    create: (db, newObject) => {
        return fetch(`http://localhost:8088/${db}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        })
            .then(res => res.json());
    },
    edit: (db, id, newObject) => {
        return fetch(`http://localhost:8088/${db}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        })
            .then(res => res.json());
    },
    delete: (db, id) => {
        return fetch(`http://localhost:8088/${db}/${id}`, {
            method: "DELETE"
        });
    }
}

export default apiManager;