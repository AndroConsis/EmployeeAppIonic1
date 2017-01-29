'use strict';
angular.module('main')
    .directive('swipeToComplete', function() {
        return {
            template: '<div class="footer-text-container">{{ buttonText }}</div><ion-slides class="footer-slides-container" slider="data.slider"><ion-slide-page class="footer-complete"></ion-slide-page><ion-slide-page class="footer-swipe-right"></ion-slide-page></ion-slides>',
            restrict: 'E',
            scope: {
                onSwipeEnd: '=?',
                buttonText: '=?'
            },
            controller: function($scope, $rootScope) {
                $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
                    // data.slider is the instance of Swiper
                    $scope.slider = data.slider;
                    $scope.slider.slideNext();
                });

                $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
                    // note: the indexes are 0-based
                    if (data.slider.activeIndex === 0) {
                        if ($scope.onSwipeEnd) {
                            $scope.onSwipeEnd();
                        }
                    }
                });

                $rootScope.$on('resetSwipeButton', function() {
                    $scope.slider.slideNext();
                });
            }
        };
    });