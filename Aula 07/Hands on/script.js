const API_URL = 'http://localhost:3000/produtos';

const formProduto = document.getElementById('form-produto');
const btnBebidas = document.getElementById('btn-bebidas');
const btnTodos = document.getElementById('btn-todos');
const containerProdutos = document.getElementById('lista-produtos');
const mensagemDiv = document.getElementById('mensagem');


async function buscarBebidas() {
  try {
    
    const response = await fetch(`${API_URL}?categoria=bebidas`);
    const bebidas = await response.json();
    exibirProdutos(bebidas);
  } catch (error) {
    console.error('Erro ao buscar bebidas:', error);
  }
}


async function buscarTodos() {
  try {
    const response = await fetch(API_URL);
    const produtos = await response.json();
    exibirProdutos(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
}


function exibirProdutos(produtos) {
  containerProdutos.innerHTML = '';

  if (produtos.length === 0) {
    containerProdutos.innerHTML = '<p>Nenhum produto encontrado.</p>';
    return;
  }

  produtos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <h3>${prod.nome}</h3>
      <p><strong>Preço:</strong> R$ ${parseFloat(prod.preco).toFixed(2)}</p>
      <p><strong>Categoria:</strong> ${prod.categoria}</p>
      <p><strong>Estoque:</strong> ${prod.estoque} un.</p>
      <button onclick="removerProduto('${prod.id}')" class="btn btn-danger">Excluir</button>
    `;
    containerProdutos.appendChild(card);
  });
}

formProduto.addEventListener('submit', async (e) => {
  e.preventDefault();

  const novoProduto = {
    nome: document.getElementById('nome').value,
    preco: parseFloat(document.getElementById('preco').value),
    categoria: document.getElementById('categoria').value,
    estoque: parseInt(document.getElementById('estoque').value, 10)
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoProduto)
    });

    if (response.ok) {
      exibirMensagem('Produto cadastrado com sucesso!');
      formProduto.reset();
      buscarTodos(); 
    }
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
  }
});


async function removerProduto(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      exibirMensagem('Produto removido com sucesso!');
      buscarTodos();
    }
  } catch (error) {
    console.error('Erro ao remover produto:', error);
  }
}

function exibirMensagem(texto) {
  mensagemDiv.textContent = texto;
  setTimeout(() => {
    mensagemDiv.textContent = '';
  }, 3000);
}


btnBebidas.addEventListener('click', buscarBebidas);
btnTodos.addEventListener('click', buscarTodos);