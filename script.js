document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do envio do formulário

    // Captura dos dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Exibição dos dados no console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  });
