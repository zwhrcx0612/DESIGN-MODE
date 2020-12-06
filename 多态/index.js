

function chick(){}
chick.prototype.say = function(){
    console.log('咯咯咯')
}

function duck() {}
duck.prototype.say = function(){
    console.log('嘎嘎嘎')
}

function say(animal){
    if(typeof animal.say === 'function'){
        animal.say()
    }
}

say(new chick())
