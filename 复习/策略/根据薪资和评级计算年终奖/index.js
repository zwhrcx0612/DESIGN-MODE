const Bonus = function(salary,strategy){
    this.salary = salary
    this.strategy = strategy
}


Bonus.prototype.getBonus = function(){
    return this.strategy.calculator(this.salary)
}

function levelA(){

}

levelA.prototype.calculator = function(salary){
    return salary*2
}

function levelB(){

}

levelB.prototype.calculator = function(salary){
    return salary*1
}

function levelS(){

}

levelS.prototype.calculator = function(salary){
    return salary*3
}


let a = new Bonus(7000,new levelS())
console.log(a.getBonus())