function upDate(previewPic){
    
      
       document.getElementById('image').style.backgroundImage="url("+previewPic.src+")" ;
       document.getElementById('image').style.opacity="0.8" ;
       vazio = "";
       if(previewPic.src == "http://127.0.0.1:5500/Interactivity%20with%20JavaScript/Week4/Homework/imgs/grumec1.jpg"){
        document.getElementById('image').innerHTML = "2015 - Rio de Janeiro" ;
       
        
       }else if(previewPic.src == "http://127.0.0.1:5500/Interactivity%20with%20JavaScript/Week4/Homework/imgs/grumec2.jpg"){
        document.getElementById('image').innerHTML = "2016 - Andes";

       }else if(previewPic.src == "http://127.0.0.1:5500/Interactivity%20with%20JavaScript/Week4/Homework/imgs/grumec3.jpg"){
        document.getElementById('image').innerHTML = "2017 - Oceano Pacifico" ;
       }
       else if(previewPic.src == "http://127.0.0.1:5500/Interactivity%20with%20JavaScript/Week4/Homework/imgs/grumec4.jpg"){
        document.getElementById('image').innerHTML = "2018 - Oceano Atlântico" ;
       }
       else if(previewPic.src == "http://127.0.0.1:5500/Interactivity%20with%20JavaScript/Week4/Homework/imgs/navyImg1.jpg"){
        document.getElementById('image').innerHTML = "2019 - DEVGRU Red Wings" ;
       }
       else if(previewPic.src == "http://127.0.0.1:5500/Interactivity%20with%20JavaScript/Week4/Homework/imgs/navyImg2.jpg"){
        document.getElementById('image').innerHTML = "2020 - DEVGRU Neptune Spears" ;
       }
      
       }
   

function unDo(){
    
       
       document.getElementById('image').style.backgroundImage="url('')";  
       document.getElementById('image').innerHTML = "Hover over an image below to display here.";
       document.getElementById('image').style.opacity="1";
           
       }        