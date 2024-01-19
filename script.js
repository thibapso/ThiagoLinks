function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  // }
  //else {
  //  html.classList.add('light')
  //}

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //desafio de alterar o alt da imagem
  const alt = document.querySelector("alt")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Thiago Soares sorrindo, utilizando camisa preta em um fundo claro."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Thiago Soares sorrindo, utilizando camisa preta em um fundo escuro."
    )
  }
}
