

/*Login button - Displays Login Modal*/
var btnLogin = document.getElementById("btnLogin").addEventListener('click',function(){modalLogin.style.display='block'});
var modalLogin = document.getElementById("loginModal");

/*SignUp button - Displays Signup Modal */
var modalSignup = document.getElementById("signupModal");
var btnSignup = document.getElementById("btnSignup").addEventListener('click',function(){modalSignup.style.display='block'});

/*Hide the Modal*/
document.getElementById('loginClose').addEventListener('click',()=>{modalLogin.style.display='none'});
document.getElementById('signupClose').addEventListener('click',()=>{modalSignup.style.display='none'});



// Close app button
function redirectToIndex(){
    window.location = "index.html";
}


function myFunction() {
    var x = document.title;
    switch(x){

                case "New Time Sheet":
            document.getElementById('newTimeSheet').style.backgroundColor= '#3a8668';
                break;
        case "Current Time Sheet":
            document.getElementById('currentTimeSheet').style.backgroundColor= '#3a8668';
              break;

        case 'Personal Info':
                document.getElementById('personalInfo').style.backgroundColor= '#3a8668';
                break;
        case 'Previous Time Sheet' :
                document.getElementById('previousTimeSheet').style.backgroundColor= '#3a8668';
    }
  }

  document.querySelector("body").addEventListener('load',myFunction);