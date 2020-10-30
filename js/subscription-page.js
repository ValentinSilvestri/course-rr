pname = document.getElementById("pname");
mail = document.getElementById("mail");
pass = document.getElementById("pass");
rpass = document.getElementById("rpass");
age = document.getElementById("age");
pnumber = document.getElementById("pnumber");
address = document.getElementById("address");
city = document.getElementById("city");
zipcode = document.getElementById("zipcode");
idcard = document.getElementById("idcard");

pname.onblur = function validation(){
    vPname();
}

mail.onblur = function validation(){
    vMail();
}

pass.onblur = function validation() {
    vPass();
}

rpass.onblur = function validation() {
    vRpass();
}

age.onblur = function validation() {
    vAge();
}

pnumber.onblur = function validation() {
    vPnumber();
}

address.onblur = function validation() {
    vAddress();
}

city.onblur = function valitadion(){
    vCity();
}

zipcode.onblur = function validation() {
    vZipcode();
}

idcard.onblur = function validation() {
    vIdcard();
}

function vPname(){
    var sPname = pname.value;
    if (sPname.indexOf(" ") == -1 || sPname.replace(/ /g, "").length < 7) {
        //alert("Nombre \"" + sPname + "\" incorrecto. Debe contener al menos 6 carácteres y un espacio en blanco.");
        show("Nombre \"" + sPname + "\" incorrecto. Debe contener al menos 6 carácteres y un espacio en blanco.");
        return sPname + "   &#129318;  Error";
    }
    console.log("Personal Name: " + sPname);
    return sPname;
}

function vMail(){
    var sMail = mail.value;
    if (!(/\S+@\S+\.\S+/.test(sMail))){
        //alert("La dirección de email \"" + sMail + "\" no es correcta.");
        show("La dirección de email \"" + sMail + "\" no es correcta.");
        return sMail + "   &#129318;  Error";
    }
    console.log("Mail: " + sMail);
    return sMail;
}

function vPass(){
    var sPass = pass.value;
    if(sPass.length <= 7 || 
        !(sPass.indexOf(" ") == -1) || 
        sPass.search(/\d/) == -1 || 
        sPass.search(/[a-zA-Z]/) == -1 || 
        sPass.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
            /*
            alert("Su contraseña no es adecuada.\n" +
                "- Debe contener al menos 8 carácteres.\n" +
                "- No debe contener espacios en blanco.\n" +
                "- Debe contener al menos 1 número.\n" +
                "- Debe contener al menos 1 letra.\n" +
                "- No debe contener carácteres especiales.");
            */
            show("Su contraseña no es adecuada.\n" +
                "- Debe contener al menos 8 carácteres.\n" +
                "- No debe contener espacios en blanco.\n" +
                "- Debe contener al menos 1 número.\n" +
                "- Debe contener al menos 1 letra.\n" +
                "- No debe contener carácteres especiales.");
            return "Not OK";
    }
    console.log("Password: " + sPass);
}

function vRpass(){
    var sRpass = rpass.value;
    var sPass = pass.value;
    if (vPass() == "Not OK"){
        return "   &#129318;   Not OK";
    }
    if (sRpass != sPass) {
        //alert("Su contraseña no coincide.");
        show("La contraseña ingresada no coincide.");
        return "   &#129318;   Not OK";
    }
    console.log("Password repetition: " + sRpass);
    return "OK";
}

function vAge(){
    var sAge = age.value;
    if (!(sAge>=18) || !(sAge%1==0)){
        //alert("Debes ser mayor a 18 años. Solo números enteros son aceptados.");
        show("Debes ser mayor a 18 años. Solo números enteros son aceptados.");
        return sAge + "   &#129318;  Error";
    } else if (sAge>150){
        alert("Bienvenida Mirtha Legrand!");
    }
    console.log("Age: " + sAge);
    return sAge;
}

function vPnumber(){
    var sPnumber = pnumber.value;
    if (!(/^[0-9]+$/.test(sPnumber)) || !(sPnumber.length <= 15) || !(sPnumber.length >= 7)) {
        /*
        alert("Su numero es incorrecto.\n" 
            + "- Debe contener solo números.\n" 
            + "- Debe contener entre 7 y 15 digitos.");
        */
        show("Su numero es incorrecto.\n" 
            + "- Debe contener solo números.\n" 
            + "- Debe contener entre 7 y 15 digitos.");
        return sPnumber + "   &#129318;  Error";
    }
    console.log("Phone number: " + sPnumber);
    return sPnumber;
}

function vAddress(){
    var sAddress = address.value;
    if (sAddress.replace(/ /g, "").length < 5) {
        //alert("Dirección muy corta.\n- Debe contener al menos 5 carácteres.");
        show("Dirección muy corta.\n- Debe contener al menos 5 carácteres.");
        return sAddress + "   &#129318;  Error";
    } else if (sAddress.indexOf("-") == -1 || 
        sAddress.indexOf("-") == 0 || 
        sAddress.indexOf("-") == sAddress.length-1) {
            //alert("Dirección errónea.\n- Debe contener un guion intermedio.");
            show("Dirección errónea.\n- Debe contener un guion intermedio.");
            return sAddress + "   &#129318;  Error";
    }
    console.log("Address: " + sAddress);
    return sAddress;
}

function vCity(){
    var sCity = city.value;
    if (sCity.length<3) {
        //alert("Ciudad/pueblo erróneo. Ingrese nuevamente su ciudad/pueblo.");
        show("Ciudad/pueblo erróneo. Ingrese nuevamente su ciudad/pueblo.");
        return sCity + "   &#129318;  Error";
    }
    console.log("City: " + sCity);
    return sCity;
}

function vZipcode(){
    var sZipcode = zipcode.value;
    if (sZipcode.length<3) {
        //alert("Código postal erróneo. Ingrese nuevamente su CP.");
        show("Código postal erróneo. Ingrese nuevamente su CP.");
        return sZipcode + "   &#129318;  Error";
    }
    console.log("ZIP code: " + sZipcode);
    return sZipcode;
}

function vIdcard(){
    var sIdcard = idcard.value;
    if (!(/^[0-9]+$/.test(sIdcard)) || !(sIdcard.length <= 8) || !(sIdcard.length >= 7)) {
        //alert("Su DNI es incorrecto.\n- Debe contener entre 7 y 8 dígitos.");
        show("Su DNI es incorrecto.\n- Debe contener entre 7 y 8 dígitos.");
        return sIdcard + "   &#129318;  Error";
    }
    console.log("ID card number: " + sIdcard);
    return sIdcard;
}

pname.onfocus = function() {hide()}
mail.onfocus = function() {hide()}
pass.onfocus = function() {hide()}
rpass.onfocus = function() {hide()}
age.onfocus = function() {hide()}
pnumber.onfocus = function() {hide()}
address.onfocus = function() {hide()}
city.onfocus = function() {hide()}
zipcode.onfocus = function() {hide()}
idcard.onfocus = function() {hide()}

function show(error){
    document.getElementById("emessage").innerHTML = error;
    document.getElementById("error").style.display = "block";
}

function hide(){
    document.getElementById("error").style.display = "none";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    form();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function mySubmitFunction(e) {
    e.preventDefault();
    return false;
}

function form() {
    document.getElementById("id1").innerHTML = "Personal Name: " + vPname();
    document.getElementById("id2").innerHTML = "Mail: " + vMail();
    document.getElementById("id3").innerHTML = "Age: " + vAge();
    document.getElementById("id4").innerHTML = "Phone Number: " + vPnumber();
    document.getElementById("id5").innerHTML = "Address: " + vAddress();
    document.getElementById("id6").innerHTML = "City: " + vCity();
    document.getElementById("id7").innerHTML = "Postal Code: " + vZipcode();
    document.getElementById("id8").innerHTML = "ID Card Number: " + vIdcard();
    document.getElementById("id9").innerHTML = "Password: " + vRpass();
}