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

/*Select Button - Display Update Modal */
var modalUpdate = document.getElementById("updateModal");

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

//var assignedWorkOrders = [];
//var order;// = new WorkOrder();

// Retrieve selected work order from the table
function getSelection() {
  var index = 1;

  if (document.querySelectorAll("input.btnUpdate")) {
    document.querySelectorAll("input.btnUpdate").forEach(element => {
      element.addEventListener("click", function() {
        var row = element.parentNode.parentNode;
        var date = row.children[0].value;
        var employee = row.children[1].value;
        var owner = row.children[2].value;
        var address = row.children[3].value;
        var phone = row.children[4].value;
        var description = row.children[5].children[0].value;
        // var workOrder = new WorkOrder(
        //   date,
        //   employee,
        //   owner,
        //   address,
        //   phone,
        //   description
        // );
        //assignedWorkOrders.push(order);
        //workOrder.dateAssigned = row.firstChild.innerText;
        //var date = (workOrder.dateAssigned = row.children[0]);

        console.log(row);
        console.log(description);
      });
    });
  }
}

class WorkOrder {
  constructor(dateAssigned, employee_ID, owner, address, phone, description) {
    this.dateAssigned = dateAssigned;
    this.employee_ID = employee_ID;
    this.owner = owner;
    this.address = address;
    this.phone = phone;
    this.description = description;
  }
  // constructor() {
  //   this.dateAssigned = "00-00-0000";
  //   this.employee_ID = 0;
  //   this.owner = "No Owner Assigned";
  //   this.address = "No Address Assigned";
  //   this.phone = "000-000-0000";
  //   this.description = "No description";
  // }
  getWorkOrder() {
    return this.address;
  }
}
var workOrder = new WorkOrder();
workOrder.dateAssigned = "12/12/2019";
workOrder.employee_ID = 123;
workOrder.owner = "hans";
workOrder.address = "123 homie";
workOrder.phone = "123-123-1234";
workOrder.description = "to much to do";

console.log(workOrder.getWorkOrder());
