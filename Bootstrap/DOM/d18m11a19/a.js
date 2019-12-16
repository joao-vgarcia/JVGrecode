let livro = [];
function abnt() {
    
    livro.autor = document.getElementById("nome").value;
    livro.titulo = document.getElementById("titulo").value;
    livro.edicao = document.getElementById("edicao").value;
    livro.local = document.getElementById("local").value;
    livro.editora = document.getElementById("editora").value;
    livro.ano = document.getElementById("ano").value;
    livro.sobre = document.getElementById("sobrenome").value;
    document.getElementById("abnome").innerText = `${livro.sobre.toUpperCase()}, ${livro.autor.slice(0,1).toUpperCase()}. ${livro.titulo.toUpperCase()} : ${livro.edicao} . ed. ${livro.local.toUpperCase()}: ${livro.editora.toUpperCase()}, ${livro.ano}`

    

}   