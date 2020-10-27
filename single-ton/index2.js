/**
 * 
 */
function Account(name) {
    this.name = name
}

Account.getIntance = function (name) {
    let instance
    return function () {
        if (!instance) {
            instance = new Account(name)
        }
        return instance
    }
}

let  t = Account.getIntance('zhangsan')
let a = t()
let b = t()
console.log(a === b)
console.log(Account.prototype)
