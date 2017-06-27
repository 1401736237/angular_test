
window.appModule.controller('Main', controllerFn);

function controllerFn($rootScope, $state) {
    var main = this;

    init();

    /***********************************************************************/

    function init() {
        main.state = $state;

        $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams) {


        });
    }
}
