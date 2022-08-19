function f1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve('output from function 1')},3000)

    })
}

function f2(fun1output){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(fun1output+"i am function 2")},2000)
 
    })
}

f1().then(function(f1response){
    return f2(f1response)
}).then(function(f2response){
    console.log(f2response)
})