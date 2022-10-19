var data_inicial;
var data_final;
var bonus;
var button = document.getElementById("button");
var checkbox = document.getElementById("sinistro");
button.onclick = function() {
    data_inicial = document.getElementById("data_inicial").value;
    data_final = document.getElementById("data_final").value;
    bonus = document.getElementById("bonus").value;;
    
    var data_inicial_1 = data_inicial.split('-').reverse().join('/');
    var data_inicial_2 = data_final.split('-').reverse().join('/');

    /*  calculo de diferença entre as datas
    const datadif = new Date(data_final.value) - new Date(data_inicial.value)
    const dias = datadif / (1000 * 60 * 60 * 24);
    */

    if(checkbox.checked) {
        alert("Data inicia: " + data_inicial_1 + "\n\nData final: " + data_inicial_2 + "\n\nBônus informado: " + bonus +"\n\nRenovação com sinistro.");
    } else {
        alert("Data inicia: " + data_inicial_1 + "\n\nData final: " + data_inicial_2 + "\n\nBônus informado: " + bonus);
    }
}

