const posts =[];
let lastActivity;

//Do not touch these functions below at all
function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            lastActivity = new Date().toLocaleString();
            resolve(lastActivity);
        }, 2000)
    }) 
}


//Do not touch these functions below at all
function createPost(post) {
    return new Promise( (resolve, reject) => {
        posts.push({title: 'POST1'});
        resolve();
    }) 
}

//Do not touch these functions below at all
function deletePost(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   return new Promise( (resolve,reject) =>{
        if(posts.length > 0){
            const popped = posts.pop();
            resolve(popped);
        }else{
            reject("ERROR");
        }
    },1000);
}
function updateLastUserActivityTime (){
    return new Promise( () => {
        setTimeout( () => {
            createdAT = new Date();
        },1000);
    });
}

//Call the function in the right way so that we can get the desired output

Promise.all([createPost('FIRSTPOST'),updateLastUserActivityTime()])
.then( (data) => {
    posts.forEach( (value) => {
        console.log(value);
    })
    console.log(data[1]);
    return data;
}).then( (value) => {
    return new Promise ( (res,rej) => {
        Promise.all([createPost('SCOND POST'),updateLastUserActivityTime()])
        .then( (data) => {
            posts.forEach( (value) => {
                console.log(value);
            })
            console.log(data[1]);
            res();
        })
    })
}).then( (data) => {
        return deletePost();
}).then( () => {
    posts.forEach( (value) => {
        console.log(value);
    })
})
