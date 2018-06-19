var colors=generaterandomcolor(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickcolor();
var reset=document.querySelector("#resetbutton");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var colordisplay=document.getElementById("picked");
var h1=document.querySelector("h1");
colordisplay.textContent=pickedColor;
var displaycontent=document.querySelector(".display");
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.backgroundColor;
          if(clickedcolor==pickedColor)
              {

                  displaycontent.textContent="Correct";
                  for(var i=0;i<squares.length;i++){
                    squares[i].style.backgroundColor=pickedColor;
                    h1.style.backgroundColor=pickedColor;
                    reset.textContent="Play Again?";

              }
            }
              else
              {
                  displaycontent.textContent="Wrong";
                  this.style.backgroundColor="#232323";
              }
            }
);
};
easy.addEventListener("click",function(){
  for(var i=3;i<6;i++){
    squares[i].style.backgroundColor="#232323";
  }
  easy.classList.add("selected");
  hard.classList.remove("selected");
})
hard.addEventListener("click",function(){
  for(var i=3;i<6;i++){
    squares[i].style.backgroundColor=colors[i];
    hard.classList.add("selected");
    easy.classList.remove("selected");
  }
})
reset.addEventListener("click",function(){

    colors=generaterandomcolor(6);
    pickedColor=pickcolor();
    colordisplay.textContent=pickedColor;
    displaycontent.textContent="New Colors";
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
h1.style.backgroundColor="steelblue";
  });
function pickcolor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generaterandomcolor(num){
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(generatcolor());
  }

  return arr;
}
function generatcolor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b +")";

}
