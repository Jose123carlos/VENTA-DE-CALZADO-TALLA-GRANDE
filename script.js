document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("nombre", document.getElementById("nombre").value.trim());
    formData.append("whatsapp", document.getElementById("whatsapp").value.trim());
    formData.append("ciudad", document.getElementById("ciudad").value.trim());

    fetch("https://script.google.com/macros/s/AKfycbz0ZcrdQjT9fT-24fLyQb5wYj61l4VeYoLn24sl8L3qxa_EeY81Sidj3tztVXKdvpwyWw/exec", {
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

