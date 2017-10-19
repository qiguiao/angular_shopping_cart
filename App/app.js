/**
 * Created by Administrator on 2017/10/18.
 */
var app=angular.module('app',['ui.router']);

app.config(function($stateProvider,$locationProvider,$urlRouterProvider){
    $locationProvider.hashPrefix('');
    $stateProvider
        .state("shop",{
            url:"/shop",
            templateUrl:"App/view/_shop.html",
            controller:'shopController'
        });
    $urlRouterProvider.otherwise("/shop")
});