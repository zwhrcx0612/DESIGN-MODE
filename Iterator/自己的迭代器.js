/**
 * 实现自己的迭代器
 * each函数接受两个参数，第一个是被循环的数组，第二个是循环中每一步后将被触发的回调函数
 */

function each(arr,callback) {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i],i)
    }
}

each([1,2,3,4],function(value,index){
    console.log(value,index)
})