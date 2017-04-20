$(document).ready(function(){
  var time

  window.onload = myTimer();

  function myTimer(){
    var timer = 11;
    time = setInterval(function () {
      timer--;
      if(timer > 4) {
        $('.timer').html(timer + ' seconds');
      }
      else if (timer > 0) {
        $('.timer').html('hurry ' + timer + ' seconds');
      }
      else {
        // Don't redirect, show hidden container. Or pass variable through the url to store the right var
        $('.question-container').hide();
        $('.end-container').show();
      }
    }, 1000);
  }

  $('.test').click(function(){
    clearInterval(time);
    myTimer();
  });

});
