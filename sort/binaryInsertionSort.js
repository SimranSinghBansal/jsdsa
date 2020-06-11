function binarySearch(arr, i, j, search)
{
    if(i>j)
    {
        return i
    }
    else
    {
        let mid=Math.floor((i+j)/2)
        if(arr[mid]===search)
        {
            return mid;
        }
        else if(search<arr[mid])
        {
            return binarySearch(arr, i, mid-1, search)
        }
        else
        {
            return binarySearch(arr, mid+1, j, search)
        }
    }
}

function compactionInsert(arr, start, end, data)
{
    for(let i=end; i>=start; i--)
    {
        arr[i]=arr[i-1]
    }
    arr[start]=data
}

function binaryInsertionSort(arr)
{
    for(let i=1; i<arr.length; i++)
    {
        let key=arr[i]
        let findPlace=binarySearch(arr, 0, i-1, key)
        if(findPlace<i)
        {
            compactionInsert(arr, findPlace, i, key)
        }
    }
}

var arr=[50,20,10,40,70,80,5,3,2,1,50,20,80]
console.log(arr.toString())
binaryInsertionSort(arr)
console.log(arr.toString())