document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro-peca");
  const imageUploadDiv = document.querySelector(".image-upload");

  // Cria um input hidden para guardar a URL da imagem
  let imagemUrlInput = document.createElement("input");
  imagemUrlInput.type = "hidden";
  imagemUrlInput.name = "imagemUrl";
  form.appendChild(imagemUrlInput);

  // Esconde o input file, não usaremos upload
  const inputFile = document.getElementById("upload-img");
  inputFile.style.display = "none";

  // Clique no ícone abre prompt para colar URL da imagem
  imageUploadDiv.addEventListener("click", (event) => {
    event.preventDefault();

    const url = prompt("Cole a URL da imagem:");

    if (url && url.trim() !== "") {
      imagemUrlInput.value = url.trim();

      // Mostrar preview da imagem abaixo do ícone
      let previewImg = imageUploadDiv.querySelector("img.preview");
      if (!previewImg) {
        previewImg = document.createElement("img");
        previewImg.classList.add("preview");
        previewImg.style.display = "block";
        previewImg.style.marginTop = "10px";
        previewImg.style.maxWidth = "150px";
        previewImg.style.maxHeight = "150px";
        imageUploadDiv.appendChild(previewImg);
      }
      previewImg.src = imagemUrlInput.value;
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuario || !usuario.id) {
      return Swal.fire({
        icon: "error",
        title: "Usuário não identificado",
        text: "Faça login novamente para cadastrar uma peça.",
        confirmButtonColor: "#394725",
      });
    }

    const formData = new FormData(form);
    const imagemUrl = imagemUrlInput.value;

    if (!imagemUrl) {
      return Swal.fire({
        icon: "warning",
        title: "Imagem não informada",
        text: "Por favor, informe a URL da imagem clicando no ícone.",
        confirmButtonColor: "#394725",
      });
    }

    // Validação mais flexível: aceita qualquer URL que comece com http/https
    if (!/^https?:\/\//i.test(imagemUrl)) {
      return Swal.fire({
        icon: "warning",
        title: "URL inválida",
        text: "Por favor, insira uma URL válida que comece com http ou https.",
        confirmButtonColor: "#394725",
      });
    }

    const data = {
      nome: formData.get("nome") || "",
      categoria: formData.get("categoria") || "",
      descricao: formData.get("descricao") || "",
      preco: formData.get("preco") ? parseFloat(formData.get("preco")) : 2,
      tamanho: formData.get("tamanho") || "",
      condicao: formData.get("condicao") || "",
      genero: formData.get("cor") || "",
      imagem: imagemUrl,
      usuarioId: usuario.id,
      modalidade: formData.get("modalidade") || "Não especificado",
    };

    if (
      !data.nome ||
      !data.categoria ||
      !data.descricao ||
      !data.tamanho ||
      !data.condicao ||
      !data.genero
    ) {
      return Swal.fire({
        icon: "warning",
        title: "Campos obrigatórios",
        text: "Todos os campos devem ser preenchidos.",
        confirmButtonColor: "#394725",
      });
    }

    if (data.preco <= 0) {
      return Swal.fire({
        icon: "warning",
        title: "Preço inválido",
        text: "O preço deve ser maior que zero.",
        confirmButtonColor: "#394725",
      });
    }

    try {
      const response = await fetch("http://localhost:8080/pecas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Peça cadastrada!",
          text: "Sua peça foi registrada com sucesso.",
          confirmButtonColor: "#394725",
        });
        window.location.href = "consultaPeca.html";
      } else {
        const erro = await response.text();
        Swal.fire({
          icon: "error",
          title: "Erro ao cadastrar",
          text: erro || "Verifique os dados e tente novamente.",
          confirmButtonColor: "#394725",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      Swal.fire({
        icon: "error",
        title: "Erro de conexão",
        text: "Não foi possível conectar ao servidor.",
        confirmButtonColor: "#394725",
      });
    }
  });
});
