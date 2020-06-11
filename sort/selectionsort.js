var arr=[50,20,10,40,70,80,5,3,2,1,50,20,80]
console.log(arr.toString())
function selectionsort(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        let min=i
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[j]<arr[min])
            {
               min=j;
            }
        }
        if(i!==min)
        {
            arr[i]=arr[min]+arr[i]-(arr[min]=arr[i])
        }    
    }
}
selectionsort(arr)
console.log(arr.toString())