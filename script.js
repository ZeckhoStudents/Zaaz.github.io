//preloader

var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})




const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const service = document.getElementById('service-drop');
const mess = document.getElementById('message');
const sendmail = document.getElementById('send-icon');
 
function sendEmail(){
  const bodyMessage = `From: ${email.value}<br> Name: ${firstName.value + lastName.value}<br> Phonenumber: ${phone.value}<br> Message:${mess.value}`;
  Email.send({
    SecureToken : "5247521f-4898-45b8-87b6-51604c321315",
    From : email.value,
    To : "aadhikesavan121@gmail.com",
    Service : service.value,
    Body : bodyMessage
}).then(
  message => {
    if (message === 'OK' ) {
      Swal.fire({
  title: "Success",
  text: "Message Delivered!",
  icon: "success"
});
    }
  }
);

}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for ( const item of items){
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () =>{
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }

}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-txt.email");


  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    }
    else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}



form.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkInputs();

  if (!fullName.classList.contains("error") && !email.classList.contains("error")  &&!subject.classList.contains("error") &&!mess.classList.contains("error")){
    sendEmail();

    form.reset();
    return false;

  }
  //sendEmail();
});

function SentEmail(){
  sendmail.addEventListener('click',()=>{
    sendmail.innerText = ("Message Delivered!");
  });
}

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();



//Isotope

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



//drop-down

function toggleDropdown() {
  var dropdownList = document.getElementById('dropdown-list');
  dropdownList.classList.toggle('show');
}

function selectOption(option) {
  document.getElementById('service').value = option;
  document.querySelector('.dropdown-header').textContent = option;
  document.getElementById('dropdown-list').classList.remove('show');
}

