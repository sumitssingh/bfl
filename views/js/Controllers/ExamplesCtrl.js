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
