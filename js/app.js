$(document).ready(function() {
    playIntro();
  	$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();

  });

  function playIntro() {
  	$('.instructions1, .instructions2').hide();
  		$('.logo').hide().fadeIn(3500, function() {
    	$(this).fadeOut(1000, function() {
    	$('.instructions1, .instructions2').hide().fadeIn(2000);
    	$('.instructions1, .instructions2').fadeOut(1500);
});
});

 } 

  $(document).keydown(function(e){
  if(e.keyCode == 88){
  	$('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').show();
  }
$(document).keyup(function(e){

if(e.keyCode == 88){
    $('.ryu-still').show();
    $('.ryu-cool').hide();

}
});
});

 function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

  $('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  });

  $('.ryu').mousedown(function() {
  	playHadouken();
    $('.ryu-ready').hide();
     $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).stop();
      $(this).css('left', '520px');
    }
  );
  });



  $('.ryu').mouseup(function() {
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });

 });

