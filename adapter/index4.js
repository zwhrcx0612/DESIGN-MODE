/**
 * 
 */

var getGuangdongCity = function(){
    var guangzhouCity = [
        {
            name:'shenzhen',
            id:11
        },
        {
            name:'guangzhou',
            id:12
        }
    ]
    return guangzhouCity
}

var render = function(fn){
    console.log('开始渲染广东省地图')
    console.log(JSON.stringify(fn()))
}

render(getGuangdongCity)
/**
 * 后来在网上看到了更全面的地图，数据格式如下
 * var guangdongCity = {
 *  shenzhen:11,
 *  guangzhou:12,
 *  zhuhai:13
 * }
 * 新增一个数据格式的转换器
 */


 var adapter = function(oldAddressFn){
    var address = {}
    var oldAddress = oldAddressFn()
    console.log({oldAddress})
    for(let i = 0; i < oldAddress.length; i++ ){
        address[oldAddress[i].name] = oldAddress[i].id
    }

    return function(){
        return address
    }
 }

render(adapter(getGuangdongCity))
