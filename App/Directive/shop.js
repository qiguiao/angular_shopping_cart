/**
 * Created by Administrator on 2017/10/18.
 */

app.directive('shop',function(){
    return{
        restrict:'EA',
        templateUrl:'./App/view/temp/shop.html',
        controller:"shopItemController"
    }
});