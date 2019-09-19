let numbers = [1,2,3,4,5,4,3,2,1];

let resOne = numbers.some((item, index, array)=> {
    console.log(item,index,array);
   return  (item> 2)
});
console.log(resOne);

let resTwo = numbers.filter((item, index, array)=>{
    return (item > 2)
});

console.log(resTwo);
