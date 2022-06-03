const login = () => {
    const container = document.getElementById('container');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = '¡BIENVENIDOS!';
    container.appendChild(title);

    const inputName = document.createElement("input");
    inputName.id = "name";
    inputName.placeholder = "Ingrese su nombre";
    container.appendChild(inputName);

    const getInput = () => {
        const e = document.getElementById("name");
        console.log(e.value);
    }
};

export { login };
