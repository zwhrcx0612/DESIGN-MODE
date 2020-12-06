/**
 * 代理实现单例模式,但这样需要提前知道proxySingle是代理类
 * 和
 */
function Single(name){
    this.name = name
}


var proxySingle = (function (){
    let instance 
    
    return function(name){
        if(!instance){
            instance = new Single(name)
        }
        return instance
    }
})()

console.log(new proxySingle('zs') === new proxySingle('zs'))