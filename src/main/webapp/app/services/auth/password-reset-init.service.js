(function() {
    'use strict';

    angular
        .module('jhipsterProva1App')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource('api/account/reset-password/init', {}, {});

        return service;
    }
})();
