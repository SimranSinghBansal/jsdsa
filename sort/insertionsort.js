var arr=[50,20,10,40,70,80,5,3,2,1,50,20,80]
console.log(arr.toString())
function insertionsort(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        let key=arr[i]
        for(var j=i-1; arr[j]>key; j--)
        {
            arr[j+1]=arr[j]
        }
        if(j!==i-1)
        {
            arr[j+1]=key;
        }
    }
}
insertionsort(arr)
console.log(arr.toString())