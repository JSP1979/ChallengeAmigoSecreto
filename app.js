// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 letras.");
        return;
    }
    
    if (nombre !== "" && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Ingrese un nombre válido y que no esté repetido.");
    }
}

// Función para actualizar la lista de nombres en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    nombres.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debe haber al menos dos amigos para sortear.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * nombres.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${nombres[indiceSorteado]} es el amigo secreto 🎉</li>`;
}
