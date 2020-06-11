let Heap = require('./libs/heap')

let print=(str)=>process.stdout.write(str);
// let print=(str)=>{
//     let content=document.getElementById("content")
//     content.innerText+=str;
// };

let items=[
    {name:"Asset 1", weight: 5, profit: 20},
    {name:"Asset 2", weight: 6, profit: 30},
    {name:"Asset 3", weight: 7, profit: 42},
    {name:"Asset 4", weight: 8, profit: 56},
    {name:"Asset 5", weight: 9, profit: 72}
]

let capacity = 20, current=null, profit=0,flag=false;

for(let current of items)//n
{
    current["profitPerUnit"]=current.profit/current.weight;
}

let maxHeap = new Heap((a,b,arr)=>arr[a].profitPerUnit>arr[b].profitPerUnit);

for(let current of items)//nlogn
{
    maxHeap.add(current);
}
print(`==========================================
            0/1 Knapsack Problem
==========================================
`);

while(maxHeap.length>0)//n
{
    current=maxHeap.pop();
    for(var i=0; i<current.weight; i++)//const
    {
        (i==0)?print(current.name+": "):null;
        profit+=current.profitPerUnit;
        capacity--;
        if(capacity<=0)
        {
            flag=true;
            break;
        }
    }print((i)+" Units\n");
    if(flag)
    {
        break;
    }
}

print("Total profit: "+profit+"\n==========================================")