
const top10 = [
  "O Poderoso Chefão",
  "Um Sonho de Liberdade",
  "Batman: O Cavaleiro das Trevas",
  "A Lista de Schindler",
  "Pulp Fiction",
  "O Senhor dos Anéis: O Retorno do Rei",
  "Três Homens em Conflito",
  "A Origem",
  "Clube da Luta",
  "Forrest Gump"
];


const listaFilmes = document.getElementById("lista");


top10.forEach((item, index) => {
  const li = document.createElement("li");
  li.textContent = item;

  
  if (index % 2 === 0) {
    li.classList.add("cor-impar");
  } else {
    li.classList.add("cor-par");
  }

  listaFilmes.appendChild(li);
});