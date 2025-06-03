const editor = document.getElementById("editor");

document.getElementById("bold").addEventListener("click", () => formatText("bold"));
document.getElementById("italic").addEventListener("click", () => formatText("italic"));
document.getElementById("underline").addEventListener("click", () => formatText("underline"));

document.getElementById("fontName").addEventListener("change", (e) => {
  document.execCommand("fontName", false, e.target.value);
});

document.getElementById("fontSize").addEventListener("change", (e) => {
  document.execCommand("fontSize", false, e.target.value);
});

document.getElementById("fontColor").addEventListener("input", (e) => {
  document.execCommand("foreColor", false, e.target.value);
});

document.getElementById("clear").addEventListener("click", () => {
  editor.innerHTML = "";
});

document.getElementById("save").addEventListener("click", () => {
  const text = editor.innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = "texto.txt";
  link.href = window.URL.createObjectURL(blob);
  link.click();
});

function formatText(command) {
  document.execCommand(command, false, null);
  editor.focus();
}
