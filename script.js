document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    whatsapp: document.getElementById("whatsapp").value,
    ciudad: document.getElementById("ciudad").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxhruRwCaidfCR8qVxi1Agm6Bk4eQyu4Qpgyh7fkxH6Zgr5Vo_XydeX6Sf-7fiq-prwwQ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(res => {
    if (res === "OK") {
      alert("¡Gracias! Tu pedido ha sido registrado.");
      document.getElementById("contactForm").reset();
    } else {
      throw new Error("Respuesta inesperada del servidor");
    }
  })
  .catch(err => {
    alert("Hubo un error al enviar el formulario.");
    console.error("Error:", err);
  });
});
