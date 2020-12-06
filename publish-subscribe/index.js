// 发布订阅模式
/**
 * 发布-订阅模式也叫做观察者模式。通过一对一或者一对多的依赖关系，当对象发生改变时，订阅方都会收到通知。
 * 当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知
 * 在现实生活中，也有很多类似场景，比如我需要在购物网站上购买一个产品，但是发现该产品目前处于缺货状态，这时候我可以点击有货通知的按钮，让网站在产品有货的时候通过短信通知我。
 * 
 * 
 * 在实际代码中其实发布-订阅模式也很常见，比如我们点击一个按钮触发了点击事件就是使用了该模式
 * 
 * 在 Vue 中，如何实现响应式也是使用了该模式。对于需要实现响应式的对象来说，在 get 的时候会进行依赖收集，当改变了对象的属性时，就会触发派发更新。
 */

{/* <ul id="ul"></ul> */ }
let ul = document.querySelector('#ul')
ul.addEventListener('click', (event) => {
    console.log(event.target);
})
var salesOffices = {}


salesOffices.clientList = []

salesOffices.listen = function(fn){
    salesOffices.clientList.push(fn)
}

salesOffices.trigger = function(){
    salesOffices.clientList.forEach(fn => {
        fn.apply(this,arguments)
    })
}


salesOffices.listen(function(squareMeter,price){
    console.log(squareMeter,price)
})


salesOffices.trigger(80,3000000)
