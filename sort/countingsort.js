var arr=[10,9,8,7,6,5,4,3,2,1,0]
console.log(arr.toString())
function countingsort(input)
{
    let rangeArray = []
    let arr=input.slice()

    //Initialize range array with 0
    for(let i=0; i<=100; i++)
    {
        rangeArray[i]=0;
    }

    //Count range of elements and adds to range array
    for(let i=0; i<arr.length; i++)
    {
        rangeArray[arr[i]]++
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
        input[rangeArray[arr[i]]++]=arr[i]
    }
}
countingsort(arr)
console.log(arr.toString())