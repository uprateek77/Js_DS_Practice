var arr=[];
const handleSubmit=(e)=>{
    e.preventDefault()
    val=document.getElementById('val').value;
    arr.push(Number(val));
    console.log("Button Clicked")
    document.getElementById("myText").innerHTML = arr;
    document.getElementById("myForm").reset();
}

function reverseArray(){
    var start=0
    var end=arr.length-1
    console.log(start,end)
    // while (start < end)
    // {  
    //     var temp = arr[start];
    //     arr[start] = arr[end];
    //     arr[end] = temp;
    //     start++;
    //     end--;
    // }
    for(let i=0;i<=end;i++){
        let temp= arr[i]
        arr[i]=arr[end]
        arr[end]=temp
        end=end-1;
    }
    console.log(arr)
 }