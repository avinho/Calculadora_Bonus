var data_inicial;
var data_final;
var bonus;
var button = document.getElementById("button");
var checkbox = document.getElementById("sinistro");
button.onclick = function() {
    data_inicial = document.getElementById("data_inicial").value;
    data_final = document.getElementById("data_final").value;
    bonus = document.getElementById("bonus").value;
    
    /**
     * Formata a variavel data_inicial_1 em DD/MM/AAAA
     */
    var data_inicial_1 = data_inicial.split('-').reverse().join('/');
    /**
     * Formata a variavel em DD/MM/AAAA
     */
    var data_inicial_2 = data_final.split('-').reverse().join('/');

    /*  calculo de diferença entre as datas*/
    var datadif = new Date(data_final) - new Date(data_inicial);
    var dias = datadif / (1000 * 60 * 60 * 24);
    console.log(dias);

  function determinarBonus(dias) {
    let resultado;
    if(dias >= 0 && dias <= 30 ) {
        resultado = 'condição de 0 a 30';
    } else if (dias > 31 && dias <= 60){
        resultado = 'Condição de 31 a 90';
    } else if (dias > 61 && dias <= 90){
        resultado = 'Condição de 61 a 90';
    } else if (dias > 91 && dias <= 120){
        resultado = 'Condição de 91 a 120';
    } else if (dias > 121 && dias <= 150){
        resultado = 'Condição de 121 a 150';
    } else if (dias > 151 && dias <= 180){
        resultado = 'Condição de 151 a 180';
    } else if (dias > 181 && dias <= 210){
        resultado = 'Condição de 181 a 210';
    } else if (dias > 211 && dias <= 240){
        resultado = 'Condição de 211 a 240';
    } else if (dias > 241 && dias <= 270){
        resultado = 'Condição de 241 a 270';
    } else if (dias > 271 && dias <= 300){
        resultado = 'Condição de 271 a 300';
    } else if (dias > 301 && dias <= 330){
        resultado = 'Condição de 301 a 330';
    } else if (dias > 330){
        resultado = 'Condição de 330';
    }
    return resultado;
  }
  console.log(determinarBonus(dias));
    

    if(checkbox.checked) {
        alert("Data inicia: " + data_inicial_1 + "\n\nData final: " + data_inicial_2 + "\n\nBônus informado: " + bonus +"\n\nRenovação com sinistro.");
    } else {
        
    }
        alert("Data inicia: " + data_inicial_1 + "\n\nData final: " + data_inicial_2 + "\n\nBônus informado: " + bonus + "\nDias: " + dias);
}


