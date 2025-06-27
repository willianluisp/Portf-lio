//javascript

function calcularIMC (){
    const peso = parseFloat(document.getElementById("peso").value); //const variável onde o seu valor não pode ser alterado
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
    
if(peso > 0 && altura > 0){
    const imc = peso / (altura *altura);
    let classificacao=""; //let variável onde possa ser alterado o seu valor, como por exemplo ela está sem nenhum valor mas depois das coondições o eu vlor pode mudar


    if (imc < 18.5) classificacao="Abaixo do Peso";
    else if (imc < 25) classificacao="Peso Normal";
    else if (imc < 30) classificacao="Sobrepeso";
    else classificacao="Obesidade";

resultado.textContent = `Imc: ${imc.toFixed(2)} (${classificacao})`; /*A parte ${imc.toFixed(2)} formata o valor do IMC com duas casas decimais, e
a parte ${classificacao} exibe a classificação após a condição*/
} //fecha o primeiro if
else {
resultado.textContent = "Digite valores válidos"; //textContent é uma propriedade que permite acessar ou modificar o conteúdo de texto
}
}//fecha o principal