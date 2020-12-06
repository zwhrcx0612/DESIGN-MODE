/**
 * 单例模式：使用一个变量存储实例，再次创建的时候若实例存在，则直接返回，否则再去创建
 * 两种实现，一种变量在外边，另一种变量在构造函数内部
 */

function Man() {

}

Man.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new Man()
        }
        return instance
    }
})()

console.log(Man.getInstance() === Man.getInstance())