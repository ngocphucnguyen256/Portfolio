$(window).on("load", function(){
//   $('#load').delay(1000).fadeOut('slow', function(){
//       $('body').delay(1000).removeClass('preloading');
//   });
  
})
window.onload=function() {
  
    var slideIndex =0;
    slideShow();
    navHightLight();


    let navList = document.querySelectorAll(".nav-menu>ul>li>a");
  
        let sectionList = document.querySelectorAll("#top, #about, #resume, #project, #quotes, #contact");
     

        let lastId;
        let cur = [];
        // window.addEventListener("scroll", event => {
        //     let fromTop = window.scrollY;
          
        //     navList.forEach(link => {
        //       let section =link.hash;
        //         console.log(section)
        //        var a= document.getElementById(section)
        //        console.log(a);
        //       if (
        //         section.offsetTop <= fromTop &&
        //         section.offsetTop + section.offsetHeight > fromTop
        //       ) {
        //         link.classList.add("currentNav");
        //       } else {
        //         link.classList.remove("currentNav");
        //       }
        //     });
        //   });


    function slideShow() {
        var slideList=document.getElementsByClassName("slide");
        var thumbnailList=document.getElementsByClassName("thumbnail-image");
        if(slideIndex>=slideList.length){
            slideIndex =0
        }
        if(slideIndex<0){
            slideIndex =slideList.length
        }
        for(var i=0; i<slideList.length;i++){
            slideList[i].classList.remove("show-slide")
            thumbnailList[i].classList.remove("show-thumbnail")
        }
        slideList[slideIndex].classList.add("show-slide")
        thumbnailList[slideIndex].classList.add("show-thumbnail")
        slideIndex++;
        setTimeout(slideShow, 4000);
    }
    function navHightLight(){
    
    }


}





