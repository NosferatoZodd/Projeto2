import { catalogo } from "./utilidades.js";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `
      <div class='border-solid w-56 m-3 flex flex-col p-2 justify-between shadow-xl shadow-slate-500 rounded-lg group' id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/amg/${produtoCatalogo.Imagem}" flex" alt="Produto 1 do magazine hashtag"
        class="group-hover:scale-110 duration-300 my-3  rounded-lg"
        />
        <p class='marca text-sm'>${produtoCatalogo.marca}</p>
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p class="text-sm">$${produtoCatalogo.preço}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="bg-slate-950 hover:bg-slate-700 text-slate-200"
        ><i class="fa-solid fa-cart-plus"></i></button>
      </div>
    `;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
    document.getElementById('adicionar-${produtoCatalogo.id}')
  }

  for (produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", adicionarAoCarrinho);
  }

}