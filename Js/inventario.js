const API_URL =
  "http://localhost/ProyectoDesarrolloWeb.github.io/api/admin/Equipos.php";

async function ObtenerEquipos() {
  try {
    const response = await fetch(API_URL);

    const datos = await response.json();

    const tabla = document.getElementById("inventarioTable");

    datos.data.forEach((equipo) => {
      let row = tabla.insertRow();

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
    console.error("Error al conectar con la API:", error);
  }
}
