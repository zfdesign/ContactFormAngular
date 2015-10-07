'use strict';
var app = angular.module('app', []);

app.controller("ContactFormController", ['$scope', '$http', '$httpParamSerializerJQLike', function ($scope, $http) {
        this.enquiry = {
            "name": "",
            "email": "",
            "comment": ""
        };
        this.action = "/Contact/JSON";
        this.controllerScope = $('#contact-form-controller');
        this.newEnquiry = angular.copy(this.enquiry);
        this.formSubmitted = false;

        this.submit = function (form) {
            if (form.$valid) {
                this.enquiry = angular.copy(this.newEnquiry);
                var that = this;
                $http({
                    method: "POST",
                    url: this.action,
                    data: this.enquiry
                }).then(function(response) {
                    console.log('Sucess: ' + response.data);
                    that.newEnquiry.name = response.data.name;
                    that.formSubmitted = true;
                }, function(error) {
                    alert('Error: ' + error.statusText);
                });
            }
        };
        this.reset = function () {
            this.newEnquiry = angular.copy(this.enquiry);
            this.resetValidationErrors();
        };

        this.resetValidationErrors = function () {
            this.controllerScope.find('span.text-danger span').remove();
        };
    }
]);