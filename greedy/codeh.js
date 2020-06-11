let calculateCodes=(root,str="",arr=[])=>
{
    if(root==undefined||root==null)
        return arr;
    calculateCodes(root.left,str+"0",arr);
    if(isHuffLeaf(root))
    {
        arr.push({character: root.character, code: str, frequency: root.data});
    }
    calculateCodes(root.right,str+"1",arr);
    return arr;
}

let isHuffLeaf=(node)=>!node.hasOwnProperty('left')&&!node.hasOwnProperty('right');

let merge = (obj1, obj2)=>{
    let left = null;
    let right = null;
    let node = {data: null, left:null, right: null, code: null};
    if(obj1.data<obj2.data)
    {
        left=obj1;
        right=obj2;
    }
    else
    {
        left=obj2;
        right=obj1;
    }
    node.right=right;
    node.left=left;
    node.data=parseFloat(parseFloat(left.data)+parseFloat(right.data)).toFixed(2);
    return node;
}

let print=(str)=>process.stdout.write(str);
// let print=(str,printCallback=console.log)=>printCallback(str);

let traverse = (root,printCallback)=>{
    if(root==null||root==undefined)
        return;
    traverse(root.left);
    printCallback(root.data,root.code,root.character);
    traverse(root.right);
}

let Heap = require('./libs/heap');
let bitsRequired=0.0;
let codeHeap = new Heap((a,b,arr)=>arr[a].data<arr[b].data);
let huffcodes=null;
let obj1=null, obj2=null;
let nodeHeap = new Heap((a,b,arr)=>arr[a].data<arr[b].data);
let root=null;
let totalValue = 0.0;

// let codes=[
//     {character: 'a', data: 0.70},
//     {character: 'b', data: 0.20},
//     {character: 'c', data: 0.05},
//     {character: 'd', data: 0.05}
// ]

let codes=[
    {character: 'a', data: 5},
    {character: 'e', data: 11},
    {character: 'i', data: 9},
    {character: 'o', data: 8},
    {character: 'u', data: 12},
    {character: 's', data: 10},
    {character: 't', data: 18}
]

for(let code of codes)//n
{
    codeHeap.add(code);
}

while(codeHeap.length>0)//nlogn
{
    obj1=codeHeap.pop();
    if(codeHeap.length<=0)
    {
        nodeHeap.add(obj1)
    }else
    {
        obj2=codeHeap.pop();
        nodeHeap.add(merge(obj1,obj2));
    }
}
while(nodeHeap.length!=1)//nlogn
{
    obj1=nodeHeap.pop();
    obj2=nodeHeap.pop();
    nodeHeap.add(merge(obj1,obj2));
}

root=nodeHeap.peek;
totalValue=root.data;
huffcodes=calculateCodes(root)//n

print(`==============================================
            Huffman Encoding
==============================================
`+"Character".padEnd(12," ")+"Code".padEnd(10," ")+
"Bit Length".padEnd(12," ")+"Frequency\n"
);
for(let row of huffcodes)//n
{
    bitsRequired+=row.frequency*row.code.length;
    let op=row.character.toString().padEnd(12," ")+
    " "+row.code.toString().padEnd(10," ")+
    " "+row.code.length.toString().padEnd(12," ")+
    " "+row.frequency+"\n";
    print(op);
}

bitsRequired/=totalValue;
bitsRequired=bitsRequired.toFixed(2);
print("==============================================\n");
print("Bits required for message: "+(bitsRequired));
print("\n==============================================\n");
