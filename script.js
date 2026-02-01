document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

 function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nombre,
    data.whatsapp,
    data.ciudad
  ]);

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}


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

