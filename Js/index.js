const PerfilImg = document.getElementById("PerfilImg");
const PerfilNav = document.getElementById("PerfilNav");

PerfilImg.addEventListener("click", function () {
  PerfilNav.classList.toggle("mostrar");
});
let $ = (doc) => document.querySelector(doc);
let $$ = (doc) => document.querySelectorAll(doc);

function cargarInventario() {
  let InventarioNav = $("#InventarioNav");

  InventarioNav.addEventListener("click", function () {
    fetch("Sites/inventario.html")
      .then((response) => response.text())
      .then((html) => {
        $(".Contenido").innerHTML = html;
        ObtenerEquipos();
      })
      .catch((error) => {
        console.log("Error al cargar el contenido:", error);
      });
  });
}
cargarInventario();
