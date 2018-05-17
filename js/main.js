require.config({
	paths : {
		'angular' : 'lib/angular',
		'uiRouter' : 'lib/angular-ui-router',
		'appRoute' : 'appRoute',
		'appDirective' : 'appDirective',
		'appController' : 'appController'
	},
	shim : {
		'angular' : {exports:'angular'},
		'uiRouter' : ['angular'],
		'appRoute' : ['angular'],
		'appDirective' : ['angular'],
		'appController' : ['angular']
	}
});