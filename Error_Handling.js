function f1(){
    try{
    let a = new abc
    
    }
    catch(err){
        if(err instanceof ReferenceError){
            console.log("Reference Error Occured", err.message)
        }
        else if(error instanceof TypeError){
            console.log("TypeError Occured",err.message);}
            else{
                console.log("some error occured",err.message)
            }
    }
    finally{
        console.log("i am final")
    }
    console.log("i am still alive")
}
f1();