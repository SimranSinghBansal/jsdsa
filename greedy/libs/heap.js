class Heap
{
    /**
     * Create a Heap
     * @param {function} callback Method defines to criterian of sorting
     */
    constructor(callback=(a,b,arr=this._data)=>arr[a]>arr[b])
    {
        this._data=[];
        this._callback=callback;
    }

    /**
     * Add elememt to heap
     * @param {*} data element to be added
     */
    add(data) {
        this._data.push(data);
        this.heapifyUp(this._data.length-1);
    }

    /**
     * Get top of heap
     */
    get peek()
    {
        return this._data[0];
    }

    /**
     * Returns heap aray
     */
    get all()
    {
        return this._data;
    }

    /** Get Heap Length*/
    get length()
    {
        return this._data.length;
    }

    /**
     * Builds heap
     */
    buildHeap(ref=this._data, maxPosition=this._data.length)
    {
        for(let i=maxPosition-1; i>=0; i--)
        {
            this.heapify(i,ref,maxPosition);
        }
    }

    /**Heapify function */
    heapify(index, ref=this._data, maxPosition=this._data.length)
    {
        let callback=this._callback;
        let parent=index;
        let left=this.getLeft(index);
        let right=this.getRight(index);
        let largest = parent;
        if(right<maxPosition)
        {
            if(callback(right, parent, ref))
            {
                largest=right;
            }
        }
        if(left<maxPosition)
        {
            if(callback(left, parent, ref)&&callback(left, right, ref))
            {
                largest=left;
            }
        }
        if(largest!==parent)
        {
            this.swap(parent,largest,ref);
            this.heapify(largest,ref,maxPosition)
        }
    }

    heapifyUp(index, ref=this._data, maxPosition=this._data.length)
    {
        let callback=this._callback;
        let parent=this.getParent(index);
        let largest = parent;
        if(index>0&&index<maxPosition)
        {
            if(callback(index, parent, ref))
            {
                largest=index;
            }
        }
        if(largest!==parent)
        {
            this.swap(parent,largest,ref);
            this.heapifyUp(parent,ref,maxPosition);
        }
    }

    /**Get index of right element */
    getRight(index)
    {
        return index*2+2;
    }

    /**Get index of left element */
    getLeft(index)
    {
        return index*2+1;
    }

    getParent(index)
    {
        return parseInt(Math.ceil(index/2.0)-1);
    }

    /**Swap heap elements */
    swap(idx1,idx2,ref=this._data)
    {
        let temp=ref[idx1];
        ref[idx1]=ref[idx2];
        ref[idx2]=temp;
    }

    /**
     * Delete root
     */
    pop(heap=this._data, maxPosition=this._data.length)
    {
        if(heap.length<=0)
            return undefined;
        let topElement=heap[0];
        this.swap(0, maxPosition-1, heap);
        heap.pop()
        this.heapify(0,heap,heap.length);
        return topElement;
    }

    /**Sorts elements based on comparator */
    get sort()
    {
        let tempArr=[];
        let thisHeap=[];
        for(let object of this._data)
        {
            thisHeap.push({...object});
        }
        for(let i=thisHeap.length-1; i>=0; i--)
        { 
            tempArr.unshift(this.pop(thisHeap,thisHeap.length));
        }
        return tempArr;
    }

    /**
     * toString heap
     */
    toString()
    {
        return this._data.toString();
    }

    isEmpty()
    {
        return this._data.length===0;
    }
}

module.exports = Heap;