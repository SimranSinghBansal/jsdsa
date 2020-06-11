var arr=[10,9,8,7,6,60,52,5,4,3,2,1,0]
console.log(arr.toString())
function countingsort(input, key)
{
    let rangeArray = []
    let arr=input.slice()

    //Initialize range array with 0
    for(let i=0; i<=9; i++)
    {
        rangeArray[i]=0;
    }

    //Count range of elements and adds to range array
    for(let i=0; i<arr.length; i++)
    {
        rangeArray[parseInt(arr[i].toString()[key])]++
    }

    //Add range aaray elements accumulatively
    for(let i=1; i<rangeArray.length; i++)
    {
        rangeArray[i]+=rangeArray[i-1]
    }

    //Shift the elements right shift by 1
    for(let i=rangeArray.length-1; i>=1; i--)
    {
        rangeArray[i]=rangeArray[i-1]
    }
    rangeArray[0]=0

    //Add elements in sorted manner to array
    for(let i=0; i<arr.length; i++)
    {
        input[rangeArray[parseInt(arr[i].toString()[key])]++]=arr[i]
    }
}

function radixsort(arr)
{
    let max=0
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]>arr[max])
        {
            max=i
        }
    }
    let range=arr[max].toString().length

    for(let i=0; i<arr.length; i++)
    {
        arr[i]=Number(arr[i]).toString().padStart(range,'0')
    }

    for(let i=range-1; i>=0; i--)
    {
        countingsort(arr, i)
    }
}
radixsort(arr)
console.log(arr.toString())