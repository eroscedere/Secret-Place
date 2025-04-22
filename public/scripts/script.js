import { DOM } from "./DOM.js";
import { girls } from "./girls.js";

let menuON = false;

DOM.btnMenu.forEach((e) => {
  e.addEventListener("click", () => {
    menuON = !menuON;

    DOM.menu.style.width = menuON ? "220px" : "0px";
    DOM.menu.style.padding = menuON ? "20px 20px" : " 20px 0px";
  });
});

DOM.btnProfileMidia.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Resetar o estilo de todos os botões
    DOM.btnProfileMidia.forEach((element) => {
      element.style.background = "none";
    });

    // Aplicar a cor apenas no botão clicado
    btn.style.backgroundColor = "#f0a6ba";

    // Esconder todas as seções
    DOM.profileMidia.forEach((section) => {
      section.style.display = "none";
    });

    // Exibir a seção correspondente ao botão clicado
    DOM.profileMidia[i].style.display = "flex";
  });
});

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
};

girls.sort((a, b) => a.name.localeCompare(b.name));

girls.forEach((girl) => {
  const div = createElement("div");
  const img = createElement("img");
  const span = createElement("span");

  img.src = girl.perfil;
  img.addEventListener("click", () => {
    showProfile();
  });
  span.innerText = girl.name;

  div.appendChild(img);
  div.appendChild(span);
  DOM.profileExplorer.appendChild(div);
});

const showProfile = () => {
  DOM.profileExplorer.style.display = "none";
  DOM.profile.style.display = "flex";
};

let name = "Triz"; // Nome da pessoa (perfil)
let num = 1; // Começo da numeração das imagens

const showImages = () => {
  const img = document.createElement("img"); // Criação da tag de imagem

  // O caminho da imagem será ajustado para buscar na pasta 'uploads'
  img.src = `/uploads/${name.toLowerCase()}${num}.jpeg`;

  // Verificação quando a imagem for carregada com sucesso
  img.onload = function () {
    DOM.profileMidia[0].appendChild(img); // Adiciona a imagem no DOM
    num++; // Incrementa o número para tentar carregar a próxima imagem
    showImages(); // Chama novamente a função para tentar carregar a próxima imagem
  };

  // Verificação de erro (quando a imagem não é encontrada)
  img.onerror = function () {
    console.log("Foto não encontrada");
  };
};

showImages(); // Chama a função para iniciar o carregamento das imagens
