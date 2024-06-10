// // Aquí tu código
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

addButton.addEventListener("click", function () {
  // Agregamos un event listener al botón de agregar elemento para que interactue con JS sin necesidad de tocar el HTML.
  const newItem = prompt("Introduce un nuevo elemento a la lista:"); // Solicita al usuario que ingrese un nuevo elemento para la lista

  if (newItem) {
    //if (newItem): Esta condición verifica si newItem contiene algún valor. Si newItem es null, undefined, una cadena vacía o 0, la condición se evaluará como false. Si el usuario ingresa algún texto en el cuadro de diálogo prompt, newItem contendrá ese valor y la condición se evaluará como true.
    // Si hay un nuevo Itema, creamos un nuevo elemento para la lista
    const li = document.createElement("li"); // aqui interactuamos con el DOM y creamos una lista mostrandola en la pagina web( pero no guardamos en BDD porque cuando refrescamos se pierde la lista)

    li.textContent = newItem; // Establecer el contenido del nuevo elemento

    itemList.appendChild(li); // con el ApppendChild agregamos el nuevo elemento a la lista.
  }
});
