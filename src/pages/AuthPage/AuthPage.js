import React, { useState } from 'react';
import './AuthPage.scss'; // Import du fichier CSS pour le style

import logoHero from '../../Assets/logo.svg';
import HeroImage from '../../Assets/desktop-wallpaper-stock-market.jpg';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification à ajouter ici
    if (isLogin) {
      console.log('Connexion avec', email, password);
    } else {
      console.log('Inscription avec', email, password, firstName, lastName);
    }
  };

  return (
    <div className='AuthPage'>
    <div className='Container'>
      <div className='HeroSection'>
        <div className="auth-container">
          <img src={logoHero} alt="Logo" className="logo" />
          <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label>Nom:</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Prénom:</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Mot de passe:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label>Confirmer le mot de passe:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit">{isLogin ? 'Se connecter' : "S'inscrire"}</button>
          </form>
          <p>
            {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
            <button onClick={handleToggleMode}>
              {isLogin ? "S'inscrire ici" : 'Se connecter ici'}
            </button>
          </p>
        </div>
      </div>
      <div className='HeroSection'>
        <img src={HeroImage} className="HeroImage" alt="Hero Image" />
      </div>
    </div>
  </div>
  );
};

export default AuthPage;