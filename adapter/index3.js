var googleMap = {
    show(){
        console.log('google map')
    }
}

var baiduMap = {
    display(){
        console.log('baidu map')
    }
}

var baiduMapAdapter = {
    show() {
        baiduMap.display()
    }
}

function renderMap(obj) {
    if(typeof obj.show === 'function'){
        obj.show()
    }
}

renderMap(baiduMapAdapter)
