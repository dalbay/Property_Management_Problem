/*Login button - Displays Login Modal*/
var btnLogin = document
  .getElementById("btnLogin")
  .addEventListener("click", function() {
    modalLogin.style.display = "block";
  });
var modalLogin = document.getElementById("loginModal");

/*SignUp button - Displays Signup Modal */
var modalSignup = document.getElementById("signupModal");
var btnSignup = document
  .getElementById("btnSignup")
  .addEventListener("click", function() {
    modalSignup.style.display = "block";
  });

/*Hide the Modal*/
document.getElementById("loginClose").addEventListener("click", () => {
  modalLogin.style.display = "none";
});
document.getElementById("signupClose").addEventListener("click", () => {
  modalSignup.style.display = "none";
});

// Close app button
function redirectToIndex() {
  window.location = "index.html";
}

function myFunction() {
  var x = document.title;
  switch (x) {
    case "Update Task":
      document.getElementById("updateTask").style.backgroundColor = "#24aae1";
      break;
    case "Add Task":
      document.getElementById("addTask").style.backgroundColor = "#24aae1";
      break;
    case "Allocate Task":
      document.getElementById("allocateTask").style.backgroundColor = "#24aae1";
      break;
    case "Completed Task":
      document.getElementById("completedTask").style.backgroundColor =
        "#24aae1";
  }
  setCurrentDate();
}

document.querySelector("body").addEventListener("load", myFunction);

// Clear Allocate Section
function clearAllocate() {
  var input = document.querySelectorAll("input.allocateInput");
  var i;
  for (i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  var selection = document.querySelectorAll("select.allocateInput");
  for (i = 0; i < selection.length; i++) {
    selection[i].selectedIndex = 0;
    console.log(selection[i].children[0].value);
  }
}
// Set the current date
function setCurrentDate() {
  var todaydate = new Date();
  var day = todaydate.getDate();
  var month = todaydate.getMonth() + 1;
  var year = todaydate.getFullYear();
  var datestring = day + "/" + month + "/" + year;

  document.getElementById("currentDate").innerText = datestring;
}
