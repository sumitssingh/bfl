var angularJs = angular.module("angularJs",
    [
        'ui.router', 'ngStorage',
        // 'ui.carousel',
        'ui.bootstrap',
        'ngTouch',
        'angularTypeform',
        'jsonPlaceHolderModule'
    ])
    // .config(function (typeformConfigProvider) {
    //     typeformConfigProvider.setAccount('MYACCOUNT');
    //   })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, typeformConfigProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
        typeformConfigProvider.setAccount('MYACCOUNT');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/templates/landing.html',
                controller: 'LandingCtrl'
            })
            .state('examples', {
                url: '/examples',
                templateUrl: '/templates/examples.html',
                controller: 'ExamplesCtrl'
            })
            .state('examples.static-json', {
                url: '/static-json',
                templateUrl: '/templates/examples-staticJson.html'
            })
            .state('examples.get-api', {
                url: '/get-api',
                templateUrl: '/templates/examples.getAPI.html',
                controller: 'Examples_getApiCtrl'
            });
        $urlRouterProvider.otherwise('/');
    })
    // .run(function ($rootScope, $timeout, $location, $templateCache, AuthService, $state) {
    //     AuthService.init(function (data, status) {
    //         if (status) {
    //             // just a force to get some info . not using the callback
    //         }
    //     });

    //     $rootScope.$on('$viewContentLoaded', function () {

    //     });

    //     $rootScope.$on("$stateChangeError", function (event, current, previous, rejection) {

    //     });
    //     $rootScope.$on('$stateChangeStart', function (event, toUrl, fromUrl) {

    //     });

    //     $rootScope.$on("$stateChangeSuccess", function (event, current) {

    //     })


    // })

    // .run(['Carousel', (Carousel) => {
    //     Carousel.setOptions({
    //       arrows: true,
    //       autoplay: false,
    //       autoplaySpeed: 3000,
    //       cssEase: 'ease',
    //       dots: false,
       
    //       easing: 'linear',
    //       fade: false,
    //       infinite: true,
    //       initialSlide: 0,
       
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       speed: 500,
    //     });
    //   }])
    .service('scopeService', function () {
        return {
            safeApply: function ($scope, fn) {
                var phase = $scope.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn && typeof fn === 'function') {
                        fn();
                    }
                } else {
                    $scope.$apply(fn);
                }
            }
        };
    })
    .directive('myslider', ["$timeout", function ($timeout) {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        scope.$watch(function() {
          angular.element(document).ready(function() {
            $('.slider').owlCarousel({
              autoPlay: 2500,
              items: 1,
              //singleItem: true,
              margin: 0,
              nav: true,
              dots: false,
              navText: '',
              pauseOnHover: true
            });
          });
        });

        // keyboard navigation
        $(document).keyup(function(i) {
          if (i.keyCode == 37) {
            $('.gallery').trigger('prev.owl.carousel');
          } else if (i.keyCode == 39) {
            $('.gallery').trigger('next.owl.carousel');
          }
        });

      }
    };

    return directiveDefinitionObject
  }])
    .directive('typewrite', ['$timeout', function ($timeout) {
        function linkFunction (scope, iElement, iAttrs) {
            var timer = null,
                initialDelay = iAttrs.initialDelay ? getTypeDelay(iAttrs.initialDelay) : 200,
                typeDelay = iAttrs.typeDelay ? getTypeDelay(iAttrs.typeDelay) : 200,
                blinkDelay = iAttrs.blinkDelay ? getAnimationDelay(iAttrs.blinkDelay) : false,
                cursor = iAttrs.cursor ? iAttrs.cursor : '|',
                blinkCursor = iAttrs.blinkCursor ? iAttrs.blinkCursor === "true" : true,
                auxStyle;
            if (iAttrs.text) {
                timer = $timeout(function() {
                    updateIt(iElement, 0, iAttrs.text);
                }, initialDelay);
            }
    
            function updateIt(element, i, text){
                if (i <= text.length) {
                    element.html(text.substring(0, i) + cursor);
                    i++;
                    timer = $timeout(function() {
                        updateIt(iElement, i, text);
                    }, typeDelay);
                    return;
                } else {
                    if (blinkCursor) {
                        if (blinkDelay) {
                            auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
                                        '-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
                                        'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
                            element.html(text.substring(0, i) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
                        } else {
                            element.html(text.substring(0, i) + '<span class="blink">' + cursor + '</span>');
                        }
                    } else {
                        element.html(text.substring(0, i));
                    }
                }
            }
    
            function getTypeDelay(delay) {
                if (typeof delay === 'string') {
                    return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
                }
            }
    
            function getAnimationDelay(delay) {
                if (typeof delay === 'string') {
                    return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
                }
            }
    
            scope.$on('$destroy', function() {
                if(timer) {
                    $timeout.cancel(timer);
                }
            });
        }
    
        return {
            restrict: 'A',
            link: linkFunction,
            scope: false
        };
    
    }])
    .filter('range', function () {
        return function (input, total) {
            total = parseInt(total);

            for (var i = 0; i < total; i++) {
                input.push(i);
            }

            return input;
        };
    });


