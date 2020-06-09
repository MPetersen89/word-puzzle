// Business Logic
let checkForVowels = function(inputString) {
  let outputArray = [];
  let stringToArray = inputString.split("");  // inputsArray is the split up string as an array
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let index = 0; index <= stringToArray.length - 1; index += 1) {
    outputArray.push(stringToArray[index]);
    for (let j = 0; j <= vowels.length - 1; j++) {
      if (vowels[j] === stringToArray[index]) {
        outputArray.pop();
        outputArray.push("-");
        break;
      };
    };
  };
  return outputArray.join("");
}



// User Interface Logic
$(document).ready(function() {
  $("#clickButton").click(function() {
    alert("CLICK!");
  });
  $("#formQuote").submit(function(event) {
    let inputString = $("#input").val();  
    let inputsArray = checkForVowels(inputString);
    $("#input").val("");
    $("#output").text(inputsArray);
    event.preventDefault();
    $("div.form-group").hide();
    $("div.results").show();
  });
  $("button#return").click(function() {
    $("div.form-group").show();
    $("div.results").hide();
  });
})