
function hidePoly(idArea)
{
	var dc = document.getElementById("bo" + idArea);
	if (dc)
	{
		_setStyle(dc,"display:none");	
	}
	else
	{
		alert("The poly for area " + idArea + " was not created yet");
	}
}

function showPoly(idArea)
{
	var dc = document.getElementById("bo" + idArea);
	if (dc)
	{
		_setStyle(dc,"display:block;");	
	}
	else
	{
		alert("The poly for area " + idArea + " was not created yet");
	}
}

function createPoly(vector, color, idArea)
{
	var dc = document.createElement("div");
	dc.setAttribute("id","bo" + idArea);
	_setStyle(dc, "display:none");
	// dc.setAttribute("class","areaOutline");	
	// dc.class = "areaOutline";
	document.body.appendChild(dc);

	for (var i = 0; i < vector.length/2 - 1; i++)
	{
		drawLine(vector[2*i], vector[2*i+1], vector[2*i+2], vector[2*i+3], color, i, idArea)
	}
	
	drawLine(vector[vector.length - 2], vector[vector.length - 1], vector[0], vector[1], color, vector.length/2, idArea);
	_setStyle(dc, "display:block");
}

function drawLine(x1,y1,x2, y2, color, lineNumber, idParent)
{
	var minX = x1 > x2 ? x2:x1;
	var maxX = x1 > x2 ? x1:x2;
	var minY = y1 > y2 ? y2:y1;
	var maxY = y1 > y2 ? y1:y2;
	
	var dx =  x2 - x1;
	var dy =  y2 - y1;
	
	var steps =  Math.abs(dx) > Math.abs(dy)? Math.abs(dx):Math.abs(dy);
	
	var auxX  = minX;
	var auxY = minY;
	
	var  dc = document.getElementById("bo" + idParent);
	
	var d = document.createElement("div");
	d.setAttribute("id","dbo"+idParent+"ln"+ lineNumber +"st");
	//d.setAttribute("class","areaOutline");
	d.className = "areaOutline";
	_setStyle(d,"background-color:"+color+";top:" + y1 + "px;left:" + x1+"px;");
	dc.appendChild(d);
	
	d = document.createElement("div");
	d.setAttribute("id","dbo"+idParent+"ln"+ lineNumber +"sf");
	//d.setAttribute("class","areaOutline");
	d.className = "areaOutline";
    _setStyle(d, "background-color:"+color+";top:" + y2 + "px;left:" + x2+"px;");
	dc.appendChild(d);

    for (var i = 0; i < steps; i++)
    {
		d = document.createElement("div");
		//d.setAttribute("class","areaOutline");
	    d.className = "areaOutline";
        d.setAttribute("id","dbo"+idParent+"ln"+ lineNumber +"p"+i);
		if (steps == Math.abs(dx))
		{
			auxX+=1;
			if (auxX < maxX)
			{
				
				cY = y1 + (dy/dx) * (auxX - x1);				
				_setStyle(d,"background-color:"+color+";top:" + cY + "px;left:" + auxX+"px;");
				dc.appendChild(d);	
			}
			
		}
		else if (steps == Math.abs(dy))
		{
			auxY+=1;
			if (auxY < maxY)
			{
				cX = (auxY - y1)*dx/dy + x1;				
				_setStyle(d, "background-color:"+color+";top:" + auxY + "px;left:" + cX+"px;");	
				dc.appendChild(d);
			}
			
		}
		
	}
}



//IE nu are setAttribute pentru style.... style e considerat obiect in sine, nu doar un camp

function rzCC(s){
  // thanks http://www.ruzee.com/blog/2006/07/\
  // retrieving-css-styles-via-javascript/
  for(var exp=/-([a-z])/; 
      exp.test(s); 
      s=s.replace(exp,RegExp.$1.toUpperCase()));
  return s;
}

function _setStyle(element, declaration) {
  if (declaration.charAt(declaration.length-1)==';')
    declaration = declaration.slice(0, -1);
  var k, v;
  var splitted = declaration.split(';');
  for (var i=0, len=splitted.length; i<len; i++) {
     k = rzCC(splitted[i].split(':')[0]);
     v = splitted[i].split(':')[1];
     eval("element.style."+k+"='"+v+"'");

  }
}

//Blocul de mai sus e luat de aici: http://www.peterbe.com/plog/setAttribute-style-IE









function drawPoly(vector, color, idArea)
{
	var dc = document.getElementById("bo" + idArea);
	if (dc)
	{
		showPoly(idArea);		
	}
	else
	{
		createPoly(vector, color, idArea);	
	}
}

/*function sh(e)
{
	if (!e) 
	{
		e = window.event;
	}
	var code = e.keyCode;
	if (!code)
	{
		code = e.which;
	}
	if (String.fromCharCode(code) == "S")
	{
		showPoly("1");
	}
	else if (String.fromCharCode(code) == "H")
	{
		hidePoly("1");
	}
}
*/
