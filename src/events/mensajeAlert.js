
export const mostrarMensaje = (param1, param2, colorCss) => {

    const div = document.createElement('div');
    div.className = `alertDiv absolute rounded-md p-3 ${colorCss} mt-2`;
    div.appendChild(document.createTextNode("Se agregó satisfactoriamente"));
    // Mostrando el el DOM
    const container = document.querySelector(`${param1}`);
    const form = document.querySelector(`${param2}`);
    container.insertBefore(div, form);
    // Eliminando el mensaje automaticamente
    setTimeout(() => {
        document.querySelector('.alertDiv').remove();
    }, 2500);

}