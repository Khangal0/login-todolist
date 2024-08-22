const email = document.getElementById("email");
const phonenumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const loginBTN = document.getElementById("loginBTN");

function myemail(){
    const emailValue = email.value;
    if(emailValue.includes("@") === false){
        alert("Email: @ oruulnu");
        return false;
    }
    return true;
}

function mynumber(){
    const phonenumberValue = phonenumber.value;
    if(phonenumberValue.length !== 8){
        alert("PhoneNumber: Utasnii dugaarai shalagnu");
        return false;
    }
    return true;
}

function mypassword(){
    const passwordValue = password.value;
    if(passwordValue.length < 8){
        alert("Password: 8 bolon tunees deesh ug oruulanu")
        return false;
    }
    return true;
}

loginBTN.addEventListener("click", function(){
    const myEmail = myemail();
    const myNumber = mynumber();
    const myPassword = mypassword();
    if(
        myEmail == true &&
        myNumber == true &&
        myPassword == true
    ){
        window.location.href = "/TODO.html";
        email.value = "";
        phonenumber.value = "";
        password.value = "";
    }
});


function hidePassword() {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}