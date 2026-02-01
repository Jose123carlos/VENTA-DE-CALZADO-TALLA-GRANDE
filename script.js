document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.action = "https://script.google.com/macros/s/AKfycbxhruRwCaidfCR8qVxi1Agm6Bk4eQyu4Qpgyh7fkxH6Zgr5Vo_XydeX6Sf-7fiq-prwwQ/exec";
  form.method = "POST";
  form.target = "hidden_iframe";

  const iframe = document.createElement("iframe");
  iframe.name = "hidden_iframe";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  form.addEventListener("submit", function () {
    setTimeout(() => {
      alert("¡Gracias! Tu información fue enviada correctamente.");
      form.reset();
    }, 1000);
  });
});
