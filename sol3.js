// PROBLEM 3
// Problem 3: Use the same function to print Non-Primes from 2 to a given limit




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
for(let i=2;i<=20;i++){
  let ans = prime(i);

if(ans==false){
  console.log(i,"nOT Prime")
}
}