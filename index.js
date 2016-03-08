var stockRepository = require('./stockRepository')();
var app = require('./app')(stockRepository);

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on port 3000!');
});