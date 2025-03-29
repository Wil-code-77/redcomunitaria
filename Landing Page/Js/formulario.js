document
  .getElementById("formEncuesta")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Formulario enviado con éxito!");
    this.reset();
    document.getElementById("btnEnviar").disabled = true;
  });

document.getElementById("aceptoDatos").addEventListener("change", function () {
  document.getElementById("btnEnviar").disabled = !this.checked;
});

document.getElementById("btnEnviar").disabled = true; // Deshabilitar el botón al cargar la página
