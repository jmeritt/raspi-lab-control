angular.module('starter.controllers', ['LocalStorageModule'])

.config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('raspi-lab');
  // localStorageServiceProvider.setStorageCookieDomain('example.com');
  // localStorageServiceProvider.setStorageType('sessionStorage');
})

.controller('TestsCtrl', function($scope, localStorageService, Tests) {
  $scope.tests = Tests.all();
  $scope.urlPrefix = localStorageService.get('urlPrefix') || 'http://192.168.0.94:3000/'
})

.controller('TestDetailControl', function($scope, $stateParams, Tests) {
  $scope.test = Tests.get($stateParams.testId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, localStorageService) {
  $scope.settings = {
    enableFriends: true
  };
});
