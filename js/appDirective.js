var appModule = angular.module('appModule',['appControllers']);

appModule.directive('back',function(){
	return {
		restrict : 'E',
		template : '<div ng-controller="backBtn"> \
					<span ng-click="prePage()">回到上一页</span> \
					<span ng-transclude></span> \
					</div>',
		transclude : true
	}
});

appModule.directive('index',function(){
	return {
		restrict : 'E',
		templateUrl : 'tpls/toIndex.html',
		replace : true
	}
});