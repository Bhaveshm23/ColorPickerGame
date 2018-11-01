var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=pickRandomColor();
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){


hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
h1.style.backgroundColor="steelblue";
numSquares=3;
colors=generateRandomColors(numSquares);
pickedColor=pickRandomColor();
colorDisplay.textContent=pickedColor;

// We hide 3 blocks and work with remaining 3 blocks
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])		
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			// hide the rest 3 colors
			squares[i].style.display="none";
		}
	}

});

hardBtn.addEventListener("click",function(){

easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
h1.style.backgroundColor="steelblue";
numSquares=6;
colors=generateRandomColors(numSquares);
pickedColor=pickRandomColor();
colorDisplay.textContent=pickedColor;

// We hide 3 blocks and work with remaining 3 blocks
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
		
			// display the rest 3 colors
			squares[i].style.display="block";
		
	}
});

resetButton.addEventListener("click",function(){

//when we hit play again the text should be empty
messageDisplay.textContent="";
//generate random colors
colors=generateRandomColors(numSquares);
//pick a new random color from array
pickedColor=pickRandomColor();
//change the color display to match picked color
colorDisplay.textContent=pickedColor;
//change the color of squares
this.textContent="New Colors"

	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.backgroundColor=colors[i];
	}

	h1.style.backgroundColor="steelblue";

});



colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	//add initial colors to squre
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to the sqaure
	squares[i].addEventListener("click",function(){
	//grab color of the picked square
	//compare color to picked color
	var clickedColor=this.style.backgroundColor;

	if(clickedColor==pickedColor)
	{
		messageDisplay.textContent="Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor=clickedColor;
		resetButton.textContent="Play Again?";
	}
	else
	{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try Again";
	}

	});

}

// When color matches with the picked color change the color of all sqaures to the piced color
function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickRandomColor()
{
	var random=Math.floor(Math.random()*colors.length);   //Math.random returns between 0 & 1 therefore we multiplied bycolors.length
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr=[];
	//loop through the arry

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());

	}
	//return the array
	return arr;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);// for red
	var g=Math.floor(Math.random()*256);//for green
	var b=Math.floor(Math.random()*256);//for blue

	return "rgb(" + r + ", " + g + ", " + b + ")"; //remeber to add space after commas otherwise color will not match with picked colr

}