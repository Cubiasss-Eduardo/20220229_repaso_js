//unir 2 objetos

const deportista = [

    {
        id: 1,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },  
    {
        id: 2,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 3,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 4,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 5,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 6,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 7,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 8,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
    {
        id: 9,
        deportistas: "Usain bolt",
        imagen: "https://media.npr.org/assets/img/2017/08/04/bolt-2-f5723d79e5e1f37d3b2c6aca54a5c9eb46f740b1.jpg"
    },
]


function activar(deportistaks)
{
    try{
        
    deportistaks.forEach(deportista => {
    
                   // Crear un nuevo contenedor de fila para el input y el botón
                   const rowContainer = document.createElement('div');
                   rowContainer.id = 'rowContainer_' + deportista.id;
                   rowContainer.classList.add('row', 'py-1');
       
                   // Crear un nuevo input para el nombre del jugador
                   const nombreJugadorInput = document.createElement('input');
                   nombreJugadorInput.id = 'nombreJugador_' + deportista.id;
                   nombreJugadorInput.type = 'text';
                   nombreJugadorInput.name = 'nombreJugador_' + deportista.id;
                   nombreJugadorInput.classList.add('col-12', 'rounded-3', 'me-2', 'text-center');
                   nombreJugadorInput.disabled = true;
                   nombreJugadorInput.value = deportista.deportistas;

                    // Crear un nuevo input para la imagen del jugador
                    const imagenJugadorInput = document.createElement('img');
                    imagenJugadorInput.src = deportista.imagen;
                    imagenJugadorInput.classList.add('rounded', 'mx-auto', 'd-block');
                   // Agregar el input y el botón al contenedor de fila
                   rowContainer.appendChild(nombreJugadorInput);
                   rowContainer.appendChild(imagenJugadorInput);
       
                   // Obtener el contenedor de los nombres de los jugadores
                   const nombresDeLosJugadoresDiv = document.getElementById('contenido1');
       
                   // Agregar el contenedor de fila al contenedor de nombres de los jugadores
                   nombresDeLosJugadoresDiv.appendChild(rowContainer);      
        })
    }
    catch(error){
        console.log(error)
    }
}

activar(deportista)



// window.onload
window.onload = async function () {
    deportista(deportista);
};