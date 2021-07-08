var imgs=Array.from(document.querySelectorAll(".item img"));//array from
var lightBoxContainer=document.getElementById('lightBoxContainer');
var lightBoxItem=document.getElementById('lightBoxItem');
var nextBtn= document.getElementById('nextBtn');
var prevBtn= document.getElementById('prevBtn');
var closeBtn= document.getElementById('closeBtn');


 var currentIndex=0;

for (var i = 0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click", function(eventInfo){

       currentIndex= imgs.indexOf(eventInfo.target)
       //console.log(currentIndex)
     var imgSrc= eventInfo.target.getAttribute("src");
        //console.log(imgSrc);
      lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

        lightBoxContainer.style.display="flex";
        
    })
}


function nextSlide() {
    currentIndex++;
   
    if (currentIndex==imgs.length) {

        currentIndex=0;
    }
   var imgSrc= imgs[currentIndex].getAttribute("src");
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

    
}


function prevSlide() {
    currentIndex--;
    console.log(currentIndex);
    if (currentIndex<0) {
        
        currentIndex=imgs.length-1;//5
    }
   
   var imgSrc= imgs[currentIndex].getAttribute("src");
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

    
}


function closeSlide() {
    lightBoxContainer.style.display="none";

    
}


prevBtn.addEventListener("click", prevSlide )
closeBtn.addEventListener("click", closeSlide )
nextBtn.addEventListener("click", nextSlide)


document.addEventListener("keydown",function (eventInfo) {
    if(eventInfo.code=="ArrowRight"){ //ArrowRight
        nextSlide();
    }
    else if(eventInfo.code=="ArrowLeft"){//ArrowLeft
        prevSlide();
    }
    else if(eventInfo.code=="Escape"){//Escape
        closeSlide();
    }
    
})


