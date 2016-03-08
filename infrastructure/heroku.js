var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator({
	name: 'oslo-test',
	region: 'eu',
	maintenance: false,
	stack: 'cedar-14',
	config_vars: { 
		NODE_ENV: "production",
		MONGOLAB_URI: 'mongodb://heroku_gc81v8md:fgb7549k43gh864g2otttiidb5@ds019488.mlab.com:19488/heroku_gc81v8md' 
	},
	addons: { mongolab: { plan: 'mongolab:sandbox' } },
	collaborators: [ 'truongcv@gmail.com', 'yuwen.he@vg.no' ],
	features:
	{ 
		'runtime-dyno-metadata': { enabled: false },
		'log-runtime-metrics': { enabled: false },
		'http-session-affinity': { enabled: false },
		preboot: { enabled: false },
		'http-shard-header': { enabled: false },
		'http-end-to-end-continue': { enabled: false } 
	},
	formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
	log_drains: [],
	domains: [ 'oslo-test.herokuapp.com' ] }
);