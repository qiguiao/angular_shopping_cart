/**
 * Created by Administrator on 2017/10/18.
 */
app.factory('adionServer',function($http){
    var adion={
        getAdion:function(){
            return $http.get('./Data/data.json').then(function(result){

                return result.data;
            })
        }

    };
    return adion;
});