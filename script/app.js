'// Adiciona um evento de clique ao botão de liberar comida
document.getElementById('feedButton').addEventListener('click', function() {
    // URL para a rota '/liberar' no ESP8266
    const esp8266Ip = '192.168.1.10'; // Substitua pelo IP correto do seu ESP8266
    const url = `http://${esp8266Ip}/liberar`;

    // Fazendo a requisição para liberar comida
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Adicionando o status recebido à lista de status
            adicionarStatus(data);
        })
        .catch(error => {
            // Exibindo erro se a requisição falhar
            adicionarStatus('Erro ao liberar comida');
            console.error('Erro na solicitação:', error);
        });
});

// Função para adicionar uma mensagem de status à lista de status
function adicionarStatus(mensagem) {
    // Encontra o elemento da lista de status
    const statusList = document.getElementById('statusList');
    
    // Cria um novo item de lista
    const novoItem = document.createElement('li');
    
    // Define o texto do novo item de lista com a mensagem
    novoItem.innerText = mensagem;
    
    // Adiciona o novo item à lista de status
    statusList.appendChild(novoItem);
}

// Seleciona o botão de hambúrguer e o menu de navegação
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

// Adiciona um evento de clique ao botão de hambúrguer
menuButton.addEventListener("click", () => {
    // Alterna a classe 'active' para mostrar ou esconder o menu de navegação
    navMenu.classList.toggle("active");
});
