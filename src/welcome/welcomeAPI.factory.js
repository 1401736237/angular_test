window.appModule.factory('welcomeAPI',factoryFn);

function factoryFn($resource){
  var actions = {
    clientInfo: {
      url: '/api/download/path'
    },

    login: {
       // url: '/index',
      // method: 'post'


    }
  };

  return $resource('', {_ajaxWrapOption: {}},actions);
}
