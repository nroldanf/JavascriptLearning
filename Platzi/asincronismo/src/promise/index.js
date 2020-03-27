const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if (false) {
            resolve("hey mah nigga!");
        } else {
            reject("oops mah nigga!");
        }
    });
};

// elemento encadenado
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));