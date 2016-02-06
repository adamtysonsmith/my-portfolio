(function(){
  var app = angular.module('portfolioApp', []);

  app.controller('formController', function($scope, $http) {
    
    var queryString = function(data) {
      var qstring = '';
      for (d in data) {
       if (data.hasOwnProperty(d)) qstring += d + '=' + data[d] + '&';
      }
      return qstring.slice(0, qstring.length - 1);
    }
    
    var postData = {
      method: 'POST',
      url: 'contact.php',
      data: queryString($scope.formData),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    
    $scope.formData = {};

    // Sets all fields to touched and dirty if submit is clicked without filling out all required fields.
    $scope.submitForm = function() {
      if ($scope.contactForm.$invalid) {
        $scope.contactForm.name.$touched = true;
        $scope.contactForm.email.$touched = true;
        $scope.contactForm.phone.$touched = true;
        $scope.contactForm.reason.$touched = true;
        $scope.contactForm.name.$setDirty();
        $scope.contactForm.email.$setDirty();
        $scope.contactForm.phone.$setDirty();
        $scope.contactForm.reason.$setDirty();
      } else {
        $http(postData)
          .success(function() {
            $scope.submissionMessage = 'Thank you for contacting me! I will get back to you ASAP.';
            $scope.formData = null;
            $scope.contactForm.$setPristine();
            $scope.contactForm.$setUntouched();
            $scope.contactForm.$setSubmitted();
          })
          .error(function(error) {
            $scope.submissionMessage = 'Sorry, an error occured. Please email me directly at adam@adamtsmith.info';
            console.log(error);
          });
      }
    }
  });
  
})(); // End Closure