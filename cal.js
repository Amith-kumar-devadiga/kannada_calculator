result="";
function Solve(val) {
    var v = document.getElementById('res');
    var kn=0;
   if((val>="0" && val<="9") ||(val=="00"))
   {
    kannadaNumbers = {"0": "೦", "1": "೧", "2": "೨", "3": "೩","4": "೪","5": "೫","6": "೬","7": "೭","8": "೮","9": "೯","00":"೦೦"};
    
    v.value += kannadaNumbers[val];
   }
   else{
      v.value +=val;
   }
    
   result+=val;
    
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(result);
    num2=num2.toString();
     var kn="";
    for(var i=0;i<num2.length;i++)
    {
      
        kannadaNumbers = {"0": "೦", "1": "೧", "2": "೨", "3": "೩","4": "೪","5": "೫","6": "೬","7": "೭","8": "೮","9": "೯","00":"೦೦"};
        kn+=kannadaNumbers[num2[i]];
    }
    document.getElementById('res').value = kn;
 }
 function Clear() {
   document.getElementById('res').value = " ";
 }
 function Back() {
    var ev =document.getElementById('res').value;
    n=ev.length;
    ev= ev.substring(0,n-1);
    document.getElementById('res').value = ev;
 }