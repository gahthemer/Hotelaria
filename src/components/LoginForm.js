
export default function LoginForm(){
    const formulario = document.createElement('form');

    const email = document.createElement('input');
    email.type = 'emaiol';
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

    return formulario;
}