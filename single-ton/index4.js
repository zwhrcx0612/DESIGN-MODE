/**
 * 透明单例：能够和正常的构造函数一样使用new 的方式去创建
 */
let Person = function() {
    let instance

    return function Person(name) {
        if (instance) {
            return instance
        }
        instance = this
        this.name = name
        return instance
    }
} ()

console.log(new Person('zhangsan') === new Person('lisi'))





