(function() {
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("/login", {
                templateUrl: "/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("/register", {
                templateUrl: "/views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })

            .when("/logout", {
                templateUrl: "/views/user/login.view.client.html",
                controller: "LogoutController",
                controllerAs: "model"
            })

            .when("/user/:uid", {
                templateUrl: "/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })
            .when("/user", {
                templateUrl: "/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve:{ loggedin:checkLoggedin}
            })
            .when("/user/:uid/website", {
                templateUrl: "/views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/

            })

            .when("/user/:uid/website/new", {
                templateUrl: "/views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid", {
                templateUrl: "/views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid/page", {
                templateUrl: "/views/page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "/views/page/page-new.view.client.html",
                controller: "NewPageController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "/views/page/page-edit.view.client.html",
                controller: "EditPageController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "/views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "/views/widget/widget-chooser.view.client.html",
                controller: "NewWidgetController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "/views/widget/widget-edit.view.client.html",
                controller: "EditWidgetController",
                controllerAs: "model"/*,
                resolve:{
                    checkLogin:checkLogin
                }*/
            })

            .otherwise({redirectTo:'/login'});

        function checkLoggedin($q, $timeout, $http, $location, $rootScope) {


            var deferred = $q.defer();
            $http.get('/api/loggedin').success(function(user) {
                console.log("inside check login");
                console.log(user);
                $rootScope.errorMessage = null;
                if (user !== '0') {
                    console.log("inside login");
                    $rootScope.user = user;
                    deferred.resolve();
                } else {
                    deferred.reject();
                    $location.url('/');
                }
            });
            return deferred.promise;
        };

    }
})();