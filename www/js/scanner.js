// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var LangendorfApp = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
     $ionicPlatform.ready(function() {
                          if(window.cordova && window.cordova.plugins.Keyboard) {
                          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                          // for form inputs)
                          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                          
                          // Don't remove this line unless you know what you are doing. It stops the viewport
                          // from snapping when text inputs are focused. Ionic handles this internally for
                          // a much nicer keyboard experience.
                          cordova.plugins.Keyboard.disableScroll(true);
                          }
                          if(window.StatusBar) {
                          StatusBar.styleDefault();
                          }
                          });
     })

LangendorfApp.controller("LangendorfController", function($scope, $cordovaBarcodeScanner) {
                         $scope.scanBarcode = function() {
                         $cordovaBarcodeScanner.scan().then(function(imageData) {
                                                            if(imageData.text == 046677458478){
                                                            var myWindow = window.open("page.html", "_self");
                                                            console.log("Kom je hier?");
                                                            }
                                                            if(imageData.text == 8710400689454){
                                                            var myWindow = window.open("page.html", "_self");
                                                            console.log("Kom je hier?");
                                                            }
                                                            console.log("Barcode Format -> " + imageData.format);
                                                            console.log("Cancelled -> " + imageData.cancelled);
                                                            console.log("Barcode -> " +imageData.text);
                                                            }, function(error) {
                                                            console.log("An error happened -> " + error);
                                                            });
                         };
                         });

