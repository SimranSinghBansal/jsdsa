function createNode(data, next=null)
{
    return {data,next}
}

function append(node, data)
{
    node.next=createNode(data)
}

function printList(startNode)
{
    while(startNode.next!==null)
    {
        console.log(startNode.data)
        startNode=startNode.next
    }
    console.log(startNode.data)
}

var start = createNode(1)
for(let i=2, startNode=start; i<=10; i++, startNode=startNode.next)
{
    append(startNode,i)
}

printList(start)