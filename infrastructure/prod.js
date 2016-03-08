var heroin = require('heroin-js');
var _ = require('lodash');
var base = require('./base');

var prod = {
	name: 'oslo-test',
	domains: [ 'oslo-test.herokuapp.com' ] 
};

var config = _.merge({}, base, prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);