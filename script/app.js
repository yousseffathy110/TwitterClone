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
