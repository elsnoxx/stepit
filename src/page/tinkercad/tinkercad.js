// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Tinkercad = () => {
  return (
    <div>
      <div className="odstavec">
        <h1>TinkerCAD</h1>
        <p>
          Pro vytváření našich projeků budeme používat online nástroj <a className
            href="https://www.tinkercad.com/">TinkerCAD
            editor</a>.
          Návod na přihlášení a použití nástroje naleznete <Link to="/tinkercad/login">zde</Link>
        </p>
      </div>


      <div className="odstavec">
        <h5>
          <strong>Link pro přihlášení do naší TinkerCad třídy:</strong>
        </h5>
        <ul>
          <li><a className href="https://www.tinkercad.com/joinclassName/3QY3173UJ">JA-MON-O-3-23</a></li>
          <li><a className href="https://www.tinkercad.com/joinclassName/RKEWPZBPC">JA-TH-O-10-23</a></li>
        </ul>
      </div>

      <h5 >
        <strong>Pokud si nejse jisti jak odevzdat domácí úlohu, <Link to="/tinkercad/ukol">zde</Link>  návod jak na to</strong>
      </h5>

      <div >
        <Link to="/tinkercad/tinkercad1"><h3>Lekce 1</h3></Link>
        <ul>
          <Link to="/tinkercad/tinkercad1"><h6>Obsah lekce - Úvod a vytvoření jednoduchých
            modelů</h6></Link>
          <p>
            V této lekci se seznámíme s prostředím TinkerCAD. Vytvoříme si 3d model parníku a pizzy.
          </p>
        </ul>

        <Link to="/tinkercad/tinkercad2"><h3>Lekce 2</h3></Link>
        <ul>
          <Link to="/tinkercad/tinkercad2"><h6>Obsah lekce - Vesmírný dům a zvířata </h6></Link>
          <p>
            V této lekci si začneme budovat naši vesmírnou základnu. A zvířátka, které budou dělat společnost naši
            vesmírné postavě.
          </p>
        </ul>

        <Link to="/tinkercad/tinkercad3"><h3>Lekce 3</h3></Link>
        <ul>
          <Link to="/tinkercad/tinkercad3"><h6>Obsah lekce - Dopavní prostředek a Vesmírná
            raketa</h6></Link>
          <p>
            V této lekci si vymodelujeme vesmírné vozidlo a stanici pro daleké cestování.
          </p>
        </ul>

        <Link to="/tinkercad/tinkercad4"><h3>Lekce 4</h3></Link>
        <ul>
          <Link to="/tinkercad/tinkercad4"><h6>Obsah lekce - Vesmírná stanice</h6></Link>
          <p>
            V této lekci si vymodelujeme vesmírnou stanici.
          </p>

        </ul>

        <Link to="/tinkercad/tinkercad5"><h3>Lekce 5</h3></Link>
        <ul>
          <Link to="/tinkercad/tinkercad5"><h6>Obsah lekce - Vesmírný robot</h6></Link>
          <p>
            V této lekci si vymodelujeme vesmírného robota.
          </p>
        </ul>


        <Link to="/tinkercad/projekt"><h3>Projekt</h3></Link>
        <ul >
        <Link to="/tinkercad/projekt"><h6>Zadání projektu - ZOO</h6></Link>
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
        <ul >
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

        <Link to="/tinkercad/bonusukoly"><h3>Bonusové úkoly</h3></Link>
        <ul>
          <Link to="/tinkercad/bonusukoly"><h6>Bonusové úkoly</h6></Link>
          <p>Zde můžete najít další projekty, které si můžete vyskoušet vymodelovat. Jsou to věci na vyplnění vašeho
            volna, nebo rozšíření vašich dovedností</p>
        </ul>
      </div>

      <Link to="/tinkercad/hodnoceni"><h3>Hodnocení lekce</h3></Link>
      <ul >
        <p>
          Prosím ohodnoťte lekci v níže přidaném formuláři.
        </p>
        <Link to="/tinkercad/hodnoceni"><h6>Formulář hodnocení</h6></Link>
      </ul>
    </div>
    

  );
}

export default Tinkercad;