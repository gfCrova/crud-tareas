
export const mostrarMensaje = (
    mensaje, 
    setInContainer, 
    setInForm, 
    colorCss
    ) => {

    const div = document.createElement('div');
    div.className = `alertDiv absolute rounded-md p-3 ${colorCss} mt-2`;
    div.appendChild(document.createTextNode(mensaje));

    const container = document.querySelector(`${setInContainer}`);
    const form = document.querySelector(`${setInForm}`);
    container.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector('.alertDiv').remove();
    }, 2500);

}