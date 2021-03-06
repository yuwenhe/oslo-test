var heroin = require('heroin-js');
var _ = require('lodash');
var base = require('./base');

var test = {
	name: 'oslo-test-test-env',
	domains: [ 'oslo-test-test-env.herokuapp.com' ] 
};

var config = _.merge({}, base, test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);