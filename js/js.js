$(window).on("load", function(){

  $('#load').delay(1000).fadeOut('slow', function(){
    $('body').delay(1000).removeClass('preloading');
  });
 
    //particles
    particles();

    //cursor
    customCursor();

    //wow
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



    //switch mode
    switchMode();

    //slider
    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
    });

})
function particles(){
  let isLg =screen.width>550 ? true : false
  Particles.init({
      selector: '.header__canvas',
      color: '#085875',
      connectParticles: isLg,
  });
}

function customCursor(){
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 1)+"px; left: "+(e.pageX - 1)+"px;")
  })
  document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500)
  })

}

function switchMode(){
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
}

