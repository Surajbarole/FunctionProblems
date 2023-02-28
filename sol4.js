// Problem 4: Write a function to check if the char is a small case or not.


function small(str){
   let lower="abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<lower.length;i++){
    if(str==lower[i]){
      return true
    }else {
      false ;
    }
  }  
}
let ans=small("s")
if(ans==true){
  console.log("Present string")
}else {
  console.log("NOt present string")
}