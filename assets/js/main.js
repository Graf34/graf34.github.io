


    function clipper(ctx,img, x,y,w,h,rad){
        ctx.beginPath();
        ctx.arc(x+rad, y+rad, rad, Math.PI, Math.PI+Math.PI/2 , false);
        ctx.lineTo(x+w - rad, y);
        ctx.arc(x+w-rad, y+rad, rad, Math.PI+Math.PI/2, Math.PI*2 , false);
        ctx.lineTo(x+w,y+h - rad);
        ctx.arc(x+w-rad,y+h-rad,rad,Math.PI*2,Math.PI/2,false);
        ctx.lineTo(x+rad,y+h);
        ctx.arc(x+rad,y+h-rad,rad,Math.PI/2,Math.PI,false);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.drawImage(img,x,y,w,h);
        ctx.restore();
    }





    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

    var bg = new Image();

    var user0 = new Image();
    var user1 = new Image();
    var user2 = new Image();


    var x0 = 0,
        x1 = 0;
        x2 = 0;
        y0 = 0;
        y1 = 0;
        y2 = 0;

    var s0 = 80,
        s1 = 80;
        s2 = 80;
        r0 = 40;
        r1 = 40;
        r2 = 40;



    bg.src="https://loremflickr.com/795/200";  
    
    user0.src="http://via.placeholder.com/100x100";
    user1.src="http://via.placeholder.com/100x100";
    user2.src="http://via.placeholder.com/100x100";

    let userEd=0; 

    canvas.onmousedown  = function (){
        
        switch (userEd)
        {
            case 0:
                x0=event.offsetX;
                y0=event.offsetY;
                document.getElementById("x"+0).value=x0;
                document.getElementById("y"+0).value=y0;
            break;
            case 1:
                x1=event.offsetX;
                y1=event.offsetY;
                document.getElementById("x"+1).value=x1;
                document.getElementById("y"+1).value=y1;
            break;
            case 2:
                x2=event.offsetX;
                y2=event.offsetY;
                document.getElementById("x"+2).value=x2;
                document.getElementById("y"+2).value=y2;
            break;
        }
}
    

function setRound(id){
    switch (id)
    {
        case "r0":
        r0=(s0/100)*document.getElementById(id).value;
        
        document.getElementById("r0t").textContent="Округлить("+Math.round(r0)+"%)";
        break;
        case "r1":
        r1=(s1/100)*document.getElementById(id).value;
        
        document.getElementById("r1t").textContent="Округлить("+r1+"%)";
        break;
        case "r2":
        r2=(s2/100)*document.getElementById(id).value;
        
        document.getElementById("r2t").textContent="Округлить("+r2+"%)";
        break;
    }
}



function setSize(id){
    
    switch (id)
    {
        case "s0":
            s0=document.getElementById(id).value;
            if (!document.getElementById(id).value%2==0){
            s0++;
            }
            document.getElementById("s0t").textContent="Размер("+s0+")";
            setRound("r0");
        break;
        case "s1":
            s1=document.getElementById(id).value;
            if (!document.getElementById(id).value%2==0){
            s1++;
    }
    document.getElementById("s1t").textContent="Размер("+s1+")";
    setRound("r1");
        break;
        case "s2":
            s2=document.getElementById(id).value;
    if (!document.getElementById(id).value%2==0){
        s2++;
    }
    document.getElementById("s2t").textContent="Размер("+s2+")";
    setRound("r2");
        break;
    }
    

    
    
}


function selectUser(id){
    document.getElementById(0).className="user";
    document.getElementById(1).className="user";
    document.getElementById(2).className="user";
    document.getElementById(id).className="user selected";

    
}
    

/*

*/






    function draw() {
        ctx.drawImage(bg, 0, 0);
        
        clipper(ctx,user0,x0-(s0/2),y0-(s0/2),s0,s0,r0);

        clipper(ctx,user1,x1-(s1/2),y1-(s1/2),s1,s1,r1);

        clipper(ctx,user2,x2-(s2/2),y2-(s2/2),s2,s2,r2);

        
 // Какой-либо код
    requestAnimationFrame(draw); // Вызов функции постоянно
    }

    draw(); // Вызов функции из вне
