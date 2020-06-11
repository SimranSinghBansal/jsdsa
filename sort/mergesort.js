var arr=[10,9,8,7,6,0,5,4,3,2,1]
console.log(arr.toString())
function merge(arr, lower, middle, upper)
{
    let listL=[], listR=[], lp=0, rp=0, ap=lower

    for(let i=lower, k=0; i<=middle; i++)
    {
        listL[k++]=arr[i];
    }

    for(let i=middle+1, k=0; i<=upper; i++)
    {
        listR[k++]=arr[i];
    }
    while(lp<listL.length&&rp<listR.length)
    {
        if(listL[lp]<=listR[rp])
        {
            arr[ap++]=listL[lp++]
        }
        else
        {
            arr[ap++]=listR[rp++]
        }
    }

    while(lp<listL.length)
    {
        arr[ap++]=listL[lp++]
    }

    while(rp<listR.length)
    {
        arr[ap++]=listR[rp++]
    }
}

function mergeSort(arr,i,j)
{
    if(i<j)
    {
        let mid=Math.floor((i+j)/2)
        mergeSort(arr, i, mid)
        mergeSort(arr, mid+1, j)
        merge(arr, i, mid, j)
    }
}
mergeSort(arr, 0, arr.length-1)
console.log(arr.toString())