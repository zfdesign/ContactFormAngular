(function (angular) {

    angular.module('app', []).controller("ContactFormController", ContactFormController);

    function ContactFormController() {
        this.title = 'Contact form';
        this.enquiry = {
            "name": "",
            "email": "",
            "comment": ""
        };
        this.newEnquiry = angular.copy(this.enquiry);
        this.formSubmitted = false;
    }

    ContactFormController.prototype.submit = function (contactForm) {
        console.log(contactForm);
        if (contactForm.$valid) {
            this.enquiry = angular.copy(this.newEnquiry);
            this.formSubmitted = true;
        }
    };
    ContactFormController.prototype.reset = function () {
        console.log(contactForm);
    };

})(window.angular);