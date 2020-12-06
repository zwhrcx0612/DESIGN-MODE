/**
 * 透明的单例模式，这种其实就是把构造函数作为闭包，顺带添加了instance
 */

var Single = (function (name){
    let instance 
    
    return function Single(){
        this.name = name
        if(!instance){
            instance = this
        }
        return instance
    }
})()

console.log(new Single('zs') === new Single('zs'))