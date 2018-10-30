(function () {
    angular.module('app')
        .service('modalService', modalService);
    modalService.$inject = ['$uibModal'];
    function modalService($uibModal) {
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '/modal.html'
        };
        var modalOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: '',
            bodyText: ''
        };
        this.showModal = function (customModalDefaults, customModalOptions) {
            if (!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions);
        };
        this.show = function (customModalDefaults, customModalOptions) {
            var tempModalDefaults = {};
            var tempModalOptions = {};
            angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);
            angular.extend(tempModalOptions, modalOptions, customModalOptions);
            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope, $uibModalInstance) {
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function (result) {
                        $uibModalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result) {
                        $uibModalInstance.dismiss('cancel');
                    };
                };
            }
            return $uibModal.open(tempModalDefaults).result;

        }
    }

})();