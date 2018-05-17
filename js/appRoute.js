var appUiRouter = angular.module('app',['ui.router','appControllers','appModule']);

appUiRouter.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('index',{
		url : '/index',
		views : {
			'' : {
				templateUrl : 'tpls/index.html'
			}
		}
	}).state('index.list',{
		url : '/list',
		views : {
			'main1@index' : {
				templateUrl : 'tpls/list.html'
			}
		}
	}).state('index.list.show',{
		url : '/show',
		views : {
			'main2@index.list' : {
				templateUrl : 'tpls/show.html'
			}
		}
	}).state('index.list.bind',{
		url : '/bind',
		views : {
			'main2@index.list' : {
				templateUrl : 'tpls/bind.html'
			}
		}
	}).state('index.list.click',{
		url : '/click',
		views : {
			'main2@index.list' : {
				templateUrl : 'tpls/click.html'
			}
		}
	}).state('index.form',{
		url : '/form',
		views : {
			'main1@index' : {
				templateUrl : 'tpls/form.html'
			}
		}
	}).state('form',{
		url : '/form',
		views : {
			'' : {
				templateUrl : 'tpls/form.html'
			}
		}
	});
});