window.addEventListener("load", function(){
    init();
});

function init(){
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
    
    pname.onblur = function() {
        vPname();
    }

    pname.onfocus = function() {
        hide();
    }

    mail.onblur = function() {
        vMail();
    }

    mail.onfocus = function() {
        hide();
    }

    pass.onblur = function() {
        vPass();
    }

    pass.onfocus = function() {
        hide();
    }

    rpass.onblur = function() {
        vRpass();
    }

    rpass.onfocus = function() {
        hide();
    }

    age.onblur = function() {
        vAge();
    }

    age.onfocus = function() {
        hide();
    }

    pnumber.onblur = function() {
        vPnumber();
    }

    pnumber.onfocus = function() {
        hide();
    }

    address.onblur = function() {
        vAddress();
    }

    address.onfocus = function() {
        hide();
    }

    city.onblur = function() {
        vCity();
    }

    city.onfocus = function() {
        hide();
    }

    zipcode.onblur = function() {
        vZipcode();
    }

    zipcode.onfocus = function() {
        hide();
    }

    idcard.onblur = function() {
        vIdcard();
    }

    idcard.onfocus = function() {
        hide();
    }
}

function vPname(){
    var sPname = pname.value;
    if (sPname.indexOf(" ") == -1 || sPname.replace(/ /g, "").length < 7) {
        //alert("Nombre \"" + sPname + "\" incorrecto. Debe contener al menos 6 carácteres y un espacio en blanco.");
        show("Nombre \"" + sPname + "\" incorrecto. Debe contener al menos 6 carácteres y un espacio en blanco.");
    }
    console.log("Personal Name: " + sPname);
}

function vMail(){
    var sMail = mail.value;
    if (!(/\S+@\S+\.\S+/.test(sMail))){
        //alert("La dirección de email \"" + sMail + "\" no es correcta.");
        show("La dirección de email \"" + sMail + "\" no es correcta.");
    }
    console.log("Mail: " + sMail);
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
    }
    console.log("Password: " + sPass);
}

function vRpass(){
    var sRpass = rpass.value;
    var sPass = pass.value;
    if (sRpass != sPass) {
        //alert("Su contraseña no coincide.");
        show("La contraseña ingresada no coincide.");
    }
    console.log("Password repetition: " + sRpass);
}

function vAge(){
    var sAge = age.value;
    if (!(sAge>=18) || !(sAge%1==0)){
        //alert("Debes ser mayor a 18 años. Solo números enteros son aceptados.");
        show("Debes ser mayor a 18 años. Solo números enteros son aceptados.");
    } else if (sAge>150){
        alert("Bienvenida Mirtha Legrand!");
    }
    console.log("Age: " + sAge);
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
    }
    console.log("Phone number: " + sPnumber);
}

function vAddress(){
    var sAddress = address.value;
    if (sAddress.replace(/ /g, "").length < 5) {
        //alert("Dirección muy corta.\n- Debe contener al menos 5 carácteres.");
        show("Dirección muy corta.\n- Debe contener al menos 5 carácteres.");
    } else if (sAddress.indexOf("-") == -1 || 
        sAddress.indexOf("-") == 0 || 
        sAddress.indexOf("-") == sAddress.length-1) {
            //alert("Dirección errónea.\n- Debe contener un guion intermedio.");
            show("Dirección errónea.\n- Debe contener un guion intermedio.");
    }
    console.log("Address: " + sAddress);
}

function vCity(){
    var sCity = city.value;
    if (sCity.length<3) {
        //alert("Ciudad/pueblo erróneo. Ingrese nuevamente su ciudad/pueblo.");
        show("Ciudad/pueblo erróneo. Ingrese nuevamente su ciudad/pueblo.");
    }
    console.log("City: " + sCity);
}

function vZipcode(){
    var sZipcode = zipcode.value;
    if (sZipcode.length<3) {
        //alert("Código postal erróneo. Ingrese nuevamente su CP.");
        show("Código postal erróneo. Ingrese nuevamente su CP.");
    }
    console.log("ZIP code: " + sZipcode);
}

function vIdcard(){
    var sIdcard = idcard.value;
    if (!(/^[0-9]+$/.test(sIdcard)) || !(sIdcard.length <= 8) || !(sIdcard.length >= 7)) {
        //alert("Su DNI es incorrecto.\n- Debe contener entre 7 y 8 dígitos.");
        show("Su DNI es incorrecto.\n- Debe contener entre 7 y 8 dígitos.");
    }
    console.log("ID card number: " + sIdcard);
}

function show(error){
    document.getElementById("emessage").innerHTML = error;
    document.getElementById("error").style.display = "block";
}

function hide(){
    document.getElementById("error").style.display = "none";
}