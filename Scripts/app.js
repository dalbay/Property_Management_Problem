class WorkOrder {
  constructor(
    dateAssigned,
    employee_ID,
    employee,
    owner,
    address,
    phone,
    description
  ) {
    this.dateAssigned = dateAssigned;
    this.employee_ID = employee_ID;
    this.employee = employee;
    this.owner = owner;
    this.address = address;
    this.phone = phone;
    this.description = description;
  }
  getDate() {
    return this.dateAssigned;
  }
  getEmployee() {
    return this.employee;
  }
  getOwner() {
    return this.owner;
  }
  getAddress() {
    return this.address;
  }
  getPhone() {
    return this.phone;
  }
  getDescription() {
    return this.description;
  }
  setDate(date) {
    this.dateAssigned = date;
  }
  setEmployee(employee) {
    this.employee = employee;
  }
  setOwner(owner) {
    this.owner = owner;
  }
  setAddress(address) {
    this.address = address;
  }
  setPhone(phone) {
    this.phone = phone;
  }
  setDescription(description) {
    this.description = description;
  }
}

/* ********** GLOBAL VARIABLES  ********************/

// Selected row as an object of WorkOrder
var workOrder;
var updateCloseX;
var updateWorkOrder;

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

// Hide Login-Modal
document.getElementById("loginClose").addEventListener("click", () => {
  modalLogin.style.display = "none";
});

// Hide Signup-Modal
document.getElementById("signupClose").addEventListener("click", () => {
  modalSignup.style.display = "none";
});

// Hide Update-Modal
function cancelUpdate() {
  modalUpdate.style.display = "none";
}

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
        var employeeID = 1;
        var employee = row.children[1].children[0].value;
        var owner = row.children[2].innerText;
        var address = row.children[3].children[0].value;
        var phone = row.children[4].children[0].value;
        var description = row.children[5].children[0].value;

        workOrder = new WorkOrder(
          date,
          employeeID,
          employee,
          owner,
          address,
          phone,
          description
        );
        updateModalDisplay();
      });
    });
  }
}

// Get Updated WorkOrder from Update Modal
function updateModalDisplay() {
  // add event listener for the closing x in modal
  updateCloseX = document
    .getElementById("updateClose")
    .addEventListener("click", cancelUpdate);

  // display Update Modal
  modalUpdate.style.display = "block";

  // fill in the input boxes
  document.getElementById("owner").innerText = workOrder.getOwner();
  var date = new Date(workOrder.getDate());
  var currentDate = date.toISOString(true).slice(0, 10);
  document.getElementById("date").value = currentDate;

  document.getElementById("empName").value = workOrder.getEmployee();
  document.getElementById("address").value = workOrder.getAddress();
  document.getElementById("phone").value = workOrder.getPhone();
  document.getElementById("description").value = workOrder.getDescription();
}

// Update Work Order from updateModal
function updateWorkOrder() {
  workOrder.setDate(document.getElementById("date").value);
  workOrder.setEmployee(document.getElementById("empName").value);
  workOrder.setAddress(document.getElementById("address").value);
  workOrder.setPhone(document.getElementById("phone").value);
  workOrder.setDescription(document.getElementById("description").value);
  alert("Work Order is UPDATED!");
  modalUpdate.style.display = "none";

  // TODO: update DB - WorkOrder table!!!!!!
}

// Delete Work Order From DB
function deleteWorkOrder() {
  alert("Deleting Work Order");

  // TODO: delete Work Order from DB!!!!!
}
