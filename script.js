document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("nombre", document.getElementById("nombre").value.trim());
    formData.append("whatsapp", document.getElementById("whatsapp").value.trim());
    formData.append("ciudad", document.getElementById("ciudad").value.trim());

    fetch("https://script.google.com/macros/s/AKfycbyyvzSTEb3T_hgBI4QZLRe8vFav17rtGI6ghH1HQhXp8Blbar64zQ67FAQNem8RFkHlag/exec", {
      method: "POST",
      body: formData   // 👈 ya NO enviamos JSON
    })
    .then(response => response.text())
    .then(result => {
      if (result === "OK") {
        alert("¡Gracias! Tu información fue enviada correctamente.");
        form.reset();
      } else {
        alert("El formulario se envió, pero hubo una respuesta inesperada.");
        console.log("Respuesta:", result);
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("No se pudo enviar el formulario. Revisa tu conexión o el script.");
    });
  });
});


