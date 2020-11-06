var googleMap = {
    show(){
        console.log('google map')
    }
}

var baiduMap = {
    show(){
        console.log('baidu map')
    }
}

function renderMap(obj) {
    if(typeof obj.show === 'function'){
        obj.show()
    }
}
// 这个是多态的例子
console.log(typeof baiduMap.show)
renderMap(googleMap)
/**
 * 这段程序得以顺利运行的关键是 googleMap 和 baiduMap 提供了一致的 show 方法,但第三方的 接口方法并不在我们自己的控制范围之内,
 * 假如 baiduMap 提供的显示地图的方法不叫 show 而叫 display 呢? 参见index3.js
 */