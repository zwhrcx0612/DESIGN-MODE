/**
 * 单例模式：使用一个变量存储实例，再次创建的时候若实例存在，则直接返回，否则再去创建
 * 两种实现，一种变量在外边，另一种变量在构造函数内部
 * 这两种方式都需要提前知道这是一个单例类，且必须用getInstance的方式去创建，不能使用new的方式去创建
 */

function Man() {
    this.instance
}

Man.getInstance = (function () {
   
    return function () {
        if (!this.instance) {
            this.instance = new Man()
        }
        return this.instance
    }
})()

console.log(Man.getInstance() === Man.getInstance())