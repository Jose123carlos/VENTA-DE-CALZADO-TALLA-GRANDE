document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Capturar datos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();

    // Validación básica
    if (!nombre || !whatsapp || !ciudad) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (!/^\d{10}$/.test(whatsapp)) {
      alert("El número de WhatsApp debe tener 10 dígitos.");
      return;
    }

    const data = {
      nombre: nombre,
      whatsapp: whatsapp,
      ciudad: ciudad
    };

    // URL de tu webhook de Google Apps Script
    const webhookURL = "https://script.google.com/macros/s/AKfycbxTuWebhookURL/exec"; // ← reemplaza con tu URL real

    // Enviar datos al webhook
    fetch(webhookURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.text())
      .then(result => {
        if (result === "OK") {
          alert("¡Gracias! Tu pedido ha sido registrado.");
          form.reset();
        } else {
          throw new Error("Respuesta inesperada del servidor.");
        }
      })
      .catch(error => {
        console.error("Error al enviar:", error);
        alert("Hubo un error al enviar el formulario.");
      });
  });
});
