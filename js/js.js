$(window).on("load", function(){
    Particles.init({
        selector: '.header__canvas',
        color: '#085875',
        connectParticles: true,
      });
      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
//   $('#load').delay(1000).fadeOut('slow', function(){
//       $('body').delay(1000).removeClass('preloading');
//   });
      slideShow()
})


function slideShow() {
        const slider = document.querySelector(".slider")
        const sliderMain = document.querySelector(".slider__main")
        const sliderItems=document.querySelectorAll(".slider__item")
        const prevButton= document.querySelector(".slider__button--left")
        const nextButton= document.querySelector(".slider__button--right")
        const sliderLength = sliderItems.length;
        const sliderItemWidth = sliderItems[0].offsetWidth

      let positionX = 0;
      let index = 1;

        prevButton.addEventListener("click", ()=>{
            handleChangeSlide(-1)
        })
        nextButton.addEventListener("click", ()=>{
            handleChangeSlide(1)
        })
        function handleChangeSlide(direction){
            if(direction ==-1){
              if(index ==1){
                  return
              }
              else{
                index--
                positionX=positionX+sliderItemWidth;
                sliderMain.style=`transform: translateX(${positionX}px)`

              }
              
            }
            else if( direction ==1){
              if(index ==sliderLength){
                return
              }
              else{
                index++
                positionX=positionX-sliderItemWidth;
                sliderMain.style=`transform: translateX(${positionX}px)`
              }


            }
        }


    
        // if(slideIndex>=slideList.length){
        //     slideIndex =0
        // }
        // if(slideIndex<0){
        //     slideIndex =slideList.length
        // }
        // for(var i=0; i<slideList.length;i++){
        //     slideList[i].classList.remove("show-slide")
        //     thumbnailList[i].classList.remove("show-thumbnail")
        // }
        // slideList[slideIndex].classList.add("show-slide")
        // thumbnailList[slideIndex].classList.add("show-thumbnail")
        // slideIndex++;
        // setTimeout(slideShow, 4000);
    }






