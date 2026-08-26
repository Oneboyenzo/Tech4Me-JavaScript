const alunos = [
  { nome: "Miguel S", nota1: 8.5, nota2: 7.5 },
  { nome: "Luara", nota1: 4.0, nota2: 5.0 },
  { nome: "Enzo E", nota1: 9.0, nota2: 8.0 },
  { nome: "Enzo C", nota1: 3.5, nota2: 6.0 },
 
];


const container = document.getElementById("container-tabela");


const tabela = document.createElement("table");
tabela.innerHTML = `
  <thead>
    <tr>
      <th>Nome</th>
      <th>Nota 1</th>
      <th>Nota 2</th>
      <th>Média</th>
    </tr>
  </thead>
  <tbody></tbody>
`;

const tbody = tabela.querySelector("tbody");


alunos.forEach((aluno) => {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  const tr = document.createElement("tr");


  if (media >= 7) {
    tr.classList.add("aprovado"); 
  } else if (media < 6) {
    tr.classList.add("reprovado"); 
  }
 
  tr.innerHTML = `
    <td>${aluno.nome}</td>
    <td>${aluno.nota1.toFixed(1)}</td>
    <td>${aluno.nota2.toFixed(1)}</td>
    <td>${media.toFixed(1)}</td>
  `;

  tbody.appendChild(tr);
});


container.appendChild(tabela);