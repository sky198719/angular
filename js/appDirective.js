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

appModule.directive('prepage',function(){
	return {
		restrict : 'E',
		template :'<span ng-click="pre()">返回前一页</span>',
		replace : true,
		link : function($scope){
			$scope.pre = function(){
				history.go(-1);
				alert('返回上一页');
			}
		}
	}
});