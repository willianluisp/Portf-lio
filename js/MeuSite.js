function mostrarNome() {
    document.getElementById('quadrado-info').innerHTML = 
        '<h2>Meu Nome é</h2><p>Willian Luis Pedroso</p>';
}

function mostrarHobbies() {
    document.getElementById('quadrado-info').innerHTML = 
        '<h2>Meus Hobbies</h2><p>Gosto de sair, praticar esportes e viajar.</p>';
}

function mostrarcurso() {
    document.getElementById('quadrado-info').innerHTML = 
        '<h2>Meu Curso</h2><p>Faço o curso <b>Técnico em Desenvolvimento de Sistemas,</b> na instituição Senai.</p>';
}

function mostrarCuriosidade() {
    document.getElementById('quadrado-info').innerHTML = 
        '<h2>Curiosidade</h2><p>Toco bateria a mais de 10 anos</p>';
}

function limparInfo() {
    document.getElementById('quadrado-info').innerHTML = '';
}
function calculadora() {
    window.location.href = 'calculadoraIMC.html';
}