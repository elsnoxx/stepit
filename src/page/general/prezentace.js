// AboutPage.js
import React from 'react';

const EndPresentation = () => {
  return (
    <main role="main" className="container">
      <div className='content'>
        <div className="odstavec">
          <h1>Jak vytvořit super prezentaci</h1>

          <p>každý musí si uvědomit, že prezentaci nedělá pěknou jen to jak vypadá. Ale taky váše vystoupení. </p>

          <div className="odstavec">
            <p>
              Pokud by se vám nelíbila žádná z předvolených návrhů prezentací od <a href="https://www.google.com/slides/about/">Google Slides</a>. Můžete si zkusit
              nějaký návrh na <a href="https://slidesgo.com/.">slidesgo.com</a>.
            </p>
          </div>

          <div className="odstavec">
            <h3>
              <strong>Na konci hodiny budete mít odevzdaný odkaz na prezentaci v Mystatu.</strong>
            </h3>
            <p>
              Prezentace nemusí být hotová. Pokud prezentaci dělate pomocí <a href="https://www.google.com/slides/about/">Google Slides</a>,
              můžete se k ní kdykoliv vrátit a upravit.
            </p>
            {/* <!-- <a href="https://drive.google.com/drive/folders/13XNj4XudsgqwUlGydtxEzbnRvRQsy26R?usp=share_link">
              <h3>Odevzdání</h3>
            </a> --> */}
          </div>

          <div className="odstavec">
            <h4>Obsah prezentace</h4>
            <ul>
              <li>Zde najde vše potřebné pro tvorbu prezentace</li>
              <li>Pro tvorbu prezentace použijeme Google Slides</li>
              <li>Prezentaci budete tvoři každý sám</li>
              <li>Prezentace by měla obsahovat 5 - 10 slidů</li>
              <li>Logo Step IT Akademie naleznete <a href="/img/logo.jpg" download>zde</a></li>
            </ul>
          </div>

          <div className="odstavec">
            <h4>Obsah prezentace</h4>
            <ul>
              <li><strong>Uvodní strana</strong></li>
              <ul>
                <li>jméno a příjmení</li>
                <li>název nebo logo Step IT Akademie</li>
                <li>Téma prezentace</li>
              </ul>
              <li><strong>Motivace - příběh</strong></li>
              <ul>
                <li>Jaké téma jsi vybral</li>
                <li>Popsat zadání, které jsi obdržel</li>
                <li>Jaké řešení tě napadlo</li>
              </ul>
              <li><strong>Postup</strong></li>
              <ul>
                <li>Popis, jak jsi při tvorbě pracoval</li>
                <li>Přiložené různé snímky obrazovky projektu</li>
                <li>Jak dlouho ti trvalo projekt vyvořit, můžeš i kolik jsi strávil na prezentaci</li>
              </ul>
              <li><strong>Výsledek</strong></li>
              <ul>
                <li>Jak by se projekt mohl do budoucna vylepšit?</li>
                <li>Jsi se svou prací spokojen?</li>
              </ul>
              <li><strong>Návrhy na zlepšení</strong></li>
              <ul>
                <li>Jak vypadá výsledek?</li>
                <li>Popsat, co by se dalo do budoucna více rozpracovat</li>
              </ul>
              <li><strong>Konec prezentace</strong></li>
              <ul>
                <li>Poděkování za pozornost</li>
              </ul>
            </ul>
          </div>
        </div>




        <div className="odstavec">
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>Zadání prezentace</h5>
                </td>
                <td>
                  <button onClick='download("/download/prezentace.pdf")'>
                    stažení</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h5><a href="/download/pdfobraze.png" download>Cover</a></h5>
        </div>
      </div>
    </main>
  );
}

export default EndPresentation;
