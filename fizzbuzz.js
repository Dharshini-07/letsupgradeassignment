console.log(fizzbuzz(15))
function fizzbuzz(n){
  result=""
  for(i=1;i<=n;i++){
    if(i%3===0 && i%5===0){
      result+="fizzbuzz"
    
    }
    else if(i%3===0){
      result+="fizz"
    }
    else if(i%5===0){
      result+="buzz"
    }
    else{
      result+=i
    }
  }
  return result
}
