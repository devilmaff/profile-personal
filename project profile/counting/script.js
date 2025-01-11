let count=0;
var h2=document.getElementById("counter")
function increment(){
    count++;
    document.getElementById("counter").innerHTML=count;
}
function decrement(){
    
    if (count==0)
    {
        h2.textContent="0"   
    }
    else{
        count--;
        document.getElementById("counter").innerHTML=count;
    }
}

function clea(){
        h2.textContent="0"
        count=0
}