/**
 * Created by Administrator on 2017/10/18.
 */

app.controller('shopController',['$scope','adionServer',function($scope,adionServer){
    $scope.flag = false;
    adionServer.getAdion().then(function(res){
        $scope.products=res;
        price();
    })
    $scope.$on("deleteItem", function (event, index) {
        $scope.products.splice(index, 1);
        price();
    });
    $scope.$on("countChange", function (event) {
        price();
    });

    $scope.$on("itemChange", function (event, index) {
        console.log(index)

        var count = 0;

        $scope.products[1].state = !$scope.products[1].state;

        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].state) {
                count++;
            }
        }
        if (count == $scope.products.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        price();
    });

    $scope.checkAll = function () {
        $scope.flag = !$scope.flag;

        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.flag) {
                $scope.products[i].state = true;
            } else {
                $scope.products[i].state = false;
            }

        }
        price();
    }

    function price() {
        $scope.goodsPrice = 0;
        $scope.goodsCount = 0;
        $scope.products.forEach(function (item, index) {
            if (item.state) {
                $scope.goodsPrice += item.num * item.price;
                $scope.goodsCount += item.num;
            }
        });

    }

}]);