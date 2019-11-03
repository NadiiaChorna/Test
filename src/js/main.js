//=require components/header.js

$("#play").click(function() {
  var src = 'https://www.youtube.com/embed/ZXsQAXx_ao0?autoplay=1&amp;rel=0&amp;autohide=1&amp;modestbranding=1&amp;showinfo=0';
  $("#modal-window").modal("show");
  $("#modal-window iframe").attr("src", src);
});

$("#modal-window").on("hidden.bs.modal", function () {
  $("#modal-window iframe").removeAttr("src");
});

$(".left-arrow").click(function(){
  $(".item:eq(2)").removeClass("active");
  $(".item:last").detach().insertBefore(".item:first");
  $(".item:eq(2)").addClass("active");
});

$(".right-arrow").click(function(){
  $(".item:eq(2)").removeClass("active");
  $(".item:first").detach().insertAfter(".item:last");
  $(".item:eq(2)").addClass("active");
});

$(window).resize(function(){
  if($(window).width()<992){
   $('.container').attr('class', 'container-fluid');
  };
 });
 
