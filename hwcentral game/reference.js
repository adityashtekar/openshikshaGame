var CANVAS_WIDTH=500;
var CANVAS_HEIGHT=500;
function CanvasSetup()
{   

    var canvas=document.getElementById('maze');
    var ctx=canvas.getContext('2d');
    canvas.width=CANVAS_WIDTH;
    canvas.height=CANVAS_HEIGHT;
    ctx.scale(1.176,1.176);
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
                        lastwall_index=lastwall_index-1;
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
    
    var Quadrant_1=[];
    {   
        Quadrant_1[0]=new MazeWall(ctx,25,25,200,25);
        Quadrant_1[1]=new MazeWall(ctx,25,25,25,50);
        Quadrant_1[2]=new MazeWall(ctx,25,25,25,50);
        Quadrant_1[3]=new MazeWall(ctx,50,25,50,75);
        Quadrant_1[4]=new MazeWall(ctx,25,25,25,50);
        Quadrant_1[5]=new MazeWall(ctx,175,25,175,75);
        Quadrant_1[6]=new MazeWall(ctx,75,50,100,50);
        Quadrant_1[7]=new MazeWall(ctx,125,50,175,50);
        Quadrant_1[8]=new MazeWall(ctx,100,75,100,100);
        Quadrant_1[9]=new MazeWall(ctx,150,75,150,100);
        Quadrant_1[10]=new MazeWall(ctx,100,75,150,75);
        Quadrant_1[11]=new MazeWall(ctx,150,100,200,100);
        Quadrant_1[12]=new MazeWall(ctx,150,100,200,100);
        Quadrant_1[13]=new MazeWall(ctx,25,75,25,200);
        Quadrant_1[14]=new MazeWall(ctx,25,100,75,100);
        Quadrant_1[15]=new MazeWall(ctx,25,175,50,175);
        Quadrant_1[16]=new MazeWall(ctx,50,150,75,150);
        Quadrant_1[17]=new MazeWall(ctx,75,150,75,200);
        Quadrant_1[18]=new MazeWall(ctx,25,175,50,175);
        Quadrant_1[19]=new MazeWall(ctx,75,175,125,175);
        Quadrant_1[20]=new MazeWall(ctx,75,75,75,125);
        Quadrant_1[21]=new MazeWall(ctx,100,125,100,150);
        Quadrant_1[22]=new MazeWall(ctx,100,150,125,150);
        Quadrant_1[23]=new MazeWall(ctx,125,150,125,100);
        Quadrant_1[24]=new MazeWall(ctx,125,125,175,125);
        Quadrant_1[25]=new MazeWall(ctx,175,100,175,150);
        Quadrant_1[26]=new MazeWall(ctx,200,50,200,75);
        Quadrant_1[27]=new MazeWall(ctx,200,50,200,75);
        Quadrant_1[28]=new MazeWall(ctx,150,150,150,175);
        Quadrant_1[29]=new MazeWall(ctx,50,200,75,200);
        Quadrant_1[30]=new MazeWall(ctx,200,175,200,200);
        Quadrant_1[31]=new MazeWall(ctx,25,50,25,75);
        Quadrant_1[32]=new MazeWall(ctx,150,175,175,175);

        var lastwall_index_1=32;
    }

    var Quadrant_2=[];
    {
        Quadrant_2[0]=new MazeWall(ctx,200,25,400,25);
        Quadrant_2[1]=new MazeWall(ctx,225,25,225,100);
        Quadrant_2[2]=new MazeWall(ctx,200,75,250,75);
        Quadrant_2[3]=new MazeWall(ctx,325,25,325,50);
        Quadrant_2[4]=new MazeWall(ctx,350,25,350,100);
        Quadrant_2[5]=new MazeWall(ctx,325,75,300,75);
        Quadrant_2[6]=new MazeWall(ctx,300,75,300,50);
        Quadrant_2[7]=new MazeWall(ctx,300,50,250,50);
        Quadrant_2[8]=new MazeWall(ctx,275,50,275,100);
        Quadrant_2[9]=new MazeWall(ctx,275,100,250,100);
        Quadrant_2[10]=new MazeWall(ctx,250,100,250,175);
        Quadrant_2[11]=new MazeWall(ctx,250,125,200,125);
        Quadrant_2[12]=new MazeWall(ctx,200,25,400,25);
        Quadrant_2[13]=new MazeWall(ctx,250,150,275,150);
        Quadrant_2[14]=new MazeWall(ctx,250,175,325,175);
        Quadrant_2[15]=new MazeWall(ctx,325,175,325,200);
        Quadrant_2[16]=new MazeWall(ctx,300,150,300,125);
        Quadrant_2[17]=new MazeWall(ctx,275,125,325,125);
        Quadrant_2[18]=new MazeWall(ctx,325,125,325,100);
        Quadrant_2[19]=new MazeWall(ctx,325,100,300,100);
        Quadrant_2[20]=new MazeWall(ctx,400,175,350,175);
        Quadrant_2[21]=new MazeWall(ctx,350,175,350,125);
        Quadrant_2[22]=new MazeWall(ctx,350,150,325,150);
        Quadrant_2[23]=new MazeWall(ctx,375,50,375,150);
        Quadrant_2[24]=new MazeWall(ctx,325,175,325,200);
        Quadrant_2[25]=new MazeWall(ctx,200,150,225,150);
        Quadrant_2[26]=new MazeWall(ctx,225,150,225,175);
        Quadrant_2[27]=new MazeWall(ctx,225,175,200,175);
        Quadrant_2[28]=new MazeWall(ctx,400,25,400,200);
        Quadrant_2[29]=new MazeWall(ctx,200,175,200,200);
        
        var lastwall_index_2=29;

    }

var Quadrant_3=[];
    {
        Quadrant_3[0]=new MazeWall(ctx,25,200,25,400);
        Quadrant_3[1]=new MazeWall(ctx,25,275,50,275);
        Quadrant_3[2]=new MazeWall(ctx,25,375,100,375);
        Quadrant_3[3]=new MazeWall(ctx,100,375,100,325);
        Quadrant_3[4]=new MazeWall(ctx,100,325,75,325);
        Quadrant_3[5]=new MazeWall(ctx,75,300,75,250);
        Quadrant_3[6]=new MazeWall(ctx,75,250,50,250);
        Quadrant_3[7]=new MazeWall(ctx,50,250,75,250);
        Quadrant_3[8]=new MazeWall(ctx,75,300,50,300);
        Quadrant_3[9]=new MazeWall(ctx,50,300,50,350);
        Quadrant_3[10]=new MazeWall(ctx,50,350,75,350);
        Quadrant_3[11]=new MazeWall(ctx,50,250,50,200);
        Quadrant_3[12]=new MazeWall(ctx,100,200,100,300);
        Quadrant_3[13]=new MazeWall(ctx,75,225,150,225);
        Quadrant_3[14]=new MazeWall(ctx,150,200,150,275);
        Quadrant_3[15]=new MazeWall(ctx,150,250,200,250);
        Quadrant_3[16]=new MazeWall(ctx,200,250,200,275);
        Quadrant_3[17]=new MazeWall(ctx,150,300,175,300);
        Quadrant_3[18]=new MazeWall(ctx,200,300,200,350);
        Quadrant_3[19]=new MazeWall(ctx,125,325,150,325);
        Quadrant_3[20]=new MazeWall(ctx,175,300,175,275);
        Quadrant_3[21]=new MazeWall(ctx,150,375,150,350);
        Quadrant_3[22]=new MazeWall(ctx,150,350,175,350);
        Quadrant_3[23]=new MazeWall(ctx,175,325,175,375);
        Quadrant_3[24]=new MazeWall(ctx,175,200,175,225);
        Quadrant_3[25]=new MazeWall(ctx,175,225,200,225);
        Quadrant_3[26]=new MazeWall(ctx,125,375,125,250);
        Quadrant_3[27]=new MazeWall(ctx,25,400,200,400);
        Quadrant_3[28]=new MazeWall(ctx,50,200,75,200);
        Quadrant_3[29]=new MazeWall(ctx,100,200,125,200);
        Quadrant_3[30]=new MazeWall(ctx,225,200,350,200);
        var lastwall_index_3=30;

    }

var Quadrant_4=[];
    {
        Quadrant_4[0]=new MazeWall(ctx,200,225,225,225);
        Quadrant_4[1]=new MazeWall(ctx,200,275,225,275);
        Quadrant_4[2]=new MazeWall(ctx,200,300,300,300);
        Quadrant_4[3]=new MazeWall(ctx,300,325,325,325);
        Quadrant_4[4]=new MazeWall(ctx,250,325,250,250);
        Quadrant_4[5]=new MazeWall(ctx,250,250,225,250);
        Quadrant_4[6]=new MazeWall(ctx,225,250,225,225);
        Quadrant_4[7]=new MazeWall(ctx,225,200,350,200);
        Quadrant_4[8]=new MazeWall(ctx,350,200,350,250);
        Quadrant_4[9]=new MazeWall(ctx,325,250,375,250);
        Quadrant_4[10]=new MazeWall(ctx,200,375,250,375);
        Quadrant_4[11]=new MazeWall(ctx,250,375,250,400);
        Quadrant_4[12]=new MazeWall(ctx,325,250,375,250);
        Quadrant_4[13]=new MazeWall(ctx,200,400,400,400);
        Quadrant_4[14]=new MazeWall(ctx,350,400,350,375);
        Quadrant_4[15]=new MazeWall(ctx,400,200,400,300);
        Quadrant_4[16]=new MazeWall(ctx,400,225,375,225);
        Quadrant_4[17]=new MazeWall(ctx,400,275,375,275);
        Quadrant_4[18]=new MazeWall(ctx,400,300,350,300);
        Quadrant_4[19]=new MazeWall(ctx,325,300,325,275);
        Quadrant_4[20]=new MazeWall(ctx,350,275,300,275);
        Quadrant_4[21]=new MazeWall(ctx,300,275,300,225);
        Quadrant_4[22]=new MazeWall(ctx,275,225,250,225);
        Quadrant_4[23]=new MazeWall(ctx,275,225,275,275);
        Quadrant_4[24]=new MazeWall(ctx,350,300,350,350);
        Quadrant_4[25]=new MazeWall(ctx,375,350,325,350);
        Quadrant_4[26]=new MazeWall(ctx,325,350,325,375);
        Quadrant_4[27]=new MazeWall(ctx,325,375,275,375);
        Quadrant_4[28]=new MazeWall(ctx,275,375,275,325);
        Quadrant_4[29]=new MazeWall(ctx,275,350,225,350);
        Quadrant_4[30]=new MazeWall(ctx,225,350,225,325);
        Quadrant_4[31]=new MazeWall(ctx,400,400,400,325);
        Quadrant_4[32]=new MazeWall(ctx,400,375,375,375);
        Quadrant_4[33]=new MazeWall(ctx,400,325,375,325);
        Quadrant_4[34]=new MazeWall(ctx,200,250,200,275);
        Quadrant_4[35]=new MazeWall(ctx,200,250,200,275);
        Quadrant_4[36]=new MazeWall(ctx,300,225,325,225);
        Quadrant_4[37]=new MazeWall(ctx,400,300,400,325);
        
    }

    var lastwall_index=37;
 
    function Makemaze()  //function to mak the maze
    {   
        var i;
        for(i=0;i<lastwall_index_1+1;i++)
        {
            Quadrant_1[i].MakeWall();
        }
        for(i=0;i<lastwall_index_2+1;i++)
        {
            Quadrant_2[i].MakeWall();
        }
        for(i=0;i<lastwall_index_3+1;i++)
        {
            Quadrant_3[i].MakeWall();
        
        }
        for(i=0;i<lastwall_index+1;i++)
        {
            Quadrant_4[i].MakeWall();
        
        }
     }
    
    var monster_1img=new Image();
    monster_1img.src="fire64.png"
    var monster_2img=new Image();
    monster_2img.src="fire64.png"
    var monster_3img=new Image();
    monster_3img.src="fire64.png"

    
    var monster_1={
                rect_width:19,
                rect_height:19,
                x:277,
                y:77,
                direction:1,
                drawMonster:function(monster,x,y,rect_width,rect_height)
                {   
                    ctx.drawImage(monster,x,y,rect_width,rect_height);
                },
                
                monster_upCheck_Q2:function()
                {  
     
                    flag=0;
                        {if(this.y-1==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=5;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=5;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=5;
                        }
                        else if(this.y-2==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=2;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=2;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=2;
                        }
                        else if(this.y-3==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=3;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=3;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=3;
                        }}
                       { if(this.y-3==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        { 
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=3;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            flag=3;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=3;
                        }
                        else if(this.y-2==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        { 
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=2;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            flag=2;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=2;
                        }
                        else if(this.y-1==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        { 
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=1;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            flag=1;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=1;
                        }}
                        {
                            if(this.y-1==25)
                            flag=1;
                            else if(this.y-2==25)
                            flag=2;
                            else if(this.y-3==25)
                            flag=3;
                        }
                        
                        for(i=0;i<lastwall_index_2+1;i++)//loop to check all the walls 
                        { 
                                                  //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
                        if((this.y-1)==Quadrant_2[i].starty)                                                                                
                        {    
                            if(((this.x+this.rect_width)>=Quadrant_2[i].startx && this.x<=Quadrant_2[i].endx ) || (this.x<=Quadrant_2[i].startx && (this.x+this.rect_width)>=Quadrant_2[i].endx))   //checks if the player is 
                            flag=1; 
                                                                                                                                     //hitting the wall by checking 
                        }                                                                                                                   //if still some part of it
                                                                                                                                            //lies in the range of the wall
                        
                        else if((this.y-1==Quadrant_2[i].starty) || (this.y-1==Quadrant_2[i].endy))
                        {
                            if((Quadrant_2[i].startx>=this.x && Quadrant_2[i].startx<=(this.rect_width+this.x)) || (Quadrant_2[i].endx>=this.x && Quadrant_2[i].endx<=(this.rect_width+this.x) ))
                            {
                                flag=1;
                                //chooseDirection= Math.floor(Math.random()*(2-1+1)+1);
                            }
                        }
                        else if((this.y-2)==Quadrant_2[i].starty)  
                        {    
                                
                            if(((this.x+this.rect_width)>=Quadrant_2[i].startx && this.x<=Quadrant_2[i].endx ) || (this.x<=Quadrant_2[i].startx && (this.x+this.rect_width)>=Quadrant_2[i].endx))   
                            flag=2;
                        }
                        else if((this.y-2==Quadrant_2[i].starty) || (this.y-2==Quadrant_2[i].endy))
                        {
                            if((Quadrant_2[i].startx>=this.x && Quadrant_2[i].startx<=(this.rect_width+this.x)) || (Quadrant_2[i].endx>=this.x && Quadrant_2[i].endx<=(this.rect_width+this.x) ))
                            flag=2;
                        }
                        else if((this.y-3)==Quadrant_2[i].starty)  
                        {       
                            if(((this.x+this.rect_width)>=Quadrant_2[i].startx && this.x<=Quadrant_2[i].endx ) || (this.x<=Quadrant_2[i].startx && (this.x+this.rect_width)>=Quadrant_2[i].endx))   
                            flag=3;
                        }
                        else if((this.y-3==Quadrant_2[i].starty) || (this.y-3==Quadrant_2[i].endy))
                        {

                            if((Quadrant_2[i].startx>=this.x && Quadrant_2[i].startx<=(this.rect_width+this.x)) || (Quadrant_2[i].endx>=this.x && Quadrant_2[i].endx<=(this.rect_width+this.x) ))
                            flag=3;
                        }
                        }               
                        
                        if(flag==0 && stop==0)  
                        {                                                 
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=2;
                            //updation of coordinate
                        }
                        else if(flag==2 && stop==0) 
                        {  
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=1; //updation of coordinate
                        }
                        else if(flag==3 && stop==0)
                        {
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=2;
                        }//updation of coordinate
                       else if(flag==1 && stop==0)
                       {
                        ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                        this.direction=randomIntFromInterval(1,4);
                       }     
                       else if(flag==5 && stop==0)
                        {
                            console.log("k");
                            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                            player.clearPlayer(x,y,rect_width,rect_height);
                            ctx.font="30px Arial";
                            ctx.fillStyle="red";
                            ctx.textAlign="center";
                            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                            finish=1;
                            stop=1;
                        }
                        
        } ,
    monster_downCheck_Q2:function()
    {
         
        flag=0;
        
            if(this.y+rect_height+1==y)
            {
                if(this.x+this.rect_width>=x && this.x<=x)
               {     flag=5;}
                else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                    {flag=5;}
                else if(this.x+rect_width<=x+rect_width && this.x>=x)
                    {flag=5;}
            }
            else if(this.y+rect_height+2==y)
            {
                if(this.x+this.rect_width>=x && this.x<=x)
                    {flag=2;}
                else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                    {flag=2;}
                else if(this.x+rect_width<=x+rect_width && this.x>=x)
                    {flag=2;}
            }
            else if(this.y+rect_height+3==y)
            {
                if(this.x+this.rect_width>=x && this.x<=x)
                    {flag=3;}
                else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                    {flag=3;}
                else if(this.x+rect_width<=x+rect_width && this.x>=x)
                    {flag=3;}
            }
            if(this.y+this.rect_height+3==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
            { 
                if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                {flag=3;}
                else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                {flag=3;}
                else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                {flag=3;}
            }
            else if(this.y+this.rect_height+2==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) )
            { 
                if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                {flag=2;}
                else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                {flag=2}
                else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                {flag=2;}
            }
            else if(this.y+this.rect_height+1==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
            { 
                if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                {flag=1;}
                else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                {flag=1;}
                else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                {flag=1;}
            }
             if(this.y+this.rect_height+1==200)
            {   flag=1;
             }
            else if(this.y+this.rect_height+2==200)
            {flag=2;
                }
            else if(this.y+this.rect_height+3==200)
            {flag=3;
               }
        
        
        for(i=0;i<lastwall_index_2+1;i++)
        { 
            if((this.y+this.rect_height+1)==Quadrant_2[i].starty)
            {  
                if(((this.x+this.rect_width)>=Quadrant_2[i].startx && this.x<=Quadrant_2[i].endx ) || (this.x<=Quadrant_2[i].startx && (this.x+this.rect_width)>=Quadrant_2[i].endx))
                {flag=1;}
            }
         
            else if(((this.y+this.rect_height+1)==Quadrant_2[i].starty) || ((this.y+this.rect_height+1)==Quadrant_2[i].endy))
            {   
                if((Quadrant_2[i].startx>=this.x && Quadrant_2[i].startx<=(this.rect_width+this.x)) || (Quadrant_2[i].endx>=this.x && Quadrant_2[i].endx<=(this.rect_width+this.x)))
                {flag=1;
                }
            }
            else if((this.y+this.rect_height+2)==Quadrant_2[i].starty)
            {  
                if(((this.x+this.rect_width)>=Quadrant_2[i].startx && this.x<=Quadrant_2[i].endx ) || (this.x<=Quadrant_2[i].startx && (this.x+this.rect_width)>=Quadrant_2[i].endx))
                {flag=2;}
            }
            else if(((this.y+this.rect_height+2)==Quadrant_2[i].starty) || ((this.y+this.rect_height+2)==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=this.x && Quadrant_2[i].startx<=(this.rect_width+this.x)) || (Quadrant_2[i].endx>=this.x && Quadrant_2[i].endx<=(this.rect_width+this.x)))
                {flag=2;}
            }
            else if((this.y+this.rect_height+3)==Quadrant_2[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_2[i].startx && this.x<=Quadrant_2[i].endx ) || (this.x<=Quadrant_2[i].startx && (this.x+this.rect_width)>=Quadrant_2[i].endx))
                {flag=3;}
            }
            else if(((this.y+this.rect_height+3)==Quadrant_2[i].starty) || ((this.y+this.rect_height+3)==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=this.x && Quadrant_2[i].startx<=(this.rect_width+this.x)) || (Quadrant_2[i].endx>=this.x && Quadrant_2[i].endx<=(this.rect_width+this.x) ))
                {flag=3;}
            }
        }
                  
        if(flag==0 && stop==0)
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y +=2;
           
        }
        else if(flag==2 && stop==0) 
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y+=1;
            
        }
        else if(flag==3 && stop==0)
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y+=2;
        }
        else if(flag==1 && stop==0)
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.direction=randomIntFromInterval(1,4);
            
        }
        else if(flag==5 && stop==0)
        {
            
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            player.clearPlayer(x,y,rect_width,rect_height);
            ctx.font="30px Arial";
            ctx.fillStyle="red";
            ctx.textAlign="center";
            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
            finish=1;
            stop=1;
        }
    }
 ,
    monster_leftCheck_Q2:function()
    {  
     flag=0;
        
             if(this.x-1==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                flag=5;
                else if(this.y<=y+rect_height && this.y+this.rect_height>=y+rect_height)
                flag=5;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                flag=5;
            }
             if(this.x-2==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=2;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=2;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=2;
            }
            else if(this.x-3==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=3;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=3;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=3;
            }
            if(this.x-3==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            { 
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.x-2==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;

            }   
            else if(this.x-1==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.x-1==200)
            flag=1;
            else if(this.x-2==200)
            flag=2;
            else if(this.x-3==200)
            flag=3;
                
        for(i=0;i<lastwall_index_2+1;i++)
        { 
            if((this.x-1==Quadrant_2[i].startx) || this.x-1==startpointx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_2[i].starty && this.y<=Quadrant_2[i].endy ) || (this.y<=Quadrant_2[i].starty && (this.y+this.rect_height)>=Quadrant_2[i].endy))
                flag=1;
            }
        
            else if(((this.x-1)==Quadrant_2[i].startx) || ((this.x-1)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=this.y && Quadrant_2[i].starty<=(this.rect_height+this.y)) || (Quadrant_2[i].endy>=this.y && Quadrant_2[i].endy<=(this.rect_height+this.y) ))
                flag=1;
            }
            else if(this.x-2==Quadrant_2[i].startx || this.x-2==startpointx) 
            {   
                if(((this.y+this.rect_height)>=Quadrant_2[i].starty && this.y<=Quadrant_2[i].endy ) || (this.y<=Quadrant_2[i].starty && (this.y+this.rect_height)>=Quadrant_2[i].endy))
                flag=2;
            }
            else if(((this.x-2)==Quadrant_2[i].startx) || ((this.x-2)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=this.y && Quadrant_2[i].starty<=(this.rect_height+this.y)) || (Quadrant_2[i].endy>=this.y && Quadrant_2[i].endy<=(this.rect_height+this.y) ))
                flag=2;
            }
            else if(this.x-3==Quadrant_2[i].startx || this.x-3==startpointx) 
            {   
                if(((this.y+this.rect_height)>=Quadrant_2[i].starty && this.y<=Quadrant_2[i].endy ) || (this.y<=Quadrant_2[i].starty && (this.y+this.rect_height)>=Quadrant_2[i].endy))
                flag=3;
            }
            else if(((this.x-3)==Quadrant_2[i].startx) || ((this.x-3)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=this.y && Quadrant_2[i].starty<=(this.rect_height+this.y)) || (Quadrant_2[i].endy>=this.y && Quadrant_2[i].endy<=(this.rect_height+this.y) ))
                flag=3;
            }

     

        }
        
        if(flag==0 && stop==0)  
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x -=2;
                
            }
            else if(flag==2 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x -=1; 
                
            }
            else if(flag==3 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x -=2;
            }
            else if(flag==1 && stop==0)
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.direction=randomIntFromInterval(1,4);

            }
            else if(flag==5 && stop==0)
        {
            
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            player.clearPlayer(x,y,rect_width,rect_height);
            ctx.font="30px Arial";
            ctx.fillStyle="red";
            ctx.textAlign="center";
            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
            finish=1;
            stop=1;
        }
        
    },
    monster_rightCheck_Q2:function()
    {    
     
        flag=0;
        
          if(this.x+rect_width+1==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                flag=5;
                else if(this.y<=y+rect_height && this.y+this.rect_height>=y+rect_height)
                flag=5;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                flag=5;
            }
            else if(this.x+rect_width+2==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=2;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=2;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=2;
            }
            else if(this.x+rect_width+3==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=3;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=3;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=3;
            }
            if(this.x+this.rect_width+3==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius)
            { 
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.x+this.rect_width+2==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;

            }   
            else if(this.x+this.rect_width+1==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.x+this.rect_width+1==400)
            flag=1;
            else if(this.x+this.rect_width+2==400)
            flag=2;
            else if(this.x+this.rect_width+3==400)
            flag=3;
         
        for(i=0;i<lastwall_index_2+1;i++)
        { 
            if((this.x+this.rect_width+1)==Quadrant_2[i].startx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_2[i].starty && this.y<=Quadrant_2[i].endy ) || (this.y<=Quadrant_2[i].starty && (this.y+this.rect_height)>=Quadrant_2[i].endy))
                flag=1;
            }
          
            else if(((this.x+this.rect_width+1)==Quadrant_2[i].startx) || ((this.x+this.rect_width+1)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=this.y && Quadrant_2[i].starty<=(this.rect_height+this.y)) || (Quadrant_2[i].endy>=this.y && Quadrant_2[i].endy<=(this.rect_height+this.y) ))
                flag=1;
            }
            else if((this.x+this.rect_width+2)==Quadrant_2[i].startx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_2[i].starty && this.y<=Quadrant_2[i].endy ) || (this.y<=Quadrant_2[i].starty && (this.y+this.rect_height)>=Quadrant_2[i].endy))
                flag=2;
            }
            else if(((this.x+this.rect_width+2)==Quadrant_2[i].startx) || ((this.x+this.rect_width+2)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=this.y && Quadrant_2[i].starty<=(this.rect_height+this.y)) || (Quadrant_2[i].endy>=this.y && Quadrant_2[i].endy<=(this.rect_height+this.y) ))
                flag=2;
            }
            else if((this.x+this.rect_width+3)==Quadrant_2[i].startx)
            {
                if(((this.y+this.rect_height)>=Quadrant_2[i].starty && this.y<=Quadrant_2[i].endy ) || (this.y<=Quadrant_2[i].starty && (this.y+this.rect_height)>=Quadrant_2[i].endy))
                flag=3;
            }
            else if(((this.x+this.rect_width+3)==Quadrant_2[i].startx) || ((this.x+this.rect_width+3)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=this.y && Quadrant_2[i].starty<=(this.rect_height+this.y)) || (Quadrant_2[i].endy>=this.y && Quadrant_2[i].endy<=(this.rect_height+this.y) ))
                flag=3;
            }
         }
         
         

        if(flag==0 && stop==0)  
            {   
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=2;
            }
            else if(flag==2 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=1; 
                
            }
            else if(flag==3 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=2; 
                
            }
            else if(flag==1 && stop==0)
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.direction=randomIntFromInterval(1,4);

            }
           else if(flag==5 && stop==0)
            {
                
                ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                player.clearPlayer(x,y,rect_width,rect_height);
                ctx.font="30px Arial";
                ctx.fillStyle="red";
                ctx.textAlign="center";
                ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                finish=1;
                stop=1;
            }
            
    } ,                        
      moveMonster:function()
       {    
            if(this.direction==1)
            {                   
                this.monster_rightCheck_Q2();
            }
            else if(this.direction==2)
            {
                this.monster_leftCheck_Q2();
            }
            else if(this.direction==3)
            {
                this.monster_upCheck_Q2();
            }
            else if(this.direction==4)
            {
                this.monster_downCheck_Q2();

            }

       }
    }

        
        var monster_2={
                rect_width:19,
                rect_height:19,
                x:102,
                y:277,
                direction:1,
                drawMonster:function(monster,x,y,rect_width,rect_height)
                {   
                    ctx.drawImage(monster,x,y,rect_width,rect_height);
                },
                
                monster_upCheck_Q3:function()
                {
                    flag=0;
                        if(this.y-1==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=5;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=5;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=5;
                        }
                        else if(this.y-2==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                            flag=2;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                            flag=2;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                            flag=2;
                        }
                        else if(this.y-3==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                            flag=3;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                            flag=3;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                            flag=3;
                        }
                        console.log("flag,1" + flag);
                        
                       if(this.y-3==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        {   
                            console.log("1i");
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            {flag=3;console.log("lol");}
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            {flag=3;console.log("lol1");}
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            {flag=3;console.log("lol2");}
                        }
                        else if(this.y-2==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        {   console.log("2i");
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            {flag=2;console.log("lol");}
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            {flag=2;console.log("lol1");}
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            {flag=2;console.log("lol2");}
                        }
                        else if(this.y-1==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        {   console.log("3i");
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            {flag=1;console.log("lol");}
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            {flag=1;console.log("lol1");}
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            {flag=1;console.log("lol2");}
                        }
                        if(this.y-1==200)
                        flag=1;
                        else if(this.y-2==200)
                        flag=2;
                        else if(this.y-3==200)
                        flag=3;
                        
                        for(i=0;i<lastwall_index_3+1;i++)//loop to check all the walls 
                        { 
                                                  //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
                        if((this.y-1)==Quadrant_3[i].starty)                                                                                
                        {    
                            if(((this.x+this.rect_width)>=Quadrant_3[i].startx && this.x<=Quadrant_3[i].endx ) || (this.x<=Quadrant_3[i].startx && (this.x+this.rect_width)>=Quadrant_3[i].endx))   //checks if the player is 
                            flag=1; 
                                                                                                                                     //hitting the wall by checking 
                        }                                                                                                                   //if still some part of it
                                                                                                                                            //lies in the range of the wall
                        
                        else if((this.y-1==Quadrant_3[i].starty) || (this.y-1==Quadrant_3[i].endy))
                        {
                            if((Quadrant_3[i].startx>=this.x && Quadrant_3[i].startx<=(this.rect_width+this.x)) || (Quadrant_3[i].endx>=this.x && Quadrant_3[i].endx<=(this.rect_width+this.x) ))
                            {
                                flag=1;
                                //chooseDirection= Math.floor(Math.random()*(2-1+1)+1);
                            }
                        }
                        else if((this.y-2)==Quadrant_3[i].starty)  
                        {    
                            if(((this.x+this.rect_width)>=Quadrant_3[i].startx && this.x<=Quadrant_3[i].endx ) || (this.x<=Quadrant_3[i].startx && (this.x+this.rect_width)>=Quadrant_3[i].endx))   
                            flag=2;
                        }
                        else if((this.y-2==Quadrant_3[i].starty) || (this.y-2==Quadrant_3[i].endy))
                        {
                            if((Quadrant_3[i].startx>=this.x && Quadrant_3[i].startx<=(this.rect_width+this.x)) || (Quadrant_3[i].endx>=this.x && Quadrant_3[i].endx<=(this.rect_width+this.x) ))
                            flag=2;
                        }
                        else if((this.y-3)==Quadrant_3[i].starty)  
                        {       
                            if(((this.x+this.rect_width)>=Quadrant_3[i].startx && this.x<=Quadrant_3[i].endx ) || (this.x<=Quadrant_3[i].startx && (this.x+this.rect_width)>=Quadrant_3[i].endx))   
                            flag=3;
                        }
                        else if((this.y-3==Quadrant_3[i].starty) || (this.y-3==Quadrant_3[i].endy))
                        {

                            if((Quadrant_3[i].startx>=this.x && Quadrant_3[i].startx<=(this.rect_width+this.x)) || (Quadrant_3[i].endx>=this.x && Quadrant_3[i].endx<=(this.rect_width+this.x) ))
                            flag=3;
                        }
                        }               
                        
                        if(flag==0 && stop==0)  
                        {                                                 
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=2;
                            //updation of coordinate
                        }
                        else if(flag==2 && stop==0) 
                        {  
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=1; //updation of coordinate
                        }
                        else if(flag==3 && stop==0)
                        {
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=2;
                        }//updation of coordinate
                       else if(flag==1 && stop==0)
                       {
                        ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                        this.direction=randomIntFromInterval(1,4);
                       }     
                       else if(flag==5 && stop==0)
                        {
                            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                            player.clearPlayer(x,y,rect_width,rect_height);
                            ctx.font="30px Arial";
                            ctx.fillStyle="red";
                            ctx.textAlign="center";
                            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                            finish=1;
                            stop=1;
                        }
        } ,
    monster_downCheck_Q3:function()
{
        flag=0;
        if(this.y+rect_height+1==y)
        {
            if(this.x+this.rect_width>=x && this.x<=x)
                flag=5;
            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                flag=5;
            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                flag=5;
        }
        else if(this.y+rect_height+2==y)
        {
            if(this.x+this.rect_width>=x && this.x<=x)
                flag=2;
            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                flag=2;
            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                flag=2;
        }
        else if(this.y+rect_height+3==y)
        {
            if(this.x+this.rect_width>=x && this.x<=x)
                flag=3;
            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                flag=3;
            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                flag=3;
        }
        if(this.y+this.rect_height+3==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
        { 
            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            flag=3;
            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
            flag=3;
            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            flag=3;
        }
        else if(this.y+this.rect_height+2==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) )
        { 
            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            flag=2;
            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
            flag=2;
            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            flag=2;
        }
        else if(this.y+this.rect_height+1==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
        { 
            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            flag=1;
            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
            flag=1;
            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            flag=1;
        }
        if(this.y+this.rect_height+1==400)
        flag=1;
        else if(this.y+this.rect_height+2==400)
        flag=2;
        else if(this.y+this.rect_height+3==400)
        flag=3;
                
        for(i=0;i<lastwall_index_3+1;i++)
        { 
            if((this.y+this.rect_height+1)==Quadrant_3[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_3[i].startx && this.x<=Quadrant_3[i].endx ) || (this.x<=Quadrant_3[i].startx && (this.x+this.rect_width)>=Quadrant_3[i].endx))
                flag=1;
            }
         
            else if(((this.y+this.rect_height+1)==Quadrant_3[i].starty) || ((this.y+this.rect_height+1)==Quadrant_3[i].endy))
            {
                if((Quadrant_3[i].startx>=this.x && Quadrant_3[i].startx<=(this.rect_width+this.x)) || (Quadrant_3[i].endx>=this.x && Quadrant_3[i].endx<=(this.rect_width+this.x) ))
                flag=1;
            }
            else if((this.y+this.rect_height+2)==Quadrant_3[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_3[i].startx && this.x<=Quadrant_3[i].endx ) || (this.x<=Quadrant_3[i].startx && (this.x+this.rect_width)>=Quadrant_3[i].endx))
                flag=2;
            }
            else if(((this.y+this.rect_height+2)==Quadrant_3[i].starty) || ((this.y+this.rect_height+2)==Quadrant_3[i].endy))
            {
                if((Quadrant_3[i].startx>=this.x && Quadrant_3[i].startx<=(this.rect_width+this.x)) || (Quadrant_3[i].endx>=this.x && Quadrant_3[i].endx<=(this.rect_width+this.x) ))
                flag=2;
            }
            else if((this.y+this.rect_height+3)==Quadrant_3[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_3[i].startx && this.x<=Quadrant_3[i].endx ) || (this.x<=Quadrant_3[i].startx && (this.x+this.rect_width)>=Quadrant_3[i].endx))
                flag=3;
            }
            else if(((this.y+this.rect_height+3)==Quadrant_3[i].starty) || ((this.y+this.rect_height+3)==Quadrant_3[i].endy))
            {
                if((Quadrant_3[i].startx>=this.x && Quadrant_3[i].startx<=(this.rect_width+this.x)) || (Quadrant_3[i].endx>=this.x && Quadrant_3[i].endx<=(this.rect_width+this.x) ))
                flag=3;
            }
               
        }
        
            
        if(flag==0 && stop==0)
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y +=2;
           
        }
        else if(flag==2 && stop==0) 
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y+=1;
            
        }
        else if(flag==3 && stop==0)
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y+=2;
        }
        else if(flag==1 && stop==0)
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.direction=randomIntFromInterval(1,4);
        }
        else if(flag==5 && stop==0)
        {
            
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            player.clearPlayer(x,y,rect_width,rect_height);
            ctx.font="30px Arial";
            ctx.fillStyle="red";
            ctx.textAlign="center";
            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
            finish=1;
            stop=1;
        }
    }
 ,
    monster_leftCheck_Q3:function()
    {   flag=0;
        
             if(this.x-1==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                flag=5;
                else if(this.y<=y+rect_height && this.y+this.rect_height>=y+rect_height)
                flag=5;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                flag=5;
            }
            else if(this.x-2==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=2;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=2;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=2;
            }
            else if(this.x-3==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=3;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=3;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=3;
            }
            if(this.x-3==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            { 
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.x-2==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;

            }   
            else if(this.x-1==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.x-1==25)
            flag=1;
            else if(this.x-2==25)
            flag=2;
            else if(this.x-3==25)
            flag=3;
        
        
        for(i=0;i<lastwall_index_3+1;i++)
        { 
            if((this.x-1==Quadrant_3[i].startx) || this.x-1==startpointx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_3[i].starty && this.y<=Quadrant_3[i].endy ) || (this.y<=Quadrant_3[i].starty && (this.y+this.rect_height)>=Quadrant_3[i].endy))
                flag=1;
            }
        
            else if(((this.x-1)==Quadrant_3[i].startx) || ((this.x-1)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=this.y && Quadrant_3[i].starty<=(this.rect_height+this.y)) || (Quadrant_3[i].endy>=this.y && Quadrant_3[i].endy<=(this.rect_height+this.y) ))
                flag=1;
            }
            else if(this.x-2==Quadrant_3[i].startx || this.x-2==startpointx) 
            {   
                if(((this.y+this.rect_height)>=Quadrant_3[i].starty && this.y<=Quadrant_3[i].endy ) || (this.y<=Quadrant_3[i].starty && (this.y+this.rect_height)>=Quadrant_3[i].endy))
                flag=2;
            }
            else if(((this.x-2)==Quadrant_3[i].startx) || ((this.x-2)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=this.y && Quadrant_3[i].starty<=(this.rect_height+this.y)) || (Quadrant_3[i].endy>=this.y && Quadrant_3[i].endy<=(this.rect_height+this.y) ))
                flag=2;
            }
            else if(this.x-3==Quadrant_3[i].startx || this.x-3==startpointx) 
            {   
                if(((this.y+this.rect_height)>=Quadrant_3[i].starty && this.y<=Quadrant_3[i].endy ) || (this.y<=Quadrant_3[i].starty && (this.y+this.rect_height)>=Quadrant_3[i].endy))
                flag=3;
            }
            else if(((this.x-3)==Quadrant_3[i].startx) || ((this.x-3)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=this.y && Quadrant_3[i].starty<=(this.rect_height+this.y)) || (Quadrant_3[i].endy>=this.y && Quadrant_3[i].endy<=(this.rect_height+this.y) ))
                flag=3;
            }
        }
        
        if(flag==0 && stop==0)  
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x -=2;
                
            }
            else if(flag==2 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x -=1; 
                
            }
            else if(flag==3 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x -=2;
            }
            else if(flag==1 && stop==0)
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.direction=randomIntFromInterval(1,4);

            }
            else if(flag==5 && stop==0)
        {
            
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            player.clearPlayer(x,y,rect_width,rect_height);
            ctx.font="30px Arial";
            ctx.fillStyle="red";
            ctx.textAlign="center";
            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
            finish=1;
            stop=1;
        }
        
    },
    monster_rightCheck_Q3:function()
    {  
        flag=0;
        
          if(this.x+this.rect_width+1==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                flag=5;
                else if(this.y<=y+rect_height && this.y+this.rect_height>=y+rect_height)
                flag=5;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                flag=5;
            }
            else if(this.x+this.rect_width+2==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=2;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=2;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=2;
            }
            else if(this.x+this.rect_width+3==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=3;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=3;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=3;
            }
            if(this.x+this.rect_width+3==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius)
            { 
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.x+this.rect_width+2==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;

            }   
            else if(this.x+this.rect_width+1==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.x+this.rect_width+1==200)
            flag=1;
            else if(this.x+this.rect_width+2==200)
            flag=2;
            else if(this.x+this.rect_width+3==200)
            flag=3;
                     

        for(i=0;i<lastwall_index_3+1;i++)
        { 
            if((this.x+this.rect_width+1)==Quadrant_3[i].startx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_3[i].starty && this.y<=Quadrant_3[i].endy ) || (this.y<=Quadrant_3[i].starty && (this.y+this.rect_height)>=Quadrant_3[i].endy))
                flag=1;
            }
          
            else if(((this.x+this.rect_width+1)==Quadrant_3[i].startx) || ((this.x+this.rect_width+1)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=this.y && Quadrant_3[i].starty<=(this.rect_height+this.y)) || (Quadrant_3[i].endy>=this.y && Quadrant_3[i].endy<=(this.rect_height+this.y) ))
                flag=1;
            }
            else if((this.x+this.rect_width+2)==Quadrant_3[i].startx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_3[i].starty && this.y<=Quadrant_3[i].endy ) || (this.y<=Quadrant_3[i].starty && (this.y+this.rect_height)>=Quadrant_3[i].endy))
                flag=2;
            }
            else if(((this.x+this.rect_width+2)==Quadrant_3[i].startx) || ((this.x+this.rect_width+2)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=this.y && Quadrant_3[i].starty<=(this.rect_height+this.y)) || (Quadrant_3[i].endy>=this.y && Quadrant_3[i].endy<=(this.rect_height+this.y) ))
                flag=2;
            }
            else if((this.x+this.rect_width+3)==Quadrant_3[i].startx)
            {
                if(((this.y+this.rect_height)>=Quadrant_3[i].starty && this.y<=Quadrant_3[i].endy ) || (this.y<=Quadrant_3[i].starty && (this.y+this.rect_height)>=Quadrant_3[i].endy))
                flag=3;
            }
            else if(((this.x+this.rect_width+3)==Quadrant_3[i].startx) || ((this.x+this.rect_width+3)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=this.y && Quadrant_3[i].starty<=(this.rect_height+this.y)) || (Quadrant_3[i].endy>=this.y && Quadrant_3[i].endy<=(this.rect_height+this.y) ))
                flag=3;
            }
         }
         
         

        if(flag==0 && stop==0)  
            {   
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=2;
            }
            else if(flag==2 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=1; 
                
            }
            else if(flag==3 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=2; 
                
            }
            else if(flag==1 && stop==0)
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.direction=randomIntFromInterval(1,4);
                
            }
           else if(flag==5 && stop==0)
            {
                ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                player.clearPlayer(x,y,rect_width,rect_height);
                ctx.font="30px Arial";
                ctx.fillStyle="red";
                ctx.textAlign="center";
                ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                finish=1;
                stop=1;
            }
            
    } ,                        
      moveMonster:function()
       {    
            if(this.direction==1)
            {                   
                this.monster_rightCheck_Q3();
            }
            else if(this.direction==2)
            {
                this.monster_leftCheck_Q3();
            }
            else if(this.direction==3)
            {
                this.monster_upCheck_Q3();
            }
            else if(this.direction==4)
            {
                this.monster_downCheck_Q3();

            }

       }
    }

    var monster_3={
                rect_width:19,
                rect_height:19,
                x:227,
                y:227,
                direction:1,
                drawMonster:function(monster,x,y,rect_width,rect_height)
                {   
                    ctx.drawImage(monster,x,y,rect_width,rect_height);
                },
                
                monster_upCheck_Q4:function()
                {
                    flag=0;
                        
                        if(this.y-1==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=5;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=5;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=5;
                        }
                        else if(this.y-2==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=2;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=2;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=2;
                        }
                        else if(this.y-3==y+rect_height)
                        {
                            if(this.x+this.rect_width>=x && this.x<=x)
                                flag=3;
                            else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                                flag=3;
                            else if(this.x+rect_width<=x+rect_width && this.x>=x)
                                flag=3;
                        }
                        if(this.y-3==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        { 
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=3;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            flag=3;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=3;
                        }
                        else if(this.y-2==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        { 
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=2;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            flag=2;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=2;
                        }
                        else if(this.y-1==(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                        { 
                            if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=1;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                            flag=1;
                            else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                            flag=1;
                        }
                        if(this.y-1==200)
                        flag=1;
                        else if(this.y-2==200)
                        flag=2;
                        else if(this.y-3==200)
                        flag=3;
                        
                        for(i=0;i<lastwall_index+1;i++)//loop to check all the walls 
                        { 
                                                  //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
                        if((this.y-1)==Quadrant_4[i].starty)                                                                                
                        {    
                            if(((this.x+this.rect_width)>=Quadrant_4[i].startx && this.x<=Quadrant_4[i].endx ) || (this.x<=Quadrant_4[i].startx && (this.x+this.rect_width)>=Quadrant_4[i].endx))   //checks if the player is 
                            flag=1; 
                                                                                                                                     //hitting the wall by checking 
                        }                                                                                                                   //if still some part of it
                                                                                                                                            //lies in the range of the wall
                        
                        else if((this.y-1==Quadrant_4[i].starty) || (this.y-1==Quadrant_4[i].endy))
                        {
                            if((Quadrant_4[i].startx>=this.x && Quadrant_4[i].startx<=(this.rect_width+this.x)) || (Quadrant_4[i].endx>=this.x && Quadrant_4[i].endx<=(this.rect_width+this.x) ))
                            {
                                flag=1;
                                //chooseDirection= Math.floor(Math.random()*(2-1+1)+1);
                            }
                        }
                        else if((this.y-2)==Quadrant_4[i].starty)  
                        {    
                                
                            if(((this.x+this.rect_width)>=Quadrant_4[i].startx && this.x<=Quadrant_4[i].endx ) || (this.x<=Quadrant_4[i].startx && (this.x+this.rect_width)>=Quadrant_4[i].endx))   
                            flag=2;
                        }
                        else if((this.y-2==Quadrant_4[i].starty) || (this.y-2==Quadrant_4[i].endy))
                        {
                            if((Quadrant_4[i].startx>=this.x && Quadrant_4[i].startx<=(this.rect_width+this.x)) || (Quadrant_4[i].endx>=this.x && Quadrant_4[i].endx<=(this.rect_width+this.x) ))
                            flag=2;
                        }
                        else if((this.y-3)==Quadrant_4[i].starty)  
                        {       
                            if(((this.x+this.rect_width)>=Quadrant_4[i].startx && this.x<=Quadrant_4[i].endx ) || (this.x<=Quadrant_4[i].startx && (this.x+this.rect_width)>=Quadrant_4[i].endx))   
                            flag=3;
                        }
                        else if((this.y-3==Quadrant_4[i].starty) || (this.y-3==Quadrant_4[i].endy))
                        {

                            if((Quadrant_4[i].startx>=this.x && Quadrant_4[i].startx<=(this.rect_width+this.x)) || (Quadrant_4[i].endx>=this.x && Quadrant_4[i].endx<=(this.rect_width+this.x) ))
                            flag=3;
                        }
                       }               
                        
                        if(flag==0 && stop==0)  
                        {                                                 
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=2;
                            //updation of coordinate
                        }
                        else if(flag==2 && stop==0) 
                        {  
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=1; //updation of coordinate
                        }
                        else if(flag==3 && stop==0)
                        {
                            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                            this.y -=2;
                        }//updation of coordinate
                       else if(flag==1 && stop==0)
                       {
                        ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
                        this.direction=randomIntFromInterval(1,4);
                       }     
                       else if(flag==5 && stop==0)
                        {
                            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                            player.clearPlayer(x,y,rect_width,rect_height);
                            ctx.font="30px Arial";
                            ctx.fillStyle="red";
                            ctx.textAlign="center";
                            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                            finish=1;
                            stop=1;
                        }
                        
        } ,
    monster_downCheck_Q4:function()
    {
        flag=0;
        
            if(this.y+rect_height+1==y)
            {
                if(this.x+this.rect_width>=x && this.x<=x)
                flag=5;
                else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                flag=5;
                else if(this.x+rect_width<=x+rect_width && this.x>=x)
                flag=5;
            }
            else if(this.y+rect_height+2==y)
            {
                if(this.x+this.rect_width>=x && this.x<=x)
                flag=2;
                else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                flag=2;
                else if(this.x+rect_width<=x+rect_width && this.x>=x)
                flag=2;
            }
            else if(this.y+rect_height+3==y)
            {
                if(this.x+this.rect_width>=x && this.x<=x)
                 flag=3;
                else if(this.x<=x+rect_width && this.x+this.rect_width>=x+rect_width)
                    flag=3;
                else if(this.x+rect_width<=x+rect_width && this.x>=x)
                    flag=3;
            }
            if(this.y+this.rect_height+3==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
            { 
                if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.y+this.rect_height+2==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) )
            { 
                if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                flag=2;
            }
            else if(this.y+this.rect_height+1==(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
            { 
                if(this.x>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.x<=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.x<=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius) && (this.x+this.rect_width)>=(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.y+this.rect_height+1==400)
            flag=1;
            else if(this.y+this.rect_height+2==400)
            flag=2;
            else if(this.y+this.rect_height+3==400)
            flag=3;
        
        for(i=0;i<lastwall_index+1;i++)
        { 
            if((this.y+this.rect_height+1)==Quadrant_4[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_4[i].startx && this.x<=Quadrant_4[i].endx ) || (this.x<=Quadrant_4[i].startx && (this.x+this.rect_width)>=Quadrant_4[i].endx))
                flag=1;
            }
         
            else if(((this.y+this.rect_height+1)==Quadrant_4[i].starty) || ((this.y+this.rect_height+1)==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=this.x && Quadrant_4[i].startx<=(this.rect_width+this.x)) || (Quadrant_4[i].endx>=this.x && Quadrant_4[i].endx<=(this.rect_width+this.x) ))
                flag=1;
            }
            else if((this.y+this.rect_height+2)==Quadrant_4[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_4[i].startx && this.x<=Quadrant_4[i].endx ) || (this.x<=Quadrant_4[i].startx && (this.x+this.rect_width)>=Quadrant_4[i].endx))
                flag=2;
            }
            else if(((this.y+this.rect_height+2)==Quadrant_4[i].starty) || ((this.y+this.rect_height+2)==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=this.x && Quadrant_4[i].startx<=(this.rect_width+this.x)) || (Quadrant_4[i].endx>=this.x && Quadrant_4[i].endx<=(this.rect_width+this.x) ))
                flag=2;
            }
            else if((this.y+this.rect_height+3)==Quadrant_4[i].starty)
            {   
                if(((this.x+this.rect_width)>=Quadrant_4[i].startx && this.x<=Quadrant_4[i].endx ) || (this.x<=Quadrant_4[i].startx && (this.x+this.rect_width)>=Quadrant_4[i].endx))
                flag=3;
            }
            else if(((this.y+this.rect_height+3)==Quadrant_4[i].starty) || ((this.y+this.rect_height+3)==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=this.x && Quadrant_4[i].startx<=(this.rect_width+this.x)) || (Quadrant_4[i].endx>=this.x && Quadrant_4[i].endx<=(this.rect_width+this.x) ))
                flag=3;
            }
               
        }
        
            
        if(flag==0 && stop==0)
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y +=2;
           
        }
        else if(flag==2 && stop==0) 
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y+=1;
            
        }
        else if(flag==3 && stop==0)
        {
            ctx.clearRect(this.x,this.y,this.rect_width,this.rect_height);
            this.y+=2;
        }
        else if(flag==1 && stop==0)
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.direction=randomIntFromInterval(1,4);
        }
        else if(flag==5 && stop==0)
        {
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            player.clearPlayer(x,y,rect_width,rect_height);
            ctx.font="30px Arial";
            ctx.fillStyle="red";
            ctx.textAlign="center";
            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
            finish=1;
            stop=1;
        }
    }
 ,
    monster_leftCheck_Q4:function()
    {   flag=0;
        
             if(this.x-1==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                flag=5;
                else if(this.y<=y+rect_height && this.y+this.rect_height>=y+rect_height)
                flag=5;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                flag=5;
            }
            else if(this.x-2==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=2;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=2;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=2;
            }
            else if(this.x-3==x+rect_width)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=3;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=3;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=3;
            }
            if(this.x-3==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius))
            { 
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.x-2==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;

            }   
            else if(this.x-1==(checkpoint[checkpoint_index].centerx+checkpoint[checkpoint_index].radius)) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.x-1==200)
            flag=1;
            else if(this.x-2==200)
            flag=2;
            else if(this.x-3==200)
            flag=3;
        
        
        for(i=0;i<lastwall_index+1;i++)
        { 
            if((this.x-1==Quadrant_4[i].startx) || this.x-1==startpointx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_4[i].starty && this.y<=Quadrant_4[i].endy ) || (this.y<=Quadrant_4[i].starty && (this.y+this.rect_height)>=Quadrant_4[i].endy))
                flag=1;
            }
        
            else if(((this.x-1)==Quadrant_4[i].startx) || ((this.x-1)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=this.y && Quadrant_4[i].starty<=(this.rect_height+this.y)) || (Quadrant_4[i].endy>=this.y && Quadrant_4[i].endy<=(this.rect_height+this.y) ))
                flag=1;
            }
            else if(this.x-2==Quadrant_4[i].startx || this.x-2==startpointx) 
            {   
                if(((this.y+this.rect_height)>=Quadrant_4[i].starty && this.y<=Quadrant_4[i].endy ) || (this.y<=Quadrant_4[i].starty && (this.y+this.rect_height)>=Quadrant_4[i].endy))
                flag=2;
            }
            else if(((this.x-2)==Quadrant_4[i].startx) || ((this.x-2)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=this.y && Quadrant_4[i].starty<=(this.rect_height+this.y)) || (Quadrant_4[i].endy>=this.y && Quadrant_4[i].endy<=(this.rect_height+this.y) ))
                flag=2;
            }
            else if(this.x-3==Quadrant_4[i].startx || this.x-3==startpointx) 
            {   
                if(((this.y+this.rect_height)>=Quadrant_4[i].starty && this.y<=Quadrant_4[i].endy ) || (this.y<=Quadrant_4[i].starty && (this.y+this.rect_height)>=Quadrant_4[i].endy))
                flag=3;
            }
            else if(((this.x-3)==Quadrant_4[i].startx) || ((this.x-3)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=this.y && Quadrant_4[i].starty<=(this.rect_height+this.y)) || (Quadrant_4[i].endy>=this.y && Quadrant_4[i].endy<=(this.rect_height+this.y) ))
                flag=3;
            }

     

        }
        
        if(flag==0 && stop==0)  
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.x -=2;
            
        }
        else if(flag==2 && stop==0) 
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.x -=1; 
            
        }
        else if(flag==3 && stop==0) 
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.x -=2;
        }
        else if(flag==1 && stop==0)
        {
            ctx.clearRect(this.x,this.y,rect_width,rect_height);
            this.direction=randomIntFromInterval(1,4);

        }
        else if(flag==5 && stop==0)
        {
            
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            player.clearPlayer(x,y,rect_width,rect_height);
            ctx.font="30px Arial";
            ctx.fillStyle="red";
            ctx.textAlign="center";
            ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
            finish=1;
            stop=1;
        }
        
    },
    monster_rightCheck_Q4:function()
    {  
        flag=0;
        
          if(this.x+rect_width+1==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                flag=5;
                else if(this.y<=y+rect_height && this.y+this.rect_height>=y+rect_height)
                flag=5;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                flag=5;
            }
            else if(this.x+rect_width+2==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=2;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=2;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=2;
            }
            else if(this.x+rect_width+3==x)
            {
                if(this.y+this.rect_height>=y && this.y<=y)
                    flag=3;
                else if(this.y<=x+rect_height && this.y+this.rect_height>=y+rect_height)
                    flag=3;
                else if(this.y+rect_height<=y+rect_height && this.y>=y)
                    flag=3;
            }
            if(this.x+this.rect_width+3==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius)
            { 
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=3;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=3;
            }
            else if(this.x+this.rect_width+2==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=2;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=2;

            }   
            else if(this.x+this.rect_width+1==checkpoint[checkpoint_index].centerx-checkpoint[checkpoint_index].radius) 
            {
                if(this.y>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery-checkpoint[checkpoint_index].radius))
                flag=1;
                else if(this.y<=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius) && (this.y+this.rect_height)>=(checkpoint[checkpoint_index].centery+checkpoint[checkpoint_index].radius))
                flag=1;
            }
            if(this.x+this.rect_width+1==400)
            flag=1;
            else if(this.x+this.rect_width+2==400)
            flag=2;
            else if(this.x+this.rect_width+3==400)
            flag=3;
         
        for(i=0;i<lastwall_index+1;i++)
        { 
            if((this.x+this.rect_width+1)==Quadrant_4[i].startx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_4[i].starty && this.y<=Quadrant_4[i].endy ) || (this.y<=Quadrant_4[i].starty && (this.y+this.rect_height)>=Quadrant_4[i].endy))
                flag=1;
            }
          
            else if(((this.x+this.rect_width+1)==Quadrant_4[i].startx) || ((this.x+this.rect_width+1)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=this.y && Quadrant_4[i].starty<=(this.rect_height+this.y)) || (Quadrant_4[i].endy>=this.y && Quadrant_4[i].endy<=(this.rect_height+this.y) ))
                flag=1;
            }
            else if((this.x+this.rect_width+2)==Quadrant_4[i].startx)
            {   
                if(((this.y+this.rect_height)>=Quadrant_4[i].starty && this.y<=Quadrant_4[i].endy ) || (this.y<=Quadrant_4[i].starty && (this.y+this.rect_height)>=Quadrant_4[i].endy))
                flag=2;
            }
            else if(((this.x+this.rect_width+2)==Quadrant_4[i].startx) || ((this.x+this.rect_width+2)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=this.y && Quadrant_4[i].starty<=(this.rect_height+this.y)) || (Quadrant_4[i].endy>=this.y && Quadrant_4[i].endy<=(this.rect_height+this.y) ))
                flag=2;
            }
            else if((this.x+this.rect_width+3)==Quadrant_4[i].startx)
            {
                if(((this.y+this.rect_height)>=Quadrant_4[i].starty && this.y<=Quadrant_4[i].endy ) || (this.y<=Quadrant_4[i].starty && (this.y+this.rect_height)>=Quadrant_4[i].endy))
                flag=3;
            }
            else if(((this.x+this.rect_width+3)==Quadrant_4[i].startx) || ((this.x+this.rect_width+3)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=this.y && Quadrant_4[i].starty<=(this.rect_height+this.y)) || (Quadrant_4[i].endy>=this.y && Quadrant_4[i].endy<=(this.rect_height+this.y) ))
                flag=3;
            }
         }
         
         

        if(flag==0 && stop==0)  
            {   
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=2;
            }
            else if(flag==2 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=1; 
                
            }
            else if(flag==3 && stop==0) 
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.x +=2; 
                
            }
            else if(flag==1 && stop==0)
            {
                ctx.clearRect(this.x,this.y,rect_width,rect_height);
                this.direction=randomIntFromInterval(1,4);

            }
           else if(flag==5 && stop==0)
            {
                
                ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                player.clearPlayer(x,y,rect_width,rect_height);
                ctx.font="30px Arial";
                ctx.fillStyle="red";
                ctx.textAlign="center";
                ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                finish=1;
                stop=1;
            }
            
    } ,                        
      moveMonster:function()
       {    
            if(this.direction==1)
            {                   
                this.monster_rightCheck_Q4();
            }
            else if(this.direction==2)
            {
                this.monster_leftCheck_Q4();
            }
            else if(this.direction==3)
            {
                this.monster_upCheck_Q4();
            }
            else if(this.direction==4)
            {
                this.monster_downCheck_Q4();

            }

       }
    }


    monster_1.drawMonster(monster_1img,monster_1.x,monster_1.y,monster_1.rect_width,monster_1.rect_height);
    monster_2.drawMonster(monster_2img,monster_2.x,monster_2.y,monster_2.rect_width,monster_2.rect_height); 
    monster_3.drawMonster(monster_3img,monster_3.x,monster_3.y,monster_3.rect_width,monster_3.rect_height);         
            
    /*maze object*/
    var maze={
                Makemaze:Makemaze()
             };

    maze.Makemaze;
        
    var chequeredFlag=new Image();
    chequeredFlag.src="village-house-60px.png";
    var drawChequeredFlag=function()
    {
        context.drawImage(chequeredFlag,404,301,20,20);
    }
    
    //PLAYER DIMENSIONS AND POSITIONS

    var x=27;
    var y=52;
    var rect_height=19;
    var rect_width=19;
    var context=ctx;    
    var playerimg=new Image();
    playerimg.src="monkey-face-cartoon-60px.png";  
        /*player object*/   
    var player={    
                    x,
                    y,
                    DrawPlayer:function()
                    {   
                        //if(checkpoint_index==0)
                        //{ 
                        //  playerimg.onload=function(){
                            context.drawImage(playerimg,x,y,rect_width,rect_height);
                        //  }
                        

                    },
                    clearPlayer:function(x,y,rect_width,rect_height)
                    {
                        context.clearRect(x,y,rect_width,rect_height);
                        console.log("b")
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
            {   console.log("image");
                if(checkpoint_index==0)
                {
                    img.onload=function()
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
    key.src="banana1.png";
    
    //var wall_gap=wall[]
    
    var checkpoint_radius=10;
    var checkpoint=[]; //array of checkpoints
    var checkpoint_index=0;
    
    function randomIntFromInterval(min,max)
        {
        return Math.floor(Math.random()*(max-min+1)+min);
        }

    var drawRandomCheckpoint=function(checkpoint_index)
    {   
        

        var randomPosX=randomIntFromInterval(25,375);
        var randomPosY=randomIntFromInterval(25,400);
        var i;
        var flag;
        console.log(randomPosX);  
        console.log(randomPosY);
        
        var checkpoint_check=function(X,Y)
        {
            flag=0;
            for(i=0;i<lastwall_index_1+1;i++)
            {   
                if(Quadrant_1[i].startx==Quadrant_1[i].endx)
                {   
                    if((X-checkpoint_radius-1)<=Quadrant_1[i].startx && (X+checkpoint_radius+1)>=Quadrant_1[i].startx)
                    {   
                        if(((Y-checkpoint_radius)>=Quadrant_1[i].starty && (Y+checkpoint_radius)<=Quadrant_1[i].endy) || ((Y+checkpoint_radius)<=Quadrant_1[i].starty && (Y-checkpoint_radius)>=Quadrant_1[i].endy))
                        {
                            flag=1;
                        }

                        else if(((Y-checkpoint_radius)<=Quadrant_1[i].starty && (Y+checkpoint_radius)>=Quadrant_1[i].starty) || ((Y+checkpoint_radius)>=Quadrant_1[i].endy && (Y-checkpoint_radius)<=Quadrant_1[i].endy))   
                        {
                            flag=1;
                        }
                    
                    }

                }
                else if(Quadrant_1[i].starty==Quadrant_1[i].endy) 
                {   
                    if((Y-checkpoint_radius-1)<=Quadrant_1[i].starty && (Y+checkpoint_radius+1)>=Quadrant_1[i].starty)
                    {
                        if(((X-checkpoint_radius)>=Quadrant_1[i].startx && (X+checkpoint_radius)<=Quadrant_1[i].endx) || ((X+checkpoint_radius)<=Quadrant_1[i].startx && (X-checkpoint_radius)>=Quadrant_1[i].endx))
                        {   
                            flag=1;
                            
                        }
                        else if(((X-checkpoint_radius)<=Quadrant_1[i].startx && (X+checkpoint_radius)>=Quadrant_1[i].startx) || ((X+checkpoint_radius)>=Quadrant_1[i].endx && (X-checkpoint_radius)<=Quadrant_1[i].endx))   
                        {
                            flag=1;
                            
                        }
                        
                    }
                }   
            }
            for(i=0;i<lastwall_index_2+1;i++)
            {   
                
                if(Quadrant_2[i].startx==Quadrant_2[i].endx)
                {   
                    if((X-checkpoint_radius-1)<=Quadrant_2[i].startx && (X+checkpoint_radius+1)>=Quadrant_2[i].startx)
                    {   
                        if(((Y-checkpoint_radius)>=Quadrant_2[i].starty && (Y+checkpoint_radius)<=Quadrant_2[i].endy) || ((Y+checkpoint_radius)<=Quadrant_2[i].starty && (Y-checkpoint_radius)>=Quadrant_2[i].endy))
                        {
                            flag=1;
                            
                        }

                        else if(((Y-checkpoint_radius)<=Quadrant_2[i].starty && (Y+checkpoint_radius)>=Quadrant_2[i].starty) || ((Y+checkpoint_radius)>=Quadrant_2[i].endy && (Y-checkpoint_radius)<=Quadrant_2[i].endy))   
                        {
                            flag=1;
                        
                        }
                    
                    }

                }
                else if(Quadrant_2[i].starty==Quadrant_2[i].endy)
                {   
                    if((Y-checkpoint_radius-1)<=Quadrant_2[i].starty && (Y+checkpoint_radius+1)>=Quadrant_2[i].starty)
                    {
                        if(((X-checkpoint_radius)>=Quadrant_2[i].startx && (X+checkpoint_radius)<=Quadrant_2[i].endx) || ((X+checkpoint_radius)<=Quadrant_2[i].startx && (X-checkpoint_radius)>=Quadrant_2[i].endx))
                        {   
                            flag=1;
                            
                        }
                        else if(((X-checkpoint_radius)<=Quadrant_2[i].startx && (X+checkpoint_radius)>=Quadrant_2[i].startx) || ((X+checkpoint_radius)>=Quadrant_2[i].endx && (X-checkpoint_radius)<=Quadrant_2[i].endx))   
                        {
                            flag=1;
                            
                        }
                        
                    }
                }   
            }
            
            for(i=0;i<lastwall_index_3+1;i++)
            {   
                
                if(Quadrant_3[i].startx==Quadrant_3[i].endx)
                {   
                    if((X-checkpoint_radius-1)<=Quadrant_3[i].startx && (X+checkpoint_radius+1)>=Quadrant_3[i].startx)
                    {   
                        if(((Y-checkpoint_radius)>=Quadrant_3[i].starty && (Y+checkpoint_radius)<=Quadrant_3[i].endy) || ((Y+checkpoint_radius)<=Quadrant_3[i].starty && (Y-checkpoint_radius)>=Quadrant_3[i].endy))
                        {
                            flag=1;
                            
                        }

                        else if(((Y-checkpoint_radius)<=Quadrant_3[i].starty && (Y+checkpoint_radius)>=Quadrant_3[i].starty) || ((Y+checkpoint_radius)>=Quadrant_3[i].endy && (Y-checkpoint_radius)<=Quadrant_3[i].endy))   
                        {
                            flag=1;
                        
                        }
                    
                    }

                }
                else if(Quadrant_3[i].starty==Quadrant_3[i].endy)
                {   
                    if((Y-checkpoint_radius-1)<=Quadrant_3[i].starty && (Y+checkpoint_radius+1)>=Quadrant_3[i].starty)
                    {
                        if(((X-checkpoint_radius)>=Quadrant_3[i].startx && (X+checkpoint_radius)<=Quadrant_3[i].endx) || ((X+checkpoint_radius)<=Quadrant_3[i].startx && (X-checkpoint_radius)>=Quadrant_3[i].endx))
                        {   
                            flag=1;
                            
                        }
                        else if(((X-checkpoint_radius)<=Quadrant_3[i].startx && (X+checkpoint_radius)>=Quadrant_3[i].startx) || ((X+checkpoint_radius)>=Quadrant_3[i].endx && (X-checkpoint_radius)<=Quadrant_3[i].endx))   
                        {
                            flag=1;
                            
                        }
                        
                    }
                }   
            }

            for(i=0;i<lastwall_index+1;i++)
            {   
                
                if(Quadrant_4[i].startx==Quadrant_4[i].endx)
                {   
                    if((X-checkpoint_radius-1)<=Quadrant_4[i].startx && (X+checkpoint_radius+1)>=Quadrant_4[i].startx)
                    {   
                        if(((Y-checkpoint_radius)>=Quadrant_4[i].starty && (Y+checkpoint_radius)<=Quadrant_4[i].endy) || ((Y+checkpoint_radius)<=Quadrant_4[i].starty && (Y-checkpoint_radius)>=Quadrant_4[i].endy))
                        {
                            flag=1;
                            
                        }

                        else if(((Y-checkpoint_radius)<=Quadrant_4[i].starty && (Y+checkpoint_radius)>=Quadrant_4[i].starty) || ((Y+checkpoint_radius)>=Quadrant_4[i].endy && (Y-checkpoint_radius)<=Quadrant_4[i].endy))   
                        {
                            flag=1;
                        
                        }
                    
                    }

                }
                else if(Quadrant_4[i].starty==Quadrant_4[i].endy)
                {   
                    if((Y-checkpoint_radius-1)<=Quadrant_4[i].starty && (Y+checkpoint_radius+1)>=Quadrant_4[i].starty)
                    {
                        if(((X-checkpoint_radius)>=Quadrant_4[i].startx && (X+checkpoint_radius)<=Quadrant_4[i].endx) || ((X+checkpoint_radius)<=Quadrant_4[i].startx && (X-checkpoint_radius)>=Quadrant_4[i].endx))
                        {   
                            flag=1;
                            
                        }
                        else if(((X-checkpoint_radius)<=Quadrant_4[i].startx && (X+checkpoint_radius)>=Quadrant_4[i].startx) || ((X+checkpoint_radius)>=Quadrant_4[i].endx && (X-checkpoint_radius)<=Quadrant_4[i].endx))   
                        {
                            flag=1;
                            
                        }
                        
                    }
                }
                                     
            }
            
            if(Y-checkpoint_radius-1<=monster_3.y && Y+checkpoint_radius+1>=monster_3.y)
                {
                    if(X-checkpoint_radius-1<=monster_3.x && X+checkpoint_radius+1>=monster_3.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=monster_3.x+monster_3.rect_width && X+checkpoint_radius+1>=monster_3.x+monster_3.rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=monster_3.y+monster_3.rect_height && Y+checkpoint_radius+1>=monster_3.y+monster_3.rect_height)
                {
                    if(X-checkpoint_radius-1<=monster_3.x && X+checkpoint_radius+1>=monster_3.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=monster_3.x+monster_3.rect_width && X+checkpoint_radius+1>=monster_3.x+monster_3.rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=monster_2.y && Y+checkpoint_radius+1>=monster_2.y)
                {
                    if(X-checkpoint_radius-1<=monster_2.x && X+checkpoint_radius+1>=monster_2.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=monster_2.x+monster_2.rect_width && X+checkpoint_radius+1>=monster_2.x+monster_2.rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=monster_2.y+monster_2.rect_height && Y+checkpoint_radius+1>=monster_2.y+monster_2.rect_height)
                {
                    if(X-checkpoint_radius-1<=monster_2.x && X+checkpoint_radius+1>=monster_2.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=monster_2.x+monster_2.rect_width && X+checkpoint_radius+1>=monster_2.x+monster_2.rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=monster_1.y && Y+checkpoint_radius+1>=monster_1.y)
                {
                    if(X-checkpoint_radius-1<=monster_1.x && X+checkpoint_radius+1>=monster_1.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=monster_1.x+monster_1.rect_width && X+checkpoint_radius+1>=monster_1.x+monster_1.rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=monster_1.y+monster_1.rect_height && Y+checkpoint_radius+1>=monster_1.y+monster_1.rect_height)
                {
                    if(X-checkpoint_radius-1<=monster_1.x && X+checkpoint_radius+1>=monster_1.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=monster_1.x+monster_1.rect_width && X+checkpoint_radius+1>=monster_1.x+monster_1.rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=player.y && Y+checkpoint_radius+1>=player.y)
                {
                    if(X-checkpoint_radius-1<=player.x && X+checkpoint_radius+1>=player.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=player.x+rect_width && X+checkpoint_radius+1>=player.x+rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=player.y+rect_height && Y+checkpoint_radius+1>=player.y+rect_height)
                {
                    if(X-checkpoint_radius-1<=player.x && X+checkpoint_radius+1>=player.x)
                        flag=1;
                    else if(X-checkpoint_radius-1<=player.x+rect_width && X+checkpoint_radius+1>=player.x+rect_width )
                        flag=1;
                }
                else if(Y-checkpoint_radius-1<=200 && Y+checkpoint_radius+1>=200)
                flag=1;
                else if(X-checkpoint_radius-1<=200 && X+checkpoint_radius+1>=200)
                flag=1;

            
            if(flag==1)
            {
                X=randomIntFromInterval(25,375);
                Y=randomIntFromInterval(25,400);
            //  console.log(X);console.log(Y);

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
    
    function upCheck_Q1()
    {   
        var i;
        for(i=0;i<lastwall_index_1+1;i++)//loop to check all the walls 
        { 
                                        //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
            if((y-1)==Quadrant_1[i].starty)                                                                                 
            {                       
                if(((x+rect_width)>=Quadrant_1[i].startx && x<=Quadrant_1[i].endx ) || (x<=Quadrant_1[i].startx && (x+rect_width)>=Quadrant_1[i].endx))   //checks if the player is 
                flag=1;                                                                                                             //hitting the wall by checking 
            }                                                                                                                   //if still some part of it
                                                                                                                                //lies in the range of the wall
            else if((y-1==Quadrant_1[i].starty) || (y-1==Quadrant_1[i].endy))
            {
                if((Quadrant_1[i].startx>=x && Quadrant_1[i].startx<=(rect_width+x)) || (Quadrant_1[i].endx>=x && Quadrant_1[i].endx<=(rect_width+x) ))
                    flag=1;
            }
            else if((y-2)==Quadrant_1[i].starty)  
            {                       
                if(((x+rect_width)>=Quadrant_1[i].startx && x<=Quadrant_1[i].endx ) || (x<=Quadrant_1[i].startx && (x+rect_width)>=Quadrant_1[i].endx))   
                flag=2;
            }
            else if((y-2==Quadrant_1[i].starty) || (y-2==Quadrant_1[i].endy))
            {
                if((Quadrant_1[i].startx>=x && Quadrant_1[i].startx<=(rect_width+x)) || (Quadrant_1[i].endx>=x && Quadrant_1[i].endx<=(rect_width+x) ))
                    flag=2;
            }
            else if((y-3)==Quadrant_1[i].starty)  
            {                       
                if(((x+rect_width)>=Quadrant_1[i].startx && x<=Quadrant_1[i].endx ) || (x<=Quadrant_1[i].startx && (x+rect_width)>=Quadrant_1[i].endx))   
                flag=3;
            }
            else if((y-3==Quadrant_1[i].starty) || (y-3==Quadrant_1[i].endy))
            {
                if((Quadrant_1[i].startx>=x && Quadrant_1[i].startx<=(rect_width+x)) || (Quadrant_1[i].endx>=x && Quadrant_1[i].endx<=(rect_width+x) ))
                    flag=3;
            }
        }
    }

    var upCheck_Q2=function()
    {
        if(y-1==monster_1.y+monster_1.rect_height)
        {
            if(x+rect_width>=monster_1.x && x<=monster_1.x)
                flag=5;
            else if(x<=monster_1.x+monster_1.rect_width && x+rect_width>=monster_1.x+monster_1.rect_width)
                flag=5;
            else if(x+monster_1.rect_width<=monster_1.x+monster_1.rect_width && x>=monster_1.x)
                flag=5;
        }
        else if(y-2==monster_1.y+monster_1.rect_height)
        {
        
            if(x+rect_width>=monster_1.x && x<=monster_1.x)
                flag=2;
            else if(x<=monster_1.x+monster_1.rect_width && x+rect_width>=monster_1.x+monster_1.rect_width)
                flag=2;
            else if(x+monster_1.rect_width<=monster_1.x+monster_1.rect_width && x>=monster_1.x)
                flag=2;
        }
        else if(y-3==monster_1.y+monster_1.rect_height)
        {
            if(x+rect_width>=monster_1.x && x<=monster_1.x)
                flag=3;
            else if(x<=monster_1.x+monster_1.rect_width && x+rect_width>=monster_1.x+monster_1.rect_width)
                flag=3;
            else if(x+monster_1.rect_width<=monster_1.x+monster_1.rect_width && x>=monster_1.x)
                flag=3;
        }
        if(flag!=5) 
        {       
        for(i=0;i<lastwall_index_2+1;i++)//loop to check all the walls 
            { 
                                            //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
            if((y-1)==Quadrant_2[i].starty)                                                                                 
            {                       
                if(((x+rect_width)>=Quadrant_2[i].startx && x<=Quadrant_2[i].endx ) || (x<=Quadrant_2[i].startx && (x+rect_width)>=Quadrant_2[i].endx))   //checks if the player is 
                flag=1;                                                                                                             //hitting the wall by checking 
            }                                                                                                                   //if still some part of it
                                                                                                                                //lies in the range of the wall
            
            else if((y-1==Quadrant_2[i].starty) || (y-1==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=x && Quadrant_2[i].startx<=(rect_width+x)) || (Quadrant_2[i].endx>=x && Quadrant_2[i].endx<=(rect_width+x) ))
                    flag=1;
            }
            else if((y-2)==Quadrant_2[i].starty)  
            {                       
                if(((x+rect_width)>=Quadrant_2[i].startx && x<=Quadrant_2[i].endx ) || (x<=Quadrant_2[i].startx && (x+rect_width)>=Quadrant_2[i].endx))   
                flag=2;
            }
            else if((y-2==Quadrant_2[i].starty) || (y-2==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=x && Quadrant_2[i].startx<=(rect_width+x)) || (Quadrant_2[i].endx>=x && Quadrant_2[i].endx<=(rect_width+x) ))
                    flag=2;
            }
            else if((y-3)==Quadrant_2[i].starty)  
            {                       
                if(((x+rect_width)>=Quadrant_2[i].startx && x<=Quadrant_2[i].endx ) || (x<=Quadrant_2[i].startx && (x+rect_width)>=Quadrant_2[i].endx))   
                flag=3;
            }
            else if((y-3==Quadrant_2[i].starty) || (y-3==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=x && Quadrant_2[i].startx<=(rect_width+x)) || (Quadrant_2[i].endx>=x && Quadrant_2[i].endx<=(rect_width+x) ))
                    flag=3;
            }
        }}
    
        

    }

    var upCheck_Q3=function()
    {
        if(y-1==monster_2.y+monster_2.rect_height)
        {
            if(x+rect_width>=monster_2.x && x<=monster_2.x)
                flag=5;
            else if(x<=monster_2.x+monster_2.rect_width && x+rect_width>=monster_2.x+monster_2.rect_width)
                flag=5;
            else if(x+monster_2.rect_width<=monster_2.x+monster_2.rect_width && x>=monster_2.x)
                flag=5;
        }
        else if(y-2==monster_2.y+monster_2.rect_height)
        {
        
            if(x+rect_width>=monster_2.x && x<=monster_2.x)
                flag=2;
            else if(x<=monster_2.x+monster_2.rect_width && x+rect_width>=monster_2.x+monster_2.rect_width)
                flag=2;
            else if(x+monster_2.rect_width<=monster_2.x+monster_2.rect_width && x>=monster_2.x)
                flag=2;
        }
        else if(y-3==monster_2.y+monster_2.rect_height)
        {
            if(x+rect_width>=monster_2.x && x<=monster_2.x)
                flag=3;
            else if(x<=monster_2.x+monster_2.rect_width && x+rect_width>=monster_2.x+monster_2.rect_width)
                flag=3;
            else if(x+monster_2.rect_width<=monster_2.x+monster_2.rect_width && x>=monster_2.x)
                flag=3;
        }
        if(flag!=5)
        {
        for(i=0;i<lastwall_index_3+1;i++)//loop to check all the walls 
            { 
                                                    //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
                if((y-1)==Quadrant_3[i].starty)                                                                                 
                {   

                    if(((x+rect_width)>=Quadrant_3[i].startx && x<=Quadrant_3[i].endx ) || (x<=Quadrant_3[i].startx && (x+rect_width)>=Quadrant_3[i].endx))   //checks if the player is 
                    flag=1;                                                                                                             //hitting the wall by checking 
                }                                                                                                                   //if still some part of it
                                                                                                                                        //lies in the range of the wall
                    
                 else if((y-1==Quadrant_3[i].starty) || (y-1==Quadrant_3[i].endy))
                {
                    if((Quadrant_3[i].startx>=x && Quadrant_3[i].startx<=(rect_width+x)) || (Quadrant_3[i].endx>=x && Quadrant_3[i].endx<=(rect_width+x) ))
                    flag=1;
                }
                else if((y-2)==Quadrant_3[i].starty)  
                {                       
                    if(((x+rect_width)>=Quadrant_3[i].startx && x<=Quadrant_3[i].endx ) || (x<=Quadrant_3[i].startx && (x+rect_width)>=Quadrant_3[i].endx))   
                    flag=2;
                }
                else if((y-2==Quadrant_3[i].starty) || (y-2==Quadrant_3[i].endy))
                {
                    if((Quadrant_3[i].startx>=x && Quadrant_3[i].startx<=(rect_width+x)) || (Quadrant_3[i].endx>=x && Quadrant_3[i].endx<=(rect_width+x) ))
                        flag=2;
                }
                else if((y-3)==Quadrant_3[i].starty)  
                {                       
                    if(((x+rect_width)>=Quadrant_3[i].startx && x<=Quadrant_3[i].endx) || (x<=Quadrant_3[i].startx && (x+rect_width)>=Quadrant_3[i].endx))   
                    flag=3;
                }
                else if((y-3==Quadrant_3[i].starty) || (y-3==Quadrant_3[i].endy))
                {
                    if((Quadrant_3[i].startx>=x && Quadrant_3[i].startx<=(rect_width+x)) || (Quadrant_3[i].endx>=x && Quadrant_3[i].endx<=(rect_width+x) ))
                        flag=3;
                }
            }
        }
    }
    var upCheck_Q4=function()
    {
        if(y-1==monster_3.y+monster_3.rect_height)
        {
            if(x+rect_width>=monster_3.x && x<=monster_3.x)
                flag=5;
            else if(x<=monster_3.x+monster_3.rect_width && x+rect_width>=monster_3.x+monster_3.rect_width)
                flag=5;
            else if(x+monster_3.rect_width<=monster_3.x+monster_3.rect_width && x>=monster_3.x)
                flag=5;
        }
        else if(y-2==monster_3.y+monster_3.rect_height)
        {
        
            if(x+rect_width>=monster_3.x && x<=monster_3.x)
                flag=2;
            else if(x<=monster_3.x+monster_3.rect_width && x+rect_width>=monster_3.x+monster_3.rect_width)
                flag=2;
            else if(x+monster_3.rect_width<=monster_3.x+monster_3.rect_width && x>=monster_3.x)
                flag=2;
        }
        else if(y-3==monster_3.y+monster_3.rect_height)
        {
            if(x+rect_width>=monster_3.x && x<=monster_3.x)
                flag=3;
            else if(x<=monster_3.x+monster_3.rect_width && x+rect_width>=monster_3.x+monster_3.rect_width)
                flag=3;
            else if(x+monster_3.rect_width<=monster_3.x+monster_3.rect_width && x>=monster_3.x)
                flag=3;
        }
        if(flag!=5)
        for(i=0;i<lastwall_index+1;i++)//loop to check all the walls 
            { 
                                            //NOTE:While going up we will check only if the top edge of the player is touching the wall to know if it is intersecting or not
            if((y-1)==Quadrant_4[i].starty)                                                                                 
            {                       
                if(((x+rect_width)>=Quadrant_4[i].startx && x<=Quadrant_4[i].endx ) || (x<=Quadrant_4[i].startx && (x+rect_width)>=Quadrant_4[i].endx))   //checks if the player is 
                flag=1;                                                                                                             //hitting the wall by checking 
            }                                                                                                                   //if still some part of it
                                                                                                                                //lies in the range of the wall
            
            else if((y-1==Quadrant_4[i].starty) || (y-1==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=x && Quadrant_4[i].startx<=(rect_width+x)) || (Quadrant_4[i].endx>=x && Quadrant_4[i].endx<=(rect_width+x) ))
                    flag=1;
            }
            else if((y-2)==Quadrant_4[i].starty)  
            {                       
                if(((x+rect_width)>=Quadrant_4[i].startx && x<=Quadrant_4[i].endx ) || (x<=Quadrant_4[i].startx && (x+rect_width)>=Quadrant_4[i].endx))   
                flag=2;
            }
            else if((y-2==Quadrant_4[i].starty) || (y-2==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=x && Quadrant_4[i].startx<=(rect_width+x)) || (Quadrant_4[i].endx>=x && Quadrant_4[i].endx<=(rect_width+x) ))
                    flag=2;
            }
            else if((y-3)==Quadrant_4[i].starty)  
            {                       
                if(((x+rect_width)>=Quadrant_4[i].startx && x<=Quadrant_4[i].endx ) || (x<=Quadrant_4[i].startx && (x+rect_width)>=Quadrant_4[i].endx))   
                flag=3;
            }
            else if((y-3==Quadrant_4[i].starty) || (y-3==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=x && Quadrant_4[i].startx<=(rect_width+x)) || (Quadrant_4[i].endx>=x && Quadrant_4[i].endx<=(rect_width+x) ))
                    flag=3;
            }
        }
    }

    var downCheck_Q1=function()
    {
        for(i=0;i<lastwall_index_1+1;i++)
        { 
            
            if((y+rect_height+1)==Quadrant_1[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_1[i].startx && x<=Quadrant_1[i].endx ) || (x<=Quadrant_1[i].startx && (x+rect_width)>=Quadrant_1[i].endx))
                flag=1;
            }
                
            else if(((y+rect_height+1)==Quadrant_1[i].starty) || ((y+rect_height+1)==Quadrant_1[i].endy))
            {
                if((Quadrant_1[i].startx>=x && Quadrant_1[i].startx<=(rect_width+x)) || (Quadrant_1[i].endx>=x && Quadrant_1[i].endx<=(rect_width+x) ))
                flag=1;
            }
            else if((y+rect_height+2)==Quadrant_1[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_1[i].startx && x<=Quadrant_1[i].endx ) || (x<=Quadrant_1[i].startx && (x+rect_width)>=Quadrant_1[i].endx))
                flag=2;
            }
            else if(((y+rect_height+2)==Quadrant_1[i].starty) || ((y+rect_height+2)==Quadrant_1[i].endy))
            {
                if((Quadrant_1[i].startx>=x && Quadrant_1[i].startx<=(rect_width+x)) || (Quadrant_1[i].endx>=x && Quadrant_1[i].endx<=(rect_width+x) ))
                flag=2;
            }
            else if((y+rect_height+3)==Quadrant_1[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_1[i].startx && x<=Quadrant_1[i].endx ) || (x<=Quadrant_1[i].startx && (x+rect_width)>=Quadrant_1[i].endx))
                flag=3;
            }
            else if(((y+rect_height+3)==Quadrant_1[i].starty) || ((y+rect_height+3)==Quadrant_1[i].endy))
            {
                if((Quadrant_1[i].startx>=x && Quadrant_1[i].startx<=(rect_width+x)) || (Quadrant_1[i].endx>=x && Quadrant_1[i].endx<=(rect_width+x) ))
                flag=3;
            }   
        }
    }

    var downCheck_Q2=function()
    {
        if(y+monster_1.rect_height+1==monster_1.y)
            {
                
                if(x+rect_width>=monster_1.x && x<=monster_1.x)
                    flag=5;
                else if(x<=monster_1.x+monster_1.rect_width && x+rect_width>=monster_1.x+monster_1.rect_width)
                    flag=5;
                else if(x+monster_1.rect_width<=monster_1.x+monster_1.rect_width && x>=monster_1.x)
                    flag=5;
            }
            else if(y+monster_1.rect_height+2==monster_1.y)
            {
                
                if(x+rect_width>=monster_1.x && x<=monster_1.x)
                    flag=2;
                else if(x<=monster_1.x+monster_1.rect_width && x+rect_width>=monster_1.x+monster_1.rect_width)
                    flag=2;
                else if(x+monster_1.rect_width<=monster_1.x+monster_1.rect_width && x>=monster_1.x)
                    flag=2;
            }
            else if(y+monster_1.rect_height+3==monster_1.y)
            {
                if(x+rect_width>=monster_1.x && x<=monster_1.x)
                    flag=3;
                else if(x<=monster_1.x+monster_1.rect_width && x+rect_width>=monster_1.x+monster_1.rect_width)
                    flag=3;
                else if(x+monster_1.rect_width<=monster_1.x+monster_1.rect_width && x>=monster_1.x)
                    flag=3;
            }
        if(flag!=5) 
        {   
        for(i=0;i<lastwall_index_2+1;i++)
        { 
            
            if((y+rect_height+1)==Quadrant_2[i].starty)
            {   

                if(((x+rect_width)>=Quadrant_2[i].startx && x<=Quadrant_2[i].endx ) || (x<=Quadrant_2[i].startx && (x+rect_width)>=Quadrant_2[i].endx))
                flag=1;
            }
                
            else if(((y+rect_height+1)==Quadrant_2[i].starty) || ((y+rect_height+1)==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=x && Quadrant_2[i].startx<=(rect_width+x)) || (Quadrant_2[i].endx>=x && Quadrant_2[i].endx<=(rect_width+x) ))
                flag=1;
            }
            else if((y+rect_height+2)==Quadrant_2[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_2[i].startx && x<=Quadrant_2[i].endx ) || (x<=Quadrant_2[i].startx && (x+rect_width)>=Quadrant_2[i].endx))
                flag=2;
            }
            else if(((y+rect_height+2)==Quadrant_2[i].starty) || ((y+rect_height+2)==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=x && Quadrant_2[i].startx<=(rect_width+x)) || (Quadrant_2[i].endx>=x && Quadrant_2[i].endx<=(rect_width+x) ))
                flag=2;
            }
            else if((y+rect_height+3)==Quadrant_2[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_2[i].startx && x<=Quadrant_2[i].endx ) || (x<=Quadrant_2[i].startx && (x+rect_width)>=Quadrant_2[i].endx))
                flag=3;
            }
            else if(((y+rect_height+3)==Quadrant_2[i].starty) || ((y+rect_height+3)==Quadrant_2[i].endy))
            {
                if((Quadrant_2[i].startx>=x && Quadrant_2[i].startx<=(rect_width+x)) || (Quadrant_2[i].endx>=x && Quadrant_2[i].endx<=(rect_width+x) ))
                flag=3;
            }   
        }}
        
        
    }
    var downCheck_Q3=function()
    {
        if(y+monster_2.rect_height+1==monster_2.y)
            {
                
                if(x+rect_width>=monster_2.x && x<=monster_2.x)
                    flag=5;
                else if(x<=monster_2.x+monster_2.rect_width && x+rect_width>=monster_2.x+monster_2.rect_width)
                    flag=5;
                else if(x+monster_2.rect_width<=monster_2.x+monster_2.rect_width && x>=monster_2.x)
                    flag=5;
            }
            else if(y+monster_2.rect_height+2==monster_2.y)
            {
                
                if(x+rect_width>=monster_2.x && x<=monster_2.x)
                    flag=2;
                else if(x<=monster_2.x+monster_2.rect_width && x+rect_width>=monster_2.x+monster_2.rect_width)
                    flag=2;
                else if(x+monster_2.rect_width<=monster_2.x+monster_2.rect_width && x>=monster_2.x)
                    flag=2;
            }
            else if(y+monster_2.rect_height+3==monster_2.y)
            {
                if(x+rect_width>=monster_2.x && x<=monster_2.x)
                    flag=3;
                else if(x<=monster_2.x+monster_2.rect_width && x+rect_width>=monster_2.x+monster_2.rect_width)
                    flag=3;
                else if(x+monster_2.rect_width<=monster_2.x+monster_2.rect_width && x>=monster_2.x)
                    flag=3;
            }
        if(flag!=5)
        {    
        for(i=0;i<lastwall_index_3+1;i++)
        { 
            
            if((y+rect_height+1)==Quadrant_3[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_3[i].startx && x<=Quadrant_3[i].endx ) || (x<=Quadrant_3[i].startx && (x+rect_width)>=Quadrant_3[i].endx))
                flag=1;
            }
                
            else if(((y+rect_height+1)==Quadrant_3[i].starty) || ((y+rect_height+1)==Quadrant_3[i].endy))
            {
                if((Quadrant_3[i].startx>=x && Quadrant_3[i].startx<=(rect_width+x)) || (Quadrant_3[i].endx>=x && Quadrant_3[i].endx<=(rect_width+x) ))
                flag=1;
            }
            else if((y+rect_height+2)==Quadrant_3[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_3[i].startx && x<=Quadrant_3[i].endx ) || (x<=Quadrant_3[i].startx && (x+rect_width)>=Quadrant_3[i].endx))
                flag=2;
            }
            else if(((y+rect_height+2)==Quadrant_3[i].starty) || ((y+rect_height+2)==Quadrant_3[i].endy))
            {
                if((Quadrant_3[i].startx>=x && Quadrant_3[i].startx<=(rect_width+x)) || (Quadrant_3[i].endx>=x && Quadrant_3[i].endx<=(rect_width+x) ))
                flag=2;
            }
            else if((y+rect_height+3)==Quadrant_3[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_3[i].startx && x<=Quadrant_3[i].endx ) || (x<=Quadrant_3[i].startx && (x+rect_width)>=Quadrant_3[i].endx))
                flag=3;
            }
            else if(((y+rect_height+3)==Quadrant_3[i].starty) || ((y+rect_height+3)==Quadrant_3[i].endy))
            {
                if((Quadrant_3[i].startx>=x && Quadrant_3[i].startx<=(rect_width+x)) || (Quadrant_3[i].endx>=x && Quadrant_3[i].endx<=(rect_width+x) ))
                flag=3;
            }   
        }}  
    }
    var downCheck_Q4=function()
    {
        if(y+monster_3.rect_height+1==monster_3.y)
            {
                
                if(x+rect_width>=monster_3.x && x<=monster_3.x)
                    flag=5;
                else if(x<=monster_3.x+monster_3.rect_width && x+rect_width>=monster_3.x+monster_3.rect_width)
                    flag=5;
                else if(x+monster_3.rect_width<=monster_3.x+monster_3.rect_width && x>=monster_3.x)
                    flag=5;
            }
            else if(y+monster_3.rect_height+2==monster_3.y)
            {
                
                if(x+rect_width>=monster_3.x && x<=monster_3.x)
                    flag=2;
                else if(x<=monster_3.x+monster_3.rect_width && x+rect_width>=monster_3.x+monster_3.rect_width)
                    flag=2;
                else if(x+monster_3.rect_width<=monster_3.x+monster_3.rect_width && x>=monster_3.x)
                    flag=2;
            }
            else if(y+monster_3.rect_height+3==monster_3.y)
            {
                if(x+rect_width>=monster_3.x && x<=monster_3.x)
                    flag=3;
                else if(x<=monster_3.x+monster_3.rect_width && x+rect_width>=monster_3.x+monster_3.rect_width)
                    flag=3;
                else if(x+monster_3.rect_width<=monster_3.x+monster_3.rect_width && x>=monster_3.x)
                    flag=3;
            }
        if(flag!=5)
        {   
        for(i=0;i<lastwall_index+1;i++)
        { 
        
            if((y+rect_height+1)==Quadrant_4[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_4[i].startx && x<=Quadrant_4[i].endx ) || (x<=Quadrant_4[i].startx && (x+rect_width)>=Quadrant_4[i].endx))
                flag=1;
            }
                
            else if(((y+rect_height+1)==Quadrant_4[i].starty) || ((y+rect_height+1)==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=x && Quadrant_4[i].startx<=(rect_width+x)) || (Quadrant_4[i].endx>=x && Quadrant_4[i].endx<=(rect_width+x) ))
                flag=1;
            }
            else if((y+rect_height+2)==Quadrant_4[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_4[i].startx && x<=Quadrant_4[i].endx ) || (x<=Quadrant_4[i].startx && (x+rect_width)>=Quadrant_4[i].endx))
                flag=2;
            }
            else if(((y+rect_height+2)==Quadrant_4[i].starty) || ((y+rect_height+2)==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=x && Quadrant_4[i].startx<=(rect_width+x)) || (Quadrant_4[i].endx>=x && Quadrant_4[i].endx<=(rect_width+x) ))
                flag=2;
            }
            else if((y+rect_height+3)==Quadrant_4[i].starty)
            {   
                if(((x+rect_width)>=Quadrant_4[i].startx && x<=Quadrant_4[i].endx ) || (x<=Quadrant_4[i].startx && (x+rect_width)>=Quadrant_4[i].endx))
                flag=3;
            }
            else if(((y+rect_height+3)==Quadrant_4[i].starty) || ((y+rect_height+3)==Quadrant_4[i].endy))
            {
                if((Quadrant_4[i].startx>=x && Quadrant_4[i].startx<=(rect_width+x)) || (Quadrant_4[i].endx>=x && Quadrant_4[i].endx<=(rect_width+x) ))
                flag=3;
            }   
        }
        }
    }
    var leftCheck_Q1=function()
    {
        for(i=0;i<lastwall_index_1+1;i++)
        { 
            if((x-1==Quadrant_1[i].startx) || x-1==startpointx)
            {   
                if(((y+rect_height)>=Quadrant_1[i].starty && y<=Quadrant_1[i].endy ) || (y<=Quadrant_1[i].starty && (y+rect_height)>=Quadrant_1[i].endy))
                flag=1;
            }
            else if(((x-1)==Quadrant_1[i].startx) || ((x-1)==Quadrant_1[i].endx))
            {
                if((Quadrant_1[i].starty>=y && Quadrant_1[i].starty<=(rect_height+y)) || (Quadrant_1[i].endy>=y && Quadrant_1[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if(x-2==Quadrant_1[i].startx || x-2==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_1[i].starty && y<=Quadrant_1[i].endy ) || (y<=Quadrant_1[i].starty && (y+rect_height)>=Quadrant_1[i].endy))
                flag=2;
            }
            else if(((x-2)==Quadrant_1[i].startx) || ((x-2)==Quadrant_1[i].endx))
            {
                if((Quadrant_1[i].starty>=y && Quadrant_1[i].starty<=(rect_height+y)) || (Quadrant_1[i].endy>=y && Quadrant_1[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if(x-3==Quadrant_1[i].startx || x-3==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_1[i].starty && y<=Quadrant_1[i].endy ) || (y<=Quadrant_1[i].starty && (y+rect_height)>=Quadrant_1[i].endy))
                flag=3;
            }
            else if(((x-3)==Quadrant_1[i].startx) || ((x-3)==Quadrant_1[i].endx))
            {
                if((Quadrant_1[i].starty>=y && Quadrant_1[i].starty<=(rect_height+y)) || (Quadrant_1[i].endy>=y && Quadrant_1[i].endy<=(rect_height+y) ))
                flag=3;
            }
        }
    }

    var leftCheck_Q2=function()
    {
        if(x-1==monster_1.x+monster_1.rect_width)
        {
            
            if(y+rect_height>=monster_1.y && y<=monster_1.y)
            flag=5;
            else if(y<=monster_1.y+monster_1.rect_height && y+rect_height>=monster_1.y+monster_1.rect_height)
            flag=5;
            else if(y+monster_1.rect_height<=monster_1.y+monster_1.rect_height && y>=monster_1.y)
            flag=5;
        }
         if(x-2==monster_1.x+monster_1.rect_width)
        {
            
            if(y+rect_height>=monster_1.y && y<=monster_1.y)
                flag=2;
            else if(y<=monster_1.y+monster_1.rect_height && y+rect_height>=monster_1.y+monster_1.rect_height)
                flag=2;
            else if(y+monster_1.rect_height<=monster_1.y+monster_1.rect_height && y>=monster_1.y)
                flag=2;
        }
        else if(x-3==monster_1.x+monster_1.rect_width)
        {
            

            if(y+rect_height>=monster_1.y && y<=monster_1.y)
                flag=3;
            else if(y<=monster_1.y+monster_1.rect_height && y+rect_height>=monster_1.y+monster_1.rect_height)
                flag=3;
            else if(y+monster_1.rect_height<=monster_1.y+monster_1.rect_height && y>=monster_1.y)
                flag=3;
        }
        if(flag!=5) 
        {
        for(i=0;i<lastwall_index_2+1;i++)
        { 
            if((x-1==Quadrant_2[i].startx) || x-1==startpointx)
            {   
                if(((y+rect_height)>=Quadrant_2[i].starty && y<=Quadrant_2[i].endy ) || (y<=Quadrant_2[i].starty && (y+rect_height)>=Quadrant_2[i].endy))
                flag=1;
            }
            else if(((x-1)==Quadrant_2[i].startx) || ((x-1)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=y && Quadrant_2[i].starty<=(rect_height+y)) || (Quadrant_2[i].endy>=y && Quadrant_2[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if(x-2==Quadrant_2[i].startx || x-2==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_2[i].starty && y<=Quadrant_2[i].endy ) || (y<=Quadrant_2[i].starty && (y+rect_height)>=Quadrant_2[i].endy))
                flag=2;
            }
            else if(((x-2)==Quadrant_2[i].startx) || ((x-2)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=y && Quadrant_2[i].starty<=(rect_height+y)) || (Quadrant_2[i].endy>=y && Quadrant_2[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if(x-3==Quadrant_2[i].startx || x-3==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_2[i].starty && y<=Quadrant_2[i].endy ) || (y<=Quadrant_2[i].starty && (y+rect_height)>=Quadrant_2[i].endy))
                flag=3;
            }
            else if(((x-3)==Quadrant_2[i].startx) || ((x-3)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=y && Quadrant_2[i].starty<=(rect_height+y)) || (Quadrant_2[i].endy>=y && Quadrant_2[i].endy<=(rect_height+y) ))
                flag=3;
            }
        }}
       
            
    }

    var leftCheck_Q3=function()
    {
        if(x-1==monster_2.x+monster_2.rect_width)
        {
            
            if(y+rect_height>=monster_2.y && y<=monster_2.y)
            flag=5;
            else if(y<=monster_2.y+monster_2.rect_height && y+rect_height>=monster_2.y+monster_2.rect_height)
            flag=5;
            else if(y+monster_2.rect_height<=monster_2.y+monster_2.rect_height && y>=monster_2.y)
            flag=5;
        }
         if(x-2==monster_2.x+monster_2.rect_width)
        {
            
            if(y+rect_height>=monster_2.y && y<=monster_2.y)
                flag=2;
            else if(y<=monster_2.y+monster_2.rect_height && y+rect_height>=monster_2.y+monster_2.rect_height)
                flag=2;
            else if(y+monster_2.rect_height<=monster_2.y+monster_2.rect_height && y>=monster_2.y)
                flag=2;
        }
        else if(x-3==monster_2.x+monster_2.rect_width)
        {
            

            if(y+rect_height>=monster_2.y && y<=monster_2.y)
                flag=3;
            else if(y<=monster_2.y+monster_2.rect_height && y+rect_height>=monster_2.y+monster_2.rect_height)
                flag=3;
            else if(y+monster_2.rect_height<=monster_2.y+monster_2.rect_height && y>=monster_2.y)
                flag=3;
        }
        if(flag!=5) 
        {
        for(i=0;i<lastwall_index_3+1;i++)
        { 
            if((x-1==Quadrant_3[i].startx) || x-1==startpointx)
            {   
                if(((y+rect_height)>=Quadrant_3[i].starty && y<=Quadrant_3[i].endy ) || (y<=Quadrant_3[i].starty && (y+rect_height)>=Quadrant_3[i].endy))
                flag=1;
            }
            else if(((x-1)==Quadrant_3[i].startx) || ((x-1)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=y && Quadrant_3[i].starty<=(rect_height+y)) || (Quadrant_3[i].endy>=y && Quadrant_3[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if(x-2==Quadrant_3[i].startx || x-2==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_3[i].starty && y<=Quadrant_3[i].endy ) || (y<=Quadrant_3[i].starty && (y+rect_height)>=Quadrant_3[i].endy))
                flag=2;
            }
            else if(((x-2)==Quadrant_3[i].startx) || ((x-2)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=y && Quadrant_3[i].starty<=(rect_height+y)) || (Quadrant_3[i].endy>=y && Quadrant_3[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if(x-3==Quadrant_3[i].startx || x-3==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_3[i].starty && y<=Quadrant_3[i].endy ) || (y<=Quadrant_3[i].starty && (y+rect_height)>=Quadrant_3[i].endy))
                flag=3;
            }
            else if(((x-3)==Quadrant_3[i].startx) || ((x-3)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=y && Quadrant_3[i].starty<=(rect_height+y)) || (Quadrant_3[i].endy>=y && Quadrant_3[i].endy<=(rect_height+y) ))
                flag=3;
            }
        }
    }}

    var leftCheck_Q4=function()
    {
        if(x-1==monster_3.x+monster_3.rect_width)
        {
            
            if(y+rect_height>=monster_3.y && y<=monster_3.y)
            flag=5;
            else if(y<=monster_3.y+monster_3.rect_height && y+rect_height>=monster_3.y+monster_3.rect_height)
            flag=5;
            else if(y+monster_3.rect_height<=monster_3.y+monster_3.rect_height && y>=monster_3.y)
            flag=5;
        }
         if(x-2==monster_3.x+monster_3.rect_width)
        {
            
            if(y+rect_height>=monster_3.y && y<=monster_3.y)
                flag=2;
            else if(y<=monster_3.y+monster_3.rect_height && y+rect_height>=monster_3.y+monster_3.rect_height)
                flag=2;
            else if(y+monster_3.rect_height<=monster_3.y+monster_3.rect_height && y>=monster_3.y)
                flag=2;
        }
        else if(x-3==monster_3.x+monster_3.rect_width)
        {
            

            if(y+rect_height>=monster_3.y && y<=monster_3.y)
                flag=3;
            else if(y<=monster_3.y+monster_3.rect_height && y+rect_height>=monster_3.y+monster_3.rect_height)
                flag=3;
            else if(y+monster_3.rect_height<=monster_3.y+monster_3.rect_height && y>=monster_3.y)
                flag=3;
        }
        if(flag!=5) 
        {
        for(i=0;i<lastwall_index+1;i++)
        { 
            if((x-1==Quadrant_4[i].startx) || x-1==startpointx)
            {   
                if(((y+rect_height)>=Quadrant_4[i].starty && y<=Quadrant_4[i].endy ) || (y<=Quadrant_4[i].starty && (y+rect_height)>=Quadrant_4[i].endy))
                flag=1;
            }
            else if(((x-1)==Quadrant_4[i].startx) || ((x-1)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=y && Quadrant_4[i].starty<=(rect_height+y)) || (Quadrant_4[i].endy>=y && Quadrant_4[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if(x-2==Quadrant_4[i].startx || x-2==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_4[i].starty && y<=Quadrant_4[i].endy ) || (y<=Quadrant_4[i].starty && (y+rect_height)>=Quadrant_4[i].endy))
                flag=2;
            }
            else if(((x-2)==Quadrant_4[i].startx) || ((x-2)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=y && Quadrant_4[i].starty<=(rect_height+y)) || (Quadrant_4[i].endy>=y && Quadrant_4[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if(x-3==Quadrant_4[i].startx || x-3==startpointx) 
            {   
                if(((y+rect_height)>=Quadrant_4[i].starty && y<=Quadrant_4[i].endy ) || (y<=Quadrant_4[i].starty && (y+rect_height)>=Quadrant_4[i].endy))
                flag=3;
            }
            else if(((x-3)==Quadrant_4[i].startx) || ((x-3)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=y && Quadrant_4[i].starty<=(rect_height+y)) || (Quadrant_4[i].endy>=y && Quadrant_4[i].endy<=(rect_height+y) ))
                flag=3;
            }
        }
    }}

    var rightCheck_Q1=function()
    {
        for(i=0;i<lastwall_index_1+1;i++)
        { 
            if((x+rect_width+1)==Quadrant_1[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_1[i].starty && y<=Quadrant_1[i].endy ) || (y<=Quadrant_1[i].starty && (y+rect_height)>=Quadrant_1[i].endy))
                flag=1;
            }
            else if(((x+rect_width+1)==Quadrant_1[i].startx) || ((x+rect_width+1)==Quadrant_1[i].endx))
            {
                if((Quadrant_1[i].starty>=y && Quadrant_1[i].starty<=(rect_height+y)) || (Quadrant_1[i].endy>=y && Quadrant_1[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if((x+rect_width+2)==Quadrant_1[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_1[i].starty && y<=Quadrant_1[i].endy ) || (y<=Quadrant_1[i].starty && (y+rect_height)>=Quadrant_1[i].endy))
                flag=2;
            }
            else if(((x+rect_width+2)==Quadrant_1[i].startx) || ((x+rect_width+2)==Quadrant_1[i].endx))
            {
                if((Quadrant_1[i].starty>=y && Quadrant_1[i].starty<=(rect_height+y)) || (Quadrant_1[i].endy>=y && Quadrant_1[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if((x+rect_width+3)==Quadrant_1[i].startx)
            {
                if(((y+rect_height)>=Quadrant_1[i].starty && y<=Quadrant_1[i].endy ) || (y<=Quadrant_1[i].starty && (y+rect_height)>=Quadrant_1[i].endy))
                flag=3;
            }
            else if(((x+rect_width+3)==Quadrant_1[i].startx) || ((x+rect_width+3)==Quadrant_1[i].endx))
            {
                if((Quadrant_1[i].starty>=y && Quadrant_1[i].starty<=(rect_height+y)) || (Quadrant_1[i].endy>=y && Quadrant_1[i].endy<=(rect_height+y) ))
                flag=3;
            }
            else if(x+rect_width+1==403 || x+rect_width+2==403 ||x+rect_width+3==403)
            {
                flag=1;

            }
        }
    } 

    var rightCheck_Q2=function()
    {
        if(x+monster_1.rect_width+1==monster_1.x)
            {
                if(y+rect_height>=monster_1.y && y<=monster_1.y)
                flag=5;
                else if(y<=monster_1.y+monster_1.rect_height && y+rect_height>=monster_1.y+monster_1.rect_height)
                flag=5;
                else if(y+monster_1.rect_height<=monster_1.y+monster_1.rect_height && y>=monster_1.y)
                flag=5;
            }
            else if(x+monster_1.rect_width+2==monster_1.x)
            {
            
                if(y+rect_height>=monster_1.y && y<=monster_1.y)
                    flag=2;
                else if(y<=monster_1.y+monster_1.rect_height && y+rect_height>=monster_1.y+monster_1.rect_height)
                    flag=2;
                else if(y+monster_1.rect_height<=monster_1.y+monster_1.rect_height && y>=monster_1.y)
                    flag=2;
            }
            else if(x+monster_1.rect_width+3==monster_1.x)
            {
            
                if(y+rect_height>=monster_1.y && y<=monster_1.y)
                    flag=3;
                else if(y<=monster_1.y+monster_1.rect_height && y+rect_height>=monster_1.y+monster_1.rect_height)
                    flag=3;
                else if(y+monster_1.rect_height<=monster_1.y+monster_1.rect_height && y>=monster_1.y)
                    flag=3;
            }

         if(flag!=5) 
        {
        for(i=0;i<lastwall_index_2+1;i++)
        { 
            if((x+rect_width+1)==Quadrant_2[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_2[i].starty && y<=Quadrant_2[i].endy ) || (y<=Quadrant_2[i].starty && (y+rect_height)>=Quadrant_2[i].endy))
                flag=1;
            }
            else if(((x+rect_width+1)==Quadrant_2[i].startx) || ((x+rect_width+1)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=y && Quadrant_2[i].starty<=(rect_height+y)) || (Quadrant_2[i].endy>=y && Quadrant_2[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if((x+rect_width+2)==Quadrant_2[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_2[i].starty && y<=Quadrant_2[i].endy ) || (y<=Quadrant_2[i].starty && (y+rect_height)>=Quadrant_2[i].endy))
                flag=2;
            }
            else if(((x+rect_width+2)==Quadrant_2[i].startx) || ((x+rect_width+2)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=y && Quadrant_2[i].starty<=(rect_height+y)) || (Quadrant_2[i].endy>=y && Quadrant_2[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if((x+rect_width+3)==Quadrant_2[i].startx)
            {
                if(((y+rect_height)>=Quadrant_2[i].starty && y<=Quadrant_2[i].endy ) || (y<=Quadrant_2[i].starty && (y+rect_height)>=Quadrant_2[i].endy))
                flag=3;
            }
            else if(((x+rect_width+3)==Quadrant_2[i].startx) || ((x+rect_width+3)==Quadrant_2[i].endx))
            {
                if((Quadrant_2[i].starty>=y && Quadrant_2[i].starty<=(rect_height+y)) || (Quadrant_2[i].endy>=y && Quadrant_2[i].endy<=(rect_height+y) ))
                flag=3;
            }
            else if(x+rect_width+1==403 || x+rect_width+2==403 ||x+rect_width+3==403)
            {
                flag=1;

            }
        }
    }
        

    }

    var rightCheck_Q3=function()
    {

        if(x+monster_2.rect_width+1==monster_2.x)
            {
                if(y+rect_height>=monster_2.y && y<=monster_2.y)
                flag=5;
                else if(y<=monster_2.y+monster_2.rect_height && y+rect_height>=monster_2.y+monster_2.rect_height)
                flag=5;
                else if(y+monster_2.rect_height<=monster_2.y+monster_2.rect_height && y>=monster_2.y)
                flag=5;
            }
            else if(x+monster_2.rect_width+2==monster_2.x)
            {
            
                if(y+rect_height>=monster_2.y && y<=monster_2.y)
                    flag=2;
                else if(y<=monster_2.y+monster_2.rect_height && y+rect_height>=monster_2.y+monster_2.rect_height)
                    flag=2;
                else if(y+monster_2.rect_height<=monster_2.y+monster_2.rect_height && y>=monster_2.y)
                    flag=2;
            }
            else if(x+monster_2.rect_width+3==monster_2.x)
            {
            
                if(y+rect_height>=monster_2.y && y<=monster_2.y)
                    flag=3;
                else if(y<=monster_2.y+monster_2.rect_height && y+rect_height>=monster_2.y+monster_2.rect_height)
                    flag=3;
                else if(y+monster_2.rect_height<=monster_2.y+monster_2.rect_height && y>=monster_2.y)
                    flag=3;
            }

         if(flag!=5) 
        {
        for(i=0;i<lastwall_index_3+1;i++)
        { 
            if((x+rect_width+1)==Quadrant_3[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_3[i].starty && y<=Quadrant_3[i].endy ) || (y<=Quadrant_3[i].starty && (y+rect_height)>=Quadrant_3[i].endy))
                flag=1;
            }
            else if(((x+rect_width+1)==Quadrant_3[i].startx) || ((x+rect_width+1)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=y && Quadrant_3[i].starty<=(rect_height+y)) || (Quadrant_3[i].endy>=y && Quadrant_3[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if((x+rect_width+2)==Quadrant_3[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_3[i].starty && y<=Quadrant_3[i].endy ) || (y<=Quadrant_3[i].starty && (y+rect_height)>=Quadrant_3[i].endy))
                flag=2;
            }
            else if(((x+rect_width+2)==Quadrant_3[i].startx) || ((x+rect_width+2)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=y && Quadrant_3[i].starty<=(rect_height+y)) || (Quadrant_3[i].endy>=y && Quadrant_3[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if((x+rect_width+3)==Quadrant_3[i].startx)
            {
                if(((y+rect_height)>=Quadrant_3[i].starty && y<=Quadrant_3[i].endy ) || (y<=Quadrant_3[i].starty && (y+rect_height)>=Quadrant_3[i].endy))
                flag=3;
            }
            else if(((x+rect_width+3)==Quadrant_3[i].startx) || ((x+rect_width+3)==Quadrant_3[i].endx))
            {
                if((Quadrant_3[i].starty>=y && Quadrant_3[i].starty<=(rect_height+y)) || (Quadrant_3[i].endy>=y && Quadrant_3[i].endy<=(rect_height+y) ))
                flag=3;
            }
            else if(x+rect_width+1==403 || x+rect_width+2==403 ||x+rect_width+3==403)
            {
                flag=1;

            }
        }
    }}
    
    var rightCheck_Q4=function()
    {
        if(x+monster_3.rect_width+1==monster_3.x)
            {
                if(y+rect_height>=monster_3.y && y<=monster_3.y)
                flag=5;
                else if(y<=monster_3.y+monster_3.rect_height && y+rect_height>=monster_3.y+monster_3.rect_height)
                flag=5;
                else if(y+monster_3.rect_height<=monster_3.y+monster_3.rect_height && y>=monster_3.y)
                flag=5;
            }
            else if(x+monster_3.rect_width+2==monster_3.x)
            {
            
                if(y+rect_height>=monster_3.y && y<=monster_3.y)
                    flag=2;
                else if(y<=monster_3.y+monster_3.rect_height && y+rect_height>=monster_3.y+monster_3.rect_height)
                    flag=2;
                else if(y+monster_3.rect_height<=monster_3.y+monster_3.rect_height && y>=monster_3.y)
                    flag=2;
            }
            else if(x+monster_3.rect_width+3==monster_3.x)
            {
            
                if(y+rect_height>=monster_3.y && y<=monster_3.y)
                    flag=3;
                else if(y<=monster_3.y+monster_3.rect_height && y+rect_height>=monster_3.y+monster_3.rect_height)
                    flag=3;
                else if(y+monster_3.rect_height<=monster_3.y+monster_3.rect_height && y>=monster_3.y)
                    flag=3;
            }

         if(flag!=5) 
        {
        for(i=0;i<lastwall_index+1;i++)
        { 
            if((x+rect_width+1)==Quadrant_4[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_4[i].starty && y<=Quadrant_4[i].endy ) || (y<=Quadrant_4[i].starty && (y+rect_height)>=Quadrant_4[i].endy))
                flag=1;
            }
            else if(((x+rect_width+1)==Quadrant_4[i].startx) || ((x+rect_width+1)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=y && Quadrant_4[i].starty<=(rect_height+y)) || (Quadrant_4[i].endy>=y && Quadrant_4[i].endy<=(rect_height+y) ))
                flag=1;
            }
            else if((x+rect_width+2)==Quadrant_4[i].startx)
            {   
                if(((y+rect_height)>=Quadrant_4[i].starty && y<=Quadrant_4[i].endy ) || (y<=Quadrant_4[i].starty && (y+rect_height)>=Quadrant_4[i].endy))
                flag=2;
            }
            else if(((x+rect_width+2)==Quadrant_4[i].startx) || ((x+rect_width+2)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=y && Quadrant_4[i].starty<=(rect_height+y)) || (Quadrant_4[i].endy>=y && Quadrant_4[i].endy<=(rect_height+y) ))
                flag=2;
            }
            else if((x+rect_width+3)==Quadrant_4[i].startx)
            {
                if(((y+rect_height)>=Quadrant_4[i].starty && y<=Quadrant_4[i].endy ) || (y<=Quadrant_4[i].starty && (y+rect_height)>=Quadrant_4[i].endy))
                flag=3;
            }
            else if(((x+rect_width+3)==Quadrant_4[i].startx) || ((x+rect_width+3)==Quadrant_4[i].endx))
            {
                if((Quadrant_4[i].starty>=y && Quadrant_4[i].starty<=(rect_height+y)) || (Quadrant_4[i].endy>=y && Quadrant_4[i].endy<=(rect_height+y) ))
                flag=3;
            }
            
        }
    }}

    var endcheck=function()
    {
        if(x+rect_width+1==403 || x+rect_width+2==403 || x+rect_width+3==403)
        {
            flag=1;

        }
    }

    var UpPressed=false;
    var DownPressed=false;
    var RightPressed=false;
    var LeftPressed=false;

    document.addEventListener("keydown", keyDownHandler, true);
    document.addEventListener("keyup", keyUpHandler, false);    
    var slightmovement_left=0;
    var slightmovement_right=0;
    var slightmovement_down=0;
    var slightmovement_up=0;
    var stop=0;
    function keyDownHandler(event)
    {   
            

        if(event.keyCode==38)
        {   
            UpPressed=true;
            slightmovement_up=slightmovement_up+1;
         }

        else if(event.keyCode==40)
        {   
            DownPressed=true;
            slightmovement_down=slightmovement_down+1;
            
        }
        else if(event.keyCode==37)
        {
            LeftPressed=true;
            slightmovement_left=slightmovement_left+1;
            

        }
        else if(event.keyCode==39)
        {
            RightPressed=true;
            slightmovement_right=slightmovement_right+1;

        }
    }

    function keyUpHandler(event)
    {
        if(event.keyCode==38 && finish==0)
        {
            UpPressed=false;
            slightmovement_up=0;
        }

        else if(event.keyCode==40 && finish==0)
        {
            DownPressed=false;
            slightmovement_down=0;
        }
        else if(event.keyCode==37 && finish==0)
        {
            LeftPressed=false;
            slightmovement_left=0;
        }
        else if(event.keyCode==39 && finish==0)
        {
            RightPressed=false;
            slightmovement_right=0;
        }
    }
    var flag;
    function check()
    {  /*flag for checking if the wall is intersecting or not.If flag==1 it is intersecting a wall*/
        if (UpPressed==true)//going up
        {   
            flag=0;
            if(x>25 && x+rect_width<200 && y>25 && y+rect_height<200) //first quadrant
            {   
            upCheck_Q1();
            }
        
            else if(x>200 && x+rect_width<400 && y>25 && y+rect_height<200) //second quadrant
            {   
                upCheck_Q2();   
            }
            else if(x>25 && x+rect_width<200 && y>200 && y+rect_height<400 )
            {   
                upCheck_Q3();
                if(y<=(200+3) && y>=200-3-rect_height)
                {
                    upCheck_Q1();
                }   
            }
            else if(x>200 && x+rect_width<400 && y>200 && y+rect_height<400) //fourth quadrant
            {   
                upCheck_Q4();
                if(y<=(200+3) && y>=200-3-rect_height)
                {
                    upCheck_Q2();
                }
            }
    
            else if(x<=200 && x+rect_width>=200 )
            {
                if(y>200 && y+rect_height<400)
                {
                    upCheck_Q3();
                    upCheck_Q4();

                    if(y<=200+3)
                    {

                        upCheck_Q1();
                        upCheck_Q2();
                    }   
    
                }
                else if(y>25 && y+rect_height<200)
                {


                    upCheck_Q1();
                    upCheck_Q2();

                    if(y>=200-3-rect_height)
                    {
                        upCheck_Q3();
                        upCheck_Q4();
                    }

                }

                else if(y<=200 && y+rect_height>=200 )
                {
                    upCheck_Q1();
                    upCheck_Q2();
                    upCheck_Q3();
                    upCheck_Q4();
                }

                /*else if(y<=200+3 && y>=200-3-rect_height)
                {
                    upCheck_Q1();
                    upCheck_Q2();
                    upCheck_Q3();
                    upCheck_Q4();
                }*/

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
            {  ctx.clearRect(x,y,rect_width,rect_height); 
                if(slightmovement_up!=1)
                {
                y -=3;}
                else 
                {y-=1}
                state.pos_y=y; //updation of coordinate
            }
            else if(flag==2 && stop==0) 
            {   ctx.clearRect(x,y,rect_width,rect_height);
                y -=1;
                //updation of coordinate
                state.pos_y=y;          
            }
            else if(flag==3 && stop==0) 
            {ctx.clearRect(x,y,rect_width,rect_height);  
             if(slightmovement_up!=1)
                {
                    y -=2;
                }
                else 
                {y-=1;}
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
            else if(flag==5 && stop==0)
            {
                console.log("k");
                ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                player.clearPlayer(state.pos_x,state.pos_y,rect_width,rect_height);

                ctx.font="30px Arial";
                ctx.fillStyle="red";
                ctx.textAlign="center";
                ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                finish=1;
                stop=1;
            }
            
        }
            

            if (DownPressed==true)//going down
            {

                flag=0;
                if(x>25 && x+rect_width<200 && y>25 && y+rect_height<200)
                {
                    downCheck_Q1();
                    if(y<=(200+3) && y>=200-3-rect_height)
                    {
                        downCheck_Q3(); 
                    }   
                }
                else if(x>200 && x+rect_width<400 && y>25 && y+rect_height<200)
                {
                    downCheck_Q2();
                    if(y<=(200+3) && y>=200-3-rect_height)
                    {
                        downCheck_Q4();
                    }
                }

                else if(x>25 && x+rect_width<200 && y>200 && y+rect_height<400)
                {
                    downCheck_Q3();
                }

                else if(x>200 && x+rect_width<400 && y>200 && y+rect_height<400)
                {
                    downCheck_Q4();
                }
        
                
            else if(x<=200 && x+rect_height>=200 )
            {
                if(y>200 && y+rect_height<400)
                {
                    downCheck_Q3();
                    downCheck_Q4();

                    if(y<=200+3)
                    {
                        downCheck_Q1();
                        downCheck_Q2();
                    }   
    
                }
                else if(y>25 && y+rect_height<200)
                {
                    
                    downCheck_Q1();
                    downCheck_Q2();

                    if(y>=200-3-rect_height)
                    {

                        downCheck_Q3();
                        downCheck_Q4();
                    }
                }
                else if(y<=200 && y+rect_height>=200 )
                {
                    downCheck_Q1();
                    downCheck_Q2();
                    downCheck_Q3();
                    downCheck_Q4();
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
                {    ctx.clearRect(x,y,rect_width,rect_height);
                    if(slightmovement_down!=1)
                    {
                        y +=3;
                    }
                    else 
                    {
                        y+=1;
                    }
                    state.pos_y=y;
                }
                else if(flag==2 && stop==0) 
                {  
                    ctx.clearRect(x,y,rect_width,rect_height);
                    y+=1;
                    state.pos_y=y;
                }
                else if(flag==3 && stop==0)
                {    ctx.clearRect(x,y,rect_width,rect_height);
                    if(slightmovement_down!=1)
                    {
                        y+=2;
                    }
                    else 
                    {
                        y+=1;
                    }
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
                else if(flag==5 && stop==0)
                {
                    console.log("k");
                    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                    player.clearPlayer(x,y,rect_width,rect_height);
                    ctx.font="30px Arial";
                    ctx.fillStyle="red";
                    ctx.textAlign="center";
                    ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                    finish=1;
                    stop=1;
                }   
                  
            }
        
        if (LeftPressed==true)//going left
        {   
            flag=0;
            if(x>25 && x+rect_width<200 && y>25 && y+rect_height<200)
            {   
                leftCheck_Q1();
            }

        else if(x>200 && x+rect_width<400 && y>25 && y+rect_height<200)
        {
            leftCheck_Q2();
             if(x>=200-3-rect_width && x<=200+3)
             {
                leftCheck_Q1();
             }  
        }

        else if(x>25 && x+rect_width<200 && y>200 && y+rect_height<400)
        {
            leftCheck_Q3();
        }

         else if(x>200 && x+rect_width<400 && y>200 && y+rect_height<400)
        {
            leftCheck_Q4();
             if(x>=200-3-rect_width && x<=200+3)
             {
               leftCheck_Q3();
             }
        }

       
            else if(y<=200 && y+rect_width>=200 )
            {
                if(x>200 && x+rect_width<400)
                {
                    leftCheck_Q2();
                    leftCheck_Q4();

                    if(x<=200+3)
                    {
                        leftCheck_Q1();
                        leftCheck_Q3();
                    }   
    
                }
                else if(x>25 && x+rect_width<200)
                {
                    leftCheck_Q1();
                    leftCheck_Q3();

                    if(x>=200-3-rect_width)
                    {
                        leftCheck_Q2();
                        leftCheck_Q4();
                    }

                }
                else if(x<=200 && x+rect_width>=200 )
                {
                    leftCheck_Q1();
                    leftCheck_Q2();
                    leftCheck_Q3();
                    leftCheck_Q4();
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
            { ctx.clearRect(x,y,rect_width,rect_height);  
             if(slightmovement_left!=1)
                {
                    x -=3;
                }
                else 
                {
                    x-=1;
                }    
                state.pos_x=x; 
            }
            else if(flag==2 && stop==0) 
            {
                ctx.clearRect(x,y,rect_width,rect_height);
                x -=1; 
                state.pos_x=x;
            }
            else if(flag==3 && stop==0) 
            {    ctx.clearRect(x,y,rect_width,rect_height);
                if(slightmovement_left!=1)
                {
                   x -=2;
                }
                else 
                {
                    x-=1;
                }
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
            else if(flag==5 && stop==0)
            {
                console.log("k");
                ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                player.clearPlayer(x,y,rect_width,rect_height);
                ctx.font="30px Arial";
                ctx.fillStyle="red";
                ctx.textAlign="center";
                ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                finish=1;
                stop=1;
            }
        }
        
        if (RightPressed==true)//going right
        {   
            
            flag=0;
            if(x>25 && x+rect_width<200 && y>25 && y+rect_height<200)
            {
            rightCheck_Q1();
            if(x>=200-3-rect_width && x<=200+3)
            {
                rightCheck_Q2()
            }
            }
            else if(x>200 && x+rect_width<400 && y>25 && y+rect_height<200)
            {
                rightCheck_Q2();

            }
            else if(x>25 && x+rect_width<200 && y>200 && y+rect_height<400)
            {   
                        
                rightCheck_Q3();
                if(x+rect_width+3>=200 && x<=200)
                    rightCheck_Q4();
            }

                       
            
            else if(x>200 && x+rect_width<400 && y>200 && y+rect_height<400)
            {
                            
                rightCheck_Q4();

            }
            else if(y<=200 && y+rect_width>=200 )
            {   
                
                if(x>200 && x+rect_width<400)
                {
                    rightCheck_Q2();
                    rightCheck_Q4();
                  
                    if(x<=200+3)
                    {   
                        
                        rightCheck_Q1();
                        rightCheck_Q3();
                    }   
    
                }
                else if(x>25 && x+rect_width<200)
                {
                    rightCheck_Q1();
                    rightCheck_Q3();
                    if(x+rect_width>=200-3)
                    {
                        rightCheck_Q2();
                        rightCheck_Q4();
                    }

                }
                else if(x<=200 && x+rect_width>=200 )
                {

                    rightCheck_Q1();
                    rightCheck_Q2();
                    rightCheck_Q3();
                    rightCheck_Q4();
                }
            }
            
                else if(x+rect_width>=400)
                {
                    console.log("end")
                    endcheck();
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
                console.log("end")
                if(state.score!=max_score)
                    {

                        var question=document.getElementById('Question');
                        question.innerHTML="Your score must be " + max_score +" to successfully complete the maze :(";
                    }
                    else
                    {
                        console.log("end");
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
                if(slightmovement_right!=1)
                { 
                    x +=3;
                }
                else 
                {
                    x+=1;
                }    
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
                if(slightmovement_right!=1)
                {
                    x +=2;
                }
                else 
                {
                    x+=1;
                } 
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
            else if(flag==5 && stop==0)
            {
                console.log("k");
                ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                player.clearPlayer(x,y,rect_width,rect_height);
                ctx.font="30px Arial";
                ctx.fillStyle="red";
                ctx.textAlign="center";
                ctx.fillText("GAME OVER!!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2);
                finish=1;
                stop=1;
            }
        }
    }
         
        var render=function () //for animation
        {
            ctx.clearRect(x,y,rect_width,rect_height);
            player.DrawPlayer();
            monster_1.drawMonster(monster_1img,monster_1.x,monster_1.y,monster_1.rect_width,monster_1.rect_height);
            monster_2.drawMonster(monster_2img,monster_2.x,monster_2.y,monster_2.rect_width,monster_2.rect_height);
            monster_3.drawMonster(monster_3img,monster_3.x,monster_3.y,monster_3.rect_width,monster_3.rect_height);
        };

    var main=function (){
                                check();
                                monster_1.moveMonster();
                                monster_2.moveMonster();
                                monster_3.moveMonster();
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



max_score=2;
var score_update=function()
{   
    if(state.score!=max_score)
        state.score=state.score + 1;
        var showScore=document.getElementById("score");
        showScore.innerHTML="BANANAS:";
        var badges=[];
            
    var i;
    for(i=0;i<state.score;i++)
    {
        console.log("badge")
        badges[i]=document.createElement("IMG");
        badges[i].setAttribute("src","banana1.png");
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