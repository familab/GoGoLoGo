var deg = Math.PI/180;

function rads(x) { return Math.PI*x/180;}

var canvas;
var c;
var offset = 0;
var speed = 0.2;

function init(){
	
	canvas = document.getElementById("logo");
	c = canvas.getContext("2d");
	timer = setInterval(draw, 10);
	return timer;

}

function draw(){
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillStyle = "#76c";
	c.fillRect(0, 0, canvas.width, canvas.height);
	makeLogo(200, 200);
}

function makeLogo(x, y){
	c.fillStyle = "#FFF";
	makeGear(offset);
	offset+= speed;
	makeBulb(offset);
}

function makeGear(offset){
	c.save();
	c.translate(200, 200);
	c.save();
	c.beginPath();
	c.rotate((6+offset)*deg*10);	
	c.moveTo(105, 0);
	for ( var i = 0; i < 8; i++) {
		c.rotate(8*deg);
		c.lineTo(75, 0);
		c.arc(0, 0, 76, 0, rads(17), false);
		c.rotate(17*deg);
		c.rotate(8*deg);
		c.lineTo(105, 0);
		c.rotate(12*deg);
		c.lineTo(105, 0);
	}
	c.restore();
	c.moveTo(50, 0);	
	c.arc(0,0,50, rads(270), 0, true);	
	c.lineTo(80, -50);
	c.lineTo(50, -80);
	c.lineTo(0, -50);
	c.clip();
	c.closePath();
	c.fill();
	//c.stroke();
	c.restore();
}

function makeBulb(offset) {

	c.save();
	c.beginPath();
	c.translate(118, 94);
	
	// The Bulb's Outline
	c.moveTo(125,16);
	c.bezierCurveTo(110,31,82,31,82,31);
	c.bezierCurveTo(40,31,7,64,7,106);
	c.bezierCurveTo(7,147,40,181,82,181);
	c.bezierCurveTo(123,181,157,147,157,106);
	c.bezierCurveTo(157,106,157,78,172,63);
	c.lineTo(125,16);
	c.closePath();
	
	// The Bulb's Cutaway
	c.moveTo(146,64);
	c.bezierCurveTo(132,78,132,106,132,106);
	c.bezierCurveTo(132,133,109,156,82,156);
	c.bezierCurveTo(54,156,31,133,31,106);
	c.bezierCurveTo(32,78,54,56,82,56);
	c.bezierCurveTo(82,56,109,55,123,41);
	c.lineTo(146,64);
	c.closePath();
	
	// The Bulb's tip
	c.moveTo(170,3);
	c.bezierCurveTo(166,3,162,5,158,7);
	c.lineTo(180,30);
	c.bezierCurveTo(183,26,185,22,185,18);
	c.bezierCurveTo(185,13,183,10,181,7);
	c.bezierCurveTo(178,4,174,3,170,3);
	c.closePath();
	
	// The Bulb's Midsection
	c.moveTo(148,6);
	c.lineTo(135,17);
	c.lineTo(171,53);
	c.lineTo(181,39);
	c.lineTo(148,6);
	c.closePath();
	c.fill();
  makeSlosh(offset);
	c.fill();
	//c.stroke();
	c.restore();

}

function makeSlosh(offset) {
  //if(!window.a){alert('asdf');window.a=true;}
	// The Slosh
  //var y1 = Math.sin(offset/10) * 10 + 106
  //var y2 = Math.cos(offset/10) * 10 + 106
  //var y3 = Math.cos(offset/10) * 5 + 105
  var moonGrav = Math.cos(offset/3) * 10;
	/*c.moveTo(116,y3);
  // first four values of this
  // 2nd values are y values
  // Thanks Dan for your comments
	c.bezierCurveTo(98,y1,57,y2,43,102);
  c.bezierCurveTo(41,124,57,144,80,146);
	c.bezierCurveTo(102,148,122,131,124,109);
	c.bezierCurveTo(124,104,121,102,116,y3);
	c.closePath();*/
  c.beginPath();
  var baseX = 82;
  var baseY = 106;
  var radius = 42;
  var scaler = radius - 15;
  var leftest = baseX - scaler;
  var leftester = leftest - scaler;
  var rightest = baseX + scaler;
  var rightester = rightest + scaler;
  var bottomest = baseY +radius;
  var moonTop = baseY - moonGrav;
  var moonBottom = baseY + moonGrav;
  //c.moveTo(200,200);
  c.beginPath();
  c.arc(baseX,baseY,radius,360*deg,0);
  //c.stroke();
  c.clip();
// Draw red rectangle after clip()
  
  c.beginPath();
	//c.fillStyle="white";
  c.moveTo(leftester, baseY);
  c.bezierCurveTo(leftest,moonTop,leftest,moonTop,baseX,baseY);
  c.bezierCurveTo(rightest,moonBottom,rightest,moonBottom,rightester,baseY);
  

	c.lineTo(rightester, baseY);
  c.lineTo(rightester, bottomest);
  c.lineTo(leftester, bottomest)
	//c.fillRect(0,0,100,100);
  c.closePath();
}