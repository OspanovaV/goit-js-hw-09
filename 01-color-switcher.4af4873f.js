const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;e.setAttribute("disabled",!1),t.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.removeAttribute("disabled",!0),t.setAttribute("disabled",!1)})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!1)}));
//# sourceMappingURL=01-color-switcher.4af4873f.js.map
