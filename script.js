function chunkString(str, chunkLength) {
  const result = [];
  
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  
  return result;
}


console.log(chunkString("Hello, world!", 5)); 
console.log(chunkString("12345", 2));        
console.log(chunkString("abc", 5));   
  
  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
