// Audacity.js
import React from 'react';
import { Link } from 'react-router-dom';

const Audacity = () => {
  return (
    <main role="main" className="container">
      <div className='content'>
      <h1>Audacity</h1>
      <p>
        Pro práci na našich úkolech budeme používat nástroj <a href="https://www.audacityteam.org/">AudaCity</a>.
        Návod na zprovoznění najdete <Link to="/audacity/env">zde</Link>.
      </p>

      <div>
        <Link to="/audacity/lekce1"><h3>Lekce 1</h3></Link>
        <ul>
          <Link to="/audacity/lekce1"><h6>Obsah lekce - Úvod, prostředí Audacity, první zvuková nahrávka</h6></Link>
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

        <Link to="/audacity/lekce2"><h3>Lekce 2</h3></Link>
        <ul>
          <Link to="/audacity/lekce2"><h6>Obsah lekce - Efekty a podcast</h6></Link>
          <p>
            V dnešní lekci si zopakujeme co jsme se doposud naučili.
            Zadáme si projket a také prezentaci. Tohle vše pak nas čeká ještě odprezentovat rodičům.
          </p>
        </ul>

        <Link to="/audacity/lekce3"><h3>Lekce 3</h3></Link>
        <ul>
          <Link to="/audacity/lekce3"><h6>Obsah lekce - Šum a Remix </h6></Link>
          <p>
            V dnešní lekci si zopakujeme co jsme se doposud naučili.
            Zadáme si projket a také prezentaci. Tohle vše pak nas čeká ještě odprezentovat rodičům.
          </p>
        </ul>

        <Link to="/audacity/lekce4"><h3>Lekce 4</h3></Link>
        <ul>
          <Link to="/audacity/lekce4"><h6>Obsah lekce - Opakování, zadání projektu a vypracovávání prezentace</h6></Link>
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

        <Link to="/prezentace"><h3>Prezentace</h3></Link>
        <ul>
        <Link to="/prezentace"><h6>Prezentace</h6></Link>
          <p>
            V dalších lekcích budete vypracovávat závěrečný projekt a prezentaci k němu. Veškeré materiály dostanete na
            lekci.
            K tvorbě projektu budou i potřebné znalosti z lekcí, které jsme jič probrali.
            V případě nejasností se mi <a href="/contact.html">ozvete</a>.
          </p>
        </ul>


        <Link to="/audacity/hodnoceni"><h3>Hodnocení lekce</h3></Link>
        <ul>
          <p>
            Prosím ohodnoťte lekci v níže přidaném formuláři.
          </p>
          <Link to="/audacity/hodnoceni"><h6>Hodnocení lekce</h6></Link>
        </ul>
      </div>
      </div>
    </main>
  );
}

export default Audacity;
