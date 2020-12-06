/**
 * 1和2.js这两种方式都需要提前知道这是一个单例类，且必须用getInstance的方式去创建，不能使用new的方式去创建
 * 透明的单例模式
 * 这样的写法违反了单一职责原则，创建对象和保证只有一个对象在一个方法中，需要使用用代理实现单例模式
 */

var Man = (function(){
    var instance 
    function Man(name){
        this.name = name
        // 构造函数中可以写if判断
        if(!instance){
            // 注意这里，将this作为实例
            instance = this
        }     
        return instance
    }
    Man.prototype.getName = function(){
        return this.name
    }
    return  Man
})()

console.log(new Man('zhangsan') === new Man('zhangsan'))

console.log(new Man('zhangsan').getName())