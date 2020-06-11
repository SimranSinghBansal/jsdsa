var Heap = require('./libs/heap')
var activities=[
    {start: 12,finish: 19},
    {start: 1,finish: 4},
    {start: 3,finish: 5},
    {start: 2,finish: 13},
    {start: 0,finish: 6},
    {start: 5,finish: 7},
    {start: 8,finish: 12},
    {start: 8,finish: 11},
    {start: 3,finish: 8},
    {start: 5,finish: 9},
    {start: 6,finish: 10}
]
var print=(str)=>process.stdout.write(str);

var sortedActivities =new Heap((a,b,arr)=>arr[a].finish>arr[b].finish);
for(object of activities)
{
    sortedActivities.add(object);
}
activities=sortedActivities.sort;
sortedActivities=null;
var binarySearch=(arr, lb, ub, element)=>
{
    if(lb<=ub)
    {
        var mid = Math.ceil((lb+ub)/2);
        console.log(mid)
        if(element.finish==arr[mid].start)
        {
            return lb;
        }
        else if(element.finish<arr[mid].start)
        {
            return binarySearch(arr, lb, mid-1, element)
        }else
        {
            return binarySearch(arr, mid+1, ub, element)
        }
    }
    return -1;
}

var closeSearch=(arr, start, element)=>
{
    for(var i=start; i<=arr.length; i++)
    {
        if(arr[i].start>=element.finish)
        {
            return i;
        }
    }
    return i;
}

let possible=1;
let possibleNumber=[];
let current = activities[0];
let index=0;
let next = null;

while(index<activities.length)
{
    possibleNumber.push(index+1)
    next=closeSearch(activities,index+1, current)
    if(next>=activities.length)
    {
        break;
    }else
    {
        possible++;
        current=activities[next];
        index=next+1;
    }
}
possibleNumber.push(index)


print(`===============================================
         Activity Selection Problem
===============================================
`);
print("ID: ".padEnd(10," "));
for(let i=1; i<=activities.length; i++)
{
    print(i.toString().padEnd(3," "));
}
print("\n");
print("Start: ".padEnd(10," "));
activities.forEach(x=>print(x.start.toString().padEnd(3," ")));
print("\n");
print("Finish: ".padEnd(10," "));
activities.forEach(x=>print(x.finish.toString().padEnd(3," ")));
print("\n");
print("===============================================\n");
print("Possible: ".padEnd(10," "));
print("\n");
print("ID: ".padEnd(10," "));
possibleNumber.forEach(x=>print(x.toString().padEnd(3," ")));
print("\n");
print("Count: ".padEnd(10," "));
print(possible+"/"+activities.length);
print("\n===============================================\n");