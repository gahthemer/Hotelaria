import LoginForm from "../components/LoginForm.js";

export default function renderLoginPage(){
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.background =' rgba(93, 82, 197, 0.95)';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    divRoot.appendChild(container);
    container.style.background =' rgba(51, 44, 112, 0.95)';


    const formulario = LoginForm();
    container.appendChild(formulario);
}