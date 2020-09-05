// 单例模式 单例模式的核心就是保证全局只有一个对象可以访问。
class SingleTon {
    constructor(){}
}
// 闭包
// 当退出函数后,局部变量 instance 并没有消失,而是似乎一直在某个地方 存活着。这是因为当执行 let s1 = SingleTon.getInstance();时,返回了一个匿名函数的引用,它可以访问到 func() 被调用时产生的环境,而局部变量 instance 一直处在这个环境里。既然局部变量所在的环境还能被外界 访问,这个局部变量就有了不被销毁的理由。在这里产生了一个闭包结构,局部变量的生命看起 来被延续了。
SingleTon.getInstance = (function(){
    let instance
    return function() {
        if(!instance){
            instance = new SingleTon()
        }
        return instance
    }

})()

let s1 = SingleTon.getInstance()
let s2 = SingleTon.getInstance() //会访问到上一次的instance值
console.log(s1 === s2)

