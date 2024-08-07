// add a element into arrary

// insert value in the last like push function
// function insertion(arr,val){
// const lastValue = arr.length;
// arr[lastValue]=val;
// return arr;
// }

// console.log(insertion([1,2,3,4],5));


// insert vaule particular postion
// function insertion(arr,val,pos){
//  for(let i=arr.length-1; i>=pos;i--){
//     arr[i+1]=arr[i];
//  }
//  arr[pos]=val;
// return arr;
// }

// console.log(insertion([1,2,3,4],5,3));


// insert into first 
function insertion(arr,val){
    for(let i=arr.length-1; i>=0;i--){
       arr[i+1]=arr[i];
    }
   arr[0]=val
   return arr;
   }

console.log(insertion([2,3,4,5],1));
