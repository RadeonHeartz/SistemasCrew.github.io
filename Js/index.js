const PerfilImg = document.getElementById("PerfilImg");
const PerfilNav = document.getElementById("PerfilNav");

PerfilImg.addEventListener("click", function () {
    PerfilNav.classList.toggle("mostrar");
});
const API_URL = "http://localhost/ProyectoDesarrolloWeb.github.io/api/admin/Equipos.php";
async function ObtenerEquipos() {
    try {
        const response = await fetch(API_URL, {
            method: "GET"
        });
        const datos = await response.json();
        console.log("Equipos obtenidos:", datos);
        return datos;
    } catch (error) {
        console.error("Error al conectar con la API:", error);
    }
}
ObtenerEquipos();