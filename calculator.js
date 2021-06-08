document.write("<div>");
document.write("<input type='text' id='display'>");
document.write(" <button onClick='reset()' class='excep'>AC</button>");
document.write(" <button onClick='' class='excep' id='sci'>SCI</button><br><br>");
var metr;
numbers=["7","8","9","4","5","6","1","2","3",".","0","="]
ops=["+","-","/","*"]
funs=['sinh','cosh','logh','1/x']
rads=['rad','deg']
for(i=0;i<numbers.length;i++)
{	
	if(numbers[i]=="=")
		document.write("<button onClick='calc(&quot;"+numbers[i]+ "&quot;)'>" +numbers[i]+ "</button>")
	else
		document.write("<button onClick='updateDisplay(&quot;"+numbers[i]+ "&quot;)'>" +numbers[i]+ "</button>")
	if(i%3==2)
	{
		op=ops.pop()
		fun=funs.pop()

		document.write("<button onClick='calc(&quot;"+op+ "&quot;)'>" +op+ "</button>")
		document.write(" <button onClick='sci_calc(&quot;"+fun+ "&quot;)' class='sci_hide'>" +fun+ "</button>")
		document.write("<br>")
	}
}

document.write("<br><input type='text' id='numb' value='0' class='bottom'> ")
document.write("<input type='text' id='opss' value='+' class='bottom'>")
document.write(" <button onClick='rad(&quot;"+rads[1]+ "&quot;)' id='rad_excep' class='sci_hide'>" +rads[0]+ "</button>")
document.write(" <button onClick='rad(&quot;"+rads[0]+ "&quot;)' id='deg_excep' class='sci_hide'>" +rads[1]+ "</button></div>")

function rad(metrr){
	metr=metrr
}

function updateDisplay(num) {
		document.getElementById("display").value+=num
	}

function sci_calc(funn){
	if(metr==null)
		metr="rad"
	if(metr=="rad")
		mult=1;
	if(metr=="deg")
		mult=0.017444444444444446;
	console.log(metr)
	var curValue=Number(document.getElementById("display").value)
	var x=Number(document.getElementById("numb").value);
	
	if(funn=="sinh"){
		curValue=curValue*mult;
		document.getElementById("numb").value=x+Math.sin(curValue);}
	else if(funn=="cosh"){
		curValue=curValue*mult;
		document.getElementById("numb").value=x+Math.cos(curValue);}
	else if(funn=="logh")
		document.getElementById("numb").value=x+Math.log(curValue,10)
	else if(funn=="1/x")
		document.getElementById("numb").value=x+(1/curValue)
	document.getElementById("display").value=0
}

function calc(op){
	var curValue=Number(document.getElementById("display").value)
	var preNum=Number(document.getElementById("numb").value)
	var preOp=document.getElementById("opss").value
	if(preOp=="+")
		total=preNum + curValue
	else if (preOp=="/")
		total=preNum / curValue
	else if (preOp=="*")
		total=preNum * curValue
	else if (preOp=="-")
		total=preNum - curValue
	document.getElementById("display").value=""
	document.getElementById("numb").value=total
	document.getElementById("opss").value=op

 	if(op=="=")
 		document.getElementById("display").value=total
}

function reset(){
	document.getElementById("display").value=""
	document.getElementById("numb").value=0
	document.getElementById("opss").value="+"
}









