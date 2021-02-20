var mouse_event="empty";
var last_Position_Of_x,last_Position_Of_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color ="black";
width_of_line="2";

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color");
   radius = document.getElementById("radius");
    width = document.getElementById("linewidth");
    mouseevent = "mousedown";
  } 
  
  function my_mouseup(e){

    mouseevent = "mouseup";
  } 
  
  function my_mouseleave(e){
    
    mouseevent = "mouseleave";
  } 

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e){
 current_position_of_x = e.clientX-canvas.offsetLeft;
   current_position_of_y = e.clientY-canvas.offsetTop;
  
   if(mouseevent=="mousedown"){
    console.log("x and y coordinates =");
    console.log(current_position_of_x,current_position_of_x);
    ctx.beginpath();
    ctx.strokestyle = color;
    ctx.linewidth= width_of_line;
    ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
    ctx.stroke();
  }
} 
   






function clear(){

ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}