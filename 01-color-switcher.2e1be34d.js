!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled",!1),t.addEventListener("click",(function(){setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.removeAttribute("disabled",!0),t.setAttribute("disabled",!1)})),e.addEventListener("click",(function(){clearInterval(),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!1)}))}();
//# sourceMappingURL=01-color-switcher.2e1be34d.js.map
