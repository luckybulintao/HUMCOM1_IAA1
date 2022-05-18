function getInputValue(){
    // Selecting the input element and get its value 
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var num = document.getElementById("num").value;
    var dotdate = document.getElementById("dotdate").value;
    var destination = document.getElementById("selector").value;
    

    var radios = document.getElementsByName('type');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
    break;
  }
}
let nfname=fname.toUpperCase();
let nlname=fname.toUpperCase();
    
    alert("Your Registration has been received."+ "\n "+ "Below is the details of your registration:" +"\n"
            + "\n" + "Name: " + nfname + " " + nlname + " \n" + "Phone#: " + num + "\n" + "Date of travel: " + dotdate +
            "\n" + "Destination: " + selector.value + "\n" + "Ticket class: " + radios[i].value + "\n" + "\n"+"We will be processing your entry and will be reaching out on you for further details. Expect a call or a text message from us." + "\n" + "\n" + "Thank you for patronizing our website!"
            );

}