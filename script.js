/**
 * erifica se o botton de enviar foi clicado
 * @var botton
 */
var button = document.getElementById("button");
/**
 * recebe o valor da checkbox
 * @var checkboxSinistro
 */
var checkboxSinistro = document.getElementById("sinistro");
var checkboxRen = document.getElementById("ren_335");


button.onclick = function() {
    /**
    * Recebe o valor do input data bônus.
    * @var bonus 
    */
    var bonus = document.getElementById("bonus").value;

    /**
    * Recebe o valor do input data inicial.
    * @var data_inicial
    */
    var data_inicial = document.getElementById("data_inicial").value;

    /**
     * Recebe o valor do input data final.
     * @var data_final
     */
    var data_final = document.getElementById("data_final").value;

    if(bonus === ""){
        alert("Informe o bônus.");
        return;
  } else if(data_inicial !== "" && data_final !== ""){ 
        /**
         * Formata de AAAA-MM-DD para DD/MM/AAAA
         @var data_inicial_1
        */
        var data_inicial_1 = data_inicial.split('-').reverse().join('/');

        /**
         * Formata de AAAA-MM-DD para DD/MM/AAAA
         * @var data_inicial_2
         */
        var data_inicial_2 = data_final.split('-').reverse().join('/');

        /** 
         * Calculo de diferença entre as datas 
         * @var datadif
         */
        var datadif = new Date(data_final) - new Date(data_inicial);
        /**
         * Converte para dias
         * @var dias
         */
        var dias = datadif / (1000 * 60 * 60 * 24);
        console.log(dias);


        /**
         * @desc Verifica qual intervale o numero de dias pertece.
         * @param {number} dias
         * @returns {number} Qual internvalo o valor pertence.
         */
        function determinarBonus(dias) {
            var bonus = document.getElementById("bonus").value;
            let resultado;
            if(checkboxRen.checked) {
                if(dias >= 0 && dias <= 30 ) {
                    resultado = +1;
                } else if (dias > 31 && dias <= 60){
                    resultado = 0;
                } else if (dias > 61 && dias <= 90){
                    resultado = -1;
                } else if (dias > 91 && dias <= 120){
                    resultado = -2;
                } else if (dias > 121 && dias <= 150){
                    resultado = -3;
                } else if (dias > 151 && dias <= 180){
                    resultado = -4;
                } else if (dias > 181 && dias <= 210){
                    resultado = -5;
                } else if (dias > 211 && dias <= 240){
                    resultado = -6;
                } else if (dias > 241 && dias <= 270){
                    resultado = -7;
                } else if (dias > 271 && dias <= 300){
                    resultado = -8;
                } else if (dias > 301 && dias <= 330){
                    resultado = -9;
                } else if (dias > 330){
                    resultado = -10;
                }
                return resultado + bonus;
            } else {
                if(dias >= 0 && dias <= 30 ) {
                    resultado = 0;
                } else if (dias > 31 && dias <= 60){
                    resultado = -1;
                } else if (dias > 61 && dias <= 90){
                    resultado = -2;
                } else if (dias > 91 && dias <= 120){
                    resultado = -3;
                } else if (dias > 121 && dias <= 150){
                    resultado = -4;
                } else if (dias > 151 && dias <= 180){
                    resultado = -5;
                } else if (dias > 181 && dias <= 210){
                    resultado = -6;
                } else if (dias > 211 && dias <= 240){
                    resultado = -7;
                } else if (dias > 241 && dias <= 270){
                    resultado = -8;
                } else if (dias > 271 && dias <= 300){
                    resultado = -9;
                } else if (dias > 301){
                    resultado = -10;
                }
                return resultado + bonus;
            }
        }
        console.log(determinarBonus(dias) + bonus);
            if(checkboxSinistro.checked) {
                alert("Data inicia: " + data_inicial_1 + "\n\nData final: " + data_inicial_2 + "\n\nDias: " + dias + "\n\nRenovação com sinistro" + "\n\nBônus informado: " + bonus + "\n\nResultado: " + determinarBonus(dias));
            } else {
                alert("Data inicia: " + data_inicial_1 + "\n\nData final: " + data_inicial_2 + "\n\nDias: " + dias + "\n\nBônus informado: " + bonus +  "\n\nResultado: " + determinarBonus(dias));
            }  
 } else {
    alert("Preencha as datas.");
 }
}



