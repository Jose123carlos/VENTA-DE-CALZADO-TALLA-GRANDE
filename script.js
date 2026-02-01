document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("nombre", document.getElementById("nombre").value.trim());
    formData.append("whatsapp", document.getElementById("whatsapp").value.trim());
    formData.append("ciudad", document.getElementById("ciudad").value.trim());

    fetch("https://script.google.com/macros/s/AKfycbzybNlHYfqTUXPSuDze_f6OcQN8wBz1fDua4To2q3YKQAnCXWuhVJqZIqaQVH_z4StehQ/exec", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(text => {
      console.log("Respuesta servidor:", text);
      if (text === "OK") {
        alert("¡Gracias! Tu información fue enviada correctamente.");
        form.reset();
      } else {
        alert("El servidor respondió, pero con un mensaje inesperado.");
      }
    })
    .catch(err => {
      console.error("Error real:", err);
      alert("No se pudo enviar el formulario.");
    });
  });
});
