/**
 * Se crea la funcion login con el objetivo de pintar el login y guardar la informacion 
 * del jugador actual.
 */
const login = () => {
    const container = document.getElementById('container');

    /**
     * Se crea el header para mostrar el mensaje de bienvenida
     * @param  {} "header"
     */
     const header = document.createElement("header");
     header.classList.add("header");
     header.textContent = '¡ W E L C O M E !';

    /**
     * Se crea con el objetivo de mostrar un input para ingresar el nombre del usuario
     * @param  {} "input"
     */
    const inputName = document.createElement("input");
    inputName.id = "name";
    inputName.placeholder = "Ingrese su nombre";
    container.appendChild(inputName);
    
    /**
     * Se crea con el obejtivo de obtener el name del jugador.
     */
    const getInput = () => {
        const e = document.getElementById("name");
        console.log(e.value);
    }
};

export { login };
