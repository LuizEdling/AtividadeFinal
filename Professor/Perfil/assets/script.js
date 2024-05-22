document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('#paginaPadrao, #Deuteranopia, #Protanopia, #Tritanopia');

    // Certifique-se de que 'paginaPadrao' esteja ativo inicialmente
    var activeItem = document.getElementById('paginaPadrao');
    activeItem.classList.add('active');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' do item atualmente ativo
            activeItem.classList.remove('active');
            
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
            
            // Atualiza o item atualmente ativo
            activeItem = this;
        });
    });
});

function mudarDaltonico(arquivoNovo, logoFileName, faviconCaminho){
    //ARQUIVO CSS
    // Obtém o elemento <link> que referencia o arquivo CSS
    var cssLink = document.getElementById('cssLink');

    // Define o href do elemento <link> para o nome do arquivo CSS fornecido
    cssLink.setAttribute('href', arquivoNovo);

    //LOGO
    // Obtém o elemento <img> que contém a logo
    var logoImage = document.getElementById('logoImage');

    // Define o src do elemento <img> para o nome do arquivo da logo fornecido
    logoImage.setAttribute('src', logoFileName);

    //FAVICON
    // Obtém o elemento <link> que referencia o favicon
    var faviconLink = document.getElementById('faviconLink');

    // Define o href do elemento <link> para o nome do arquivo do favicon fornecido
    faviconLink.setAttribute('href', faviconCaminho);
}