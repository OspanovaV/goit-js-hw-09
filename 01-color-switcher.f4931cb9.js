!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){colorTimerId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!1)})),e.addEventListener("click",(function(){clearInterval(colorTimerId),console.log("Interval with id ".concat(colorTimerId," has stopped!")),t.removeAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.f4931cb9.js.map
