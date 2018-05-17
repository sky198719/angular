var appControllers = angular.module('appControllers',[]);

appControllers.controller('commonCtr',function($rootScope){
	$rootScope.errorAlert = function(){
		alert('错误信息！');
	}
});

appControllers.controller('showCtr',function($scope){
	$scope.obj = {
		information : {
			text1 : '局部文案1',
			text2 : '局部文案2'
		},
		picUrl : {
			pic1 : 'img/1.jpg'
		}
	};
	$scope.backgroundColor = 'backgroundRed';
});

appControllers.controller('clickCtr',function($scope){
	$scope.counter = 0;
	$scope.countClick = function(){
		$scope.counter ++;
	};
});

appControllers.controller('listCtr',function($scope,$http,$rootScope){
	/*$scope.list = [
		{'name':'show','url':'#!/index/list/show'},
		{'name':'bind','url':'#!/index/list/bind'},
		{'name':'click','url':'#!/index/list/click'}
	];*/
	$http({
		method : 'get',
		url : 'json/data.json'
	}).then(function(data){
		$scope.data = data.data.data.data.items;
	}).catch(function(){
		$rootScope.errorAlert();
	});
});

appControllers.controller('backBtn',function($scope){
	$scope.prePage = function(){
		history.go(-1);
	};
});

appControllers.controller('indexBtn',function($scope){
	$scope.toIndex = function(){
		window.location.href = '#!/index';
	};
});

appControllers.controller('formCtr',function($scope){
	$scope.formData = {
		userName : 'sss111222333',
		passWord : 'ddffrefefef',
		isAutoLogin : true
	};
	$scope.checkForm = function(){
		console.log($scope.formData);
	};
});