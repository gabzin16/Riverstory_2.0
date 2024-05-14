import React, { useState } from 'react';
import './Login.css'; 

function Login() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
  
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Criar conta</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>ou use seu e-mail para registro</span>
          <input type="text" placeholder="Usuário" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button>Cadastre-se</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Entrar</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>ou utilize sua conta</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <a href="#">Esqueceu sua senha?</a>
          <button>Entrar</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bem-vindo de volta!</h1>
            <p>Para se manter conectado conosco, faça login com suas informações</p>
            <button className="ghost" onClick={handleSignInClick}>Entrar</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Olá, visitante!</h1>
            <p>Insira seus dados e comece sua jornada conosco</p>
            <button className="ghost" onClick={handleSignUpClick}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
