$(function(){
  $(document).ready(function() {
    // Navigation
    function sticky_header() {
        var window_top = $(window).scrollTop();
        var div_top = $('#content').offset().top;
        if (window_top > div_top)
            $('.navbar-default').addClass('sticky');
        else
            $('.navbar-default').removeClass('sticky');
    }
    $(function() {
        $(window).scroll(sticky_header);
        sticky_header();
    });
    // Resize video
    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()>0) {
          $('.scroll-down').fadeOut();
        } else {
          $('.scroll-down').fadeIn();
        }
     });
    $('#skills-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    $('.navmenu-nav a').bind('click', function(event) {
      $('.offcanvas').offcanvas('toggle');
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, '1800');
      $('#toggle').toggleClass('open');
      event.preventDefault();
    });
    $('#toggle').click(function(){
      $(this).toggleClass('open');
    });
  });
  $("img.lazy").lazyload({
      threshold : 200,
      effect : "fadeIn"
  });
  // Reusable functions
  function scaleVideoContainer() {
    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }
  function initBannerVideoSize(element){
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
  }
  function scaleBannerVideoSize(element){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;
    //console.log(windowHeight);
    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width'),
        windowAspectRatio = windowHeight/windowWidth;
      if (videoAspectRatio > windowAspectRatio) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * videoAspectRatio;
        $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
      }
      $(this).width(videoWidth).height(videoHeight);
      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
  }
  (function() {
    var cards = document.querySelectorAll(".service.effect__click");
    for ( var i  = 0, len = cards.length; i < len; i++ ) {
      var card = cards[i];
      clickListener( card );
    }

    function clickListener(card) {
      card.addEventListener( "click", function() {
        var c = this.classList;
        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      });
    }
  })();
});