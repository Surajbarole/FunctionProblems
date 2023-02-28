// Problem 5: Write a function to replace spaces in a given string with - .

function replace(str){
  let bag=""
  for(let i=0;i<str.length;i++){
    if(str[i]==" "){
      bag+="-"
    }else {
      bag+=str[i]
    }
  }
  console.log(bag)
}
replace("I am very polite person")
replace("Suraj barole i am prsent")
replace("i in masai student")
