   const filmes = [];
    let ordemAtual = null;

    const inputFilme = document.getElementById('inputFilme');
    const btnAdicionar = document.getElementById('btnAdicionar');
    const inputBusca = document.getElementById('inputBusca');
    const btnAZ = document.getElementById('btnAZ');
    const btnZA = document.getElementById('btnZA');
    const listaFilmes = document.getElementById('listaFilmes');

    function renderizarLista() {
      
      const termoBusca = inputBusca.value.toLowerCase();
      let filmesExibicao = filmes.filter(filme =>
        filme.toLowerCase().includes(termoBusca)
      );

     
      if (ordemAtual === 'AZ') {
        filmesExibicao.sort((a, b) => a.localeCompare(b));
      } else if (ordemAtual === 'ZA') {
        filmesExibicao.sort((a, b) => b.localeCompare(a));
      }

      listaFilmes.innerHTML = '';
      filmesExibicao.forEach(filme => {
        const li = document.createElement('li');
        li.textContent = filme.toUpperCase();
        listaFilmes.appendChild(li);
      });
    }

    btnAdicionar.addEventListener('click', () => {
      const nomeFilme = inputFilme.value.trim();
      if (nomeFilme) {
        filmes.push(nomeFilme);
        inputFilme.value = '';
        renderizarLista();
      }
    });

  
    inputBusca.addEventListener('input', renderizarLista);

  
    btnAZ.addEventListener('click', () => {
      ordemAtual = 'AZ';
      btnAZ.classList.add('ativo');
      btnZA.classList.remove('ativo');
      renderizarLista();
    });

    btnZA.addEventListener('click', () => {
      ordemAtual = 'ZA';
      btnZA.classList.add('ativo');
      btnAZ.classList.remove('ativo');
      renderizarLista();
    });