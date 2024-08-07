// function to search a key to  be deleted
function findElement(arr,n,key)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    return -1;
} 
     
// Function to delete an element
function deleteElement(arr,n,key)
{
    // Find position of element to be deleted
    let pos = findElement(arr, n, key);
      
    if (pos == -1)
    {
        return n;
    }
    // Deleting element
    let newArr = []
     for(let i=0;i<n;i++){
      if(arr[i]===arr[pos]){
       
      }else{
      newArr[newArr.length]=arr[i];
      }
     }
    return newArr;
}
console.log(deleteElement([1,2,3,4],4,4));
