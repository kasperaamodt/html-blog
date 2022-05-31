if (window.localStorage.getItem("theme")) {
    document.body.setAttribute("data-theme", "dark");
}

document.getElementById("themeSwitch").addEventListener("click", function () {
    document.body.hasAttribute("data-theme")
        ? (document.body.removeAttribute("data-theme"),
          window.localStorage.removeItem("theme"))
        : (document.body.setAttribute("data-theme", "dark"),
          window.localStorage.setItem("theme", "dark"));
});
