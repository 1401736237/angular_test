window.appModule.directive('vnCountDate', vncountDateComponent);
function vncountDateComponent() {
    return {
        restrict: 'AE',
        transclude:true,
        scope: {
            d:'@',
            h:'@',
            m:'@',
            s:'@'
        },
        templateUrl:'common/component/vs-date-count/tmp',
        controller:'vncountDateController as vm',
        bindToController: true,

    }
}
window.appModule.controller('vncountDateController',controllerFn);
function controllerFn($scope,$interval) {
    var vm = this;

    $scope.vm={
     // d:1,
     // h:0,
     // m:0,
     // s:5

    };
    $scope.load = function(){

        $interval(function(){
            $scope.vm.data = '活动结束倒计时'+$scope.vm.d+'天'+$scope.vm.h+'小时'+$scope.vm.m+'分'+$scope.vm.s+'秒';
            $scope.vm.s--;
            if($scope.vm.s<0){

                --$scope.vm.m;
                $scope.vm.s=59;
            }
            if($scope.vm.m<0){
                --$scope.vm.h;
                $scope.vm.m=59;
            }
            if($scope.vm.h<0){
                $scope.vm.d--;
                $scope.vm.h=23;
            }
            if($scope.vm.d<0){
                $scope.vm.d=0;
                $scope.vm.h=0;
                $scope.vm.m=0;
                $scope.vm.s=0;

                $scope.vm.data='已结束';
            }
        },1000)
    }
}



