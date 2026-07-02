function jscalc(){
    const n1=document.getElementById('num1').value;
    const n2=document.getElementById('num2').value;
    const n3=document.getElementById('num3').value;

    const number1=parseFloat(n1) ||0;
    const number2=parseFloat(n2) ||0;
    const number3=parseFloat(n3) ||0;

    //get the sum
    const sum = number1 + number2 + number3;
    document.getElementById('answer').textContent=sum;
}
function clearEntries(){
    document.getElementById('num1').value="";
     document.getElementById('num2').value="";
     document.getElementById('num3').value="";
     document.getElementById('answer').textContent="Answer goes here...";
}