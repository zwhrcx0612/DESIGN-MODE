// 工厂模式
class Man {
    constructor(name){
        this.name = name
    }
    getName(){
        console.log(this.name)
    }
}

class Factory {
    static create(name){
        return new Man(name)
    }
}

Factory.create('zwh').getName()