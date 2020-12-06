function Single(name){
    this.name = name
}

Single.getInstance = (function(){
    let instance 
    return function(name){
        if(!instance){
            instance = new Single(name)
        }
        return instance
    }
})()

console.log(Single.getInstance('zs') === Single.getInstance('zs'))

