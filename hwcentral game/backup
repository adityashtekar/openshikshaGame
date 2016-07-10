var CANVAS_WIDTH=425;
var CANVAS_HEIGHT=425;
function CanvasSetup()
{	

	var canvas=document.getElementById('maze');
	var ctx=canvas.getContext('2d');
	canvas.width=CANVAS_WIDTH;
	canvas.height=CANVAS_HEIGHT;
	var showScore=document.getElementById("score");
 	showScore.innerHTML="BADGES:"+state.score;
	endpoint=403;
	startpointx=22;
	var finish=0;
	function MazeWall(context,startx,starty,endx,endy)/*Constructor for mazewall objects*/
	{
		this.context=context
		this.startx=startx;						
		this.starty=starty;
		this.endx=endx;
		this.endy=endy;
		
		this.MakeWall=function()  /*function for making maze walls*/
		{
			/*console.log(ctx);*/
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(startx,starty);
			ctx.lineTo(endx,endy);
			ctx.stroke();
			ctx.closePath();
         } 
	}
	
	
	var get_question=function()
	{

		var question=document.getElementById('Question');
		var x1 = document.createElement("INPUT");
  		x1.setAttribute("type","text");
  		question.innerHTML = "Can you solve the maze?<br>";
		question.appendChild(x1);
		var btn=document.createElement("BUTTON");
		var s=document.createTextNode("SUBMIT");
		btn.appendChild(s);
		question.appendChild(btn);

		console.log("question");
	
		btn.onclick=function()
		{	
			stop=0;
			flag=1;
			
			if(x1.value.toLowerCase()=="yes")
			{	
				if(state.score<max_score)
				{
					question.innerHTML="+1 point!! Right answer,way to go!";
					score_update();
					if(state.score!=max_score)
	    			{
	    				checkpoint_index=checkpoint_index+1;
	    				drawRandomCheckpoint(checkpoint_index);
	    			}
	    			if(state.score==max_score)
					{	
						score_update();
						question.innerHTML="YOU HAVE ANSWERED ALL QUESTIONS!Now,complete the maze!";
						ctx.clearRect(399,300,25,25);
						lastwall_index=111;
						drawChequeredFlag();
	    			 		
					}	
					
				}
			}

			else if(x1.value.toLowerCase()=="no")
			{	
				question.innerHTML="wrong answer,Go to the next checkpoint for Question";
				checkpoint_index=checkpoint_index+1;
				drawRandomCheckpoint(checkpoint_index);

			}
			else
			{
				question.innerHTML="enter either yes or no as answer :)";
				checkpoint_index=checkpoint_index+1;
	    		drawRandomCheckpoint(checkpoint_index);
			}
		}
 		
 	}
	
	var wall=[];
	{
		wall[0]=new MazeWall(ctx,25,25,400,25);
		wall[1]=new MazeWall(ctx,400,25,400,300);
		wall[2]=new MazeWall(ctx,400,325,400,400);
		wall[3]=new MazeWall(ctx,400,400,25,400);
		wall[4]=new MazeWall(ctx,25,400,25,75);
		wall[5]=new MazeWall(ctx,50,25,50,75);
		wall[6]=new MazeWall(ctx,150,250,200,250);
		wall[7]=new MazeWall(ctx,25,25,25,50);		
		wall[8]=new MazeWall(ctx,175,25,175,75);
		wall[9]=new MazeWall(ctx,175,50,125,50);
		wall[10]=new MazeWall(ctx,225,25,225,100);
		wall[11]=new MazeWall(ctx,250,75,200,75);
		wall[12]=new MazeWall(ctx,325,25,325,50);
		wall[13]=new MazeWall(ctx,350,25,350,100);
		wall[14]=new MazeWall(ctx,350,75,300,75);
		wall[15]=new MazeWall(ctx,300,75,300,50);
		wall[16]=new MazeWall(ctx,300,50,250,50);
		wall[17]=new MazeWall(ctx,275,50,275,100);
		wall[18]=new MazeWall(ctx,275,100,250,100);
		wall[19]=new MazeWall(ctx,250,100,250,175);
		wall[20]=new MazeWall(ctx,250,125,200,125);
		wall[21]=new MazeWall(ctx,250,150,275,150);
		wall[22]=new MazeWall(ctx,250,175,325,175);
		wall[23]=new MazeWall(ctx,300,175,300,125);
		wall[24]=new MazeWall(ctx,275,125,325,125);
		wall[25]=new MazeWall(ctx,325,125,325,100);
		wall[26]=new MazeWall(ctx,325,100,300,100);
		wall[27]=new MazeWall(ctx,325,175,325,200);
		wall[28]=new MazeWall(ctx,225,200,350,200);
		wall[29]=new MazeWall(ctx,350,200,350,250);
		wall[30]=new MazeWall(ctx,325,250,375,250);
		wall[31]=new MazeWall(ctx,225,200,225,250);	
		wall[32]=new MazeWall(ctx,225,225,175,225);
	    wall[33]=new MazeWall(ctx,175,225,175,200);
		wall[34]=new MazeWall(ctx,225,250,250,250);	
		wall[35]=new MazeWall(ctx,250,250,250,325);
		wall[36]=new MazeWall(ctx,125,300,300,300);
		wall[37]=new MazeWall(ctx,300,300,300,350);
		wall[38]=new MazeWall(ctx,300,325,325,325);
		wall[39]=new MazeWall(ctx,200,300,200,350);	
		wall[40]=new MazeWall(ctx,175,300,175,275);
		wall[41]=new MazeWall(ctx,125,250,125,375);	
		wall[42]=new MazeWall(ctx,125,325,150,325);
		wall[43]=new MazeWall(ctx,75,50,100,50);
		wall[44]=new MazeWall(ctx,100,50,100,100);
		wall[45]=new MazeWall(ctx,100,75,150,75);
		wall[46]=new MazeWall(ctx,150,75,150,100);
		wall[47]=new MazeWall(ctx,150,100,200,100);	
		wall[48]=new MazeWall(ctx,175,100,175,175);
		wall[49]=new MazeWall(ctx,175,125,125,125);
		wall[50]=new MazeWall(ctx,125,100,125,150);
		wall[51]=new MazeWall(ctx,125,150,100,150);
		wall[52]=new MazeWall(ctx,100,150,100,125);
		wall[53]=new MazeWall(ctx,100,125,75,125);
		wall[54]=new MazeWall(ctx,75,125,75,75);
		wall[55]=new MazeWall(ctx,75,100,25,100);
		wall[56]=new MazeWall(ctx,150,150,150,275);
		wall[57]=new MazeWall(ctx,150,175,225,175);
		wall[58]=new MazeWall(ctx,225,175,225,150);
		wall[59]=new MazeWall(ctx,225,150,200,150);
		wall[60]=new MazeWall(ctx,150,225,75,225);
		wall[61]=new MazeWall(ctx,100,200,125,200);	
		wall[62]=new MazeWall(ctx,100,300,100,200);
		wall[63]=new MazeWall(ctx,200,250,200,275);
		wall[64]=new MazeWall(ctx,200,275,225,275);
		wall[65]=new MazeWall(ctx,200,175,200,200);	
		wall[66]=new MazeWall(ctx,25,175,50,175);
		wall[67]=new MazeWall(ctx,25,275,50,275);
		wall[68]=new MazeWall(ctx,100,375,100,325);
		wall[69]=new MazeWall(ctx,100,325,75,325);
		wall[70]=new MazeWall(ctx,75,325,75,250);
		wall[71]=new MazeWall(ctx,75,300,50,300);
		wall[72]=new MazeWall(ctx,50,300,50,350);
		wall[73]=new MazeWall(ctx,50,350,75,350);
		wall[74]=new MazeWall(ctx,25,375,100,375);
		wall[75]=new MazeWall(ctx,75,250,50,250);
		wall[76]=new MazeWall(ctx,50,250,50,200);
		wall[77]=new MazeWall(ctx,75,200,75,150);
		wall[78]=new MazeWall(ctx,75,150,50,150);
		wall[79]=new MazeWall(ctx,50,150,50,125);
		wall[80]=new MazeWall(ctx,75,175,125,175);
		wall[81]=new MazeWall(ctx,250,400,250,375);
		wall[82]=new MazeWall(ctx,250,375,175,375);
		wall[83]=new MazeWall(ctx,175,375,175,325);
		wall[84]=new MazeWall(ctx,175,350,150,350);
		wall[85]=new MazeWall(ctx,150,350,150,375);
		wall[86]=new MazeWall(ctx,50,200,75,200);
		wall[87]=new MazeWall(ctx,350,400,350,375);
		wall[88]=new MazeWall(ctx,400,375,375,375);
		wall[89]=new MazeWall(ctx,400,325,375,325);
		wall[90]=new MazeWall(ctx,400,300,325,300);
		wall[91]=new MazeWall(ctx,325,300,325,275);
		wall[92]=new MazeWall(ctx,350,275,300,275);
		wall[93]=new MazeWall(ctx,300,275,300,225);
		wall[94]=new MazeWall(ctx,325,225,250,225);
		wall[95]=new MazeWall(ctx,275,225,275,275);
		wall[96]=new MazeWall(ctx,400,275,375,275);
		wall[97]=new MazeWall(ctx,400,225,375,225);
		wall[98]=new MazeWall(ctx,350,300,350,350);
		wall[99]=new MazeWall(ctx,375,350,325,350);
		wall[100]=new MazeWall(ctx,325,350,325,375);
		wall[101]=new MazeWall(ctx,275,375,325,375);
		wall[102]=new MazeWall(ctx,275,375,275,325);
		wall[103]=new MazeWall(ctx,275,350,225,350);
		wall[104]=new MazeWall(ctx,225,350,225,325);
		wall[105]=new MazeWall(ctx,400,175,350,175);
		wall[106]=new MazeWall(ctx,375,175,375,200);
		wall[107]=new MazeWall(ctx,350,175,350,125);
		wall[108]=new MazeWall(ctx,350,150,325,150);
		wall[109]=new MazeWall(ctx,350,125,375,125);
		wall[110]=new MazeWall(ctx,375,150,375,50);
		wall[111]=new MazeWall(ctx,25,50,25,75);
		wall[112]=new MazeWall(ctx,400,300,400,325);
		
	}
	var lastwall_index=112;
 
	function Makemaze()  //function to mak the maze
	{	
		var i;
		for(i=0;i<(lastwall_index+1);i++)
		{
			wall[i].MakeWall();
		}
	} 
	
			
	/*maze object*/
	var maze={
				Makemaze:Makemaze()
			 };

	maze.Makemaze;
		
	var chequeredFlag=new Image();
	chequeredFlag.src="chequered-flag-icon-50px.png";
	var drawChequeredFlag=function()
	{
			context.drawImage(chequeredFlag,404,301,20,20);
		
	}
	
	//PLAYER DIMENSIONS AND POSITIONS

	var x=27;
	var y=52;
	var rect_height=20;
	var rect_width=20;
	var context=ctx;	
	var playerimg=new Image();
	playerimg.src="Cowboy-Kid-2400px.png";	
		/*player object*/	
	var player={	
					x,
					y,
					DrawPlayer:function()
					{	
						context.drawImage(playerimg,x,y,rect_width,rect_height);
							
					},
					clearPlayer:function()
					{
						context.clearRect(x,y,rect_width,rect_height);
					}	
			
				};


	function Checkpoint(img,context,centerx,centery,radius,startAngle,endAngle)
		{
			this.context=context;
			this.centery=centery;
			this.centerx=centerx;
			this.startAngle=startAngle;
			this.endAngle=endAngle;
			this.radius=radius;
			this.img=img;

			this.drawCheckpoint=function() //constructor for checkpoints
			{	console.log("image");
					if(checkpoint_index==0)
					{img.onload=function()
					 	{
					 		context.drawImage(img,centerx-radius , centery-radius, 20, 20);

						}
					}
					else 
					{
						context.drawImage(img,centerx-radius , centery-radius, 20, 20);

					}

			};

		}
		
		
	
	var key=new Image();
	key.src="nicubunu-Lock-50px.png";

	
	//var wall_gap=wall[]
	
	var checkpoint_radius=10;
	var checkpoint=[]; //array of checkpoints
	var checkpoint_index=0;
	

	var drawRandomCheckpoint=function(checkpoint_index)
	{	
		function randomIntFromInterval(min,max)
		{
	    return Math.floor(Math.random()*(max-min+1)+min);
		}

		var randomPosX=randomIntFromInterval(25,375);
		var randomPosY=randomIntFromInterval(25,400);
		var i;
		var flag;
		console.log(randomPosX);  console.log(randomPosY);
		var checkpoint_check=function(X,Y)
		{
				
			flag=0;
			for(i=0;i<111;i++)
			{	
				
				if(wall[i].startx==wall[i].endx)
				{   
					if((X-checkpoint_radius-1)<=wall[i].startx && (X+checkpoint_radius+1)>=wall[i].startx)
					{	
						if(((Y-checkpoint_radius)>=wall[i].starty && (Y+checkpoint_radius)<=wall[i].endy) || ((Y+checkpoint_radius)<=wall[i].starty && (Y-checkpoint_radius)>=wall[i].endy))
						{
							flag=1;
							
						}

						else if(((Y-checkpoint_radius)<=wall[i].starty && (Y+checkpoint_radius)>=wall[i].starty) || ((Y+checkpoint_radius)>=wall[i].endy && (Y-checkpoint_radius)<=wall[i].endy))	
						{
							flag=1;
						
						}
					
					}

				}
				else if(wall[i].starty==wall[i].endy)
				{	
					if((Y-checkpoint_radius-1)<=wall[i].starty && (Y+checkpoint_radius+1)>=wall[i].starty)
					{
						if(((X-checkpoint_radius)>=wall[i].startx && (X+checkpoint_radius)<=wall[i].endx) || ((X+checkpoint_radius)<=wall[i].startx && (X-checkpoint_radius)>=wall[i].endx))
						{	
							flag=1;
							
						}
						else if(((X-checkpoint_radius)<=wall[i].startx && (X+checkpoint_radius)>=wall[i].startx) || ((X+checkpoint_radius)>=wall[i].endx && (X-checkpoint_radius)<=wall[i].endx))	
						{
							flag=1;
							
						}
						
					}
				}	
			}
			
			if(flag==1)
			{
				X=randomIntFromInterval(25,375);
				Y=randomIntFromInterval(25,400);
			//	console.log(X);console.log(Y);

				checkpoint_check(X,Y);	
			}
			else 
			{
				randomPosX=X;
				randomPosY=Y;
			}	


		};

		checkpoint_check(randomPosX,randomPosY);
		checkpoint[checkpoint_index]=new Checkpoint(key,ctx,randomPosX,randomPosY,checkpoint_radius,0,Math.PI*2);
		checkpoint[checkpoint_index].drawCheckpoint();
		

	}

 
	
	drawRandomCheckpoint(checkpoint_index);
	
	player.DrawPlayer();


	var UpPressed=false;
	var DownPressed=false;
	var RightPressed=false;
	var LeftPressed=false;

	document.addEventListener("keydown", keyDownHandler, true);
	document.addEventListener("keyup", keyUpHandler, false);	
	
	var stop=0;
	function keyDownHandler(event)
	{	
		if(event.keyCode==38)
		{
			UpPressed=true;
		}

		else if(event.keyCode==40)
		{
			DownPressed=true;
	 	}
		else if(event.keyCode==37)
		{
			LeftPressed=true;
		}
		else if(event.keyCode==39)
		{
			RightPressed=true;
		}
	}

	function keyUpHandler(event)
	{
		if(event.keyCode==38 && finish==0)
		{
			UpPressed=false;
		}

		else if(event.keyCode==40 && finish==0)
		{
			DownPressed=false;
	 	}
		else if(event.keyCode==37 && finish==0)
		{
			LeftPressed=false;
		}
		else if(event.keyCode==39 && finish==0)
		{
			RightPressed=false;
		}
	}
	
	function check()
	{	
		
		var flag;/*flag for checking if the wall is intersecting or not.If flag==1 it is intersecting a wall*/
	    if (UpPressed==true)//going up
    	{	
    
    		flag=0;
    		for(i=0;i<(lastwall_index+1);i++)//loop to check all the walls 
    		{ 
    											//NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
    			if((y-1)==wall[i].starty)  																				
    			{	 					
    				if(((x+rect_width)>=wall[i].startx && x<=wall[i].endx ) || (x<=wall[i].startx && (x+rect_width)>=wall[i].endx))   //checks if the player is 
    				flag=1;																												//hitting the wall by checking 
    			}   																											    //if still some part of it
    																																//lies in the range of the wall
    			
    		  	else if((y-1==wall[i].starty) || (y-1==wall[i].endy))
    			{
    				if((wall[i].startx>=x && wall[i].startx<=(rect_width+x)) || (wall[i].endx>=x && wall[i].endx<=(rect_width+x) ))
   					flag=1;
    			}
    			else if((y-2)==wall[i].starty)  
    			{	 					
    				if(((x+rect_width)>=wall[i].startx && x<=wall[i].endx ) || (x<=wall[i].startx && (x+rect_width)>=wall[i].endx))   
    				flag=2;
    			}
    			else if((y-2==wall[i].starty) || (y-2==wall[i].endy))
    			{
    				if((wall[i].startx>=x && wall[i].startx<=(rect_width+x)) || (wall[i].endx>=x && wall[i].endx<=(rect_width+x) ))
   					flag=2;
    			}
    			else if((y-3)==wall[i].starty)  
    			{	 					
    				if(((x+rect_width)>=wall[i].startx && x<=wall[i].endx ) || (x<=wall[i].startx && (x+rect_width)>=wall[i].endx))   
    				flag=3;
    			}
    			else if((y-3==wall[i].starty) || (y-3==wall[i].endy))
    			{
    				if((wall[i].startx>=x && wall[i].startx<=(rect_width+x)) || (wall[i].endx>=x && wall[i].endx<=(rect_width+x) ))
   					flag=3;
    			}
    		}

    		if(flag!=1 && flag!=2 && flag!=3)
    		{//code to check checkpoints and player collision
    	  	if(state.score!=max_score)
    		{
    		
    		if(y-3==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    		{ 
    			if(x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    			flag=3;
    			else if(x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
    			flag=3;
    			else if(x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    			flag=3;
    		}
    		else if(y-2==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) )
    		{ 
    			if(x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    			flag=2;
    			else if(x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
    			flag=2;
    			else if(x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    			flag=2;
    		}
	    	else if(y-1==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    		{ 
    			if(x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    			flag=4;
    			else if(x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
    			flag=4;
    			else if(x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    			flag=4;
    		}
	    	}	
	   		}



    		if(flag==0 && stop==0)	
    		{
    			ctx.clearRect(x,y,rect_width,rect_height);

        		y -=3;
        		state.pos_y=y; //updation of coordinate
    		}
    		else if(flag==2 && stop==0)	
    		{
    			ctx.clearRect(x,y,rect_width,rect_height);
        		y -=1; //updation of coordinate
				state.pos_y=y;    		
    		}
    		else if(flag==3 && stop==0)	
    		{
    			ctx.clearRect(x,y,rect_width,rect_height);
        		y -=2;
        		state.pos_y=y; //updation of coordinate
    		}
    		else if(flag==4)
	    	{
	    		
	    		ctx.clearRect(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius,checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius);
	    		state.pos_y=y;
	    		state.pos_x=x;
	    		stop=1;
	    		get_question();
	    		
	    		UpPressed=false;
	    	}

	    	
    	  
		}


    	if (DownPressed==true)//going down
    	{

    		flag=0;
    		for(i=0;i<(lastwall_index+1);i++)
    		{ 
    			
    			if((y+rect_height+1)==wall[i].starty)
    			{	
    				if(((x+rect_width)>=wall[i].startx && x<=wall[i].endx ) || (x<=wall[i].startx && (x+rect_width)>=wall[i].endx))
    				flag=1;
    			}
    				
    			else if(((y+rect_height+1)==wall[i].starty) || ((y+rect_height+1)==wall[i].endy))
    			{
    				if((wall[i].startx>=x && wall[i].startx<=(rect_width+x)) || (wall[i].endx>=x && wall[i].endx<=(rect_width+x) ))
					flag=1;
    			}
    			else if((y+rect_height+2)==wall[i].starty)
    			{	
    				if(((x+rect_width)>=wall[i].startx && x<=wall[i].endx ) || (x<=wall[i].startx && (x+rect_width)>=wall[i].endx))
    				flag=2;
    			}
    			else if(((y+rect_height+2)==wall[i].starty) || ((y+rect_height+2)==wall[i].endy))
    			{
    				if((wall[i].startx>=x && wall[i].startx<=(rect_width+x)) || (wall[i].endx>=x && wall[i].endx<=(rect_width+x) ))
    				flag=2;
    			}
    			else if((y+rect_height+3)==wall[i].starty)
    			{	
    				if(((x+rect_width)>=wall[i].startx && x<=wall[i].endx ) || (x<=wall[i].startx && (x+rect_width)>=wall[i].endx))
    				flag=3;
    			}
    			else if(((y+rect_height+3)==wall[i].starty) || ((y+rect_height+3)==wall[i].endy))
    			{
    				if((wall[i].startx>=x && wall[i].startx<=(rect_width+x)) || (wall[i].endx>=x && wall[i].endx<=(rect_width+x) ))
    				flag=3;
    			}	
    		}
    		if(flag!=1 && flag!=2 && flag!=3)
    		{
    		if(state.score!=max_score)
    		{
	    		
	    		if(y+rect_height+3==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
	    		{ 
	    			if(x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
	    			flag=3;
	    			else if(x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
	    			flag=3;
	    			else if(x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
	    			flag=3;
	    		}
	    		else if(y+rect_height+2==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) )
	    		{ 
	    			if(x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
	    			flag=2;
	    			else if(x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
	    			flag=2;
	    			else if(x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
	    			flag=2;
	    		}
		    	else if(y+rect_height+1==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
	    		{ 
	    			if(x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
	    			flag=4;
	    			else if(x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
	    			flag=4;
	    			else if(x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (x+rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
	    			flag=4;
	    		}
		    }
	    	}

	    	if(flag==0 && stop==0)
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	            y +=3;
	            state.pos_y=y;
	        }
	    	else if(flag==2 && stop==0) 
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	    		y+=1;
	    		state.pos_y=y;
	    	}
	    	else if(flag==3 && stop==0)
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	    		y+=2;
	    		state.pos_y=y;
	    	}
	    	else if(flag==4)
	    	{	
	    		
	    		ctx.clearRect(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius,checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius);
	    		state.pos_y=y;
	    		state.pos_x=x;
	    		stop=1;
	    		get_question();
	    		DownPressed=false;
	    	}	
	    	
	    		
    	  
	    }	 
    		
    

	    if (LeftPressed==true)//going left
	    {	
	    	
	    	flag=0;
	    	for(i=0;i<(lastwall_index+1);i++)
	    	{ 
	    		if((x-1==wall[i].startx) || x-1==startpointx)
	    		{	
	    		 	if(((y+rect_height)>=wall[i].starty && y<=wall[i].endy ) || (y<=wall[i].starty && (y+rect_height)>=wall[i].endy))
	    			flag=1;
	    		}
				else if(((x-1)==wall[i].startx) || ((x-1)==wall[i].endx))
	    		{
	    			if((wall[i].starty>=y && wall[i].starty<=(rect_height+y)) || (wall[i].endy>=y && wall[i].endy<=(rect_height+y) ))
	    			flag=1;
	   			}
	    		else if(x-2==wall[i].startx || x-2==startpointx) 
	    		{	
	    			if(((y+rect_height)>=wall[i].starty && y<=wall[i].endy ) || (y<=wall[i].starty && (y+rect_height)>=wall[i].endy))
	    			flag=2;
	    		}
	    		else if(((x-2)==wall[i].startx) || ((x-2)==wall[i].endx))
	    		{
	    			if((wall[i].starty>=y && wall[i].starty<=(rect_height+y)) || (wall[i].endy>=y && wall[i].endy<=(rect_height+y) ))
	    			flag=2;
	   			}
	    		else if(x-3==wall[i].startx || x-3==startpointx) 
	    		{	
	   			 	if(((y+rect_height)>=wall[i].starty && y<=wall[i].endy ) || (y<=wall[i].starty && (y+rect_height)>=wall[i].endy))
	    			flag=3;
	    		}
	    		else if(((x-3)==wall[i].startx) || ((x-3)==wall[i].endx))
	    		{
	    			if((wall[i].starty>=y && wall[i].starty<=(rect_height+y)) || (wall[i].endy>=y && wall[i].endy<=(rect_height+y) ))
	    			flag=3;
	   			}
	    	}
	    	if(flag!=1 && flag!=2 && flag!=3)
	    	{
	    	
	    	if(state.score!=max_score)
    		{
    		if(x-3==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
    		{ 
    			if(y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    			flag=3;
    			else if(y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
    			flag=3;
    			else if(y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    			flag=3;
    		}
    		else if(x-2==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
    		{
    			if(y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    			flag=2;
    			else if(y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
    			flag=2;
    			else if(y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    			flag=2;

    		}	
	    	else if(x-1==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
	    	{
	    		if(y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    			flag=4;
    			else if(y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
    			flag=4;
    			else if(y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
    			flag=4;
	    	}
	    	}
	    }
	    	if(flag==0 && stop==0)	
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	        	x -=3;
	        	state.pos_x=x; 
	    	}
	    	else if(flag==2 && stop==0)	
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	        	x -=1; 
	        	state.pos_x=x;
	    	}
	    	else if(flag==3 && stop==0)	
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	        	x -=2;
	        	state.pos_x=x; 
	    	}
	    	else if(flag==4 )
	    	{	
	    		ctx.clearRect(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius,checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius);
	    		state.pos_y=y;
	    		state.pos_x=x;
	    		stop=1;
	    		get_question();
	    		LeftPressed=false;
	    	}
	    	
    	  
	    }

	    if (RightPressed==true)//going right
	    {	
	    	
	    	flag=0;
	    	for(i=0;i<(lastwall_index+1);i++)
	    	{ 
	    		
	    	
	    		if((x+rect_width+1)==wall[i].startx)
	    		{	
					if(((y+rect_height)>=wall[i].starty && y<=wall[i].endy ) || (y<=wall[i].starty && (y+rect_height)>=wall[i].endy))
	    			flag=1;
	    		}
	    		else if(((x+rect_width+1)==wall[i].startx) || ((x+rect_width+1)==wall[i].endx))
	    		{
	    			if((wall[i].starty>=y && wall[i].starty<=(rect_height+y)) || (wall[i].endy>=y && wall[i].endy<=(rect_height+y) ))
	    			flag=1;
	   			}
	    		else if((x+rect_width+2)==wall[i].startx)
	    		{	
	    			if(((y+rect_height)>=wall[i].starty && y<=wall[i].endy ) || (y<=wall[i].starty && (y+rect_height)>=wall[i].endy))
	    			flag=2;
	    		}
	    		else if(((x+rect_width+2)==wall[i].startx) || ((x+rect_width+2)==wall[i].endx))
	    		{
	    			if((wall[i].starty>=y && wall[i].starty<=(rect_height+y)) || (wall[i].endy>=y && wall[i].endy<=(rect_height+y) ))
	    			flag=2;
	   	   		}
	    		else if((x+rect_width+3)==wall[i].startx)
	    		{
	    			if(((y+rect_height)>=wall[i].starty && y<=wall[i].endy ) || (y<=wall[i].starty && (y+rect_height)>=wall[i].endy))
	    			flag=3;
	    		}
	    		else if(((x+rect_width+3)==wall[i].startx) || ((x+rect_width+3)==wall[i].endx))
	    		{
	    			if((wall[i].starty>=y && wall[i].starty<=(rect_height+y)) || (wall[i].endy>=y && wall[i].endy<=(rect_height+y) ))
	    			flag=3;
	   			}
				else if(x+rect_width+1==403 || x+rect_width+2==403 ||x+rect_width+3==403)
	    		{
	    			flag=1;

	    		}
	    	}
	    	if(flag!=1 && flag!=2 && flag!=3)
	    	{
			if(state.score!=max_score)
	    		{
	    			if(x+rect_width+3==(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
		    		{ 
		    			if(y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
		    			flag=3;
		    			else if(y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
		    			flag=3;
		    			else if(y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
		    			
		    			flag=3;
		    		}
		    		else if(x+rect_width+2==(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius)) 
		    		{
		    			if(y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
		    			flag=2;
		    			else if(y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
		    			flag=2;
		    			else if(y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
		    			flag=2;

		    		}	
			    	else if(x+rect_width+1==(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius)) 
			    	{
			    		if(y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
		    			flag=4;
		    			else if(y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
		    			flag=4;
		    			else if(y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (y+rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
		    			flag=4;
			    	}
		    	}
	   		 }

	    	if(flag==1 && (x+rect_width+1==endpoint || x+rect_width+2==endpoint || x+rect_width+3==endpoint))
	    	{
	    		if(state.score!=max_score)
	    			{
	    				var question=document.getElementById('Question');
	    				question.innerHTML="Your score must be " + max_score +" to successfully complete the maze :(";

	    			}
	    			else
	    			{
	    				ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	    				player.clearPlayer(x,y,rect_width,rect_height);
	    				ctx.font="30px Arial";
	    				ctx.fillStyle="red";
	    				ctx.textAlign="center";
	    				ctx.fillText("You Solved the maze!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
	    				finish=1;

	    			}
	    	}	
	    	if(flag==0 && stop==0)	
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	        	x +=3;
	        	state.pos_x=x; 
	    	}
	    	else if(flag==2 && stop==0)	
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	        	x +=1; 
	        	state.pos_x=x;
	    	}
	    	else if(flag==3 && stop==0)	
	    	{
	    		ctx.clearRect(x,y,rect_width,rect_height);
	        	x +=2; 
	        	state.pos_x=x;
	    	}
	    	else if(flag==4 && stop==0)
	    	{
	    		
	    		ctx.clearRect(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius,checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius,2*checkpoint[checkpoint_index].radius);
	    		state.pos_y=y;
	    		state.pos_x=x;
	    		stop=1;
	    		get_question();
	   			RightPressed=false;
	    	}
	    }
	}
	

	var render=function () //for animation
	{
    
    		ctx.clearRect(x,y,rect_width,rect_height);
    		player.DrawPlayer();
    };

	var main = function () {
							
							check();
							render();
							requestAnimationFrame(main);
							};
						
							main();

	}
var state = {
					pos_x: 27,
					pos_y: 52,
					score: 0
				};



max_score=1;
var score_update=function()
{	
	if(state.score!=max_score)
		state.score=state.score + 1;
	var showScore=document.getElementById("score");
	showScore.innerHTML="BADGES:";
 	var badges=[];
 		
 	var i;
 	for(i=0;i<state.score;i++)
 	{
 		console.log("badge")
 		badges[i]=document.createElement("IMG");
 		badges[i].setAttribute("src","Gold-police-badge-50px.png");
 		badges[i].setAttribute("width","20");
 		badges[i].setAttribute("height","20");
 		//badges[i].style.paddingTop="2px";
 		badges[i].style.position="relative";
 		badges[i].style.marginTop="4px";
 		showScore.appendChild(badges[i]);
 	}


 }

var canvas={
			CanvasSetup:CanvasSetup
			};


$(document).ready(canvas.CanvasSetup);