export class Note {
  //class Note
  constructor(title, text, color) {
    this.title = title;
    this.text = text;
    this.color = color;
    //Obtenemos la fecha actual
    var t = new Date();
    this.title = "Titulo " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    //Creamos la nota y le añadimos los estilos;
    this.nota = document.createElement("div");
    this.nota.style.margin = "2px";
    this.nota.backgroundColor = this.color;
    this.nota.style.border = "1px solid grey";
    this.nota.style.backgroundColor = "yellow";
    this.nota.style.padding = "10px";
    var h3 = document.createElement("h3");
    h3.style.textAlign = "center";
    h3.style.margin = "1px";
    h3.textContent = this.title;
    var textArea = document.createElement("textarea");
    textArea.textContent = this.text;
    var boton = document.createElement("button");
    boton.textContent = "editar";
    boton.style.padding = "2px";
    boton.style.margin = "5px";
    document.body.style.backgroundImage = "url('http://blog.uclm.es/mu-mueir/files/2016/06/tabl%C3%B3n-de-corcho-e1467802917202.jpg')";
    //Añadimos al div los "hijos"
    this.nota.appendChild(h3);
    this.nota.appendChild(textArea);
    this.nota.appendChild(boton);
  }
}
