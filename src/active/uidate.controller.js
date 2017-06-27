window.appModule.controller('AddController',controllerFn);

function controllerFn(){
    var vm = this;

    vm.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    vm.popup1 = {
        opened: false
    };

    vm.popup2 = {
        opened: false
    };
    vm.open1 = function() {
        vm.popup1.opened = true;
    };

    vm.open2 = function() {
        vm.popup2.opened = true;
    };
}




