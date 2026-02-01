document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    whatsapp: document.getElementById("whatsapp").value,
    ciudad: document.getElementById("ciudad").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyOctbxpJzA3UM1dZ2Uy4azedDrl7bFteVMOGNsvg7gV9TOvBOHP6AUvrGATbqpVGqGZA/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.text())
    .then(result => {
      alert("¡Gracias! Tu pedido ha sido registrado.");
      document.getElementById("contactForm").reset();
    })
    .catch(error => {
      alert("Hubo un error al enviar el formulario.");
      console.error(error);
    });
});
