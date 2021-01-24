function get_para_1() {
   
    var inputs = [];
  
    for(var i = 1 ; i<=6 ; i++){
     
        inputs.push(document.getElementById("para1_input_box_1" + i).value);
     
        inputs.join(". ")

        document.getElementById("show_para_2").innerHTML = inputs.join(". ")

        inputs.push(document.getElementById("para1_input_box_2" + i).value);
     
        inputs.join(". ")

        document.getElementById("show_para_3").innerHTML = inputs.join(". ")

        inputs.push(document.getElementById("para1_input_box_3" + i).value);
     
        inputs.join(". ")

        document.getElementById("show_para_3").innerHTML = inputs.join(". ")

        inputs.push(document.getElementById("para1_input_box_4" + i).value);
     
        inputs.join(". ")

        document.getElementById("show_para_4").innerHTML = inputs.join(". ")

        inputs.push(document.getElementById("para1_input_box_5" + i).value);
     
        inputs.join(". ")

        document.getElementById("show_para_5").innerHTML = inputs.join(". ")

        inputs.push(document.getElementById("para1_input_box_6" + i).value);
     
        inputs.join(". ")

        document.getElementById("show_para_6").innerHTML = inputs.join(". ")
    }
}