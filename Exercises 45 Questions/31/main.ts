let username =['Daniyal','Bilal','Jamal','Ahmed'];
username=[]

if (username.length === 0){
    console.log("your Array is Empty.We Need to find some users")
}
else{
    let username =['Daniyal','Bilal','Jamal','Ahmed'];
    username.forEach(Oneuser =>{
   
       if(Oneuser ==="Daniyal"){
           console.log(`Hello ${Oneuser},would you like to see status report`)
       }
       else {
           console.log(`Hello ${Oneuser},Thank you for logging in again`)
       }
    })
   











}