class WorkOrder {
  constructor(dateAssigned, employee_ID, owner, address, phone, description) {
    this.dateAssigned = dateAssigned;
    this.employee_ID = employee_ID;
    this.owner = owner;
    this.address = address;
    this.phone = phone;
    this.description = description;
  }
  getWorkOrder() {
    return this.address;
  }
}

/* ********** GLOBAL VARIABLES  ********************/

// Selected row as an object of WorkOrder
var workOrder;

/* *************** MODALS **************************/

var modalLogin = document.getElementById("loginModal");
var modalSignup = document.getElementById("signupModal");
var modalUpdate = document.getElementById("updateModal");

// Login Button - Displays Login Modal
var btnLogin = document
  .getElementById("btnLogin")
  .addEventListener("click", function() {
    modalLogin.style.display = "block";
  });

// SignUp Button - Displays Signup Modal
var btnSignup = document
  .getElementById("btnSignup")
  .addEventListener("click", function() {
    modalSignup.style.display = "block";
  });

// Hide the Login-Modal
document.getElementById("loginClose").addEventListener("click", () => {
  modalLogin.style.display = "none";
});

// Hide the Signup-Modal
document.getElementById("signupClose").addEventListener("click", () => {
  modalSignup.style.display = "none";
});

/* ************ COMMON SECTIONS *********************/

// Exit Button
function redirectToIndex() {
  window.location = "index.html";
}

// Event Listener for Page-Load
document.querySelector("body").addEventListener("load", myFunction);

// Event Handler for Page-Load
function myFunction() {
  var x = document.title;
  switch (x) {
    case "Home":
      break;
    case "Update Task":
      document.getElementById("updateTask").style.backgroundColor = "#24aae1";
      getSelection();
      break;
    case "Add Task":
      document.getElementById("addTask").style.backgroundColor = "#24aae1";
      break;
    case "Allocate Task":
      document.getElementById("allocateTask").style.backgroundColor = "#24aae1";
      setCurrentDate();
      break;
    case "Completed Task":
      document.getElementById("completedTask").style.backgroundColor =
        "#24aae1";
  }
}

/* *************** ALLOCATE PAGE  ****************** */

// Clear Button
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

/* ************ UPDATE PAGE **************************/

// Select Button - Retrieve selected work order
function getSelection() {
  if (document.querySelectorAll("input.btnUpdate")) {
    document.querySelectorAll("input.btnUpdate").forEach(element => {
      element.addEventListener("click", function() {
        var row = element.parentNode.parentNode;
        var date = row.children[0].children[0].value;
        var employee = row.children[1].children[0].value;
        var owner = row.children[2].innerText;
        var address = row.children[3].children[0].value;
        var phone = row.children[4].children[0].value;
        var description = row.children[5].children[0].value;

        workOrder = new WorkOrder(
          date,
          employee,
          owner,
          address,
          phone,
          description
        );
        // console.log(row);
        // console.log(description);
        // createOrder();
        updateModalDisplay();
      });
    });
  }
}
function updateModalDisplay() {
  modalUpdate.style.display = "block";
}
function createOrder() {
  //var newOrder = new WorkOrder(date, id, owner, add, pho, desc);
  console.log(workOrder);
}
