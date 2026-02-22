// ====== Menu Hamburguer (caso use na página) ======
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// ====== Pegar nome do usuário salvo no perfil ======
const nomePerfil = localStorage.getItem("usuarioNome") || "Usuário Anônimo";

// ====== Ao carregar a página, mostrar nome se necessário ======
document.addEventListener("DOMContentLoaded", () => {
  const nomeSpan = document.getElementById("nomeUsuario");
  if (nomeSpan) nomeSpan.textContent = nomePerfil;
});

// ====== Adicionar comentário como nova resposta estilizada ======
document.getElementById('formComentario').addEventListener('submit', function (event) {
  event.preventDefault();

  const input = document.getElementById('inputComentario');
  const texto = input.value.trim();

  if (!texto) return;

  // Criar a nova resposta
  const novaResposta = document.createElement('div');
  novaResposta.classList.add('resposta-item'); // <- usa a classe que o CSS espera

  // Adicionar conteúdo com nome do perfil
  novaResposta.innerHTML = `<strong>${nomePerfil}:</strong> ${texto}`;

  // Adicionar na lista de respostas (id novo ou substituto do antigo .respostas)
  const lista = document.getElementById('listaRespostas');
  lista.appendChild(novaResposta);

  // Limpar campo
  input.value = '';
});
