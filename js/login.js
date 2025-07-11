const mostrarSenhaCheckbox = document.getElementById('mostrarSenha');
const campoSenha = document.getElementById('senha');

// Função para alternar a visibilidade da senha
mostrarSenhaCheckbox.addEventListener('change', function() {
    if (mostrarSenhaCheckbox.checked) {
        campoSenha.type = 'text'; // Revela a senha
    } else {
        campoSenha.type = 'password'; // Esconde a senha
    }
});