import {Note} from "./note.js";

function appendNotas() {
  var notes = [new Note("titulo", "contenido", "yellow")]; //array de notas
  var div = document.getElementById("sticky");
  div.style.display = "flex";

  for (const note of notes) {
    div.appendChild(note.nota); //Mostramos las notas en el div creado
  }
}
appendNotas();
