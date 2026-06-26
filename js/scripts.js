function jscalc(){
    const n1=document.getElementById('num1').value;
    const n2=document.getElementById('num2').value;

    const number1=parseFloat(n1);
    const number2=parseFloat(n2);

    //get the sum
    const sum = number1 + number2;
    document.getElementById('answer').textContent=sum;
}
function clearEntries(){
    document.getElementById('num1').value="";
     document.getElementById('num2').value="";
     document.getElementById('answer').textContent="Answer goes here...";
}