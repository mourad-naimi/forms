
//------first-name------

    function veriffirstname (){
    var firstname=document.querySelector('.first-name')
    var regfrname=/^[a-zA-Z -]{2,20}$/;
    if(regfrname.test(firstname.value)==false){
        alert ("verifier votre first name")
    }
    }
document.querySelector('.btn-send').addEventListener("click",veriffirstname)

//------first-name------

function veriflastname (){
    var lastname=document.querySelector('.last-name')
    var regfrname=/^[a-zA-Z -]{2,20}$/;
    if(regfrname.test(lastname.value)==false){
        alert ("verifier votre last name")
    }
    }
document.querySelector('.btn-send').addEventListener("click",veriflastname)

//------adress------

function verifadress (){
    var adress=document.querySelector('.adress')
    var regadress=/[a-zA-Z0-9]{2,80}$/;
    if(regadress.test(adress.value)==false){
        alert ("verifier votre adress")
    }
    }
document.querySelector('.btn-send').addEventListener("click",verifadress)

//------country------

function verifcountry (){
    var country=document.querySelector('.country')
    var regcountry=/[a-zA-Z]{2,80}$/;
    if(regcountry.test(country.value)==false){
        alert ("verifier votre country")
    }
    }
document.querySelector('.btn-send').addEventListener("click",verifcountry)

//------mobile-number------

function verifmobilenumber (){
    var mnumber=document.querySelector('.mobile-number')
    var regmnumber=/[0-9]{2,15}$/;
    if(regmnumber.test(mnumber.value)==false){
        alert ("verifier votre mobile-number")
    }
    }
document.querySelector('.btn-send').addEventListener("click",verifmobilenumber)

//------email------

function verifemail (){
    var email=document.querySelector('.email')
    var regemail= /^[a-zA-Z0-9._-]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/;
    if(regemail.test(email.value)==false){
        alert ("verifier votre email")
    }
    }
document.querySelector('.btn-send').addEventListener("click",verifemail)

//------password------

function verifpassword (){
    var password=document.querySelector('.password')
    var regpassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){2,50}/;
    if(regpassword.test(password.value)==false){
        alert ("verifier votre password")
    }
    }
document.querySelector('.btn-send').addEventListener("click",verifpassword)

//------password-confirmation------

function passwordconfirmation (){
    var confirmpassword=document.querySelector('.password-confirmation')
    if(confirmpassword.value!==document.querySelector('.password').value){
        alert ("verifier votre password-confirmation")
    }
    }
document.querySelector('.btn-send').addEventListener("click",passwordconfirmation)


























