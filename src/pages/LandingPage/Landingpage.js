import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import "./landingPage.scss";
import hero from "../../assets/hero.png";
import whywe from "../../assets/whywe.png";
import singleUser from "../../assets/single.png";
import multipalUser from "../../assets/multipal.png";
import extraMultipalUser from "../../assets/extramul.png";
import myfortunelogo from "../../assets/myfortunelogo.png";
import { Link } from "react-router-dom";

const Landingpage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    console.log("localstorage : ", localStorage.getItem("token"));

    return (
        <>
            <div className="main">
                <nav>
                    <img
                        className="logo"
                        src={myfortunelogo}
                        alt="Logo MyFortune"
                    />
                    <input
                        type="checkbox"
                        id="menu"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="menu" className="menu-btn">
                        <HiMenu className="menu-btn" />
                    </label>
                    <ul>
                        <li>
                            <a href="#hero" onClick={handleCheckboxChange}>
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#whywe" onClick={handleCheckboxChange}>
                                Pourquoi Nous
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" onClick={handleCheckboxChange}>
                                Tarification
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                onClick={handleCheckboxChange}
                            >
                                Témoignages
                            </a>
                        </li>
                        <li>
                            <Link to="/authentification">
                                <a className="signin">Se Connecter </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div id="hero">
                    <h1 className="heading">
                        Embarquez dans votre voyage vers la prospérité
                        financière
                    </h1>
                    <div className="subheading">
                        <p>
                            Service de gestion de patrimoine de premier plan
                            dédié à plus qu'une croissance monétaire ; il s'agit
                            de donner
                            <br /> à nos clients la confiance et la sécurité
                            pour leur avenir.
                        </p>
                        <Link to="/authentification">
                            <button className="hero-signin">
                                Se Connecter
                            </button>
                        </Link>

                        <Link to="/authentification">
                            <button className="signup">
                                Inscrivez-vous maintenant
                            </button>
                        </Link>
                    </div>
                    <div className="hero-img">
                        <img src={hero} alt="Héros" />
                    </div>
                </div>
                <section id="whywe">
                    <div className="rightSide">
                        <h1 className="heading">Pourquoi Nous Choisir?</h1>
                        <ul>
                            <li>
                                Nos services de gestion de patrimoine aident les
                                investisseurs à construire leur richesse de
                                manière stratégique et systématique.
                            </li>
                            <li>
                                Nos gestionnaires de patrimoine qualifiés
                                comprennent les besoins des clients et les
                                objectifs financiers.
                            </li>
                            <li>
                                Utilisez notre Gestionnaire de Dépenses pour
                                créer un budget mensuel clair une fois que vous
                                avez connaissance de vos habitudes de dépenses.
                            </li>
                            <li>
                                Demandez un rapport personnalisé sur vos
                                dépenses et vos frais pour surveiller de près
                                vos finances quotidiennes.
                            </li>
                        </ul>
                    </div>
                    <div className="leftSide">
                        <img src={whywe} alt="Pourquoi Nous" />
                    </div>
                </section>
                <section id="pricing">
                    <h1 className="heading">
                        Notre Plan Gratuit comprend un accès individuel gratuit
                    </h1>
                    <p className="subheding">
                        Aucune carte de crédit requise, inscrivez-vous
                        aujourd'hui en utilisant UPI.
                    </p>
                    <div className="plans">
                        <div className="hoverplan">
                            <div className="plan">
                                <img src={singleUser} alt="" />
                                <p className="text1">PLUS</p>
                                <p className="text2">Pour individuel</p>
                                <p className="text3">Gratuit</p>
                                <ul>
                                    <li>Pour un seul utilisateur</li>
                                    <li>
                                        Téléchargez des fichiers de moins de 5
                                        Mo
                                    </li>
                                    <li>
                                        Accepte plusieurs options de paiement
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hoverplan">
                            <div className="plan">
                                <img src={multipalUser} alt="" />
                                <p className="text1">PREMIUM</p>
                                <p className="text2">Pour 10 personnes</p>
                                <p className="text3">$30</p>
                                <ul>
                                    <li>Pour un seul utilisateur</li>
                                    <li>
                                        Téléchargez des fichiers de moins de 5
                                        Mo
                                    </li>
                                    <li>
                                        Accepte plusieurs options de paiement
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hoverplan">
                            <div className="plan">
                                <img src={extraMultipalUser} alt="" />
                                <p className="text1">ÉQUIPE</p>
                                <p className="text2">Pour individuel</p>
                                <p className="text3">
                                    Tarification personnalisée
                                </p>
                                <ul>
                                    <li>Pour un seul utilisateur</li>
                                    <li>
                                        Téléchargez des fichiers de moins de 5
                                        Mo
                                    </li>
                                    <li>
                                        Accepte plusieurs options de paiement
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials">
                    <h1>Ce que disent nos utilisateurs</h1>
                    <p>Explorez les expériences de nos utilisateurs</p>

                    <div className="slide-container">
                        <div className="slide">
                            <h3>Jane Doe</h3>
                            <p>
                                "La meilleure application de gestion de
                                patrimoine qui vous aide à suivre les dépenses
                                et les sources de revenus des actifs fixes.
                                Hautement recommandé."
                            </p>
                        </div>
                        <div className="slide">
                            <h3>Amit Patel</h3>
                            <p>
                                "L'objectif de la gestion de patrimoine est de
                                vous aider à atteindre la sécurité financière et
                                à faire croître et protéger votre patrimoine."
                            </p>
                        </div>
                        <div className="slide">
                            <h3>Deepika Sharma</h3>
                            <p>
                                "Grâce à cette application, je peux suivre
                                toutes les dépenses efficacement
                            </p>
                        </div>
                        <div className="slide">
                            <h3>Raj Kumar</h3>
                            <p>
                                "Une application exceptionnelle ! Je suis
                                satisfait de la façon dont elle gère la richesse
                                et fournit un détail des revenus et des
                                dépenses. La meilleure que j'aie jamais vue."
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section id="footer">
                <div className="copyright">
                    <h1>MyFortune</h1>
                    <p>© Copyright 2024, Tous droits réservés | MyFortune</p>
                </div>
                <div className="features">
                    <h1>Découvrez Nos Fonctionnalités</h1>
                    <p>Gestion de Patrimoine</p>
                    <p>Accélérez la Croissance de Votre Patrimoine</p>
                </div>
                <div className="company">
                    <h1>Notre Entreprise</h1>
                    <p>
                        <a href="">À Propos de Nous</a>
                    </p>
                    <p>
                        <a href="">Contactez-Nous</a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Landingpage;
