/**
 * 
 */
function Account(name) {
    this.name = name
    this.instance 
}

Account.getIntance = function(name){
    if(!this.instance){
        this.instance = new Account(name)
    }
    return this.instance

}

let a = Account.getIntance('zhangsan')
let b = Account.getIntance('zhangsan')
console.log(a === b)


