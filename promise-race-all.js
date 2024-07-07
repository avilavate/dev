function delay(ms, msg, flag){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            if (flag) {
              res(msg)  
            } else {
                rej('Failed')
            }
        }, ms);
    })
}

Promise.race([
    delay(10,'P1', true), 
    delay(100,'P2', true)])
.then(
(data)=>{console.log(data)},
(data)=>{console.log(data)}
);

Promise.all([
    delay(10,'P1', true), 
    delay(100,'P2', true)])
.then(
(data)=>{console.log(...data)},
(data)=>{console.log(...data)}
);
