// Problem 1: Create a function to check if a number is Prime or Not

function prime(num){
  let count=0
  for(i=0;i<=num;i++){
    if(num%i==0){
      count++
    }
  }
  if(count==2){
    return true;
  }else {
    return false;
  }
}
for(let i=0;i<=20;i++){
  let ans = prime(i);

if(ans==true){
  console.log(i,"Prime")
}else {
  console.log(i,"Not Prime")
}
}