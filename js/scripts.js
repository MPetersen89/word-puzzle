$(document).ready(function() {
  $("div.form-group").submit(function(event) {
    event.preventDefault();
    
  });
  $("button#inputButton").click(function()  {
    $("div.form-group").hide();
    $("div.results").show();
  });
  $("button#return").click(function() {
    $("div.form-group").show();
    $("div.results").hide();
  })
})
  