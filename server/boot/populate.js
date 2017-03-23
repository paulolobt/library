'use strict';

module.exports = function(app) {
    var data = [
        {
            firstName: "Sergio",
            lastName: "Reis"
        },
        {
            firstName: "Raus",
            lastName: "Seixas"
        }
    ];

    app.models.Author.create(data, function(resp) {
        console.log(resp);
    });
};
