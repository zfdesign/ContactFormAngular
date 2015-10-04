(function (angular) {
    'use strict';

    angular.module('app', []).controller("ContactFormController", ContactFormController);

    function ContactFormController() {
        this.user = {
            "name": "",
            "email": "",
            "feedback": ""
        };
    }

    ContactFormController.prototype.submit = function (contactForm) {
        console.log(contactForm);
        if (contactForm.$valid) {
            // TODO: 
        }
    };

    ContactFormController.prototype.reset = function () {
        console.log(contactForm);
        // todo: angular.copy() back the original model
    };

})(window.angular);