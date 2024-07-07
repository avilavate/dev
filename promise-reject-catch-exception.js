let p= Promise.resolve(42);

try{
p.then(
    (mssg)=>{console.log(mssg.toUpperCase())},
    (err)=>{console.log(err)}
)
}
catch(err){
    console.log(`Captured error ${err}`);
}
