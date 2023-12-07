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
function validate() {
  let Sinput = document.getElementById("userInput").value;

  if (Sinput == "") {
    alert("Please fill the input field before continuing.");
  } else {
    window.open("./home-page.html", "_blank");
  }
}

document.getElementById("signupButton").addEventListener("click", function () {
  var firstName = document.getElementById("fnameInput").value;
  var lastName = document.getElementById("lnameInput").value;
  var listItem = document.createElement("li");
  listItem.textContent = `New user: ${firstName} ${lastName}`;
  var userList = document.getElementById("userList");
  userList.appendChild(listItem);
  document.getElementById("fnameInput").value = "";
  document.getElementById("lnameInput").value = "";
});
