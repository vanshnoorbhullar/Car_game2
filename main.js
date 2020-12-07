canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;
car2_width=100;
car2_height=90;

background_img="racing car.jpg";

car1_img="car1.png";
car2_img="car2.png";

car1x=10;
car1y=10;
car2x=10;
car2y=100;

function add(){
    background_imgTAG=new Image();
    background_imgTAG.onload=uploadbackgroud;
    background_imgTAG.src=background_img;

    car1_imgTAG=new Image();
    car1_imgTAG.onload=uploadcar1;
    car1_imgTAG.src=car1_img;
    car2_imgTAG=new Image();
    car2_imgTAG.onload=uploadcar2;
    car2_imgTAG.src=car2_img;
}

function uploadbackgroud(){
    ctx.drawImage(background_imgTAG,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTAG,car1x,car1y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTAG,car2x,car2y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_press=e.keyCode;
    console.log(key_press);
    if (key_press=="85"){
        u();
        console.log("Up Key Is Pressed");
    }
    if (key_press=="74"){
        j();
        console.log("Down Key Is Pressed");
    }
    if (key_press=="72"){
        h(); 
        console.log("Left Key Is Pressed");
    }
    if (key_press=="75"){
        k();
        console.log("Right Key Is Pressed");
    }
    if (key_press=="87"){
        w();
        console.log("W Key Is Pressed");
    }
    if (key_press=="83"){
        s();
        console.log(" S Key Is Pressed");
    }
    if (key_press=="65"){
        a(); 
        console.log("A Key Is Pressed");
    }
    if (key_press=="68"){
        d();
        console.log("D Key Is Pressed");
    }
}
    function w(){
    if(car2y>=0){
    car2y=car2y-10;
    console.log("When W is pressed,x="+car2x+",y="+car2y);
    uploadbackgroud();
    uploadcar2();
    uploadcar1();
         }
    }
    function s(){
    if(car2y<=500){
    car2y=car2y+10;
    console.log("When S is pressed,x="+car2x+",y="+car2y);
    uploadbackgroud();
    uploadcar2();
    uploadcar1();
        }
    }
    function a(){
    if(car2x>=0){
    car2x=car2x-10;
    console.log("When A is pressed,x="+car2x+",y="+car2y);
    uploadbackgroud();
    uploadcar2();
    uploadcar1();
        }
    }
    function d(){
    if(car2x<=700){
    car2x=car2x+10;
    console.log("When D is pressed,x="+car2x+",y="+car2y);
    uploadbackgroud();
    uploadcar2();
    uploadcar1();
        }
    }
   function u(){
   if(car1y>=0){
   car1y=car1y-10;
   console.log("When up arrow is pressed,x="+car1x+",y="+car1y);
   uploadbackgroud();
   uploadcar1();
   uploadcar2();
        }
    }
    function j(){
    if(car1y<=500){
    car1y=car1y+10;
    console.log("When down arrow is pressed,x="+car1x+",y="+car1y);
    uploadbackgroud();
    uploadcar1();
    uploadcar2();
        }
    }
    function h(){
    if(car1x>=0){
    car1x=car1x-10;
    console.log("When left arrow is pressed,x="+car1x+",y="+car1y);
    uploadbackgroud();
    uploadcar1();
    uploadcar2();
        }
    }
    function k(){
    if(car1x<=700){
    car1x=car1x+10;
    console.log("When right arrow is pressed,x="+car1x+",y="+car1y);
    uploadbackgroud();
    uploadcar1();
    uploadcar2();
        }
    }
