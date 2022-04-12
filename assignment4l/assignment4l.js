var val = 0,ref;

function myfunstart() {
  
   ref=setInterval(()=>{
        val++;
        document.getElementById("txt").innerHTML = val;
    }
    ,2000);
    document.getElementById("a1").disabled=true;
    document.getElementById("a2").disabled=false;
}
function myfunstop(){
    clearInterval(ref);
    document.getElementById("a2").disabled=true;
    document.getElementById("a1").disabled=false;
}