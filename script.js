function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/oguxt.png")
  } else {
    img.setAttribute("src", "https://github.com/oguxt.png")
  }
}

function openEmailApp() {
  var emailLink = "mailto:gumatozo17.sp@gmail.com";
  var win = window.open(emailLink, "_blank");
  win.focus();
}