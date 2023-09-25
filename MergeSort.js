
/**
 * 
 * @param {*} arr
 * @description Sorting an array in descending order
 * @author Alok Kumar
 * @returns void
 */
function DescendingSort(arr)
{
    n = arr.length;
    i = 0;
    j = n-1;
    Sort(arr, i, j);
}
/**
 * 
 * @param {*} arr original array
 * @param {*} i = 0
 * @param {*} j = arr.length-1
 * @returns void
 */
function Sort(arr, i, j)
{
    if(i < j)
    {
        var mid = Math.floor((i+j)/2);
        Sort(arr, i, mid);
        Sort(arr, mid+1, j);
        mergeArray(arr, i, mid, j);
    }
}
/**
 * Merge two arrays in descending order
 * @param {*} arr original array
 * @param {*} i = 0
 * @param {*} mid = Math.floor((i+j)/2)
 * @param {*} j = arr.length-1
 * @returns void
 * */
function mergeArray(arr, i, mid, j)
{
    l = i;
    r = mid+1;
    k = i;
    var temp = [];
    while(l <= mid && r <= j)
    {
        if(arr[l] > arr[r])
        {
            temp[k] = arr[l];
            l++;
        }
        else
        {
            temp[k] = arr[r];
            r++;
        }
        k++;
    }
    while(l <= mid)
    {
        temp[k] = arr[l];
        l++;
        k++;
    }
    while(r <= j)
    {
        temp[k] = arr[r];
        r++;
        k++;
    }
    for(var m = i; m <= j; m++)
    {
        arr[m] = temp[m];
    }
}
var arr = [5, 8, 3, 1, -7, -4, 6, 1, 2, 0, 3-9, 4, 5, 6, 7, 8, 9, 10]
DescendingSort(arr);
console.log(arr);


