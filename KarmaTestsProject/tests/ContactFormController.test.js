describe('Given Contact Form Controller', function () {

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('When ...', function () {
        it('Then ...', function () {
            var $scope = {};
            var controller = $controller('ContactFormController, {$scope : $scope}');

            expect($scope.formSubmitted).toEqual(false);
        });
    });

});