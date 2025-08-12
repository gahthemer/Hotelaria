
export default function LoginForm(){
    const formulario = document.createElement('form');
    formulario.className='d-flex flex-column';

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu email";
    formulario.appendChild(email);

    const password = document.createElement('input');
    password.type = 'password';
    password.placeholder = "Digite sua senha: ";
    formulario.appendChild(password);

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = "Entrar";
    formulario.appendChild(button);

    password.style.background =' rgba(182, 175, 231, 0.95)';
    email.style.background =' rgba(182, 175, 231, 0.95)';
    button.className = 'btn btn-primary';

    return formulario;
}