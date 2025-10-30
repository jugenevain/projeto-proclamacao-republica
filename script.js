document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});

const tabLinks = document.querySelectorAll('.doc-tab-link');

tabLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    const tabId = this.getAttribute('data-tab'); 
    const card = this.closest('.documento-card'); 

    card.querySelectorAll('.doc-tab-link').forEach(tab => tab.classList.remove('active'));
    card.querySelectorAll('.doc-tab-content').forEach(content => content.classList.remove('active'));

    this.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

const modal = document.getElementById("modal-galeria");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-descricao");

const imagensDaGaleria = document.querySelectorAll(".galeria-img-clicavel");

imagensDaGaleria.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalDesc.textContent = this.getAttribute('data-descricao'); 
  });
});

const spanFechar = document.querySelector(".modal-fechar");

spanFechar.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}