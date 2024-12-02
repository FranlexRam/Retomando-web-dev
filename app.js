let course = ["HTML","JS","CSS"];
console.log(course[2]);



//aprendiendo ES6
//Funciones ES6
const add = (x,y) => {
    let sum = x + y;
    console.log(sum);
}

add(35,7);


//ES6 Promises
function asyncFunc(work) {
    return new Promise(function(resolve, reject){
        if(work === '')
            reject(Error("Nothing"));
        setTimeout(function(){
            resolve(work);
        }, 1000);
    });
}

asyncFunc("Work 1") //Task 1
.then(function(result){
    console.log(result);
    return asyncFunc("Work 2"); //Task 2
}, function(error){
    console.log(error);
})
.then(function(result){
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");
//Work 1
//Work 2