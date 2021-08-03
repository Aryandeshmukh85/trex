

var a = prompt('Enter the first variable: ');
var v = prompt('enter the second variable:') 
function setup(){
  var b2 = createButton("click here to Swap");
 b2.mousePressed(swap)
  }


function draw()
{
}
function swap() {
  [a,v]=[v,a] 
  console.log("the valu of a after swap",+a)
  console.log("the valu of v after swap",+v)
}