
document.addEventListener("DOMContentLoaded", function() {

  var figure = $(".video-hover").hover( hoverVideo, hideVideo );

  // $(".video-hover").live("touchstart", function(e) {
  //   $(this).trigger("hover");
  // });
  //
  // $(".video-hover").live("touchend", function(e) {
  //   $(this).trigger("blur");
  // });

  function hoverVideo(e) {
    $('.jp-bgvideo').removeClass('playing');
    let currentVideo = $(this).data("hover");
    $('#'+currentVideo).addClass('active').get(0).play();
    $('.jp-bgvideo').addClass('playing');
    $('.jp-intro').addClass('white');
  }

  function hideVideo(e) {
    let currentVideo = $(this).data("hover");
    $('#'+currentVideo).removeClass('active').get(0).pause();
    $('.jp-intro').removeClass('white');
    $('.jp-bgvideo').removeClass('playing');
  }
});
