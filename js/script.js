// ====== Menu Hamburguer ======
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// ====== Login / Entrar na Conta ======
function entrarConta() {
  const nome = document.getElementById("nome")?.value.trim();
  const senha = document.getElementById("senha")?.value.trim();

  if (nome && senha) {
    localStorage.setItem("mangatideUser", nome);
    window.location.href = "inicio.html";
  } else {
    alert("Preencha todos os campos!");
  }
}

// ====== Mostrar Nome no Perfil ou Onde For ======
function mostrarNomeUsuario() {
  const nomeSalvo = localStorage.getItem("mangatideUser") || "Usuário Anônimo";
  
  const nomeSpan1 = document.getElementById("nomeUsuario");
  const nomeSpan2 = document.getElementById("perfil-nome");

  if (nomeSpan1) nomeSpan1.textContent = nomeSalvo;
  if (nomeSpan2) nomeSpan2.textContent = nomeSalvo;
}

// ====== Alterar Nome via prompt (não usado mais, mas mantido se quiser resgatar) ======
function alterarNome() {
  const novoNome = prompt("Digite seu novo nome:");
  if (novoNome) {
    localStorage.setItem("mangatideUser", novoNome);
    mostrarNomeUsuario();
  }
}

// ====== Sair da Conta ======
function sairDaConta() {
  localStorage.removeItem("mangatideUser");
  window.location.href = "index.html";
}

// ====== Ao carregar qualquer página ======
document.addEventListener("DOMContentLoaded", () => {
  mostrarNomeUsuario();
});

