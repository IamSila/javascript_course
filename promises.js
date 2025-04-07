const xFetcherPromise = new Promise(
    function(resolve, reject) {
        $.get("X")
            .done(function(X){
                resolve(X);
            })
            .fail(function(error){
                reject(error);
            });
    }
)


/*
new Promise ---> pending state
resolve ---> move promise from pending to fulfilled 
reject ---> pending to rejected

*/


// promise handler usage
xFetcherPromise
    .then(function(X) {
        console.log(X)
    })
    .catch(function(err){
        console.log(err);
    })
