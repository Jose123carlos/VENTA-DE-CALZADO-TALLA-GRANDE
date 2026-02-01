document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nombre: document.getElementById("nombre").value.trim(),
      whatsapp: document.getElementById("whatsapp").value.trim(),
      ciudad: document.getElementById("ciudad").value.trim()
    };

    fetch("https://script.google.com/macros/s/AKfycbxhruRwCaidfCR8qVxi1Agm6Bk4eQyu4Qpgyh7fkxH6Zgr5Vo_XydeX6Sf-7fiq-prwwQ/exec", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
      if (result === "OK") {
        alert("¡Gracias! Tu información fue enviada correctamente.");
        form.reset();
      } else {
        throw new Error("Respuesta inesperada del servidor: " + result);
      }
    })
    .catch(error => {
      console.error("Error al enviar:", error);
      alert("Hubo un problema al enviar el formulario. Intenta nuevamente.");
    });
  });
});
