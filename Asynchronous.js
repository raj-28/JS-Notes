// function f1(callback){
//      //setTimeout
//     setTimeout(function()
//     {
//         console.log("f1")
//         callback();
    
//     },100)

// }

// function f2(){
//     console.log("f2")

// }

// f1(f2);

// promise 
let isMomHappy = true;

function momsGift(){
    return new Promise(function(resolve,reject){
    if(isMomHappy){
        let cycle = {
            name : "atlas",
            cost : "15000"
        };
        resolve(cycle);
    }else{
        reject(new Error("Have You seen your Score Card"))
}
    
    })
}
let surprise = momsGift()

surprise.then(function(succeresponse){
    console.log(succeresponse)
}).catch(function(errorresponse){
    console.log(errorresponse)
})


