$(document).ready(function() {
  $("div.form-group").submit(function(event) {
    event.preventDefault();
    let inputItem = $("#input").val();
    let inputsArray = inputItem.split("");
    
      for (let input=0; input <= inputsArray.length-1; input+=1);

      
    if (letter === "a" || "e" || "i" || "o" || "u") {
      $("letter").replaceValue("-");
    }
      // else if (letter === "e");
      // else if (letter === "i");
      // else if (letter === "o");
      // else if (letter === "u");
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
  