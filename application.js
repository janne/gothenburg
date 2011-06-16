$(function() {
  $('#answer').hide();
  $('form').submit(function() {
    if($('#your_name').val() == "") {
      alert("Du måste fylla i ett namn"); 
    } else {
      $('form').hide();
      $('#answer').show();
      document.getElementById('sound').play();
    }
    return false;
  });
});
