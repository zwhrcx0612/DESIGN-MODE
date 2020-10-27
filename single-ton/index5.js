/**
 * 代理实现单例
 */

function Person(name) {
   
    this.name = name
}

var proxyPerson = (function(){
    let instance
    return function(name){  //原来匿名函数也可以new
        if(!instance){
            instance = new Person(name)
        }
        return instance
    }
        
})()



console.log(new proxyPerson('zhangsan') === new proxyPerson('lisi'))





