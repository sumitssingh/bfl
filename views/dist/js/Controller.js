var ExamplesCtrl = function ($scope) {

    // function ResponsiveCarousel($scope){
        // $scope.carouselTimer = 5000;
        // $scope.slides = [
        //   {
        //     image: 'https://unsplash.imgix.net/photo-1426200830301-372615e4ac54?fit=crop&fm=jpg&h=725&q=75&w=1050',
        //     cap: 'Caption goes here'
        //   },
        //   {
        //     image: 'https://unsplash.imgix.net/photo-1421977870504-378093748ae6?fit=crop&fm=jpg&h=700&q=75&w=1050',
        //     cap: 'Caption goes here'
        //   },
        //   {
        //     image: 'https://ununsplash.imgix.net/photo-1421757295538-9c80958e75b0?fit=crop&fm=jpg&h=700&q=75&w=1050',
        //     cap: 'Caption goes here'
        //   }
        // ];
    //   }

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '//placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
    // $scope.myInterval = 1000;
    // $scope.slides = [
    //   {
    //     image: 'http://lorempixel.com/400/200/'
    //   },
    //   {
    //     image: 'http://lorempixel.com/400/200/food'
    //   },
    //   {
    //     image: 'http://lorempixel.com/400/200/sports'
    //   },
    //   {
    //     image: 'http://lorempixel.com/400/200/people'
    //   }
    // ];

    $scope.staticJson =
        [
            {
                "PostID": 1,
                "Id": 1,
                "Name": "to work out how they work",
                "Email": "Eliseo@gardner.biz",
                "Body": "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
            },
            {
                "PostID": 1,
                "Id": 2,
                "Name": "I would like them to rejecting",
                "Email": "Jayne_Kuhic@sydney.com",
                "Body": "I was born there has never been a pleasure all the pain \ blinded to the net at any \ nvoluptatis mistake prepared to pay \ nnihil be our pleasure and rejects"
            }
        ];

};

angularJs.controller("ExamplesCtrl", ExamplesCtrl);

ExamplesCtrl.$inject = ['$scope'];

var Examples_getApiCtrl = function ($scope , jsonPlaceHolderModel) {

    $scope.json = {};
    $scope.postJson = {};
    jsonPlaceHolderModel.getPosts(function (data , status) {
        if(status){
            $scope.json = data ;
            console.log($scope.json)
        }
    });

    $scope.sendComment = function () {
        jsonPlaceHolderModel.sendComment($scope.postJson , function (data , status) {
            if(status){
                console.log(data)
            }
            else{
                console.log(status)
            }
        });
    }

};

angularJs.controller("Examples_getApiCtrl", Examples_getApiCtrl);

Examples_getApiCtrl.$inject = ['$scope' , 'jsonPlaceHolderModel'];

var LandingCtrl = function ($scope) {

};

angularJs.controller("LandingCtrl", LandingCtrl);

LandingCtrl.$inject = ['$scope'];

var LandingCtrl = function($scope){
	var content = "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent";
	
	$scope.type = "";
	var i=0;
	var timer = setInterval(function(){
	    if(i<content.length)
		  	$scope.type += content[i];
	     i++; 
		 $scope.$apply();
    }, 100); 
    for (var i = 0; i < 100; i++) {
        var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
        $('body').append(star);
      }
}


// angular.directive('typewrite', ['$timeout', function ($timeout) {
//     function linkFunction (scope, iElement, iAttrs) {
//         var timer = null,
//             initialDelay = iAttrs.initialDelay ? getTypeDelay(iAttrs.initialDelay) : 200,
//             typeDelay = iAttrs.typeDelay ? getTypeDelay(iAttrs.typeDelay) : 200,
//             blinkDelay = iAttrs.blinkDelay ? getAnimationDelay(iAttrs.blinkDelay) : false,
//             cursor = iAttrs.cursor ? iAttrs.cursor : '|',
//             blinkCursor = iAttrs.blinkCursor ? iAttrs.blinkCursor === "true" : true,
//             auxStyle;
//         if (iAttrs.text) {
//             timer = $timeout(function() {
//                 updateIt(iElement, 0, iAttrs.text);
//             }, initialDelay);
//         }

//         function updateIt(element, i, text){
//             if (i <= text.length) {
//                 element.html(text.substring(0, i) + cursor);
//                 i++;
//                 timer = $timeout(function() {
//                     updateIt(iElement, i, text);
//                 }, typeDelay);
//                 return;
//             } else {
//                 if (blinkCursor) {
//                     if (blinkDelay) {
//                         auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
//                                     '-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
//                                     'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
//                         element.html(text.substring(0, i) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
//                     } else {
//                         element.html(text.substring(0, i) + '<span class="blink">' + cursor + '</span>');
//                     }
//                 } else {
//                     element.html(text.substring(0, i));
//                 }
//             }
//         }

//         function getTypeDelay(delay) {
//             if (typeof delay === 'string') {
//                 return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
//             }
//         }

//         function getAnimationDelay(delay) {
//             if (typeof delay === 'string') {
//                 return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
//             }
//         }

//         scope.$on('$destroy', function() {
//             if(timer) {
//                 $timeout.cancel(timer);
//             }
//         });
//     }

//     return {
//         restrict: 'A',
//         link: linkFunction,
//         scope: false
//     };

// }]);
var RootCtrl = function ($scope) {

};

angularJs.controller("RootCtrl", RootCtrl);

RootCtrl.$inject = ['$scope'];
