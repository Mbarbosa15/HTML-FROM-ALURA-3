function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
  console.log(filmeFavorito);
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementolistaFilmes = document.getElementById("listaFilmes");
  elementolistaFilmes.innerHTML =
    elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}