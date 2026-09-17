 let campoAluno = document.getElementById("nome-aluno");
 let btnCadastrar = document.getElementById("btnCadastrar");
 let listaAlunos = document.getElementById("lista-alunos");
 let totalAlunos = document.getElementById("total-alunos");

 let lista = ["Felipe", "Enzo", "Miguel", "Julia"];

 let exibirNomes = () =>{
    listaAlunos.innerText = '';
    listaOrdenada = lista.sort()
    /*((nome1, nome2) => nome2.localeCompare(nome1))*/;
    listaOrdenada.forEach(nome => listaAlunos.innerHTML += `<li>${nome.toUpperCase()}</li>`);

    totalAlunos.innerText = "Total de alunos: " + lista.length;
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