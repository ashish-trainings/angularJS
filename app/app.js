var app = angular.module('demoApp', ['ui.router', 'ui.bootstrap', 'bsTable', 'angularModalService']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: "/login"
        , templateUrl: "app/components/login/login.html"
            //controller: "loginCntrl"
    }).state('layout', {
        url: "/layout"
        , templateUrl: "app/components/common/layout.html"
        , controller: "layoutCntrl"
    }).state('dashboard', {
        url: "/dashboard"
        , templateUrl: "app/components/dashboard/dashboard.html"
    })
    $urlRouterProvider.otherwise("/login")
});
app.run(function ($location, $rootScope, $window) {
    var screenWidth = $window.innerWidth;
    console.log('screenWidth', screenWidth);
    if (screenWidth == 1024) {
        $rootScope.isIpad = true;
        console.info('Ipad Screen');
    }
    else {
        $rootScope.isIpad = false;
        console.info('Desktop Screen');
    }
    // $location.url('/layout')
    $rootScope.showHeader = false;
    $location.url('/');
});