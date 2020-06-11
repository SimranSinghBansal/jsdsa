var arr=[10,9,8,7,6,0,5,4,3,2,1]
console.log(arr.toString())
function partition(arr, lower, upper)
{
    let pivot=arr[lower], pp=lower;
    for(let i=lower+1; i<upper; i++)
    {
        if(arr[i]<pivot)
        {
            arr[pp+1]=arr[pp+1]+arr[i]-(arr[i]=arr[pp+1])
            ++pp
        }
    }
    arr[pp]=arr[pp]+arr[lower]-(arr[lower]=arr[pp])
    return pp
}

function quickSort(arr,i,j)
{
    if(i<j)
    {
        let mid=partition(arr, i, j)
        quickSort(arr, i, mid)
        quickSort(arr, mid+1, j)
    }
}
quickSort(arr, 0, arr.length)
console.log(arr.toString())