// Audacity.js
import React from 'react';
import { Link } from 'react-router-dom';

const Audacity = () => {
  return (
    <div>
      <h1>Audacity</h1>
      <p>
        Pro práci na našich úkolech budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
        Návod na zprovoznění najdete <Link to="/audacity/env">zde</Link>.
      </p>

      <div>
        <Link to="/audacity/audacity1"><h3>Lekce 1</h3></Link>
        <ul>
          <Link to="/audacity/audacity1"><h6>Obsah lekce - Úvod, prostředí Audacity, první zvuková nahrávka</h6></Link>
          <p>
            Pro práci na našich úkolů budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
            Návod na zprovoznění najdete <a href="/lessons/audacity/env.html">zde</a>.
          </p>
          <p>
            Pokud budete chtít můžete použít i tento <a
              href="https://www.speechtech.cz/speechtech-text-to-speech/speechtech-tts-online-demo/#Oldrich30">generátor
              mluveného textu</a>.
          </p>
        </ul>

        <Link to="/audacity/audacity2"><h3>Lekce 2</h3></Link>
        <ul>
          <Link to="/audacity/audacity2"><h6>Obsah lekce - Efekty a podcast</h6></Link>
          <p>
            V dnešní lekci si zopakujeme co jsme se doposud naučili.
            Zadáme si projket a také prezentaci. Tohle vše pak nas čeká ještě odprezentovat rodičům.
          </p>
        </ul>

        <Link to="/audacity/audacity3"><h3>Lekce 3</h3></Link>
        <ul>
          <Link to="/audacity/audacity3"><h6>Obsah lekce - Šum a Remix </h6></Link>
          <p>
            V dnešní lekci si zopakujeme co jsme se doposud naučili.
            Zadáme si projket a také prezentaci. Tohle vše pak nas čeká ještě odprezentovat rodičům.
          </p>
        </ul>

        <Link to="/audacity/audacity4"><h3>Lekce 4</h3></Link>
        <ul>
          <Link to="/audacity/audacity4"><h6>Obsah lekce - Opakování, zadání projektu a vypracovávání prezentace</h6></Link>
          <p>
            V dnešní lekci si zopakujeme co jsme se doposud naučili.
            Zadáme si projket a také prezentaci. Tohle vše pak nas čeká ještě odprezentovat rodičům.
          </p>
        </ul>

        <Link to="/audacity/projekt"><h3>Projekt</h3></Link>
        <ul>
          <Link to="/audacity/projekt"><h6>Zadání projektu - Rádiové vysílání </h6></Link>
          <p>
            V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na
            lekci.
            K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme jič probrali.
            V případě nejasností se mi <a href="/contact.html">ozvete</a>.
          </p>
        </ul>

        <a href="/prezentace.html">
          <h3>Prezentace</h3>
        </a>
        <ul>
          <a href="/prezentace.html">
            <h6>Zadání prezentace</h6>
          </a>
          <p>
            V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na
            lekci.
            K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme jič probrali.
            V případě nejasností se mi <a href="/contact.html">ozvete</a>.
          </p>
        </ul>

        <a href="/lessons/audacity/hodnoceni.html">
          <h3>Hodnocení lekce</h3>
        </a>
        <ul>
          <p>
            Prosím ohodnoťte lekci v níže přidaném formuláři.
          </p>
          <a href="/lessons/audacity/hodnoceni.html">
            <h6>Formulář hodnocení</h6>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Audacity;
