/**
 * 外部迭代器：增加了调用复杂度，但是灵活，可以手动控制迭代的过程或者顺序
 * 判断两个数组是否相同
 */


 var Iterator = function(obj){
    var current = 0

    function next(){
        current += 1
    }

    function isDone(){
        return current >= obj.length
    }

    function getCurrItem(){
        return obj[current]
    }
    return  {
        next,
        isDone,
        getCurrItem,
        length: obj.length
    }
 }

const arr1 = [1,2,3,4]
const arr2 = [1,2,3,4]

function compare(arr1,arr2){
    const t1 = Iterator(arr1)    
    const t2 = Iterator(arr2)    
    if(t1.length !== t2.length){
        throw new Error('不相等')
    }
    for(let i = 0; i < t1.length; i++){
        if(t1.getCurrItem() !== t2.getCurrItem()){
            throw new Error('不相等')

        }
        t1.next()
        t2.next()
    }
    console.log('相等')
}
compare(arr1,arr2)