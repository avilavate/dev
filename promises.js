// let p= new Promise((resolve, res)=>{
// resolve(Promise.reject(new Error ("This was rejected promise")));

// });

// p.then(
//     // (data)=>{console.log('resolve')},
//     // (data)=>{console.log('rejected')},
// )

let p_exception= new Promise((resolve, res)=>{

    throw new Error("JS Exception");
    resolve(42);
    
    });

    p_exception.then(
        (data)=>{console.log('resolve')},
        (data)=>{console.log('rejected')},
    ).then(
        (data)=>{console.log(data)}
    )
    