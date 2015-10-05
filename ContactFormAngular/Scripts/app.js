'use strict';
var app = angular.module('app', []);

app.controller("ContactFormController", [
    '$scope', '$http', '$httpParamSerializerJQLike', function ($scope) {
        this.enquiry = {
            "name": "",
            "email": "",
            "comment": ""
        };
        this.controllerScope = $('#contact-form-controller');
        this.newEnquiry = angular.copy(this.enquiry);
        this.formSubmitted = false;

        this.submit = function (form) {
            if (form.$valid) {
                this.enquiry = angular.copy(this.newEnquiry);
                /*var that = this;
                $http({
                    method: "POST",
                    url: form.action,
                    data: $httpParamSerializerJQLike(this.enquiry)
                }).then(function(response) {
                    console.log('Sucess: ' + response);
                    that.formSubmitted = true;
                }, function(error) {
                    console.log('Error: ' + error);
                });*/
                this.formSubmitted = true;
            }
        };
        this.reset = function () {
            this.newEnquiry = angular.copy(this.enquiry);
            this.resetValidationErrors();
        };

        this.resetValidationErrors = function () {
            this.controllerScope.find('span.text-danger span').remove();
        };

        this.disableFormSubmition = function () {
            this.controllerScope.on('submit', 'form', function (e) {
                e.preventDefault();
            });
        };
        this.disableFormSubmition();

    }
]);