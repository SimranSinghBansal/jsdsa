var arr=[50,20,10,40,70,80,5,3,2,1,50,20,80]
console.log(arr.toString())
function bubbleSort(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        let flag=false
        for(let j=0; j<arr.length-i; j++)
        {
            if(arr[j]>arr[j+1])
            {
                arr[j]=arr[j+1]+arr[j]-(arr[j+1]=arr[j])
                flag=true
            }
        }
        if(!flag)
            break;
    }
}
bubbleSort(arr)
console.log(arr.toString())