/**
 * 内部迭代器:只需要一次性调用
 * 判断两个数组是否相同
 */
function each(arr,callback) {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i],i)
    }
}


const arr1 = [1,2,3,4]
const arr2 = [1,2,3,4]

function compare(arr1,arr2){
    if(arr1.length !== arr2.length){
        // return false
        throw new Error('不相等')
    }
    each(arr1,function(value,index){
        if(value !== arr2[index]){
            throw new Error('不相等')

        }
    })
    console.log('相等')
}
compare(arr1,arr2)