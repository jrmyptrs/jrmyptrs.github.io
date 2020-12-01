
document.addEventListener("DOMContentLoaded", function() {

  var figure = $(".video-hover").hover( hoverVideo, hideVideo );

  function hoverVideo(e) {
    $('.jp-bgvideo').removeClass('playing');
    let currentVideo = $(this).data("hover");
    $('#'+currentVideo).addClass('active').get(0).play();
    $('.jp-bgvideo').addClass('playing');
    $('.jp-intro').addClass('white');
    if(currentVideo === 'hover-wave') { } else {
      $(".jp-bgvideo__credit").slideDown('fast');
    }
  }

  function hideVideo(e) {
    let currentVideo = $(this).data("hover");
    $('#'+currentVideo).removeClass('active').get(0).pause();
    if(currentVideo === 'hover-wave') { } else {
      $(".jp-bgvideo__credit").slideUp('fast');
    }
    $('.jp-intro').removeClass('white');
    $('.jp-bgvideo').removeClass('playing');
  }

});
