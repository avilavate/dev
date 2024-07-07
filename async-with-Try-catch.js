// try {
//     setTimeout(() => {
        
//         throw new Error("Exception from asyn code(setTimeout)");
        
//     }, 100);
// }
// catch(err){
//     console.log(err);
// }

let asynException= new Promise((res, rej)=>{

    setTimeout(
        ()=>{
        try{
        throw new Error("inside-setTimeout");
      //  res(42)
        } catch(e){
            console.log("inside-setTimeout")
          rej(e)
        }
    }
        
    , 100);
});

asynException.then((data)=>{
    console.log(data)},
    
    // (err)=>{
    // console.log("From Rej: ");
    // }
)
    .catch(error => console.error("from Catch " ))