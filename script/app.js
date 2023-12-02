// @ts-nocheck
function openNewPage() {
  let input = document.getElementById("user-Input").value;

  if (input == "") {
    alert("Please fill the input field before continuing.");
  } else {
    window.open("./home-page.html", "_blank");
  }

  //   alert(`Hello ${input} !`);
}

function validiate() {
  let Sinput = document.getElementById("userInput").value;
  if (Sinput == "") {
    alert("Please fill the input field before continuing.");
  } else {
    window.open("./home-page.html", "_blank");
  }
}
