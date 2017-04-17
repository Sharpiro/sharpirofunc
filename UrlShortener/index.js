var realurl = require('realurl');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var url = "";//req.query.name ? req.body.name : req.body.name;
    if (req.query.url || (req.body && req.body.url)) {
        realurl.get(req.query.url, function (error, result) {
            context.res = {
                body: { url: result }
            };
            context.done();
        });
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a url on the query string or in the request body"
        };
        context.done();
    }
};