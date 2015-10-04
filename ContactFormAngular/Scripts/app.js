(function (angular) {
    'use strict';

    angular.module('app', []).controller("ContactFormController", ContactFormController);

    function ContactFormController() {
        this.title = 'Contact form';
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

})(window.angular);