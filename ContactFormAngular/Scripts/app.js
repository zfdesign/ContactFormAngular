'use strict';
var app = angular.module('app', []);

app.controller("ContactFormController", ['$scope', '$http', '$httpParamSerializerJQLike', '$httpParamSerializerJQLike', function ($scope, $http, $httpParamSerializerJQLike) {
        this.enquiry = {
            "name": "",
            "email": "",
            "comment": ""
        };
        this.action = "/Contact/JSON";
        this.newEnquiry = angular.copy(this.enquiry);
        this.formSubmitted = false;

        this.submit = function (form) {
            this.resetAngularValidationErrors();
            if (form.$valid) {
                var that = this;
                $http({
                    method: "POST",
                    url: this.action,
                    data: $httpParamSerializerJQLike(this.newEnquiry),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    if (response.data.errors) {
                        // Sever side validation fails
                        var errors = response.data.errors;
                        angular.forEach(errors, function (value, key) {
                            if (value.length > 0) {
                                $('[name="' + key + '"]').after('<span class="error">' + value + '</span>');
                            }
                        });
                    } else {
                        // Submitted successfully 
                        that.newEnquiry.name = response.data.name;
                        that.formSubmitted = true;
                    }
                }, function(error) {
                    alert('Error: ' + error.statusText);
                });
            }
            // ELSE: Expected jQuery validation
        };

        this.reset = function () {
            this.newEnquiry = angular.copy(this.enquiry);
            this.resetValidationErrors();
        };

        this.resetAngularValidationErrors = function () {
            $('span.error').remove();
        };

        this.resetValidationErrors = function () {
            $('span.text-danger span').remove();
        };
    }
]);