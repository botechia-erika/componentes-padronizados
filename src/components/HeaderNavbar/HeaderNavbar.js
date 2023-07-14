import React from "react";
import "./style.css";

export function HeaderNavbar() {
  return (
    <div>
      <header>
       <nav class="menu">
    <label><img src={logo} alt="logo libretaPET" class="logoBrand"></label>
    <ul class="menu__item ">
      <li class="item"><a href="index.html" class="link-item">Home</a></li>
      <li class="item"><a href="#" class="link-item">Info</a></li>
      <li class="item"><a href="salud.html" class="link-item">Salud</a></li>
      <li class="item"><a href="listado.html" class="link-item">Adoptar</a></li>
      <li class="item"><a href="proyecto.html" class="link-item">Proyecto</a></li>
      <li class="item"><a href="contacto.html" class="link-item">Contacto</a></li>
      <li class="item"><a href="snakeGame.html" class="link-item">snakeGame</a></li>

    </ul>

    <span class="btn__menu" id="buttonMenu">
      <i class="fa fa-bars"></i>
    </span>
  </nav>
    <div class="container">
      <div class="hero50">
              <h1>Infos sobre...</h1>
      </div>
    </div>    
</header>

    </div>
  );
}