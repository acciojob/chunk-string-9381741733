function stringChop(str, size) {
  // your code here
	
  const result = [];
  
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  
  return result;
}


console.log(chunkString("Hello, world!", 5)); 
console.log(chunkString("12345", 2));       
console.log(chunkString("abc", 5));  
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
