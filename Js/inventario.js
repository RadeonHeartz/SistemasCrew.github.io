const API_URL =
  "http://localhost/ProyectoDesarrolloWeb.github.io/api/admin/Equipos.php";
  


async function ObtenerEquipos() {
  try {
    const response = await fetch(API_URL);

    const datos = await response.json();

    const tabla = document.querySelector("#inventarioTable tbody");

    datos.data.forEach((equipo) => {
      let row = tabla.insertRow();

      row.insertCell().textContent = equipo.Id_Equipo;
      row.insertCell().textContent = equipo.Codigo;
      row.insertCell().textContent = equipo.Categoria;
      row.insertCell().textContent = equipo.Ubicacion;
      row.insertCell().textContent = equipo.Estado;
      row.insertCell().textContent = equipo.Marca;
      row.insertCell().textContent = equipo.Modelo;
      row.insertCell().textContent = equipo.Serie;
      row.insertCell().textContent = equipo.Descripcion;
      row.insertCell().textContent = equipo.Fecha_Registro_Equipo;
      row.insertCell().textContent = equipo.Fecha_Baja ?? "No disponible";
    });
  } catch (error) {
    alert("Error al conectar con la API:", error);
  }
}

const API_URL_CATEGORIAS =
  "http://localhost/ProyectoDesarrolloWeb.github.io/api/admin/Categorias.php";

async function ObtenerCategorias() {
  try {
    const response = await fetch(API_URL_CATEGORIAS);
    const datos = await response.json();

    const selectCategoria = document.getElementById("categoria");

    datos.data.forEach((categoria) => {
      let option = document.createElement("option");

      option.value = categoria.Id_Categoria;
      option.textContent = categoria.Nombre_Categoria;

      selectCategoria.appendChild(option);
    });
  } catch (error) {
    alert("Error al conectar con la API:" + error);
  }
}
async function ObtenerUbicaciones() {
  const API_URL_UBICACIONES =
    "http://localhost/ProyectoDesarrolloWeb.github.io/api/admin/Ubicaciones.php";
  try {
    const response = await fetch(API_URL_UBICACIONES);
    const datos = await response.json();
    const ubicaciones = document.getElementById("ubicacion");

    datos.data.forEach((ubicacion) => {
      let option = document.createElement("option");
      option.value = ubicacion.Id_Ubicacion;
      option.textContent = ubicacion.Nombre_Ubicacion;
      ubicaciones.appendChild(option);
    });
  } catch (error) {
    alert("Error al conectar con la API:" +  error);
  }
}

async function ObtenerEstadosEquipo() {
  const API_URL_ESTADOS =
    "http://localhost/ProyectoDesarrolloWeb.github.io/api/admin/Estados_Equipo.php";
  try {
    const response = await fetch(API_URL_ESTADOS);
    const datos = await response.json();
    const estados = document.getElementById("estado");
    datos.data.forEach((estado) => {
      let option = document.createElement("option");
      option.value = estado.id_estado_Equipo;
      option.textContent = estado.Nombre_Estado_Equipo;
      estados.appendChild(option);
    });
  } catch (error) {
    alert("Error al conectar con la API:" + error);
  }
}

function cargarsubmitt() {
  const form = document.getElementById("equipoForm");
  const tbody = document.querySelector("#inventarioTable tbody");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error al enviar el formulario:" +  error);
    }
    form.reset();
    tbody.innerHTML = "";
    ObtenerEquipos();
  });
}
