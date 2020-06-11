function fullAdder(a,b,cin=0)
{
    return {sum: (a^b^cin).toString(2), cout: (a&b|b&cin|a&cin).toString(2)}
}


function add(ia,ib)
{
    let a=ia.toString(2)
    let b=ib.toString(2)
    let bLength=(a.length>b.length)?a.length:b.length
    let s=new Array(bLength)

    if(ia>ib)
        b=b.padStart(bLength, '0')
    else
        a=a.padStart(bLength, '0')

    console.log(a,b)
    
    for(let i=bLength-1; i>=0; i--)
    {
        if(i==bLength-1)
            s[i]=a[i]^b[i]
        s[i]=fullAdder(a[i], b[i], fullAdder(a[i+1],b[i+1]).cout)
    }
    return s
}

console.log(add(25,15))