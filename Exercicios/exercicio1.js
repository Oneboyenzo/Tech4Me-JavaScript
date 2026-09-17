 let campoAluno = document.getElementById("nome-aluno");
 let btnCadastrar = document.getElementById("btnCadastrar");
 let listaAlunos = document.getElementById("lista-alunos");

 let lista = ["Felipe", "Enzo", "Julia", "Miguel"];

 let exibirNomes = () =>{
    listaAlunos.innerText = '';
    lista.forEach(nome => listaAlunos.innerHTML += `<li>${nome.toUpperCase()}</li>`);
 }

exibirNomes();

btnCadastrar.addEventListener("click", ()=>{
    let nome = campoAluno.value;

    if (nome == "") {
        alert("Preencha o campo corretamente!");;
        return;
    }

    lista.push(nome);

    exibirNomes();

    campoAluno.value = "";

    campoAluno.focus();

});