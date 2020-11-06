var a = function(){
    console.log(1)
}

var _a = a

var a = function(){
    _a()
    console.log(2)
}

a()